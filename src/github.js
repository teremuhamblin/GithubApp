import { Webhooks } from "@octokit/webhooks";
import { Octokit } from "@octokit/core";
import dotenv from "dotenv";

dotenv.config();

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export const webhooks = new Webhooks({
  secret: process.env.WEBHOOK_SECRET
});
