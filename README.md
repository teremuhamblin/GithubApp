##### 📄 README.md - markdown
# GithubApp
> Cette GitHub App automatise des actions dans un dépôt pour débloquer plusieurs badges GitHub :

- Quickdraw (issues)
- Pull Shark (pull requests)
- YOLO (me
Structure :
```text
GithubApp/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── auto-merge.yml
│       ├── auto-comment.yml
│       ├── deploy.yml
│
├── src/
│   ├── server.js
│   ├── github.js
│   ├── handlers/
│   │   ├── issues.js
│   │   ├── pullRequests.js
│   │   └── comments.js
│   └── utils/
│       └── logger.js
│
├── .env.example
├── package.json
├── README.md
├── LICENSE
└── test.md
```

Fonctionnalités
- Création automatique d’issues
- Création automatique de pull requests
- Merge automatique
- Commit automatique
- Déclenchement de workflows GitHub Actions
- Publication automatique d’une GitHub Pages

Installation
1. Aller dans Settings → Developer settings → GitHub Apps
2. Cliquer New GitHub App
3. Renseigner :
   - Homepage URL : https://example.com
   - Webhook URL : URL Smee.io
   - Permissions :
     - Contents : Read/Write
     - Issues : Read/Write
     - Pull Requests : Read/Write
     - Actions : Read/Write
4. Générer une clé privée
5. Copier l’App ID, Client ID, Client Secret
6. Installer l’app sur un dépôt

Lancer en local
`
npm install
npm start
`

Variables d’environnement
Créer un fichier .env :

`
APP_ID=xxxx
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
WEBHOOK_SECRET=xxxx
`
`

---
