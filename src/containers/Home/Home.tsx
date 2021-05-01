import React from "react";

import CardMiniature from "components/CardMiniature";
import type { HomeProps } from "types";

import styles from "./Home.module.scss";

interface Props extends HomeProps {
  readonly metaTitle: string;
}

const Home = ({ metaTitle, projects }: Props) => (
  <div className={styles.Home}>
    <h1 className={styles.hello}>{metaTitle}</h1>
    <h2 className={styles.description}>
      Je m’intéresse aux usages liées aux nouvelles technologies afin de concevoir des expériences
      innovantes, intuitives et engageantes pour les utilisateurs.
    </h2>
    <div className={styles.projects}>
      {projects.map((project) => (
        <CardMiniature key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Home;
