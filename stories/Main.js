import React from 'react';
import ValleForm from '../src/Main'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// Mocks API requests

import pacientes from '../data/pacientes.json';
import equipamentos from '../data/equipamentos.json';

setAddon(JSXAddon);

storiesOf('ValleForm', module)
  .addWithJSX('Pacientes', () => {
    return (
      <ValleForm 
        rows = { pacientes.tabs[0].lines } 
        baseApi = { 'http://localhost:3000/data' } 
        canonicalApi = { pacientes.api } 
        params = { {id: ''} } 
      />
    )
  })
  .addWithJSX('Equipamentos - Inserção', () => {
    return (
      <ValleForm 
        rows = { equipamentos.tabs[0].lines } 
        baseApi = { 'http://localhost:3000/data' } 
        canonicalApi = { equipamentos.api } 
        params = { {id: ''} } 
      />
    )
  })
  .addWithJSX('Equipamentos - Visualização', () => {
    return (
      <ValleForm 
        rows = { equipamentos.tabs[0].lines } 
        baseApi = { 'http://localhost:3000/data' } 
        canonicalApi = { equipamentos.api } 
        params = { {id: ''} }
        readOnly = { true }
      />
    )
  })