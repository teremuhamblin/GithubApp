module.exports = {
  addLabel: async (octokit, repo, issue_number, labels) => {
    return octokit.issues.addLabels({ ...repo, issue_number, labels });
  },

  closeIssue: async (octokit, repo, issue_number) => {
    return octokit.issues.update({ ...repo, issue_number, state: 'closed' });
  },

  comment: async (octokit, repo, issue_number, body) => {
    return octokit.issues.createComment({ ...repo, issue_number, body });
  }
};
