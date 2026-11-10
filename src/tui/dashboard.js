// src/tui/dashboard.js
import blessed from 'blessed';
import contrib from 'blessed-contrib';

export function initDashboard(metricsEmitter, reconEngine) {
  const screen = blessed.screen({ smartCSR: true, title: 'Ghost Recon Dashboard' });
  const grid = new contrib.grid({ rows: 12, cols: 12, screen });

  // 1. Logs filtrables
  const logBox = grid.set(0, 0, 8, 8, contrib.log, {
    label: '📡 Logs en direct (Ghost Recon)',
    fg: 'green',
    selectedFg: 'green',
    border: { type: 'line', fg: 'cyan' }
  });

  // 2. Stats en temps réel (Jauges & Sparklines)
  const rateLimitGauge = grid.set(0, 8, 4, 4, contrib.gauge, {
    label: 'GitHub API Quota Remaining',
    stroke: 'yellow',
    fill: 'white'
  });

  const eventSparkline = grid.set(4, 8, 4, 4, contrib.sparkline, {
    label: 'Events/sec (Flux Webhooks)',
    tags: true,
    style: { fg: 'blue' }
  });

  // 3. Recon Mode Monitor
  const reconTable = grid.set(8, 0, 4, 12, contrib.table, {
    keys: true,
    fg: 'white',
    label: '🕵️ Mode Recon (Actions interceptées sans mutation)',
    columnWidth: [20, 20, 30, 45]
  });

  // Raccourcis clavier (Filtres & Quitter)
  screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

  // Écoute des métriques en temps réel
  metricsEmitter.on('webhook', ({ event, repo, action }) => {
    logBox.log(`[${new Date().toLocaleTimeString()}] ${event}:${action} sur ${repo}`);
    screen.render();
  });

  metricsEmitter.on('stats_update', (stats) => {
    rateLimitGauge.setPercent(stats.rateLimitPercent);
    eventSparkline.setData(['Webhooks'], [stats.throughputHistory]);
    screen.render();
  });

  screen.render();
}
