export default async ({ payload, octokit }) => {
  await octokit.rest.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.pull_request.number,
    body: "Merci pour ta Pull Request !"
  });
};
