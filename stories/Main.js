import React from 'react';
import ValleForm from '../src/Main'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import pacientes from '../data/pacientes.json';
import equipamentos from '../data/equipamentos.json';

setAddon(JSXAddon);

const rows = pacientes.tabs[0].lines;
const baseApi = 'http://localhost:3000/data';
const canonicalApi = pacientes.api;

const rows2 = equipamentos.tabs[0].lines;
const baseApi2 = 'http://localhost:3000/data';
const canonicalApi2 = equipamentos.api;

storiesOf('ValleForm', module)
  .addWithJSX('Pacientes', () => {
    return (
      <ValleForm 
        rows = { rows } 
        baseApi = { baseApi } 
        canonicalApi = { canonicalApi } 
        params = { {id: ''} } />
    )
  })
  .addWithJSX('Equipamentos', () => {
    return (
       <ValleForm 
        rows = { rows2 } 
        baseApi = { baseApi2 } 
        canonicalApi = { canonicalApi2 } 
        params = { {id: ''} } />
    )
  })