import React from "react";
import PropTypes from 'prop-types';

import styles from './Slider.module.scss'

export default function Slider(props) {
    const { className, ...otherProps } = props;

    return (
        <input
            {...otherProps}
            type="range"
            className={`${styles.slider} ${className}`}
        />
    );
}


Slider.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    name: '',
    disabled: false,
}

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    step: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
}
