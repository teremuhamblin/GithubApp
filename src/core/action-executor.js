function interpolate(template, payload) {
  return template.replace(/{{([^}]+)}}/g, (_, path) =>
    path.split('.').reduce((acc, key) => (acc ? acc[key] : ''), payload)
  );
}

async function executeAction(action, context) {
  const { type, params } = action;
  const { payload, githubClient } = context;

  const owner = payload.repository.owner.login;
  const repo = payload.repository.name;
  const issueNumber =
    payload.pull_request?.number || payload.issue?.number;

  switch (type) {
    case 'add_label':
      return githubClient.issues.addLabels({
        owner,
        repo,
        issue_number: issueNumber,
        labels: [params.label]
      });

    case 'comment':
      return githubClient.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body: params.body
      });

    case 'assign':
      return githubClient.issues.addAssignees({
        owner,
        repo,
        issue_number: issueNumber,
        assignees: params.assignees
      });

    case 'create_issue':
      return githubClient.issues.create({
        owner,
        repo,
        title: interpolate(params.title, payload),
        body: interpolate(params.body, payload)
      });
  }
}

module.exports = { executeAction };
