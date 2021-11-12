import React from 'react'
import styles from '/styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image loader={() => "/icon-192x192.png"} width="64px" height="64px" src="/icon-192x192.png" alt="jolly rogers icon"/>
      </div>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/sailors"><a>Sailors</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
