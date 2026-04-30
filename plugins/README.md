# 🔌 Plugins — GithubApp

Le système de plugins permet d’étendre GithubApp sans modifier le cœur du bot.

## Structure d’un plugin
Chaque plugin doit contenir :

- `index.js` — logique principale
- `config.schema.json` — schéma de configuration
- `README.md` — documentation du plugin

## Chargement
Les plugins sont chargés automatiquement via `plugins/index.js`.

## API disponible
Chaque plugin reçoit :

```js
{
  octokit,        // client GitHub
  logger,         // logger interne
  config,         // config du plugin
  event,          // payload GitHub
  utils           // helpers internes
}
