import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';

import Input from "../Input/Input";
import Label from "../Label/Label"

import styles from './Slider.module.scss'

export default function Slider(props) {
    const { initialValue, handleChange, className, min, max, showLables, disabled, ...otherProps } = props;

    let [value, setValue] = useState(initialValue);

    function onChange(e) {
        setValue(+e.target.value);
        handleChange(+e.target.value);
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
                disabled={disabled}
                className={`${styles.slider} ${className}`}
            />
            {showLables &&
                <Fragment>
                    <Label value={min} className={styles.min} disabled={disabled} />
                    <Label value={max} className={styles.max} disabled={disabled} />
                </Fragment>}
        </div>
    );
}


Slider.defaultProps = {
    step: 1,
    min: 0,
    max: 100,
    initialValue: 50,
    disabled: false,
    showLables: true,
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    handleChange: PropTypes.func,
    initialValue: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    showLables: PropTypes.bool,
}
