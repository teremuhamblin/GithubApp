# Naming Convention — GithubApp

Ce document définit les conventions de nommage utilisées dans le projet GithubApp afin de garantir cohérence, lisibilité et maintenabilité.

---

## 🧱 Fichiers

- Utiliser **kebab-case**  
  Exemples :
  - `pull-requests.js`
  - `issue-handler.js`
  - `auto-labeling.js`

---

## 📦 Dossiers

- Utiliser **kebab-case**  
  Exemples :
  - `handlers/`
  - `utils/`
  - `pattern/`

---

## 🧠 Variables

- Utiliser **camelCase**  
  Exemples :
  - `issueNumber`
  - `pullRequestId`
  - `webhookSecret`

---

## 🔧 Fonctions

- Utiliser **camelCase**  
  Exemples :
  - `handleIssue()`
  - `addLabel()`
  - `processCommand()`

---

## 🏷️ Classes (rare)

- Utiliser **PascalCase**  
  Exemples :
  - `WebhookManager`
  - `LabelAnalyzer`

---

## ✔️ Constantes

- Utiliser **UPPER_SNAKE_CASE**  
  Exemples :
  - `DEFAULT_PORT`
  - `SUPPORTED_COMMANDS`
