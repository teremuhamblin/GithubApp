import logger from "../utils/logger.js";

export default async function pullRequestReviewHandler(payload, github) {
  const { pull_request, review } = payload;

  logger.info(`Review sur PR #${pull_request.number} — état : ${review.state}`);

  if (review.state === "approved") {
    await github.issues.createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: pull_request.number,
      body: "✅ Merci pour l’approbation ! La PR est prête pour la fusion."
    });
  }

  if (review.state === "changes_requested") {
    await github.issues.createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: pull_request.number,
      body: "⚠️ Des modifications ont été demandées. Merci de les appliquer."
    });
  }
}
