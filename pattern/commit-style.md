
📄 pattern/commit-style.md

`md

Commit Style — GithubApp

GithubApp utilise une convention de commits inspirée de Conventional Commits afin d’assurer une lecture claire de l’historique et une génération propre du changelog.

---

🎯 Format

`
type: description courte
`

Exemples :

`
feat: ajout du handler de commandes
fix: correction du label automatique
docs: ajout du wiki
`

---

🧩 Types autorisés

- feat : nouvelle fonctionnalité  
- fix : correction de bug  
- docs : documentation  
- style : formatage, indentation, pas de logique  
- refactor : amélioration interne sans changement de comportement  
- test : ajout ou modification de tests  
- chore : maintenance, dépendances, tâches internes  
- perf : optimisation de performance  

---

📝 Règles

- Description courte (max 72 caractères)
- À l’infinitif
- Pas de point final
- Un commit = une intention

---

✔️ Bonnes pratiques

- Commits atomiques
- Messages explicites
- Historique propre et lisible
`

---
