import React, { FC, useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import Articles from '../components/Articles';
import '../pagination.scss';
import { Article, ArticleList } from '../types/article';
import { fetchArticleList } from '../networks/article';
import { useArticleList } from '../hooks/article.hook';
import styled from 'styled-components';

const Pagination: FC = () => {
  // router dom
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pageSize = searchParams.get('pageSize');
  const page = searchParams.get('page');

  const [articles, setArticles] = useState<ArticleList[]>([]);
  // const { articles } = useArticleList(page, pageSize);

  const [totalSize, setTotalSize] = useState(0);

  const numPage = useMemo(() => {
    if (!totalSize || !pageSize) return 0;

    return totalSize / parseInt(pageSize);
  }, [totalSize, pageSize]);

  useEffect(() => {
    // if (pageSize && page) {
    //   return;
    // }
    navigate(
      {
        pathname: location.pathname,
        search: `?${createSearchParams({
          page: '1',
          pageSize: '10',
        })}`,
      },
      {
        replace: true,
      }
    );
  }, [articles]);

  const onHandlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newSize = e.currentTarget.value;
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams({
        page: '1',
        pageSize: newSize,
      })}`,
    });
  };

  const onHandlePageChange = (newPage: number) => {
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams({
        page: newPage + '',
        pageSize: pageSize as string,
      })}`,
    });
  };

  useEffect(() => {
    (async () => {
      if (!page || !pageSize) {
        return;
      }

      try {
        const res = await fetchArticleList(page, pageSize);

        const articleData = res.data;
        setArticles(articleData);
        setTotalSize(res.meta.pagination.total);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page, pageSize]);

  // 로딩처리 해보기

  if (!articles) {
    return <div>로딩중..</div>;
  } else if (!pageSize) {
    return <>페이지 사이즈 오류</>;
  }

  return (
    <Wrap>
      <header>Article List</header>

      <button onClick={() => navigate('/')}>HOME</button>

      <select typeof="number" value={pageSize} onChange={onHandlePageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <Main>
        {articles.map((e, i): any => {
          return (
            <ArticleList key={i}>
              <Link to={{ pathname: `/detail/${e.id}` }}>
                <p>{e.id}</p>
                <h3>{e.attributes.title}</h3>
              </Link>
            </ArticleList>
          );
        })}
      </Main>

      <Articles
        page={page}
        setPage={onHandlePageChange}
        pageSize={pageSize}
        numPage={numPage}
        totalArticles={totalSize}
      />
    </Wrap>
  );
};

export default Pagination;

const Wrap = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  header {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
  }
`;

const Main = styled.div`
  width: 100%;
  background-color: #e2e2e2;
`;

const ArticleList = styled.div`
  a {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;
