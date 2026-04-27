# Design Patterns — GithubApp

GithubApp utilise plusieurs patterns d’architecture pour garantir modularité, maintenabilité et extensibilité.

---

## 🧩 1. Pattern Handler

Chaque événement GitHub est géré par un fichier dédié dans `handlers/`.

Exemples :
- `issues.js`
- `pullRequests.js`
- `comments.js`
- `commands.js`
- `labeling.js`

---

## 🧩 2. Pattern Middleware

Les webhooks passent par un middleware Express avant d’être distribués aux handlers.

---

## 🧩 3. Pattern Utils

Les fonctions transversales (logs, parsing, outils) sont isolées dans `utils/`.

Exemple :
- `logger.js`

---

## 🧩 4. Pattern Configuration

Toutes les variables sensibles sont centralisées dans `.env`.

---

## 🧩 5. Pattern Modulaire

Chaque fonctionnalité est isolée dans un module indépendant, permettant :

- extension facile  
- maintenance simplifiée  
- tests unitaires ciblés  

---

## 🧩 6. Pattern Single Responsibility

Chaque fichier a **une seule responsabilité**.

Exemples :
- `commands.js` → uniquement les commandes  
- `labeling.js` → uniquement l’analyse du texte  
- `issues.js` → uniquement la gestion des issues  

---

## 🧩 7. Pattern Event‑Driven

Le bot réagit aux événements GitHub via un système d’abonnements :
