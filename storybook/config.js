import { configure } from '@storybook/react';

import '../css/main.css';

function loadStories() {
  require('../stories/ValleForm.js');
}

configure(loadStories, module);
