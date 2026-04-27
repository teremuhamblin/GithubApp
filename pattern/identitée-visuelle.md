# 🎨 Identité visuelle / Logo (description utilisable pour un designer ou une IA)

Voici une **description professionnelle** de ton logo :

> **Logo cyber‑tech minimaliste**, fond sombre, lignes néon bleu‑cyan, symbole abstrait représentant une “connexion GitHub + IA”.  
> Forme principale : un hexagone stylisé (référence GitHub), avec un circuit imprimé interne formant une tête de robot minimaliste.  
> Style : futuriste, vectoriel, épuré, angles nets, glow léger.  
> Utilisation : favicon, README, GitHub Pages, bannière.

---

# 🧠 3) Système de logs avancé

## `src/utils/logger.js`

```js
import chalk from "chalk";

const logger = {
  info: (msg) =>
    console.log(chalk.blue(`[INFO] ${new Date().toISOString()} — ${msg}`)),
  success: (msg) =>
    console.log(chalk.green(`[SUCCESS] ${new Date().toISOString()} — ${msg}`)),
  warn: (msg) =>
    console.log(chalk.yellow(`[WARN] ${new Date().toISOString()} — ${msg}`)),
  error: (msg) =>
    console.log(chalk.red(`[ERROR] ${new Date().toISOString()} — ${msg}`)),
};

export default logger;
