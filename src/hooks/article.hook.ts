import { useEffect, useState } from 'react';
import { fetchArticleDetail, fetchArticleList, updateArticle } from '../networks/article';
import { Article, ArticleListItem, ArticleCreateValue } from '../types/article';

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

export const useArticleList = (page?: number | string, pageSize?: number | string) => {
  const [articlesData, setArticlesData] = useState<ArticleListItem[]>();
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    if (!page || !pageSize) {
      return;
    }
    (async () => {
      fetchArticleList(page, pageSize).then(res => {
        const articleData = res.data;
        const articleMeta = res.meta;
        setArticlesData(articleData);
        setTotalSize(articleMeta.pagination.total);
      });
    })();
  }, [page, pageSize]);

  return { articlesData, totalSize };
};

export const useUpdateArticle = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const update = async (id: number | string, data: ArticleCreateValue) => {
    setIsSubmitting(true);
    await updateArticle(id, data);
    setIsSubmitting(false);
  };

  return {
    update,
    isSubmitting,
  };
};
