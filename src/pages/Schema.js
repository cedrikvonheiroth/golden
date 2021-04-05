import React from 'react'
import Hero from '../components/Hero'
import styles from '../css/Schema.module.css'

export default function Schema() {
    return (
        <div className={styles.schema}>
            <Hero />
            <h2>Schema</h2>
        </div>
    )
}
