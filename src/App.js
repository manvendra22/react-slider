import React, { useState } from "react";
import Slider from "./Slider";
import Bubble from "./Bubble";

import "./styles.css";

export default function App() {
    let [value, setValue] = useState(0);
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
        <div className="App">
            <div className="slider-container">
                <Bubble value={value} visible={visible} />
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={value}
                    onChange={handleChange}
                    onMouseUp={handleMouseUp}
                    onMouseDown={handleMouseDown}
                />
            </div>
        </div>
    );
}
