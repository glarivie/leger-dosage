import React from "react";

import styles from "./LoadingProject.module.scss";

const LoadingProject = () => (
  <div className={styles.LoadingProject}>
    <div className={styles.media} />
    <div className={styles.heading} />
    <p className={styles.content} />
    <p className={styles.content} />
  </div>
);

export default LoadingProject;
