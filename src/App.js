import React from "react";

import FormSlider from './components/FormSlider/FormSlider';

import "./styles.css";

export default function App() {
    function handleChange(value) {
        console.log(value)
    }

    return (
        <div className="App">
            <div className="box">
                <FormSlider
                    initialValue={50}
                    onChange={handleChange}
                    min={0}
                    max={100}
                    step={1}
                    name=''
                    className=''
                    disabled={true}
                    showLables={true}
                    showBubble={true}
                    showBubbleOnlyOnScroll={true}
                />
            </div>
        </div>
    );
}
