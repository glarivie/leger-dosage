import type { Asset } from "contentful";
import type { Document as ContentfulDocument } from "@contentful/rich-text-types";

export interface ProjectFields {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly color?: string;
  readonly miniature: Asset;
  readonly excerpt: string;
  readonly body: ContentfulDocument;
}

export interface Project extends ProjectFields {
  readonly id: string;
  readonly updatedAt: Date;
}

export type HomeProps = Record<"projects", Project[]>;

export type ProjectProps = ProjectFields;

export interface AboutFields {
  readonly illustration: Asset;
  readonly body: ContentfulDocument;
  readonly downloadLabel: string;
  readonly resume: Asset;
}

export type AboutProps = AboutFields;
