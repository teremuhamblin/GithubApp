┌──────────────────────────┐
│   GitHub Webhook Event   │
│  (PR, Issue, Star, etc.) │
└───────────────┬──────────┘
                │ eventName + actionName + payload
                ▼
       ┌──────────────────────┐
       │   rules-engine.js    │
       │  - match(event)      │
       │  - check(conditions) │
       │  - resolve(actions)  │
       └───────────┬──────────┘
                   │ liste d'actions
                   ▼
        ┌────────────────────────┐
        │  actions-executor.js   │
        │  - add_label           │
        │  - comment             │
        │  - assign              │
        │  - create_issue        │
        └───────────┬───────────┘
                    │ exécution GitHub API
                    ▼
        ┌────────────────────────┐
        │   GitHub Repository    │
        │   (labels, issues…)    │
        └────────────────────────┘
