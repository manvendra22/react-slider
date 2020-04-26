import React, { useState } from "react";
import Slider from "./Slider";
import Bubble from "./Bubble";

import "./styles.css";

export default function FormSlider(props) {
    const { initialValue, handleChange, showBubble, ...otherProps } = props

    let [value, setValue] = useState(initialValue);
    let [visible, setVisible] = useState(false);

    function onChange(e) {
        setValue(e.target.value);
        handleChange(e.target.value)
    }

    function onMouseUp() {
        setVisible(false);
    }

    function onMouseDown() {
        setVisible(true);
    }

    return (
        <div className="slider-container">
            {showBubble && visible && <Bubble value={value} />}
            <Slider
                {...otherProps}
                value={value}
                onChange={onChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchStart={onMouseDown}
            />
        </div>
    );
}
