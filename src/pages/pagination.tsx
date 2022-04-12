import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Articles from '../components/Articles';

const Pagination = () => {
  const [articles, setArticles]: any = useState([]);
  const [page, setPage]: any = useState(1);
  const myData = articles.data;

  useEffect(() => {
    axios.get('http://localhost:1337/api/articles/').then(res => {
      setArticles(res.data);
    });
  }, []);

  console.log(`데이타입니다`, articles);

  return (
    <Wrap>
      <header>Article List</header>

      <Main>
        {myData.map(({ id, attributes }): any => {
          return (
            <ArticleList key={id}>
              <p>{id}</p>
              <h3>{attributes.title}</h3>
              <p>{attributes.description}</p>
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
