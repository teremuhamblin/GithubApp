// src/plugins/pluginManager.js
export class PluginManager {
  constructor(octokit) {
    this.octokit = octokit;
    this.loadedPlugins = new Map();
  }

  async loadPlugin(pluginDir) {
    const manifest = JSON.parse(await fs.promises.readFile(`${pluginDir}/plugin.json`, 'utf-8'));
    if (!manifest.enabled) return;

    // Dérivation sécurisée du client API
    const scopedClient = createScopedOctokit(this.octokit, manifest.permissions);
    
    // Import dynamique (support ESM/CJS)
    const module = await import(`${pluginDir}/${manifest.entry}`);
    const pluginInstance = new module.default(scopedClient, manifest);

    if (pluginInstance.onLoad) await pluginInstance.onLoad();
    this.loadedPlugins.set(manifest.name, { instance: pluginInstance, manifest });
  }

  async unloadPlugin(name) {
    if (this.loadedPlugins.has(name)) {
      const { instance } = this.loadedPlugins.get(name);
      if (instance.onUnload) await instance.onUnload();
      this.loadedPlugins.delete(name);
    }
  }

  async dispatchEvent(event, payload) {
    for (const [name, { instance }] of this.loadedPlugins) {
      if (typeof instance[event] === 'function') {
        try {
          await instance[event](payload);
        } catch (err) {
          console.error(`[Plugin Error: ${name}]`, err.message);
        }
      }
    }
  }
}
