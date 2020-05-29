import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './Header.module.scss'

export default function Header(props) {
    const { startValue = 2020, handleLeftClick, handleRightClick, disableLeft, disableRight } = props

    return (
        <div className={styles.header}>
            <div
                className={`${styles.rangeArrow} ${disableLeft && 'disabled'}`}
                onClick={handleLeftClick}
            >
                <FaChevronLeft />
            </div>
            <div>
                {`${startValue} - ${startValue + 15}`}
            </div>
            <div
                className={`${styles.rangeArrow} ${disableRight && 'disabled'}`}
                onClick={handleRightClick}
            >
                <FaChevronRight />
            </div>
        </div>
    )
}