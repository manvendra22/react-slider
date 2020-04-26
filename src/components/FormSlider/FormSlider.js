import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Bubble from "../Bubble/Bubble";

import styles from './FormSlider.module.css'

export default function FormSlider(props) {
    const { initialValue, onChange, showBubble, ...otherProps } = props;

    let [visible, setVisible] = useState(true);
    let [value, setValue] = useState(initialValue);

    function handleChange(value) {
        setValue(value);
        onChange(value);
    }

    function onMouseUp() {
        setVisible(false);
    }

    function onMouseDown() {
        setVisible(true);
    }

    return (
        <div className={`${styles['slider-container']}`}>
            {showBubble && visible && <Bubble value={value} style={{ left: `calc(${value}% - 17px)` }} />}
            <Slider
                {...otherProps}
                handleChange={handleChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchStart={onMouseDown}
            />
        </div>
    );
}
