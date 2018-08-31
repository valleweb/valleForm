import React from 'react';
import ValleForm from '../src/ValleForm'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

// Mocks API requests
import form_0 from '../data/form-0.json';
import form_0_values from '../data/form-0-values.json';

setAddon(JSXAddon);

storiesOf('ValleForm', module)
  .addWithJSX('Form 0 - insert mode', () => {
    return (
      <ValleForm
        rows = { form_0.tabs[0].lines }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0.tabs[0].api }
      />
    )
  })
  .addWithJSX('Form 0 - view mode', () => {
    return (
      <ValleForm
        rows = { form_0.tabs[0].lines }
        baseApi = { 'http://localhost:3000' }
        canonicalApi = { form_0.tabs[0].api }
        _id = { '123' }
        values = { form_0_values }
        readOnly
      />
    )
  })