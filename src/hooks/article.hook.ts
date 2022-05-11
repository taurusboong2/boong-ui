import { useEffect, useState } from 'react';
import { fetchArticleDetail, fetchArticleList } from '../networks/article';
import { Article, ArticleList } from '../types/article';

export const useArticleDetail = (id?: number | string) => {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (!id) return;
    fetchArticleDetail(id).then(res => {
      const articleData = res.data.data;
      setArticle(articleData);
    });
  }, [id]);

  return { article };
};

/// useArticleList 직접 구현하기
export const useArticleList = (page?: number | string, pageSize?: number | string) => {
  const [articles, setArticles] = useState<ArticleList[]>([]);

  useEffect(() => {
    if (!page || !pageSize) {
      return;
    }
    fetchArticleList(page, pageSize).then(res => {
      const articleData = res.data;
      console.log(articleData);
      setArticles(articleData);
    });
  }, [page, pageSize]);

  return { articles };
};
