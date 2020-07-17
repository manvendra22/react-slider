import React, { useState } from 'react'

import styles from './Body.module.scss'

export default function Body(props) {
    const { startValue = 2020, endValue = 2083, handleValue } = props

    const [selected, setSelected] = useState(startValue)

    function handleClick(year) {
        setSelected(year)
        handleValue(year)
    }

    function initializeArray() {
        const years = Array.from({ length: 16 }, (value, index) => index + startValue);
        return years.filter(year => year <= endValue);
    };

    return (
        <div className={styles.panel}>
            {initializeArray().map(year => (
                <div key={year} onClick={() => handleClick(year)}
                    className={`${styles.year} ${year === selected && styles.active}`}
                >
                    {year}
                </div>
            ))}
        </div>
    )
}