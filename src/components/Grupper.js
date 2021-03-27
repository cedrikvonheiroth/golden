import React from 'react'
import styles from '../css/Grupper.module.css'

export default function Grupper() {
    return (
        <div className={styles.grupper}>
            <h2 className={styles.gruppHeader}>Träningsgrupper</h2>
            <p className={styles.gruppDesc}>Nedan beskrivs de olika träningsgrupperna vi erbjuder. Vi kan även erbjuda privatträning för företag eller enskilda personer/grupper. För mer information om privatträning kontakta oss via mail eller sociala medier.</p>

            <h3 className={styles.gruppHeader}>Barngrupp 8 - 12 år</h3>
            <p className={styles.gruppDesc}>Träningsgruppen för våra yngsta medlemmar! Barngruppen tränar varje söndag kl 11:00 - 12:00 och träningarna leds av våra fighters Moses och Sara. Dessa passen fokuserar på träningsglädje och rörelse samtidigt som barnen får lära sig de tekniska grunderna i thaiboxning. </p>

            <h3 className={styles.gruppHeader}>Nybörjargrupp</h3>
            <p className={styles.gruppDesc}>Här krävs inga förkunskaper. Passar både för dig som vill lära dig riktig thaiboxning och dig som vill ha en rolig träningsform. Det enda du behöver är lämpliga träningskläder, vattenflaska och ett gott humör! På grund av rådande pandemi lånar vi inte ut några handskar, utan det krävs att du har med egna boxningshandskar. Nybörjargruppen leds av våra fighters Cedrik och Peyman. Träning sker tisdagar och torsdagar kl 18:30 - 19:45.</p>

            <h3 className={styles.gruppHeader}>Mellangrupp</h3>
            <p className={styles.gruppDesc}>Mellangruppen är till för dig som har viss erfarenhet och sparringvana. Egna handskar, tandskydd och benskydd krävs för att kunna träna i mellangruppen. Passen leds av Elliotte och Matija som tävlar aktivt för klubben. Mellangruppen tränar måndagar och onsdagar kl 18:30 - 19:45.</p>

            <h3 className={styles.gruppHeader}>Tävlingsgrupp</h3>
            <p className={styles.gruppDesc}>Tävlingsgruppen är till för våra fighters. Här siktar vi mot toppen! Gruppen leds av klubbens erfarne huvudtränare Arian Behrami.</p>
        </div>
    )
}
