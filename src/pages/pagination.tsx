import React, { FC, useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import Articles from '../components/Articles';
import '../pagination.scss';

//tools
import axios from 'axios';
import styled from 'styled-components';

type Article = {
  id: number;
  title: string;
  description: string;
};

type PaginationMeta = {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

const getData = async (page: number | string, pageSize: number | string) => {
  const response = await axios.get<{
    data: Article[];
    meta: PaginationMeta;
  }>(`http://localhost:1337/api/articles/?pagination[page]=${page}&pagination[pageSize]=${pageSize}`);

  return response.data;
};

const Pagination: FC = () => {
  // router dom
  const navigate = useNavigate();
  const location = useLocation();

  const [articles, setArticles] = useState<Article[]>([]);
  const [articleMeta, setArticleMeta] = useState<PaginationMeta>();
  const [pageSize, setPageSize]: any = useState(10);
  const [page, setPage]: any = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [numPage, setNumPage] = useState(totalArticles / pageSize);

  // query value
  const [searchParams, setSearchParams] = useSearchParams();
  const pageValue = searchParams.get('page');
  const pageSizeValue = searchParams.get('pageSize');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    setPageSize(Number(value));
    setPage(1);
    setNumPage(totalArticles / Number(value));
  };

  useEffect(() => {
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
        state: {
          firstPage: 1,
          firstPageSize: 10,
        },
      }
    );
  }, []);

  useEffect(() => {
    (async () => {
      if (!pageValue || !pageSizeValue) {
        return;
      }

      try {
        const res = await getData(pageValue, pageSizeValue);

        const articleData = res.data;
        setArticles(articleData);
        const articleMetaData = res.meta;
        const totalValue = articleMetaData.pagination.total;
        setArticleMeta(articleMetaData);
        setTotalArticles(totalValue);
        setNumPage(totalArticles / pageSize);
        navigate(
          {
            search: `?page=${page}&pageSize=${pageSize}`,
          },
          {
            replace: true,
          }
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page, pageSize]);

  useEffect(() => {
    if (!pageValue || !pageSizeValue) {
      return;
    }
    setPage(Number(pageValue));
    setPageSize(Number(pageSizeValue));
  }, []);

  return (
    <Wrap>
      <header>Article List</header>

      <button onClick={() => navigate('/')}>HOME</button>

      <select typeof="number" value={pageSize} onChange={onChange}>
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
        setPage={setPage}
        pageSize={pageSize}
        numPage={numPage}
        totalArticles={totalArticles}
        pageValue={pageValue}
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
