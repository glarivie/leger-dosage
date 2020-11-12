import React from 'react';

import Logo from 'components/Logo';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header}>
    <Logo />
  </div>
);

export default Header;
