module.exports = async ({ octokit, logger, config, event, utils }) => {
  const repo = {
    owner: event.repository.owner.login,
    repo: event.repository.name
  };

  const issue = event.issue || event.pull_request;
  if (!issue) return;

  const issue_number = issue.number;

  // Auto-close inactive issues
  if (config.autoClose && issue.state === 'open') {
    const lastUpdate = new Date(issue.updated_at);
    const now = new Date();
    const diffDays = (now - lastUpdate) / (1000 * 60 * 60 * 24);

    if (diffDays >= config.autoClose.days) {
      logger.info(`[AutoMaintenance] Closing inactive issue #${issue_number}`);
      await utils.comment(octokit, repo, issue_number, config.autoClose.message);
      await utils.closeIssue(octokit, repo, issue_number);
    }
  }

  // Auto-label keywords
  if (config.autoLabel) {
    for (const rule of config.autoLabel) {
      if (issue.title.includes(rule.match)) {
        logger.info(`[AutoMaintenance] Labeling issue #${issue_number}`);
        await utils.addLabel(octokit, repo, issue_number, [rule.label]);
      }
    }
  }
};
