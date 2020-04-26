import React from 'react';
import { addDecorator } from '@storybook/react';

const styles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

addDecorator(storyFn => (
    <div style={styles}>
        {storyFn()}
    </div>));