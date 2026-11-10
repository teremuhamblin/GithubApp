// src/ai/llmProvider.js
export class LLMProvider {
  constructor(config = { provider: 'ollama', model: 'codellama', endpoint: 'http://localhost:11434' }) {
    this.config = config;
  }

  async generateReview(diff, context) {
    const prompt = `Tu es un examinateur expert de code (Senior Staff Engineer). 
Analyse le diff Git suivant et relève :
1. Les failles potentielles de sécurité (OWASP, injections, fuite de tokens).
2. Les régressions de performance ou incohérences logiques.
3. Propose des blocs de code corrigés sous la forme d'annotations GitHub.

Contexte : ${context}
Diff :
\`\`\`diff
${diff}
\`\`\``;

    if (this.config.provider === 'ollama') {
      const res = await fetch(`${this.config.endpoint}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: this.config.model, prompt, stream: false })
      });
      const data = await res.json();
      return data.response;
    }
    // Fallback ou intégration Cloud (OpenAI / Copilot) ici
  }
}
