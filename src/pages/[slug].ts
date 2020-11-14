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

  const { sys, fields } = items[0];

  return {
    props: {
      id: sys.id,
      updatedAt: sys.updatedAt as unknown as Date,
      slug: fields.slug,
      title: fields.title,
      color: fields.color,
      category: fields.category,
      miniature: fields.miniature,
      excerpt: fields.excerpt,
      body: fields.body,
    },
  };
};

export { default } from 'containers/Project';
