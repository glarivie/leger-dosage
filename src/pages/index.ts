import type { GetServerSideProps } from 'next';

import contentful from 'services/contentful';
import type { ProjectFields, HomeProps } from 'types';

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { items } = await contentful.getEntries<ProjectFields>({
    content_type: 'projet',
  });

  return {
    props: {
      projects: items.map(({ fields, sys }) => ({
        id: sys.id,
        updatedAt: sys.updatedAt as unknown as Date,
        slug: fields.slug,
        title: fields.title,
        color: fields.color,
        category: fields.category,
        miniature: fields.miniature,
        excerpt: fields.excerpt,
        body: fields.body,
      })),
    },
  };
};

export { default } from 'containers/Home';
