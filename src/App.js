import React from "react";

import gitIcon from './assets/github.svg'

import FormSlider from './components/FormSlider/FormSlider';
import YearRangePicker from './components/YearRangePicker/YearRangePicker'

import "./styles/root.scss";

export default function App() {
    function handleChange(value) {
        console.log(value)
    }

    return (
        <>
            <a target="_blank" href="https://github.com/manvendra22/react-ui-kit" className="git-link">
                <img src={gitIcon} alt="github-logo" className="icon-git" />
            </a>
            <div className="container">
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
                        <YearRangePicker
                        // startValue={2020}
                        // endValue={2100}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
