import logger from "../utils/logger.js";

export default async function issuesReopenedHandler(payload, github) {
  const issue = payload.issue;

  logger.info(`Issue réouverte : #${issue.number}`);

  await github.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: issue.number,
    body: "🔄 Merci d’avoir rouvert cette issue. Nous allons la réexaminer."
  });

  await github.issues.addLabels({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: issue.number,
    labels: ["reopened"]
  });
}
