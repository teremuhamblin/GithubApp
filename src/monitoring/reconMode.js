// src/monitoring/reconMode.js
export class ReconEngine {
  constructor(enabled = false) {
    this.enabled = enabled;
    this.interceptedEvents = [];
  }

  intercept(event, payload, simulatedAction) {
    const report = {
      timestamp: new Date().toISOString(),
      event,
      sender: payload.sender?.login,
      repository: payload.repository?.full_name,
      simulatedAction, // Ex: "Ajouterait le label 'bug' et commenterait sur l'Issue #12"
      dryRun: true
    };
    this.interceptedEvents.unshift(report);
    if (this.interceptedEvents.length > 100) this.interceptedEvents.pop();
    return report;
  }
}
