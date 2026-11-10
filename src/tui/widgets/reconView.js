import contrib from 'blessed-contrib';

/**
 * Tableau interactif affichant les webhooks captés en Recon Mode (Dry-run).
 */
export function createReconView(grid, row, col, rowSpan, colSpan) {
  const table = grid.set(row, col, rowSpan, colSpan, contrib.table, {
    keys: true,
    fg: 'white',
    selectedFg: 'black',
    selectedBg: 'green',
    interactive: true,
    label: ' 🕵️ Ghost Recon Surveillance (Dry-Run Actions) ',
    width: '100%',
    height: '100%',
    border: { type: 'line', fg: 'green' },
    columnSpacing: 2,
    columnWidth: [10, 18, 25, 45]
  });

  function renderRows(reconList) {
    const rows = reconList.map((item) => [
      item.timeFormatted,
      `${item.event}:${item.action}`,
      item.repo.length > 23 ? `${item.repo.substring(0, 20)}...` : item.repo,
      item.simulatedAction.length > 42 ? `${item.simulatedAction.substring(0, 39)}...` : item.simulatedAction
    ]);

    table.setData({
      headers: ['Heure', 'Event', 'Dépôt', 'Action Simulée'],
      data: rows
    });
  }

  return {
    widget: table,
    renderRows
  };
}
