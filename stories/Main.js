import React from 'react';
import ValleForm from '../src/Main'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import pacientes from '../data/pacientes.json';

setAddon(JSXAddon);

const rows = pacientes.tabs[0].lines;
const baseApi = 'http://localhost:3000/data';
const canonicalApi = pacientes.api;

storiesOf('ValleForm', module)
  .addWithJSX('Pacientes', () => {
    return (
      <ValleForm 
        rows = { rows } 
        baseApi = { baseApi } 
        canonicalApi = { canonicalApi } 
        params = { {id: ''} } />
    )
  });