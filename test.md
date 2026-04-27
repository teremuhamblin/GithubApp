###### test.md * markdown
>Adapté à ton projet GithubApp, placé à la racine, clair, utile, et cohérent avec l’architecture que nous avons construite.  
Il sert de fichier de test, de documentation interne, et de guide rapide pour vérifier que ton bot fonctionne correctement.

---

# 📄 test.md

`md

Test du Bot GithubApp 🤖

Ce fichier sert à vérifier que votre bot GitHub fonctionne correctement avec les webhooks, les commandes, l’auto‑labeling et les commentaires automatiques.

---

🧪 1. Test des issues

Créez une nouvelle issue contenant l’un des mots‑clés suivants :

- "bug", "error", "crash" → label bug
- "feature", "add", "implement" → label enhancement
- "doc", "documentation" → label documentation

👉 Le bot doit automatiquement ajouter le bon label et poster un commentaire de bienvenue.

---

🔀 2. Test des Pull Requests

Créez une PR :

- Le bot doit commenter automatiquement
- Le workflow auto-merge.yml peut fusionner la PR selon votre configuration

---

💬 3. Test des commandes (slash‑commands)

Dans un commentaire d’issue ou de PR, testez :

`
/help
/label bug
/label enhancement
/close
`

👉 Le bot doit exécuter la commande immédiatement.

---

🏷️ 4. Test de l’auto‑labeling

Créez une issue avec un titre ou une description contenant :

- "bug" → label bug
- "feature" → label enhancement
- "documentation" → label documentation

👉 Le bot doit détecter automatiquement le bon label.

---

📊 5. Test des logs

Lancez le bot en local :

`bash
npm run dev
`

Vous devez voir dans la console :

- [INFO] pour les événements reçus
- [SUCCESS] pour les actions réussies
- [WARN] si une commande est inconnue
- [ERROR] en cas de problème

---

🧩 6. Test des workflows GitHub Actions

Poussez un commit ou ouvrez une PR pour vérifier :

- ci.yml → lint OK
- auto-comment.yml → commentaire automatique
- auto-merge.yml → fusion automatique
- deploy.yml → déploiement GitHub Pages

---

✔️ Conclusion

Si tous les tests ci‑dessus fonctionnent :

Votre bot GithubApp est opérationnel, stable et prêt pour la production.
