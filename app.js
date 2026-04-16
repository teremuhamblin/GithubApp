/**
 * GitHub App — Badge Booster
 * Automatise des actions pour débloquer des badges GitHub
 */

module.exports = (app) => {
  app.log.info("Badge Booster App démarrée !");

  // 1. Création automatique d'une issue
  app.on("installation.created", async (context) => {
    const repos = context.payload.repositories;

    for (const repo of repos) {
      await context.octokit.issues.create({
        owner: repo.owner.login,
        repo: repo.name,
        title: "🎉 Issue automatique pour débloquer le badge Quickdraw",
        body: "Cette issue a été créée automatiquement par la GitHub App Badge Booster."
      });
    }
  });

  // 2. Création automatique d'une pull request
  app.on("push", async (context) => {
    const repo = context.payload.repository;

    await context.octokit.pulls.create({
      owner: repo.owner.login,
      repo: repo.name,
      title: "✨ PR automatique pour débloquer Pull Shark",
      head: "auto-branch",
      base: "main",
      body: "Cette PR est générée automatiquement."
    });
  });

  // 3. Merge automatique
  app.on("pull_request.opened", async (context) => {
    const pr = context.payload.pull_request;

    await context.octokit.pulls.merge({
      owner: pr.base.repo.owner.login,
      repo: pr.base.repo.name,
      pull_number: pr.number,
      merge_method: "merge"
    });
  });

  // 4. Déclenchement d’un workflow GitHub Actions
  app.on("installation.created", async (context) => {
    const repos = context.payload.repositories;

    for (const repo of repos) {
      await context.octokit.actions.createWorkflowDispatch({
        owner: repo.owner.login,
        repo: repo.name,
        workflow_id: "auto-actions.yml",
        ref: "main"
      });
    }
  });
};
