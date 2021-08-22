import React, { useMemo, useState } from "react";
import type { Asset } from "contentful";
import { BLOCKS, Text } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { useWindowSize, useLockBodyScroll } from "react-use";
import { useRouter } from "next/router";
import { isUndefined } from "lodash";
import Head from "next/head";

import type { ProjectProps } from "types";
import colors from "constants/colors";

import LoadingProject from "./LoadingProject";
import styles from "./Project.module.scss";

const Project = ({
  body,
  color = colors.dark,
  title,
  excerpt,
  category,
  miniature,
}: ProjectProps) => {
  const router = useRouter();

  const { width: windowWidth } = useWindowSize(960);
  const [activeImageUrl, setActiveImageUrl] = useState<string>();

  const pageWidth = useMemo(() => {
    return windowWidth > 960 ? 960 : Math.floor(windowWidth);
  }, [windowWidth]);

  const options: Options = useMemo(
    () => ({
      renderNode: {
        // eslint-disable-next-line react/display-name
        [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
          const { fields } = data.target as Asset;
          const { title, description, file } = fields;

          return (
            <div className={styles.media}>
              <Head>
                <link rel="preload" href={file.url} as="image" />
              </Head>
              <img
                className={styles.illustration}
                src={`https:${file.url}?w=${pageWidth}`}
                onClick={() => setActiveImageUrl(file.url)}
                alt={title}
              />
              {description && <span className={styles.description}>{description}</span>}
            </div>
          );
        },
        // eslint-disable-next-line react/display-name
        [BLOCKS.HEADING_2]: ({ content }) => (
          <div className={styles.heading}>
            <h2 style={{ borderBottom: `3px solid ${color}` }}>{(content[0] as Text).value}</h2>
          </div>
        ),
      },
    }),
    [color, pageWidth]
  );

  useLockBodyScroll(!isUndefined(activeImageUrl));

  if (router.isFallback) {
    return <LoadingProject />;
  }

  return (
    <div className={styles.Project}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={category} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={miniature.fields.file.url} />
        <meta name="theme-color" content={color} />
      </Head>
      {documentToReactComponents(body, options)}
      {!isUndefined(activeImageUrl) && (
        <div className={styles.imageModal} onClick={() => setActiveImageUrl(undefined)}>
          <img className={styles.activeImageUrl} src={activeImageUrl} alt="" />
        </div>
      )}
    </div>
  );
};

export default Project;
