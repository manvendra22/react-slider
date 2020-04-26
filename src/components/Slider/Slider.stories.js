import React from 'react';

import Slider from './Slider'

export default {
    title: 'Slider',
    component: Slider,
    decorators: [storyFn => <div style={{ width: '50%' }}>{storyFn()}</div>],
};

export const Default = () => <Slider />;

export const Disabled = () => <Slider disabled />;