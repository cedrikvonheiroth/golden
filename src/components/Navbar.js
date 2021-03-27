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

                <input type="checkbox" id="navToggle" className={styles.navToggle}></input>
                <label for="navToggle" className={styles.navToggleLabel}>
                    <div></div>
                    <div></div>
                    <div></div>
                </label>

                <ul className={styles.ul} >
                    <span className={styles.hemLine}>
                        <li className={styles.li}>
                            <Link to="/">Hem</Link>
                        </li>
                    </span>

                    <span className={styles.träningLine}>
                        <li className={styles.li}>
                            <Link to="/Träning">Träning</Link>
                        </li>
                    </span>

                    <span className={styles.priserLine}>
                        <li className={styles.li}>
                            <Link to="/Priser">Priser</Link>
                        </li>
                    </span>

                    <span className={styles.schemaLine}>
                        <li className={styles.li}>
                            <Link to="/Schema">Schema</Link>
                        </li>
                    </span>

                    <span className={styles.omOssLine}>
                        <li className={styles.li}>
                            <Link to="/OmOss">Om oss</Link>
                        </li>
                    </span>

                    <span className={styles.kontaktLine}>               
                        <li className={styles.li}>
                            <Link to="/Kontakt">Kontakt</Link>
                        </li>
                    </span>
                </ul>

            </div>
    )
}

export default Navbar;