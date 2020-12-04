import React from 'react';

import CardMiniature from 'components/CardMiniature';
import type { HomeProps } from 'types';

import styles from './Home.module.scss';

interface Props extends HomeProps {
  readonly metaTitle: string;
}

const Home = ({ metaTitle, projects }: Props) => (
  <div className={styles.Home}>
    <h1 className={styles.hello}>{metaTitle}</h1>
    <div className={styles.projects}>
      {projects.map(project => <CardMiniature key={project.id} {...project} />)}
    </div>
  </div>
);

export default Home;
