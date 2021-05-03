import type { GetStaticProps } from "next";

import contentful from "services/contentful";
import type { AboutFields, AboutProps } from "types";

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const { items } = await contentful.getEntries<AboutFields>({
    content_type: "about",
    "fields.slug": "a-propos",
  });

  const { fields } = items[0];

  return {
    props: {
      illustration: fields.illustration,
      body: fields.body,
      downloadLabel: fields.downloadLabel,
      resume: fields.resume,
    },
    revalidate: 10,
  };
};

export { default } from "containers/About";
