import React, { useMemo } from 'react';
import { BLOCKS, Text } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

import Container from 'components/Container';
import type { ProjectProps } from 'types';

import styles from './Project.module.scss';

const Project = ({ body, color = '#25a4e8' }: ProjectProps) => {
  const options: Options = useMemo(() => ({
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
        <img
          className={styles.illustration}
          src={data?.target?.fields?.file?.url}
        />
      ),
      [BLOCKS.HEADING_2]: ({ content }) => (
        <div className={styles.textContainer}>
          <h2 className={styles.heading} style={{ borderBottom: `3px solid ${color}` }}>
            {(content[0] as Text).value}
          </h2>
        </div>
      ),
      [BLOCKS.PARAGRAPH]: ({ content }) => (
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>{(content[0] as Text).value}</p>
        </div>
      ),
    },
  }), []);

  return (
    <Container className={styles.Project}>
      {documentToReactComponents(body, options)}
    </Container>
  );
};

export default Project;
