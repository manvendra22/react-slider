import React from "react";

import styles from './Label.module.css'

export default function Label(props) {
    const { value, className } = props;

    return (
        <span className={`${styles.label} ${className}`} >
            {value}
        </span>
    );
}
