{
  "name": "auto-assign",
  "version": "1.0.0",
  "description": "Assigne automatiquement les PRs et Issues aux relecteurs appropriés",
  "entry": "index.js",
  "enabled": true,
  "permissions": [
    "pull_requests:read",
    "pull_requests:write",
    "issues:read",
    "issues:write"
  ],
  "config": {
    "defaultAssignees": ["teremuhamblin"],
    "rules": [
      {
        "pattern": "^src/tui/",
        "assignees": ["teremuhamblin"]
      },
      {
        "pattern": "^src/monitoring/",
        "assignees": ["teremuhamblin"]
      }
    ]
  }
}
