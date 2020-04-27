import React from "react";

import FormSlider from './components/FormSlider/FormSlider';

import "./styles.css";

export default function App() {
    function handleChange(value) {
        console.log(value)
    }

    return (
        <div className="container">
            <div className="header">React UI components</div>
            <div className="box">
                <div className="title">React-Slider</div>
                <div className="content">
                    <FormSlider
                        initialValue={50}
                        onChange={handleChange}
                        min={0}
                        max={100}
                        step={1}
                        name=''
                        className=''
                        disabled={false}
                        showLables={true}
                        showBubble={true}
                        showBubbleOnlyOnScroll={true}
                    />
                </div>
            </div>
        </div>
    );
}
