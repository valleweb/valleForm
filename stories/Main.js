import React from 'react';
import ValleForm from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Hello', module)
    .add('with lyef name', () => <ValleForm name="lyef" />)
    .add('with another name', () => <ValleForm name="another" />)
