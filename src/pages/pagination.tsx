import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Articles from '../components/Articles';

const Pagination: React.FunctionComponent = () => {
  const [articles, setArticles]: any = useState([]);
  const [articleData, setArticleData]: any = useState([]);
  const [pageSize, setPageSize]: any = useState(10);
  const [page, setPage]: any = useState(1);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.currentTarget.value;
    setPageSize(Number(value));
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
      setArticles(articleData);
      setArticleData(articleData.data);
    });
  }, []);

  console.log(`articles : `, articles);
  // console.log(`Data : `, articles.data);
  // console.log(`Meta : `, articles.meta);
  console.log(`데이타 : `, articleData);
  console.log(`페이지사이즈 확인 : `, pageSize);

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

      <Articles total={articles} page={page} setPage={setPage} />
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
