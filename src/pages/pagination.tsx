import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Articles from '../components/Articles';

const Pagination: React.FunctionComponent = () => {
  const [articles, setArticles]: any = useState([]);
  const [articleMeta, setArticleMeta]: any = useState([]);
  const [pageSize, setPageSize]: any = useState(10);
  const [page, setPage]: any = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [numPage, setNumPage] = useState(totalArticles / pageSize);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    setPageSize(Number(value));
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

  useEffect(() => {
    getData().then(res => {
      const articleData = res.data;
      const articleMetaData = res.meta;
      const totalValue = articleMetaData.pagination.total;
      setArticles(articleData);
      setArticleMeta(articleMetaData);
      setTotalArticles(totalValue);
    });
  }, [page, pageSize, numPage, totalArticles]);

  // console.log(`아티클메타`, articleMeta);
  // console.log(`articles 데이타 : `, articles);
  // console.log(`토탈값 : `, totalArticles);
  // console.log(`페이지사이즈 확인 : `, pageSize);

  return (
    <Wrap>
      <header>Article List</header>

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

      <Articles total={totalArticles} page={page} setPage={setPage} pageSize={pageSize} numPage={numPage} />
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
