// src/github.js
import { Octokit } from "@octokit/rest";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

const MyOctokit = Octokit.plugin(retry, throttling);

export function getOctokitInstance(authOptions) {
  return new MyOctokit({
    ...authOptions,
    throttle: {
      onRateLimit: (retryAfter, options, octokit, retryCount) => {
        octokit.log.warn(`Rate limit atteint pour ${options.method} ${options.url}`);
        if (retryCount < 2) return true; // Réessaye 2 fois
      },
      onSecondaryRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(`Secondary rate limit pour ${options.method} ${options.url}`);
        return true;
      },
    },
  });
}
