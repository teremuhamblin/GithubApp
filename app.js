import express from "express";
import { Webhooks } from "@octokit/webhooks";
import dotenv from "dotenv";
import issueHandler from "./handlers/issues.js";
import prHandler from "./handlers/pullRequests.js";
import commentHandler from "./handlers/comments.js";

dotenv.config();

const app = express();
app.use(express.json());

const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET
});

webhooks.on("issues.opened", issueHandler);
webhooks.on("pull_request.opened", prHandler);
webhooks.on("issue_comment.created", commentHandler);

app.use(webhooks.middleware);

app.listen(process.env.PORT, () => {
  console.log(`🚀 GithubApp running on port ${process.env.PORT}`);
});
