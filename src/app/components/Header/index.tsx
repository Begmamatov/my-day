import { COLORS } from '@/constants/color'

import React from 'react'
import styles from "./style.module.css"

const Header = () => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: COLORS.black }}
        >
            <div className={styles.content}>
                {/* <h1>My-Day</h1> */}
                <a className={styles.logo_box} href="#">
                    <img src='/logo.svg' alt="" />
                </a>
                <a className={styles.number_btn} href="tel:+998 (88) 897 99 98">+998 (88) 897 99 98</a>
            </div>
        </div>
    )
}

export default Header
