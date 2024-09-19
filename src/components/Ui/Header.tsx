import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from '../Styles/Button';

function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h2>KRIOTEK</h2>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/" className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>About</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>Contact</Link>
                    </li>
                </ul>
                <Button >
                    <Link href="/login" className={styles.loginLink}>Log In</Link>
                </Button>
            </nav>
        </header>
    );
}

export default Header;
