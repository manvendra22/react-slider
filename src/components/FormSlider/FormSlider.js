import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

import Slider from "./Slider/Slider";
import Bubble from "./Bubble/Bubble";
import Label from "./Label/Label"


import styles from './FormSlider.module.scss'

export default function FormSlider(props) {
    const { initialValue, onChange, min, max, showBubble, showLables, showBubbleOnlyOnScroll, disabled, ...otherProps } = props;

    let [visible, setVisible] = useState(!showBubbleOnlyOnScroll);
    let [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(+e.target.value);
        onChange(+e.target.value);
    }

    function onMouseUp() {
        showBubbleOnlyOnScroll && setVisible(false);
    }

    function onMouseDown() {
        showBubbleOnlyOnScroll && setVisible(true);
    }

    const bubbleStyle = {
        position: 'absolute',
        left: `calc(${(100 / (max - min)) * (value - min)}% - 16px)`,
        bottom: '25px'
    }

    return (
        <div className={styles['form-slider']}>
            {showBubble
                && visible
                && <Bubble value={value} style={bubbleStyle} />}
            <Slider
                {...otherProps}
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                onTouchEnd={onMouseUp}
                onTouchStart={onMouseDown}
                disabled={disabled}
            />
            {showLables &&
                <Fragment>
                    <Label value={min} className={styles.min} disabled={disabled} />
                    <Label value={max} className={styles.max} disabled={disabled} />
                </Fragment>}
        </div>
    );
}

FormSlider.defaultProps = {
    min: 0,
    max: 100,
    initialValue: 50,
    showBubble: true,
    showLables: true,
    showBubbleOnlyOnScroll: true,
    disabled: false
}

FormSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    initialValue: PropTypes.number,
    showBubble: PropTypes.bool,
    showLables: PropTypes.bool,
    showBubbleOnlyOnScroll: PropTypes.bool,
    disabled: PropTypes.bool,
}
