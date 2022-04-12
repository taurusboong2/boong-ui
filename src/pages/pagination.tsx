import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Pagination = () => {
  const [articles, setArticles]: any = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/articles/').then(res => {
      setArticles(res.data.data);
    });
  }, []);

  return (
    <Wrap>
      <header>Article List</header>

      <Main>
        {articles.map(({ id, attributes }): any => {
          return (
            <ArticleList key={id}>
              <p>{id}</p>
              <h3>{attributes.title}</h3>
              <p>{attributes.description}</p>
            </ArticleList>
          );
        })}
      </Main>
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
