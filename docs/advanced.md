# Configuration avancée & Intelligence contextuelle — GithubApp

## Structure
- `/config/system.json` : paramètres globaux
- `/config/user.json` : préférences utilisateur
- `/config/context.json` : règles intelligentes

## Moteur de règles
GithubApp analyse :
- l’événement GitHub
- l’action
- les conditions
- les règles activées

Puis exécute automatiquement :
- labels
- commentaires
- assignations
- création d’issues

## Exemple
Une PR > 500 lignes → label `size/large` + commentaire automatique.
