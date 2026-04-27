export default async ({ payload, octokit }) => {
  const body = payload.comment.body.trim();
  const repo = payload.repository.name;
  const owner = payload.repository.owner.login;
  const issue_number = payload.issue.number;

  if (!body.startsWith("/")) return;

  const [command, arg] = body.split(" ");

  switch (command) {
    case "/help":
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number,
        body: "Commandes disponibles :\n/help\n/label <nom>\n/close"
      });
      break;

    case "/label":
      if (!arg) return;
      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number,
        labels: [arg]
      });
      break;

    case "/close":
      await octokit.rest.issues.update({
        owner,
        repo,
        issue_number,
        state: "closed"
      });
      break;
  }
};
