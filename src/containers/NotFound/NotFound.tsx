import React from "react";
import Link from "next/link";

import styles from "./NotFound.module.scss";

const NotFound = () => (
  <div className={styles.NotFound}>
    <div className={styles.left}>
      <h1 className={styles.status}>404</h1>
      <h2 className={styles.message}>Désolé, cette page est introuvable.</h2>
      <p className={styles.guidelines}>
        Pas de soucis, vous pouvez revenir à la{" "}
        <Link href="/">
          <a href="/">page d’accueil</a>
        </Link>{" "}
        pour découvrir mes derniers projets.
      </p>
    </div>
    <div className={styles.right}>
      <img src="/empty.svg" alt="page introuvable" />
    </div>
  </div>
);

export default NotFound;
