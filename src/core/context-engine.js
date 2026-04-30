function detectContext(payload) {
  return {
    isLargePR: payload.pull_request?.additions > 500,
    isBug: payload.issue?.labels?.some(l => l.name === 'bug'),
    sender: payload.sender?.login
  };
}

module.exports = { detectContext };
