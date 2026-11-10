// src/handlers/prReviewHandler.js
export async function handlePullRequestReview(context, llm) {
  const { pull_request: pr, repository: repo } = context.payload;

  // 1. Récupérer le diff de la PR
  const diffResponse = await context.octokit.rest.pulls.get({
    owner: repo.owner.login,
    repo: repo.name,
    pull_number: pr.number,
    mediaType: { format: 'diff' }
  });

  // 2. Élaguer si trop volumineux (éviter d'exploser la fenêtre de contexte)
  const diff = diffResponse.data.slice(0, 12000);

  // 3. Interroger l'IA
  const reviewContent = await llm.generateReview(diff, `PR #${pr.number}: ${pr.title}`);

  // 4. Poster une revue avec approbation conditionnelle ou demande de modifications
  await context.octokit.rest.pulls.createReview({
    owner: repo.owner.login,
    repo: repo.name,
    pull_number: pr.number,
    body: `### 🤖 Auto-Review (Ghost Bot IA)\n\n${reviewContent}`,
    event: 'COMMENT'
  });
}
