import React, { useState } from "react";
import PropTypes from 'prop-types';

import Slider from "../Slider/Slider";
import Bubble from "../Bubble/Bubble";

import styles from './FormSlider.module.css'

export default function FormSlider(props) {
    const { initialValue, onChange, showBubble, showBubbleOnlyOnScroll, ...otherProps } = props;

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
        left: `calc(${value}% - 17px)`,
        bottom: '35px'
    }

    return (
        <div className={styles['form-slider']}>
            {showBubble
                && visible
                && <Bubble value={value} style={bubbleStyle} />}
            <Slider
                {...otherProps}
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
    initialValue: 50,
    showBubble: true,
    showBubbleOnlyOnScroll: true
}

FormSlider.propTypes = {
    initialValue: PropTypes.number,
    onChange: PropTypes.func,
    showBubble: PropTypes.bool,
    showBubbleOnlyOnScroll: PropTypes.bool,
}
