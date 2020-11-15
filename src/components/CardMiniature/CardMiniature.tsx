import React from 'react';
import Link from 'next/link';

import type { Project } from 'types';

import styles from './CardMiniature.module.scss';

const CardMiniature = ({ category, title, miniature, excerpt, slug }: Project) => (
  <Link href="/[slug]" as={`/${slug}`}>
    <a className={styles.CardMiniature}>
      <div
        className={styles.illustration}
        style={{ backgroundImage: `url(${miniature.fields.file.url})` }}
      />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </a>
  </Link>
);

export default CardMiniature;
