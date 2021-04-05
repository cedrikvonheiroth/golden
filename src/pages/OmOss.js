import React from 'react'
import Hero from '../components/Hero'
import styles from '../css/OmOss.module.css'

function OmOss() {
    return (
        <div className={styles.omOss}>
            <Hero />
            <h1>Om oss</h1>
        </div>
    )
}

export default OmOss;