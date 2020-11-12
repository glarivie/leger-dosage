import type { GetServerSideProps } from 'next';

import contentful from 'services/contentful';
import type { ProjectFields, ProjectProps } from 'types';

type Params = Record<'slug', string>;

export const getServerSideProps: GetServerSideProps<ProjectProps> = async ({ params }) => {
  const { slug } = params as Params;

  const { items } = await contentful.getEntries<ProjectFields>({
    content_type: 'projet',
    'fields.slug': slug,
  });

  const { fields } = items[0];

  return {
    props: {
      color: fields.color,
      body: fields.body,
    },
  };
};

export { default } from 'containers/Project';
