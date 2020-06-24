import { addParameters, configure } from '@storybook/react';

import pkg from '../package.json';

// automatically import all files ending in *.js
const req = require.context('../stories', true, /\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: `SDK v${pkg.dependencies['@gooddata/react-components']}`,
    showPanel: false,
  },
});

configure(loadStories, module);
