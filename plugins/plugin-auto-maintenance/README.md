# 🔧 Plugin — Auto Maintenance

Automatise la maintenance des issues et PR.

## Fonctionnalités
- Fermeture automatique des issues inactives
- Ajout automatique de labels selon mots-clés

## Exemple de configuration

```yaml
plugins:
  plugin-auto-maintenance:
    autoClose:
      days: 30
      message: "Cette issue est fermée automatiquement après 30 jours d'inactivité."
    autoLabel:
      - match: "bug"
        label: "bug"
      - match: "feature"
        label: "enhancement"
