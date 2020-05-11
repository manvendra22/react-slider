import React from "react";

import FormSlider from './components/FormSlider/FormSlider';
import YearRangePicker from './components/YearRangePicker/YearRangePicker'

import "./styles/root.scss";

export default function App() {
    function handleChange(value) {
        console.log(value)
    }

    return (
        <div className="container">
            <div className="header">
                React UI components
                <a target="_blank" href="https://github.com/manvendra22/react-ui-kit" class="git-link">
                    <img src="../public/github.svg" alt="github-logo" class="icon-git" />
                </a>
            </div>
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
            <div className="box">
                <div className="title">React-Year-Range-Picker</div>
                <div className="content">
                    <YearRangePicker />
                </div>
            </div>
        </div>
    );
}
