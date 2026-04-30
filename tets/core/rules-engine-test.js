const { resolveActions } = require('../../src/core/rules-engine');

describe('Rules Engine — resolveActions()', () => {
  const rules = [
    {
      id: 'large-pr',
      enabled: true,
      match: { event: 'pull_request', action: 'opened' },
      conditions: [
        { path: 'pull_request.additions', operator: '>', value: 500 }
      ],
      actions: [{ type: 'add_label', params: { label: 'size/large' } }]
    },
    {
      id: 'bug-assign',
      enabled: true,
      match: { event: 'issues', action: 'opened' },
      conditions: [
        { path: 'issue.labels', operator: 'includes', value: 'bug' }
      ],
      actions: [{ type: 'assign', params: { assignees: ['maintainer-bot'] } }]
    }
  ];

  test('Déclenche la règle PR volumineuse', () => {
    const context = {
      eventName: 'pull_request',
      actionName: 'opened',
      payload: { pull_request: { additions: 800 } }
    };

    const actions = resolveActions(context, rules);

    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe('add_label');
    expect(actions[0].params.label).toBe('size/large');
  });

  test('Ne déclenche pas la règle PR volumineuse si additions < 500', () => {
    const context = {
      eventName: 'pull_request',
      actionName: 'opened',
      payload: { pull_request: { additions: 120 } }
    };

    const actions = resolveActions(context, rules);

    expect(actions.length).toBe(0);
  });

  test('Déclenche la règle bug assign', () => {
    const context = {
      eventName: 'issues',
      actionName: 'opened',
      payload: {
        issue: { labels: [{ name: 'bug' }] }
      }
    };

    const actions = resolveActions(context, rules);

    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe('assign');
    expect(actions[0].params.assignees).toContain('maintainer-bot');
  });

  test('Ne déclenche pas bug assign si pas de label bug', () => {
    const context = {
      eventName: 'issues',
      actionName: 'opened',
      payload: {
        issue: { labels: [{ name: 'feature' }] }
      }
    };

    const actions = resolveActions(context, rules);

    expect(actions.length).toBe(0);
  });
});
