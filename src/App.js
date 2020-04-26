import React from "react";
import FormSlider from './FormSlider';

import "./styles.css";

export default function App() {
    function handleChange(value) {
        console.log(value)
    }

    return (
        <div className="App">
            <FormSlider
                initialValue={50}
                handleChange={handleChange}
                min={0}
                max={100}
                step={1}
                name=''
                className=''
                disabled={false}
                showBubble={true} />
        </div>
    );
}
