import logger from "../utils/logger.js";

export default async function pullRequestMergedHandler(payload, github) {
  const pr = payload.pull_request;

  if (!pr.merged) return;

  logger.info(`PR fusionnée : #${pr.number}`);

  await github.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: pr.number,
    body: "🎉 Félicitations ! Cette PR a été fusionnée avec succès."
  });

  await github.issues.addLabels({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: pr.number,
    labels: ["merged"]
  });
}
