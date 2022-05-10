import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { ArticleDetailRes } from '../types/article';
import { api } from '../common/api';

const Detail = () => {
  const [detailData, setDetailData] = useState([]);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await api.get<ArticleDetailRes>(`api/articles/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData().then(res => {
      const articleData = res.data;
      setDetailData(articleData);
      setTitle(articleData.attributes.title);
      setDescription(articleData.attributes.description);
    });
  }, [id]);

  console.log(detailData);
  console.log(title);
  console.log(description);

  return (
    <>
      <Header>Detail</Header>
      <MainWrap>
        <h2>
          {title}
          <p>{detailData.id}번 게시글</p>
        </h2>
        <p>{description}</p>
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
