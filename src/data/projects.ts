import { CASE_STUDIES } from "./case-studies";

export interface Project {
  title: string;
  slug: string;
  category: string;
  result: string;
  desc: string;
  challenge: string;
  solution: string;
  gradient: string;
  tags: string[];
  year: string;
  link: string;
  image: string;
}

export const PROJECTS_DATA: Project[] = CASE_STUDIES.map((caseStudy) => ({
  title: caseStudy.title,
  slug: caseStudy.slug,
  category: caseStudy.category,
  result: caseStudy.result,
  desc: caseStudy.headline,
  challenge: caseStudy.challenge,
  solution: caseStudy.approach,
  gradient: caseStudy.gradient,
  tags: caseStudy.tags,
  year: caseStudy.year,
  link: `/projects/${caseStudy.slug}`,
  image: caseStudy.image,
}));
