import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.innerContent}>
      <span className={styles.copyright}>
        &copy; 2020 Débora Larivière
      </span>
      <div className={styles.contact}>
        <a className={styles.mail} href="mailto:contact@leger-dosage.fr">
          <IoMdMail />
        </a>
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/in/debora-v/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
