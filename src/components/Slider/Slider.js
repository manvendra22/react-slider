import React, { useState } from "react";
import Input from "../Input/Input";

import styles from './Slider.module.css'

export default function Slider(props) {
    const { initialValue, handleChange, className, ...otherProps } = props;

    let [value, setValue] = useState(initialValue);

    function onChange(e) {
        setValue(e.target.value);
        handleChange(e.target.value);
    }

    return (
        <Input
            {...otherProps}
            type="range"
            value={value}
            onChange={onChange}
            className={`${styles.slider} ${className}`}
        />
    );
}
