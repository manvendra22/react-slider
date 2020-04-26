import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Bubble from "../Bubble/Bubble";

import styles from './FormSlider.module.css'

export default function FormSlider(props) {
    const { initialValue, min, max, onChange, showLables, showBubble, showBubbleOnlyOnScroll, ...otherProps } = props;

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
        bottom: showLables ? '50px' : '35px'
    }

    return (
        <div className={styles['slider-container']}>
            {showBubble
                && visible
                && <Bubble value={value} style={bubbleStyle} />}
            <Slider
                {...otherProps}
                min={min}
                max={max}
                handleChange={handleChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchStart={onMouseDown}
            />
            {showLables &&
                <div className={styles.labels}>
                    <span>{min}</span>
                    <span>{max}</span>
                </div>}
        </div>
    );
}

FormSlider.defaultProps = {
    initialValue: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showLables: true,
    showBubble: true,
    showBubbleOnlyOnScroll: true
}
