import logger from "../utils/logger.js";

const rules = [
  { keyword: "bug", label: "bug" },
  { keyword: "fix", label: "bugfix" },
  { keyword: "feature", label: "feature" },
  { keyword: "docs", label: "documentation" }
];

export default async function autoLabelsHandler(payload, github) {
  const issue = payload.issue || payload.pull_request;
  const text = `${issue.title} ${issue.body}`.toLowerCase();

  const labels = rules
    .filter(rule => text.includes(rule.keyword))
    .map(rule => rule.label);

  if (labels.length === 0) return;

  logger.info(`Auto-labels appliqués : ${labels.join(", ")}`);

  await github.issues.addLabels({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    issue_number: issue.number,
    labels
  });
}
