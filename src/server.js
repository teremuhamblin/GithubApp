
import express from "express";
import dotenv from "dotenv";
import { webhooks } from "./github.js";
import logger from "./utils/logger.js";

// Handlers
import issueHandler from "./handlers/issues.js";
import prHandler from "./handlers/pullRequests.js";
import commentHandler from "./handlers/comments.js";
import commandHandler from "./handlers/commands.js";
import labelingHandler from "./handlers/labeling.js";

dotenv.config();

const app = express();
app.use(express.json());

// Webhooks events
webhooks.on("issues.opened", async (event) => {
  logger.info("Issue ouverte — exécution du handler issues.js");
  await issueHandler(event);
  await labelingHandler(event);
});

webhooks.on("pull_request.opened", async (event) => {
  logger.info("Pull Request ouverte — exécution du handler pullRequests.js");
  await prHandler(event);
});

webhooks.on("issue_comment.created", async (event) => {
  logger.info("Nouveau commentaire — exécution du handler comments.js + commands.js");
  await commentHandler(event);
  await commandHandler(event);
});

// Middleware Webhooks
app.use(webhooks.middleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.success(`🚀 GithubApp est lancé sur le port ${PORT}`);
});
