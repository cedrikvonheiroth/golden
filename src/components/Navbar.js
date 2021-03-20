import React from 'react'
import { Link } from "react-router-dom";
import styles from '../css/Navbar.module.css'
import glmt from '../icons/glmt.svg'

function Navbar() {
    return (
            <div className={styles.navbar}>
                
                <div className={styles.glmtLogoWrapper}>
                    <Link to="/">
                        <img src={glmt} alt='golden leaf logo'/>
                    </Link>
                </div>

                <ul className={styles.ul} >
                    <li className={styles.li}>
                        <Link to="/">Hem</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/Träning">Träning</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/OmOss">Om oss</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/Kontakt">Kontakt</Link>
                    </li>
                </ul>

                <div className={styles.burger}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </div>
    )
}

export default Navbar;