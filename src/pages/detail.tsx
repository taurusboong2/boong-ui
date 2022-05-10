import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useArticleDetail } from '../hooks/article.hook';

const Detail = () => {
  const { id } = useParams();
  const { article } = useArticleDetail(id);

  if (!article) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header>Detail</Header>
      <MainWrap>
        <h2>
          {article.title}
          <p>{article.id}번 게시글</p>
        </h2>
        <p>{article.description}</p>
      </MainWrap>
    </>
  );
};

export default Detail;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 30px 0;
  border-bottom: 1px solid #333;
`;

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 30px auto;
    column-gap: 50px;
    font-size: 1.5rem;
    text-align: center;
    background-color: #6161;

    p {
      font-size: 1rem;
      color: #888;
    }
  }
`;
