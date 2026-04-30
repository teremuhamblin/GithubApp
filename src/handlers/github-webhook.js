const fs = require('fs');
const path = require('path');
const { resolveActions } = require('../core/rules-engine');
const { executeAction } = require('../core/actions-executor');

const rules = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../config/context.json'), 'utf8')
).rules;

async function handleGithubEvent(eventName, actionName, payload, githubClient) {
  const actions = resolveActions({ eventName, actionName, payload }, rules);

  for (const action of actions) {
    await executeAction(action, { payload, githubClient });
  }
}

module.exports = { handleGithubEvent };
