import blessed from 'blessed';
import contrib from 'blessed-contrib';
import { createLogViewer } from './widgets/logViewer.js';
import { createStatsGauges } from './widgets/statsGauges.js';
import { createReconView } from './widgets/reconView.js';

/**
 * Lance le tableau de bord TUI Ghost Recon complet.
 */
export function startDashboard(metricsEmitter, reconEngineInstance) {
  const screen = blessed.screen({
    smartCSR: true,
    title: 'GithubApp - Ghost Recon Operations Center',
    fullUnicode: true
  });

  // Grille 12x12
  const grid = new contrib.grid({ rows: 12, cols: 12, screen });

  // 1. Logs filtrables (Haut Gauche)
  const logViewer = createLogViewer(grid, 0, 0, 8, 8);

  // 2. Statistiques en temps réel (Haut Droite)
  const statsGauges = createStatsGauges(grid);

  // 3. Vue Recon Mode (Bas Pleine Largeur)
  const reconView = createReconView(grid, 8, 0, 4, 12);

  // Rendu initial de la table
  reconView.renderRows(reconEngineInstance.getHistory());

  // Connexion des événements du collecteur de métriques
  metricsEmitter.on('webhook', ({ event, action, durationMs, success }) => {
    const status = success ? 'SUCCESS' : 'FAIL';
    const level = success ? 'INFO' : 'ERROR';
    logViewer.addLog(`${event}:${action} (${status}) en ${durationMs}ms`, level);
    screen.render();
  });

  metricsEmitter.on('stats_update', (snapshot) => {
    statsGauges.update(snapshot);
    screen.render();
  });

  // Connexion du Recon Mode
  reconEngineInstance.on('intercepted', () => {
    reconView.renderRows(reconEngineInstance.getHistory());
    screen.render();
  });

  reconEngineInstance.on('toggle', (state) => {
    logViewer.addLog(`Recon Mode basculé : ${state ? 'ACTIVÉ (Lecture Seule)' : 'DÉSACTIVÉ'}`, 'WARN');
    screen.render();
  });

  // Barre d'instructions / touches de contrôle
  const helpBar = blessed.box({
    bottom: 0,
    left: 0,
    height: 1,
    width: '100%',
    style: { bg: 'blue', fg: 'white', bold: true },
    content: ' [Q/Ctrl+C] Quitter | [M] Basculer Recon Mode | [F] Filtrer Logs | [C] Vider Recon Table '
  });
  screen.append(helpBar);

  // Raccourcis clavier
  screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

  screen.key(['m', 'M'], () => {
    reconEngineInstance.toggle();
  });

  screen.key(['c', 'C'], () => {
    reconEngineInstance.clear();
    reconView.renderRows([]);
    screen.render();
  });

  screen.key(['f', 'F'], () => {
    const filters = ['ALL', 'INFO', 'WARN', 'ERROR', 'DEBUG'];
    const nextIndex = (filters.indexOf(logViewer.getFilter()) + 1) % filters.length;
    logViewer.setFilter(filters[nextIndex]);
    screen.render();
  });

  // Focus par défaut sur la table recon pour permettre la navigation aux flèches
  reconView.widget.focus();
  screen.render();

  return { screen, logViewer, statsGauges, reconView };
}
