##### 📄 README.md - markdown
# GithubApp
> Cette GitHub App automatise des actions dans un dépôt pour débloquer plusieurs badges GitHub :

- Quickdraw (issues)
- Pull Shark (pull requests)
- YOLO (merge automatique)
- Actions (workflows)
- Pages Publisher (pages)
- Starstruck (stars)

Structure :
```text
GithubApp/
│
├── README.md
├── app.js
├── package.json
├── .env.example
└── workflows/
    └── auto-actions.yml
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
