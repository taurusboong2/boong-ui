import { useEffect, useState } from 'react';
import { fetchArticleDetail } from '../networks/article';
import { Article } from '../types/article';

export const useArticleDetail = (id?: number | string) => {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    if (!id) return;
    fetchArticleDetail(id).then(res => {
      const articleData = res.data;
      setArticle(articleData);
    });
  }, [id]);

  return { article };
};

/// useArticleList 직접 구현하기
