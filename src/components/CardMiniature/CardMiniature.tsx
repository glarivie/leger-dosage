import React, { useMemo } from "react";
import { useMedia } from "react-use";
import Link from "next/link";

import type { Project } from "types";

import styles from "./CardMiniature.module.scss";

const CardMiniature = ({ category, title, miniature, excerpt, slug }: Project) => {
  const isRetina = useMedia("(min-resolution: 2dppx)");
  const width = useMemo(() => (isRetina ? 960 : 480), [isRetina]);

  console.log({ category, title, miniature, excerpt, slug });

  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className={styles.CardMiniature}>
        <div
          className={styles.illustration}
          style={{ backgroundImage: `url(https:${miniature.fields.file.url}?w=${width})` }}
        />
        <div className={styles.content}>
          <span className={styles.category}>{category}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default CardMiniature;
