##### 📄 README.md - markdown
# GithubApp
- 📘 README.md * màj

### GithubApp 🤖⚡
```text
- Bot GitHub automatisé — Webhooks, auto‑commentaires, auto‑merge, auto‑labeling, commandes, logs avancés.
- GithubApp est une application Node.js connectée à une GitHub App.  
- Elle automatise vos issues, pull requests, commentaires, labels, et interactions via webhooks.
```

---

### 🚀 Fonctionnalités
```text
- 📝 Auto‑commentaire sur issues & PR  
- 🔀 Auto‑merge intelligent  
- 🏷️ Auto‑labeling basé sur le contenu  
- 💬 Commandes (slash‑commands) dans les commentaires  
- 🔔 Webhook GitHub (issues, PR, comments, labels…)  
- 📊 Logs avancés (niveau, couleur, timestamps)  
- 🧩 Architecture modulaire  
- 🔐 Gestion sécurisée via .env
```

---

### 📦 Installation

```bash
git clone https://github.com/teremuhamblin/GithubApp.git
cd GithubApp
npm install
```

---

### 🔧 Configuration
>Créer un fichier .env :
```env
APP_ID=
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
WEBHOOK_SECRET=
GITHUB_TOKEN=
PORT=3000
```

---

### ▶️ Lancer le bot
```bash
npm run dev
```

---

### 🧱 Structure du projet
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

### 🧪 Webhooks supportés
```tzxt
- issues.opened  
- pull_request.opened  
- issue_comment.created  
- pull_request.synchronize  
- label.created  
```

---

###🧩 Commandes disponibles

Dans un commentaire :
```text
/help
/label bug
/label enhancement
/close
```

---

### 🏷️ Auto‑labeling
```markdown
>Le bot analyse automatiquement :
- le titre  
- la description  
- les mots‑clés  
```

>Exemples :

| Mot‑clé | Label |
|--------|--------|
| bug, error, crash | bug |
| feature, add, implement | enhancement |
| docs, documentation | documentation |


---

### 📊 Logs avancés
- couleur par niveau  
- timestamps  
- format JSON optionnel  
- logs webhook + actions bot  

---

### 📄 Licence
###### MIT — libre d’utilisation.

---
