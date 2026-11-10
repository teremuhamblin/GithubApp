import { EventEmitter } from 'node:events';

/**
 * Collecteur de métriques temps réel :
 * Débit d'événements, quotas GitHub (Rate Limits), latence et mémoire.
 */
export class MetricsCollector extends EventEmitter {
  constructor(historyWindowSize = 30) {
    super();
    this.historyWindowSize = historyWindowSize;

    this.stats = {
      totalEvents: 0,
      totalErrors: 0,
      throughputHistory: new Array(historyWindowSize).fill(0),
      currentSecondEvents: 0,
      latency: {
        lastMs: 0,
        avgMs: 0,
        samples: []
      },
      rateLimit: {
        limit: 5000,
        remaining: 5000,
        resetTimestamp: null,
        percent: 100
      }
    };

    // Calcul du débit par seconde (tick chaque 1s)
    this.interval = setInterval(() => this._tickThroughput(), 1000);
    if (this.interval.unref) this.interval.unref();
  }

  _tickThroughput() {
    this.stats.throughputHistory.shift();
    this.stats.throughputHistory.push(this.stats.currentSecondEvents);
    this.stats.currentSecondEvents = 0;

    this.emit('stats_update', this.getSnapshot());
  }

  recordWebhook(event, action, durationMs = 0, success = true) {
    this.stats.totalEvents += 1;
    this.stats.currentSecondEvents += 1;

    if (!success) {
      this.stats.totalErrors += 1;
    }

    // Calcul de la latence moyenne glissante (sur 50 échantillons)
    this.stats.latency.lastMs = durationMs;
    this.stats.latency.samples.push(durationMs);
    if (this.stats.latency.samples.length > 50) this.stats.latency.samples.shift();

    const sum = this.stats.latency.samples.reduce((a, b) => a + b, 0);
    this.stats.latency.avgMs = Math.round(sum / this.stats.latency.samples.length);

    this.emit('webhook', {
