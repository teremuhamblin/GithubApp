export default async ({ payload, octokit }) => {
  const text = `${payload.issue.title} ${payload.issue.body}`.toLowerCase();
  const owner = payload.repository.owner.login;
  const repo = payload.repository.name;
  const issue_number = payload.issue.number;

  const labels = [];

  if (text.includes("bug") || text.includes("error") || text.includes("crash"))
    labels.push("bug");

  if (text.includes("feature") || text.includes("add") || text.includes("implement"))
    labels.push("enhancement");

  if (text.includes("doc") || text.includes("documentation"))
    labels.push("documentation");

  if (labels.length > 0) {
    await octokit.rest.issues.addLabels({
      owner,
      repo,
      issue_number,
      labels
    });
  }
};
