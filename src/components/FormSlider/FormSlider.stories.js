import React from 'react';

import FormSlider from './FormSlider'

export default {
    title: 'FormSlider',
    component: FormSlider,
};

export const Default = () => <FormSlider />;

export const Disabled = () => <FormSlider disabled />;

export const WithoutLabels = () => <FormSlider showLables={false} />;

export const WithoutBubble = () => <FormSlider showBubble={false} />;

export const AlwaysShowBubble = () => <FormSlider showBubbleOnlyOnScroll={false} />;