import contrib from 'blessed-contrib';

/**
 * Widget de Logs en temps réel avec filtrage par niveau et recherche.
 */
export function createLogViewer(grid, row, col, rowSpan, colSpan) {
  const logBox = grid.set(row, col, rowSpan, colSpan, contrib.log, {
    fg: 'green',
    selectedFg: 'white',
    label: ' 📜 Live Logs & Events (Filtre: TOUS) ',
    border: { type: 'line', fg: 'cyan' },
    style: {
      border: { fg: 'cyan' },
      scrollbar: { bg: 'blue' }
    },
    scrollable: true,
    scrollbar: true
  });

  let currentLevelFilter = 'ALL'; // ALL | INFO | WARN | ERROR | DEBUG

  const filterColors = {
    DEBUG: '\x1b[90m', // gris
    INFO: '\x1b[32m',  // vert
    WARN: '\x1b[33m',  // jaune
    ERROR: '\x1b[31m', // rouge
    RESET: '\x1b[0m'
  };

  function addLog(message, level = 'INFO') {
    if (currentLevelFilter !== 'ALL' && currentLevelFilter !== level) {
      return;
    }
    const color = filterColors[level] || filterColors.INFO;
    const time = new Date().toLocaleTimeString();
    logBox.log(`[${time}] ${color}[${level}]${filterColors.RESET} ${message}`);
  }

  function setFilter(level) {
    currentLevelFilter = level.toUpperCase();
    logBox.setLabel(` 📜 Live Logs & Events (Filtre: ${currentLevelFilter}) `);
  }

  return {
    widget: logBox,
    addLog,
    setFilter,
    getFilter: () => currentLevelFilter
  };
}
