import React from 'react';

import Logo from 'components/Logo';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header}>
    <Logo className={styles.logo} size="2.625rem" />
  </div>
);

export default Header;
