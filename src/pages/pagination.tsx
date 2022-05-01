import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useSearchParams, useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import Articles from '../components/Articles';
import '../pagination.scss';

//tools
import axios from 'axios';
import styled from 'styled-components';
import qs from 'query-string';

const Pagination: React.FunctionComponent = () => {
  // router dom
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as { firstPage; firstPageSize };

  const [articles, setArticles]: any = useState([]);
  const [articleMeta, setArticleMeta]: any = useState([]);
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

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/articles/?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getQueryData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/articles/?pagination[page]=${pageValue}&pagination[pageSize]=${pageSizeValue}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(location.search);
    console.log(pageValue);
    console.log(pageSizeValue);

    navigate(
      {
        pathname: location.pathname,
        search: `?${createSearchParams({
          page: page,
          pageSize: pageSize,
        })}`.toString(),
      },
      {
        replace: true,
        state: {
          firstPage: 1,
          firstPageSize: 10,
        },
      }
    );

    getData().then(res => {
      const articleData = res.data;
      const articleMetaData = res.meta;
      const totalValue = articleMetaData.pagination.total;
      setArticles(articleData);
      setArticleMeta(articleMetaData);
      setTotalArticles(totalValue);
      setNumPage(totalArticles / pageSize);
      if (pageValue !== null) {
        getQueryData().then(() => {
          setPage(pageValue);
          setPageSize(pageSizeValue);
        });
      }
    });
  }, [page, pageSize, pageValue, pageSizeValue]);

  // using query to re-rendering

  /*   useEffect(() => {
    if (pageValue !== null) {
      getQueryData().then(() => {
        setPage(pageValue);
        setPageSize(pageSizeValue);
      });
    }
  }, [pageValue, pageSizeValue]);
 */
  return (
    <Wrap>
      <Routes>
        <Route path="/pagination/?page=&pageSize=" element={<Pagination />} />
      </Routes>

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

      <Articles page={page} setPage={setPage} pageSize={pageSize} numPage={numPage} totalArticles={totalArticles} />
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
