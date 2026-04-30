const get = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const operators = {
  '==': (a, b) => a == b,
  '===': (a, b) => a === b,
  '>': (a, b) => Number(a) > Number(b),
  '<': (a, b) => Number(a) < Number(b),
  '>=': (a, b) => Number(a) >= Number(b),
  '<=': (a, b) => Number(a) <= Number(b),
  'includes': (a, b) => {
    if (Array.isArray(a)) return a.includes(b) || a.some(v => v?.name === b);
    if (typeof a === 'string') return a.includes(b);
    return false;
  }
};

function matchEvent(rule, event, action) {
  return (
    (!rule.match.event || rule.match.event === event) &&
    (!rule.match.action || rule.match.action === action)
  );
}

function checkConditions(rule, payload) {
  return (rule.conditions || []).every(cond => {
    const value = get(payload, cond.path);
    const op = operators[cond.operator];
    return op ? op(value, cond.value) : false;
  });
}

function resolveActions(context, rules = []) {
  const { eventName, actionName, payload } = context;

  return rules
    .filter(rule =>
      rule.enabled &&
      matchEvent(rule, eventName, actionName) &&
      checkConditions(rule, payload)
    )
    .flatMap(rule =>
      rule.actions.map(action => ({
        ruleId: rule.id,
        description: rule.description,
        ...action
      }))
    );
}

module.exports = { resolveActions };
