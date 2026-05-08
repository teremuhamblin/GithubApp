import logger from "../utils/logger.js";

const replies = [
  { keyword: "hello", response: "👋 Bonjour ! Comment puis-je vous aider ?" },
  { keyword: "thanks", response: "🙏 Merci à vous !" },
  { keyword: "help", response: "🆘 Je suis là pour vous aider. Que souhaitez-vous faire ?" }
];

export default async function autoReplyHandler(payload, github) {
  const comment = payload.comment;
  const text = comment.body.toLowerCase();

  const match = replies.find(r => text.includes(r.keyword));
  if (!match) return;

  logger.info(`Réponse automatique envoyée pour le mot-clé : ${match.keyword}`);

  await github.issues.createComment({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: payload.issue.number,
    body: match.response
  });
}
