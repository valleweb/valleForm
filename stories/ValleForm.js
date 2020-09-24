import React from 'react';
import ValleForm from '../src/ValleForm'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// Mocks API requests
import form_0 from '../data/form-0.json';
import form_1 from '../data/form-1.json';
import form_2 from '../data/form-2.json';
import form_0_values from '../data/form-0-values.json';
import form_0_populated from '../data/form-0-populated.json';
import form_2_descriptions from '../data/form-2-descriptions.json';

setAddon(JSXAddon);

storiesOf('ValleForm', module)
  .addWithJSX('Form 0 - insert mode', () => {
    return (
      <ValleForm
        tabs = { form_0.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0.tabs[0].api }
        buttons = { form_0.tabs[0].buttons }
        token = '123'
        _id = 'hash'
      />
    )
  })
  .addWithJSX('Form 0 - view mode', () => {
    return (
      <ValleForm
        tabs = { form_0.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0.tabs[0].api }
        buttons = { form_0.tabs[0].buttons }
        _id = { '123' }
        values = { form_0_values }
        readOnly
        token = '123'
      />
    )
  })
  .addWithJSX('Form 0 - insert mode with values', () => {
    return (
      <ValleForm
        tabs = { form_0_populated.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0_populated.tabs[0].api }
        buttons = { form_0_populated.tabs[0].buttons }
        token = '123'
      />
    )
  })
  .addWithJSX('Form 1 - insert mode with tabs', () => {
    return (
      <ValleForm
        tabs = { form_1.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_1.tabs[0].api }
        buttons = { form_1.tabs[0].buttons }
        token = '123'
      />
    )
  })
  .addWithJSX('Form 2 - custom requests', () => {
    return (
      <ValleForm
        tabs = { form_2.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_2.tabs[0].api }
        buttons = { form_2.tabs[0].buttons }
        token = '123'
        _id = '@123'
      />
    )
  })
  .addWithJSX('Form 2 - description', () => {
    return (
      <ValleForm
        tabs = { form_2_descriptions.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_2_descriptions.tabs[0].api }
        buttons = { form_2_descriptions.tabs[0].buttons }
        token = '123'
        _id = '@123'
        params = {{
          id_usuario: "params.id_usuario",
          identificador: "params.identificador",
          cliente_id: "params.cliente_id",
          empresa: "params.empresa",
          estabelecimento: "params.estabelecimento",
          conexao: "params.conexao",
          sistema: "params.sistema",
          formulario: "params.formulario",
        }}
      />
    )
  })