import React from 'react'
import { Link } from "react-router-dom";
import styles from '../css/Navbar.module.css'

function Navbar() {
    return (
            <div className={styles.navbar}>
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
            </div>
    )
}

export default Navbar;