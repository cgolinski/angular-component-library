import { configure } from '@storybook/angular';

const req = require.context('../src', true, /\.stories\.ts$/);

function loadStories() {
  // const req = require.context('../src/stories', true, /\.stories\.ts$/); // This line was expected to work instead of the requires on line 3 & 7.
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
