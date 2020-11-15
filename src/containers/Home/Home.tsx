import React from 'react';

import CardMiniature from 'components/CardMiniature';
import type { HomeProps } from 'types';

import styles from './Home.module.scss';

const Home = ({ projects }: HomeProps) => (
  <div className={styles.Home}>
    <h1 className={styles.hello}>
      Bonjour ! Je suis Debora Larivière - Junior UI/UX Designer.
    </h1>

    <div className={styles.projects}>
      {projects.map(project => <CardMiniature key={project.id} {...project} />)}
    </div>
  </div>
);

export default Home;
