import logger from "../utils/logger.js";

export default async function commentEditedHandler(payload, github) {
  const comment = payload.comment;

  logger.info(`Commentaire modifié : ID ${comment.id}`);

  await github.reactions.createForIssueComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    comment_id: comment.id,
    content: "eyes"
  });
}
