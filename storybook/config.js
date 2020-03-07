import { configure } from '@storybook/react';

import '../css/main.css';
import '../bower_components/polymer/polymer.html';
import '../bower_components/valle-input/valle-input.html';
import '../bower_components/valle-select/valle-select.html';
import '../bower_components/valle-select/valle-option.html';
import '../bower_components/valle-fab/valle-fab.html';
import '../bower_components/valle-speed-dial/valle-speed-dial.html';
import '../bower_components/valle-speed-dial/valle-speed-dial-action.html';

function loadStories() {
  require('../stories/ValleForm.js');
}

configure(loadStories, module);
