import React from 'react'
import styles from '../css/Home.module.css'
import goldFacebookLogo from '../icons/facebook-gold.svg'
import goldInstagramLogo from '../icons/instagram-gold.svg'
import Hero from '../components/Hero'



function Hem() {
    return (
        <div className={styles.hem} >
            <Hero />
            <h1>Golden Leaf Muay Thai</h1>
            <p>På Golden Leaf strävar vi efter att skapa en miljö där såväl nybörjare som veteraner känner sig välkomna. Vi har erfarna tränare som alla är eller har varit aktiva fighters och vi har en god stämning som innebär att alla hjälper varandra att utvecklas. Oavsett om din målsättning är att bli världsmästare eller om du vill komma i form och träna för skojs skull är du välkommen till Golden Leaf!</p>

            <div className={styles.socialmedia} >
                <h2>Följ oss på sociala medier för kontinuerliga uppdateringar</h2>

                <a href='https://www.facebook.com/GoldenLeafMuayThai' target="_blank" rel="noreferrer"><div className={styles.facebookLogoWrapper} >
                    <img src={goldFacebookLogo} alt='facebook' />
                </div></a>

                <a href='https://www.instagram.com/goldenleafmt' target="_blank" rel="noreferrer"><div className={styles.instagramLogoWrapper} >
                    <img src={goldInstagramLogo} alt='instagram' />
                </div></a>


                <p>Ni som redan är aktiva medlemmar i klubben är även välkomna att gå med i vår interna facebook-grupp:<br></br><a href="https://www.facebook.com/groups/363189828389082" target="_blank" rel="noreferrer">Golden Leaf Medlemsgrupp</a></p>

            </div>
        </div>
    )
}

export default Hem;
