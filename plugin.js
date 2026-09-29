// AO Bakery entry point

const { registerAOMenu } = require('./src/ui/menu.js');

Plugin.register('ao_bakery', {
  title: 'AO Bakery',
  author: 'dangeroushiveplugs0-dev',
  icon: 'icon.png',
  version: '0.1.0',

  onload() {
    registerAOMenu();
  },

  onunload() {
    // Cleanup will be added as systems are created.
  }
});
