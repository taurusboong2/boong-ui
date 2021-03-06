import { api } from '../common/api';
import { ArticleListRes, ArticleDetailRes, ArticleCreateValue } from '../types/article';
import { sleep } from '../common/utils';

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
  const response = await api.get<ArticleDetailRes>(`/api/articles/${id}`);
  return response;
};

export const createArticle = async (data: ArticleCreateValue) => {
  await sleep(3000);
  const response = await api.post<ArticleCreateValue>(`/api/articles`, data);
  console.log(response);
};

export const removeArticle = async (id: string | number) => {
  if (confirm('현재 Article을 삭제하시겠습니까?')) {
    await sleep(3000);
    const response = await api.delete<ArticleDetailRes>(`/api/articles/${id}`);
    console.log(response);
  }
};

export const updateArticle = async (id: number | string, data: ArticleCreateValue) => {
  await sleep(3000);
  const response = await api.put(`/api/articles/${id}`, {
    ...data,
  });
  console.log(response);
};
