import React, { useState } from "react";
import Slider from "./Slider";
import Bubble from "./Bubble";

import "./styles.css";

export default function FormSlider(props) {
    const { initialValue, showBubble, ...otherProps } = props

    let [value, setValue] = useState(initialValue);
    let [visible, setVisible] = useState(false);

    function handleChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleMouseUp() {
        setVisible(false);
    }

    function handleMouseDown() {
        setVisible(true);
    }


    return (
        <div className="slider-container">
            {showBubble && visible && <Bubble value={value} />}
            <Slider
                {...otherProps}
                value={value}
                onChange={handleChange}
                onMouseUp={handleMouseUp}
                onMouseDown={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchStart={handleMouseDown}
            />
        </div>
    );
}
