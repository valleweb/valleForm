import { configure } from '@storybook/react';

import '../css/main.css';
import '@valle/valle-input';
import '@valle/valle-select';
import '@valle/valle-speed-dial';

function loadStories() {
  require('../stories/ValleForm.js');
}

configure(loadStories, module);
