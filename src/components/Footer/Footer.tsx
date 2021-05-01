import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.innerContent}>
      <span className={styles.copyright}>&copy; {new Date().getFullYear()} Débora Larivière</span>
      <div className={styles.contact}>
        <a className={styles.link} href="mailto:contact@leger-dosage.fr">
          Email
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/debora-v/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
