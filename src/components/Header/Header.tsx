import React from "react";
import Link from "next/link";

import Logo from "components/Logo";

import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.Header}>
    <Logo
      className={styles.logo}
      backgroundClassName={styles.logoBackground}
      contentClassName={styles.logoContent}
      size="2.625rem"
    />
    <nav className={styles.menu}>
      <Link href="/">
        <a className={styles.item}>Projets</a>
      </Link>
      <a className={styles.item}>À propos</a>
    </nav>
  </div>
);

export default Header;
