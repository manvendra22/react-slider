import React from "react";
import PropTypes from 'prop-types';

import styles from './Bubble.module.scss'

export default function Bubble(props) {
    const { value, ...otherProps } = props;

    return (
        <div className={styles.bubble} {...otherProps} >
            <span>{value}</span>
        </div>
    );
}

Bubble.defaultProps = {
    value: 50,
}

Bubble.propTypes = {
    value: PropTypes.number,
}