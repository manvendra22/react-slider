import React from "react";

import styles from './Bubble.module.css'

export default function Slider(props) {
    const { value, ...otherProps } = props;

    return (
        <div className={styles.bubble} {...otherProps} >
            <span>{value}</span>
        </div>
    );
}
