import { api } from '../common/api';
import { ArticleListRes, ArticleDetailRes } from '../types/article';

// 보통
// GET -> fetch or get
// DELETE -> delete or remove
// POST -> create
// PUT -> update or put
export const fetchArticleList = async (page: number | string, pageSize: number | string) => {
  const response = await api.get<ArticleListRes>(
    `/api/articles/?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );

  return response.data;
};

export const fetchArticleDetail = async (id: string | number) => {
  const response = await api.get<ArticleDetailRes>(`api/articles/${id}`);
  return response.data;
};
