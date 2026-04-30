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
