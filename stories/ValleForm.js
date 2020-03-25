import React from 'react';
import ValleForm from '../src/ValleForm'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// Mocks API requests
import form_0 from '../data/form-0.json';
import form_1 from '../data/form-1.json';
import form_0_values from '../data/form-0-values.json';
import form_0_populated from '../data/form-0-populated.json';

setAddon(JSXAddon);

storiesOf('ValleForm', module)
  .addWithJSX('Form 0 - insert mode', () => {
    return (
      <ValleForm
        tabs = { form_0.tabs }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0.tabs[0].api }
        buttons = { form_0.tabs[0].buttons }
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
      />
    )
  })