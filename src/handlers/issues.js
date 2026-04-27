export default async ({ payload, octokit }) => {
  await octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
    body: "Merci pour ton issue ! Je vais regarder ça."
  });
};
