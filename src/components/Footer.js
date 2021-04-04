import React from 'react'
import styles from '../css/Footer.module.css'
import goldFacebookLogo from '../icons/facebook-gold.svg'
import goldInstagramLogo from '../icons/instagram-gold.svg'


function Footer() {
    return (
        <div className={styles.footer} >
            
            


            <div className={styles.linkWrapper}>
                <a href='https://www.facebook.com/GoldenLeafMuayThai' target="_blank" rel="noreferrer"><div className={styles.facebookLogoWrapper} >
                    <img src={goldFacebookLogo} alt='facebook' /> 
                </div><span className={styles.spanLink}>Golden Leaf Muay Thai</span></a>
            </div>

            <div className={styles.linkWrapper}>
                <a href='https://www.instagram.com/goldenleafmt' target="_blank" rel="noreferrer"><div className={styles.instagramLogoWrapper} >
                    <img src={goldInstagramLogo} alt='instagram' />
                </div><span className={styles.spanLink}>Goldenleafmt</span></a>
            </div>


            <p>golden.leaf.muay.thai@hotmail.com</p>
            <p>Nobelvägen 17C, 214 29 Malmö </p>
            <p className={styles.copyright}>Golden Leaf Muay Thai ©2021 </p>
        </div>
    )
}

export default Footer
