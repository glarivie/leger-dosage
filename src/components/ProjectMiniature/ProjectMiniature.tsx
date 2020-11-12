import React from 'react';
import Link from 'next/link';

import type { Project } from 'types';

import styles from './ProjectMiniature.module.scss';

const ProjectMiniature = ({ category, title, miniature, excerpt, slug }: Project) => (
  <div className={styles.ProjectMiniature}>
    <div
      className={styles.illustration}
      style={{ backgroundImage: `url(${miniature.fields.file.url})` }}
    />
    <span className={styles.category}>{category}</span>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.excerpt}>{excerpt}</p>
    <Link href="/[slug]" as={`/${slug}`}>
      <a className={styles.more}>Lire la suite</a>
    </Link>
  </div>
);

export default ProjectMiniature;
