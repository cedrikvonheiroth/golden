import React from 'react'
import Hero from '../components/Hero'
import Grupper from '../components/Grupper.js'
import styles from '../css/Traning.module.css'

function Träning() {
    return (
        <div className={styles.traning}>
            <Hero />
            <h1>Träning på Golden Leaf</h1>
            <p className={styles.desc}>På Golden Leaf erbjuder vi träning för alla olika nivåer. Oavsett om din målsättning är att bli världsmästare eller om du vill komma i form och träna för skojs skull är du välkommen till Golden Leaf! På grund av rådande pandemi och begränsade platser vill vi dock att ni kontaktar oss före ni kommer ner!</p>
            <Grupper />

            <h3 className={styles.videoHeader}>Träningsfilm</h3>
            <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vPF40e-vKy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Träning;
