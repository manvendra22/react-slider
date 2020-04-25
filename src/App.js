import React, { useState } from "react";
import Slider from "./Slider";

import "./styles.css";

export default function App() {
    let [value, setValue] = useState(0);

    function handleChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    return (
        <div className="App">
            <div className="slider-container">
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
