import contrib from 'blessed-contrib';

/**
 * Widgets statistiques : Jauge Rate-Limit, Sparkline Débit Webhook, Jauge Mémoire.
 */
export function createStatsGauges(grid) {
  // Jauge Rate Limit GitHub (0 à 100%)
  const rateLimitGauge = grid.set(0, 8, 3, 4, contrib.gauge, {
    label: ' ⚡ GitHub API Quota ',
    stroke: 'yellow',
    fill: 'white',
    border: { type: 'line', fg: 'yellow' }
  });

  // Graphique Sparkline Débit Webhooks/sec
  const throughputSparkline = grid.set(3, 8, 3, 4, contrib.sparkline, {
    label: ' 📈 Webhooks / sec (Rolling 30s) ',
    tags: true,
    style: { fg: 'cyan', title: { fg: 'white' } },
    border: { type: 'line', fg: 'cyan' }
  });

  // Jauge Mémoire vive RAM (Node.js RSS)
  const memoryGauge = grid.set(6, 8, 2, 4, contrib.gauge, {
    label: ' 🧠 RAM (Max: 512 MB) ',
    stroke: 'magenta',
    fill: 'white',
    border: { type: 'line', fg: 'magenta' }
  });

  function update(stats) {
    // Mise à jour quota API
    rateLimitGauge.setPercent(stats.rateLimit.percent);

    // Mise à jour sparkline débit
    throughputSparkline.setData(
      [`Events/s: ${stats.throughputHistory[stats.throughputHistory.length - 1]}`],
      [stats.throughputHistory]
    );

    // Calcul mémoire (plafond arbitraire d'affichage à 512MB)
    const memPercent = Math.min(100, Math.round((stats.memoryMB / 512) * 100));
    memoryGauge.setPercent(memPercent);
  }

  return {
    widgets: { rateLimitGauge, throughputSparkline, memoryGauge },
    update
  };
}
