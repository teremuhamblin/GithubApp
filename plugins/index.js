const fs = require('fs');
const path = require('path');

function loadPlugins(logger) {
  const pluginsDir = __dirname;
  const plugins = {};

  fs.readdirSync(pluginsDir).forEach(folder => {
    const pluginPath = path.join(pluginsDir, folder);

    if (folder.startsWith('plugin-') && fs.lstatSync(pluginPath).isDirectory()) {
      try {
        const plugin = require(pluginPath);
        plugins[folder] = plugin;
        logger.info(`[Plugin] Loaded: ${folder}`);
      } catch (err) {
        logger.error(`[Plugin] Failed to load ${folder}: ${err.message}`);
      }
    }
  });

  return plugins;
}

module.exports = { loadPlugins };
