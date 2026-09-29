// AO Bakery menu registration

function registerAOMenu() {
  const action = new Action('ao_bakery_open', {
    name: 'AO Bakery',
    description: 'Bake ambient occlusion onto the active texture.',
    icon: 'brightness_5',
    click() {
      console.log('AO Bakery opened');
    }
  });

  MenuBar.addAction(action, 'tools');
}

module.exports = {
  registerAOMenu
};
