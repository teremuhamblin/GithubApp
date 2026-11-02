###### README.md >> markdown
```text
v5.0 màj :
》》 entièrement réécrit, modernisé, stylé, militaire, professionnel, structuré, avec sommaires pour chaque section, sécurité renforcée, cohérence totale avec ta version v5.0 stable.
```

# 📄 GithubApp
- 》》 **v5.0 Stable**

Bot GitHub tactique — Automatisation, Sécurité, Intelligence, Discipline

---

🧭 Sommaire général
1. 🎯 Présentation  
2. 🚀 Fonctionnalités  
3. 🔐 Sécurité & Permissions  
4. 📦 Installation  
5. 🔧 Configuration (.env)  
6. ▶️ Lancement du bot  
7. 🧱 Structure du projet  
8. 🧪 Webhooks supportés  
9. 💬 Commandes disponibles  
10. 🏷️ Auto‑labeling intelligent  
11. 📊 Logs tactiques  
12. 🧬 Tests unitaires (v5.0)  
13. 🗺️ Roadmap  
14. 📘 Licence  

---

### 🎯 1. Présentation

Sommaire section
- Objectif  
- Description  
- Capacités  

GithubApp est un bot GitHub automatisé, développé en Node.js, conçu pour gérer un dépôt avec une discipline militaire :

- analyse des issues  
- classification automatique  
- réponses intelligentes  
- auto‑merge  
- commandes avancées  
- logs tactiques  
- règles dynamiques  
- sécurité renforcée  

Il fonctionne via une GitHub App et réagit à tous les webhooks GitHub.

---

### 🚀 2. Fonctionnalités

Sommaire section
- Automatisation  
- Intelligence  
- Webhooks  
- Architecture  

```text
📝 Auto‑commentaire sur issues & PR  
🔀 Auto‑merge intelligent  
🏷️ Auto‑labeling basé sur le contenu  
💬 Slash‑commands (/help, /label, /close…)  
🔔 Webhooks GitHub (issues, PR, comments, labels…)  
📊 Logs avancés (niveau, couleur, timestamps)  
🧩 Architecture modulaire  
🔐 Gestion sécurisée via .env  
🧬 Tests unitaires v5.0  
```

---

### 🔐 3. Sécurité & Permissions

Sommaire section
- Secrets  
- Validation  
- Anti‑spam  
- Permissions GitHub App  

GithubApp v5.0 inclut un SecurityCheck Mode :

- ✔ Vérification des signatures GitHub (X‑Hub‑Signature‑256)  
- ✔ Validation du WEBHOOK_SECRET  
- ✔ Vérification du token GitHub  
- ✔ Anti‑spam sur les commandes  
- ✔ Rate‑limit interne  
- ✔ Protection contre les PR malveillantes  
- ✔ Logs de sécurité dédiés  

---

### 📦 4. Installation

Sommaire section
- Clone  
- Dépendances  

```bash
git clone https://github.com/teremuhamblin/GithubApp.git
cd GithubApp
npm install
```

---

### 🔧 5. Configuration (.env)

Sommaire section
- Variables obligatoires  
- Clés privées  
- Secrets  

Créer un fichier .env :

```env
APP_ID=
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
WEBHOOK_SECRET=
GITHUB_TOKEN=
PORT=3000
```

⚠️ Ne jamais partager ce fichier.  
⚠️ Ne jamais commiter la clé privée.

---

### ▶️ 6. Lancer le bot

Sommaire section
- Mode dev  
- Mode production  

```bash
npm run dev
```

---

### 🧱 7. Structure du projet

Sommaire section
- src/  
- handlers/  
- utils/  
- tests/  

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

tests/
  handlers.test.js
  labeling.test.js
  commands.test.js
```

---

### 🧪 8. Webhooks supportés

Sommaire section
- Issues  
- PR  
- Comments  
- Labels  

```text
issues.opened  
pull_request.opened  
issue_comment.created  
pull_request.synchronize  
label.created  
```

---

### 💬 9. Commandes disponibles

Sommaire section
- Liste  
- Usage  
- Sécurité  

Dans un commentaire :

```text
/help
/label bug
/label enhancement
/close
```

---

### 🏷️ 10. Auto‑labeling intelligent

Sommaire section
- Analyse  
- Mots‑clés  
- Table de correspondance  

Le bot analyse automatiquement :

- ✔ le titre  
- ✔ la description  
- ✔ les mots‑clés  

| Mot‑clé | Label |
|--------|--------|
| bug, error, crash | bug |
| feature, add, implement | enhancement |
| docs, documentation | documentation |

---

### 📊 11. Logs tactiques

Sommaire section
- Niveaux  
- Couleurs  
- JSON  
- Silent Ops  

Fonctionnalités :

- ✔ couleur par niveau  
- ✔ timestamps  
- ✔ format JSON optionnel  
- ✔ logs webhook + actions bot  
- ✔ mode DEBUG  
- ✔ mode Silent Ops (v5.0)  

---

### 🧬 12. Tests unitaires (v5.0)

Sommaire section
- Handlers  
- Commands  
- Labeling  
- Rules Engine  

GithubApp v5.0 inclut une suite de tests :

- ✔ handlers  
- ✔ auto‑labeling  
- ✔ slash‑commands  
- ✔ auto‑merge  
- ✔ rules engine  

Exécution :

```bash
npm test
```

---

### 🗺️ 13. Roadmap

Sommaire section
- v6.0  
- v7.0  
- v8.0  

》》 🟦 v6.0 — Monitoring & Dashboard TUI
- Dashboard Ghost Recon  
- Stats en temps réel  
- Logs filtrables  
- Recon Mode  

》》 🟨 v7.0 — Plugin Manager avancé
- Activation/désactivation dynamique  
- Marketplace interne  
- Permissions par plugin  

》》 🟧 v8.0 — Prévisionnel
- IA interne  
- Auto‑review PR  
- Documentation générée automatiquement  

---

### 📘 14. Licence
MIT — libre d’utilisation.

---

》》 🟩 README.md v5.0 stable contient :
```text
✔ moderne  
✔ stylé  
✔ militaire  
✔ structuré  
✔ sommaires partout  
✔ sécurité renforcée  
✔ compatible GitHub  
✔ cohérent avec v5.0 stable  
```

---
