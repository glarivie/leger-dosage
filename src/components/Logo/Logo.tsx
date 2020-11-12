import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.scss';

const Logo = () => (
  <Link href="/">
    <div className={styles.Logo}>
      <span className={styles.brand}>Ld</span>
    </div>
  </Link>
);

export default Logo;
