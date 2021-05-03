import React, { useMemo } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useMedia, useWindowSize } from "react-use";
import Image from "next/image";

import type { AboutProps } from "types";

import styles from "./About.module.scss";

const About = ({ illustration, body, downloadLabel, resume }: AboutProps) => {
  const { width: windowWidth } = useWindowSize();
  const isRetina = useMedia("(min-resolution: 2dppx)");

  const pageWidth = useMemo(() => {
    const nextPageWidth = windowWidth > 960 ? 960 : Math.floor(windowWidth);
    const ratio = isRetina ? 2 : 1;

    return nextPageWidth * ratio;
  }, [windowWidth, isRetina]);

  return (
    <div className={styles.About}>
      <div className={styles.illustration}>
        <Image
          src={`https:${illustration.fields.file.url}?w=${pageWidth}`}
          alt={illustration.fields.title}
          width={illustration.fields.file.details.image?.width ?? "100%"}
          height={illustration.fields.file.details.image?.height ?? "auto"}
          quality={95}
          priority
        />
      </div>
      {documentToReactComponents(body)}
      <a
        className={styles.resumeBtn}
        href={`https:${resume.fields.file.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {downloadLabel}
      </a>
    </div>
  );
};

export default About;
