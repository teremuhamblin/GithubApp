###### Architecture.md * markdown
# 📄 ARCHITECTURE 
- ### — GithubApp 🤖
>Ce document décrit l’architecture interne du bot GithubApp.

---

🧱 Structure générale

```text
src/
  server.js
  github.js
  handlers/
    issues.js
    pullRequests.js
    comments.js
    commands.js
    labeling.js
  utils/
    logger.js
```

---

🔌 Webhooks

GithubApp utilise :

- issues.opened  
- pull_request.opened  
- issue_comment.created  
- pull_request.synchronize  

Les webhooks sont gérés via @octokit/webhooks.

---

🧠 Handlers

Chaque handler gère un événement précis :

- issues.js → commentaire + auto‑labeling  
- pullRequests.js → commentaire PR  
- comments.js → réactions aux commentaires  
- commands.js → commandes /help, /label, /close  
- labeling.js → analyse du texte pour labels automatiques  

---

⚙️ Serveur

server.js :

- initialise Express  
- charge les handlers  
- connecte les webhooks  
- démarre le serveur  

---

🔐 Sécurité

- Secrets dans .env
- Clé privée GitHub App
- Webhook secret
- Aucun secret dans le repo

---

📊 Logs

logger.js fournit :

- info  
- success  
- warn  
- error  

Avec couleurs + timestamps.

---

🧩 Extensibilité

Pour ajouter une fonctionnalité :

1. Créer un handler  
2. L’enregistrer dans server.js  
3. Ajouter tests dans TESTING.md  
`

---
