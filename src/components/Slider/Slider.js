import React, { Fragment, useState } from "react";
import Input from "../Input/Input";

import styles from './Slider.module.css'

export default function Slider(props) {
    const { initialValue, handleChange, className, min, max, showLables, ...otherProps } = props;

    let [value, setValue] = useState(initialValue);

    function onChange(e) {
        setValue(e.target.value);
        handleChange(e.target.value);
    }

    return (
        <div className={styles['slider-container']}>
            <Input
                {...otherProps}
                min={min}
                max={max}
                type="range"
                value={value}
                onChange={onChange}
                className={`${styles.slider} ${className}`}
            />
            {showLables &&
                <Fragment>
                    <span className={`${styles.label} ${styles.min}`}>{min}</span>
                    <span className={`${styles.label} ${styles.max}`}>{max}</span>
                </Fragment>}
        </div>
    );
}


Slider.defaultProps = {
    initialValue: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showLables: true,
}

