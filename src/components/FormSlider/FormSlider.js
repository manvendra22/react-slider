import React, { useState } from "react";
import PropTypes from 'prop-types';

import Slider from "../Slider/Slider";
import Bubble from "../Bubble/Bubble";

import styles from './FormSlider.module.scss'

export default function FormSlider(props) {
    const { initialValue, onChange, min, max, showBubble, showBubbleOnlyOnScroll, ...otherProps } = props;

    let [visible, setVisible] = useState(!showBubbleOnlyOnScroll);
    let [value, setValue] = useState(initialValue);

    function handleChange(value) {
        setValue(value);
        onChange(value);
    }

    function onMouseUp() {
        showBubbleOnlyOnScroll && setVisible(false);
    }

    function onMouseDown() {
        showBubbleOnlyOnScroll && setVisible(true);
    }

    const bubbleStyle = {
        position: 'absolute',
        left: `calc(${(100 / (max - min)) * (value - min)}% - 17px)`,
        bottom: '35px'
    }

    return (
        <div className={styles['form-slider']}>
            {showBubble
                && visible
                && <Bubble value={value} style={bubbleStyle} />}
            <Slider
                {...otherProps}
                min={min}
                max={max}
                initialValue={initialValue}
                handleChange={handleChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchStart={onMouseDown}
            />
        </div>
    );
}

FormSlider.defaultProps = {
    min: 0,
    max: 100,
    initialValue: 50,
    showBubble: true,
    showBubbleOnlyOnScroll: true
}

FormSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    initialValue: PropTypes.number,
    showBubble: PropTypes.bool,
    showBubbleOnlyOnScroll: PropTypes.bool,
}
