import React from 'react';

import ProjectMiniature from 'components/ProjectMiniature';
import type { HomeProps } from 'types';

import styles from './Home.module.scss';

const Home = ({ projects }: HomeProps) => (
  <div className={styles.Home}>
    <h1 className={styles.hello}>
      Bonjour ! Je suis Debora Larivière - Junior UI/UX Designer.
    </h1>

    <div className={styles.projects}>
      {projects.map(project => <ProjectMiniature key={project.id} {...project} />)}
    </div>
  </div>
);

export default Home;
