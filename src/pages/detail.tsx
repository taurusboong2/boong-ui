import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { fetchArticleDetail } from '../networks/article';
import { Article } from '../types/article';

const Detail = () => {
  const [detailData, setDetailData] = useState<Article>();

  const { id } = useParams();

  useEffect(() => {
    fetchArticleDetail(id).then(res => {
      const articleData = res.data;
      setDetailData(articleData);
    });
  }, [id]);

  if (!detailData) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header>Detail</Header>
      <MainWrap>
        <h2>
          {detailData.title}
          <p>{detailData.id}번 게시글</p>
        </h2>
        <p>{detailData.description}</p>
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
