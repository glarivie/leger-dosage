import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.innerContent}>
      <span className={styles.copyright}>
        &copy; 2020 Debora Lariviere
      </span>
      <div className={styles.contact}>
        <a className={styles.mail}>
          <IoMdMail />
        </a>
        <a className={styles.linkedin}>
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
