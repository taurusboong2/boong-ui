import { StrapiResponse } from './strapi';

export type Article = {
  id: number;
  title: string;
  description: string;
};

export type ArticleList = {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
};

export type PaginationMeta = {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type ArticleListRes = StrapiResponse<ArticleList[], PaginationMeta>;
export type ArticleDetailRes = StrapiResponse<Article>;
