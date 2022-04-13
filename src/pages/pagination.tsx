import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Articles from '../components/Articles';

const Pagination: React.FunctionComponent = () => {
  const [articles, setArticles]: any = useState([]);
  const [articleData, setArticleData]: any = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage]: any = useState(1);

  useEffect(() => {
    axios.get('http://localhost:1337/api/articles/').then(res => {
      let data = res.data;
      setArticles(res.data);
      setArticleData(data.data);
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue: number = e.currentTarget.value;
    setPageSize(newValue);
  };

  // console.log(`articles : `, articles);
  // console.log(`Data : `, articles.data);
  // console.log(`Meta : `, articles.meta);
  console.log(`데이타 : `, articleData);

  return (
    <Wrap>
      <header>Article List</header>

      <select typeof="number" onChange={onChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <Main>
        {articleData.map((e, i): any => {
          return (
            <ArticleList key={i}>
              <p>{e.id}</p>
              <h3>{e.attributes.title}</h3>
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
  background-color: #e1e114;
`;

const ArticleList = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 15px auto;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;
