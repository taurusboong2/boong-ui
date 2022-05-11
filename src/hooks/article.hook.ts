import { useEffect, useState, useMemo } from 'react';
import { fetchArticleDetail, fetchArticleList } from '../networks/article';
import { Article, ArticleList, PaginationMeta } from '../types/article';

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
  const [articlesData, setArticlesData] = useState<ArticleList[]>();
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    if (!page || !pageSize) {
      return;
    }

    fetchArticleList(page, pageSize).then(res => {
      const articleData = res.data;
      const articleMeta = res.meta;
      setArticlesData(articleData);
      setTotalSize(articleMeta.pagination.total);
    });
  }, [page, pageSize]);

  return { articlesData, totalSize };
};
