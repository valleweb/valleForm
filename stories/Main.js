import React from 'react';
import ValleForm from '../src/Main'; // This is our component
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

storiesOf('ValleForm', module)
    .addWithJSX('Estados', () => {
        return <ValleForm api="http://localhost:3000/data"/>
    })
    .addWithJSX('Plano de contas', () => {
        return <ValleForm api="http://localhost:3000/data"/>
    })
    .addWithJSX('CFO', () => {
        return <ValleForm api="http://localhost:3000/data"/>
    })