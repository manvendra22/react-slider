import React from 'react'
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';


import styles from './Header.module.scss'

export default function Header(props) {
    const { startValue = 2020, handleLeftClick, handleRightClick, disableLeft, disableRight } = props

    return (
        <div className={styles.header}>
            <div
                className={`range-arrow ${disableLeft && 'disabled'}`}
                onClick={handleLeftClick}
            >
                <FaChevronLeft />
            </div>
            <div>
                {`${startValue} - ${startValue + 15}`}
            </div>
            <div
                className={`range-arrow ${disableRight && 'disabled'}`}
                onClick={handleRightClick}
            >
                <FaChevronRight />
            </div>
        </div>
    )
}