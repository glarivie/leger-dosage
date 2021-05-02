import React, { useMemo } from "react";
import type { Asset } from "contentful";
import { BLOCKS, Text } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { useMedia, useWindowSize } from "react-use";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

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

  if (router.isFallback) {
    return <LoadingProject />;
  }

  const { width: windowWidth } = useWindowSize();
  const isRetina = useMedia("(min-resolution: 2dppx)");

  const pageWidth = useMemo(() => {
    const nextPageWidth = windowWidth > 960 ? 960 : Math.floor(windowWidth);
    const ratio = isRetina ? 2 : 1;

    return nextPageWidth * ratio;
  }, [windowWidth, isRetina]);

  const options: Options = useMemo(
    () => ({
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
          const { fields } = data.target as Asset;
          const { title, description, file } = fields;

          return (
            <div className={styles.media}>
              <Image
                className={styles.illustration}
                src={`https:${file.url}?w=${pageWidth}`}
                alt={title}
                width={file.details.image?.width ?? "100%"}
                height={file.details.image?.height ?? "auto"}
                quality={95}
                priority
              />
              {description && <span className={styles.description}>{description}</span>}
            </div>
          );
        },
        [BLOCKS.HEADING_2]: ({ content }) => (
          <div className={styles.heading}>
            <h2 style={{ borderBottom: `3px solid ${color}` }}>{(content[0] as Text).value}</h2>
          </div>
        ),
      },
    }),
    [pageWidth]
  );

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
    </div>
  );
};

export default Project;
