export default async ({ payload, octokit }) => {
  if (payload.comment.body.includes("bot")) {
    await octokit.rest.issues.createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: payload.issue.number,
      body: "Tu m'as appelé ? 🤖"
    });
  }
};
