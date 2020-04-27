import React from "react";
import PropTypes from 'prop-types';

import styles from './Label.module.css'

export default function Label(props) {
    const { value, className } = props;

    return (
        <span className={`${styles.label} ${className}`} >
            {value}
        </span>
    );
}

Label.defaultProps = {
    value: 50,
}

Label.propTypes = {
    value: PropTypes.number,
    className: PropTypes.string,
}
