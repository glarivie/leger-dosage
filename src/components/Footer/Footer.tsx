import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.innerContent}>
      <span className={styles.copyright}>
        &copy; 2020 Debora Lariviere
      </span>
      <div className={styles.contact}>

      </div>
    </div>
  </div>
);

export default Footer;
