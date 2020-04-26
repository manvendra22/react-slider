import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ width: '50%', margin: '100px auto' }}>{storyFn()}</div>);