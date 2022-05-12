import { useEffect, useState } from 'react';
import { fetchArticleDetail, fetchArticleList } from '../networks/article';
import { Article, ArticleListItem } from '../types/article';
import { useNavigate } from 'react-router';

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

export const UsepageGoBack = () => {
  const navigate = useNavigate();
  navigate(-1);
};

export const UsepageGoHome = () => {
  const navigate = useNavigate();
  navigate('/');
};
