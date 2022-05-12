import { api } from '../common/api';
import { ArticleListRes, ArticleDetailRes, ArticleCreateValue } from '../types/article';

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
  return response;
};

export const createArticle = async (data: ArticleCreateValue) => {
  const response = await api.post<ArticleCreateValue>(`api/articles`, data);
  console.log(response);
};

export const removeArticle = async (id: string | number) => {
  if (confirm('현재 Article을 삭제하시겠습니까?')) {
    const response = await api.delete<ArticleDetailRes>(`api/articles/${id}`);
    console.log(response);
  }
};
