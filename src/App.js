import React from "react";
import FormSlider from './FormSlider';

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <FormSlider
                initialValue={50}
                min={0}
                max={100}
                step={1}
                name={''}
                className={''}
                disabled={true}
                showBubble={true} />
        </div>
    );
}
