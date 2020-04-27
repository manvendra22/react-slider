import React from "react";
import PropTypes from 'prop-types';

import styles from './Label.module.scss'

export default function Label(props) {
    const { value, className, ...otherProps } = props;

    return (
        <span className={`${styles.label} ${className}`} {...otherProps}>
            {value}
        </span>
    );
}

Label.defaultProps = {
    value: 50,
    disabled: false,
}

Label.propTypes = {
    value: PropTypes.number,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}
