# CHANGELOG — GithubApp
Toutes les modifications importantes du projet sont listées ici.

---

## [1.0.0] — 2026-04-27
### Ajouté
- Architecture complète du bot
- Handlers : issues, PR, comments, commands, labeling
- Serveur Express
- Webhooks GitHub
- Logger avancé
- Workflows GitHub Actions
- README complet
- Documentation interne (.md)

### Modifié
- Structure du projet
- Organisation des fichiers

### Supprimé
- Ancienne version du projet

## 📄 Cycle des versions : **v2.0 → v3.0**

---

## 🚀 v2.0.0 — Configuration avancée & Intelligence contextuelle
### Ajouts
- [x] Support complet des règles avancées dans `.github/githubapp.yml`
- [x] Ajout d’un moteur de règles conditionnelles (if/contains/match)
- [x] Ajout d’un système de réponses contextuelles basées sur l’historique de l’issue/PR
- [x] Ajout d’un module `contextEngine.js` pour analyser les événements GitHub

### Améliorations
- [x] Refactor complet des handlers pour supporter les règles dynamiques
- [x] Optimisation du logger (grouping, context, event type)
- [x] Amélioration des workflows auto-label et auto-comment

### Corrections
- [x] Correction d’un bug sur les commentaires multiples
- [x] Correction du parsing YAML dans certaines configurations complexes

---

## 🚀 v2.5.0 — Patterns intelligents & Auto‑Actions évoluées
### Ajouts
- [x] Ajout des patterns dynamiques (variables, placeholders, conditions)
- [x] Ajout d’un système d’auto‑actions :  
  - [x] auto‑assign  
  - [x] auto‑reviewer  
  - [x] auto‑close avec délai  
  - [x] auto‑label multi‑critères  
- [x] Ajout d’un module `scheduler.js` pour les actions différées

### Améliorations
- [x] Uniformisation du style rédactionnel des messages automatiques
- [x] Amélioration du moteur de templates Markdown
- [x] Optimisation du chargement des patterns

### Corrections
- [x] Correction d’un bug sur les labels multiples
- [x] Correction du fallback des templates manquants

---

## 🚀 v3.0.0 — Version majeure : Modularité, Plugins & Extensibilité
### Ajouts
- [x] Introduction du système de **plugins GithubApp**
- [x] Ajout d’un dossier `plugins/` avec API interne
- [x] Ajout d’un plugin officiel : `plugin-auto-maintenance`
- [x] Ajout d’un système d’événements internes (event bus)
- [x] Ajout d’un module de monitoring interne (stats, logs, usage)

### Améliorations
- [x] Refactor complet du cœur du bot (architecture modulaire)
- [x] Amélioration du moteur de configuration (validation + schéma)
- [x] Optimisation du temps de réponse du bot
- [x] Amélioration du système de logs (format JSON optionnel)

### Corrections
- [x] Correction de la gestion des erreurs silencieuses
- [x] Correction du chargement des plugins en cascade

---

## 🏁 Résumé du cycle 2.0 → 3.0
- Passage d’un bot configurable → **bot intelligent et modulaire**
- Ajout d’un moteur de règles, patterns dynamiques, actions avancées
- Introduction d’un **système de plugins** pour la v3.0
- Stabilisation + optimisation du cœur du bot

## 📘 Mise à jour — majeure

## 3.1.0 — Release majeure
- Ajout du workflow `release.yml`
- Génération automatique des releases GitHub
- Mise à jour automatique du CHANGELOG
- Ajout d’un badge “Version” dans le README
- Ajout du guide d’installation
- Ajout du guide contributeur avancé
- Ajout du guide développeur
- Documentation complète mise à jour

---

## 3.2.0 — Hooks GitHub avancés
- Ajout du handler `issues.reopened`
- Ajout du handler `pull_request.review`
- Ajout du handler `pull_request.merged`
- Ajout du handler `comments.edited`
- Ajout d’un système de labels automatiques
- Ajout de réponses automatiques intelligentes

---

## 3.3.0 — Logs avancés
- Intégration de Winston/Pino
- Logs JSON structurés
- Rotation des logs
- Ajout du dossier `logs/`
- Middleware de logs HTTP

---

## 3.4.0 — Configuration avancée
- Ajout de `config/default.json`
- Ajout de `config/production.json`
- Loader de configuration
- Support des variables d’environnement
- Support des secrets GitHub

---

## 3.5.0 — Système de tests
- Ajout de Jest/Vitest
- Ajout du dossier `tests/`
- Tests unitaires pour handlers, utils, github.js
- Workflow CI dédié aux tests

---

## 4.0.0 — Refactor code source
- Refactor `server.js`
- Refactor `github.js`
- Ajout de commentaires JSDoc
- Ajout d’un gestionnaire d’erreurs global
- Ajout d’un middleware de logs
- Ajout de `src/config.js`

---

## 4.1.0 — README amélioré
- Ajout du logo 100×100
- Ajout du tableau d’en‑tête
- Ajout des liens vers la documentation
- Ajout de la section “Structure du projet”
- Ajout de la section “Workflows GitHub Actions”

---

## 4.2.0 — Thème Sphinx personnalisé
- Ajout du thème `github_action`
- Ajout du CSS personnalisé
- Ajout du layout HTML
- Ajout du logo dans la doc
- Intégration du thème dans Sphinx

---

## 4.3.0 — Documentation avancée
- Ajout de `navigation.rst`
- Ajout de `sections.rst`
- Ajout de `guides.rst`
- Ajout de `index.md`
- Ajout du bloc Documentation dans le README

---

## 4.4.0 — Stabilisation
- Nettoyage complet du dépôt
- Ajout des workflows CI/CD
- Mise en place des dossiers
- Ajout du README, LICENSE, .env.example
- Mise en place du logger
- Mise en place des handlers GitHub
