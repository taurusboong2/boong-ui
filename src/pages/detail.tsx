import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useArticleDetail } from '../hooks/article.hook';
import { removeArticle } from '../networks/article';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const { article } = useArticleDetail(id);
  const navigate = useNavigate();

  if (!article) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header>Detail</Header>
      <MainWrap>
        <h2>
          {article.attributes.title}
          <p>{article.id}번 게시글</p>
        </h2>
        <p>{article.attributes.description}</p>
      </MainWrap>
      <BtnWrap>
        <button
          className="deleteBtn"
          onClick={() => {
            removeArticle(`${id}`), navigate('/pagination?page=1&pageSize=10');
          }}>
          삭제
        </button>
        <button className="patchBtn">
          <Link to={`/pagination/paginationPatch/${id}`}>수정</Link>
        </button>
      </BtnWrap>
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

const BtnWrap = styled.div`
  padding: 10px;
  width: 150px;
  display: flex;
  border: 1px solid #999;
  margin: 35px auto 0;
  justify-content: center;
  column-gap: 20px;

  button {
    background-color: #cc0033;
    outline: none;
    border: 1px solid #999;
    padding: 5px 10px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #f46414;
    }
  }
  button.patchBtn {
    background-color: #74c580;

    &:hover {
      background-color: #39a78e;
    }
  }
`;
