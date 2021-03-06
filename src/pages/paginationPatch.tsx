import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useArticleDetail, useUpdateArticle } from '../hooks/article.hook';

const PaginationPatch = () => {
  const navigate = useNavigate();
  const pageGoBack = () => navigate(-1);
  const pageGoHome = () => navigate('/');

  const { id } = useParams();
  const { article } = useArticleDetail(id);
  const { update, isSubmitting } = useUpdateArticle();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (article) {
      if (titleInputRef.current && descriptionInputRef.current) {
        titleInputRef.current.value = article.attributes.title;
        descriptionInputRef.current.value = article.attributes.description;
      }
    }
  }, [article]);

  const handleSubmit = async () => {
    if (!titleInputRef.current?.value) {
      alert('타이틀란이 공란입니다.');
      return;
    }
    if (!descriptionInputRef.current?.value) {
      alert('설명란이 공란입니다.');
      return;
    }

    await update(id as string, {
      data: {
        title: titleInputRef.current?.value as string,
        description: descriptionInputRef.current?.value as string,
      },
    });
    navigate(-2);
  };

  return (
    <div>
      <Header>[PATCH] Article page</Header>
      <ContentWrap>
        <BtnWrap>
          <NavigateBtn onClick={pageGoBack}>뒤로가기</NavigateBtn>
          <NavigateBtn onClick={pageGoHome}>홈으로가기</NavigateBtn>
        </BtnWrap>
        <InputWrap>
          <h2>게시글 수정하기</h2>
          <div>
            <input ref={titleInputRef} type="text" name="title" id="title" />
          </div>
          <div>
            <input ref={descriptionInputRef} type="text" name="description" id="description" />
          </div>
          <input
            id="submit_btn"
            type="button"
            value={isSubmitting ? '전송중..' : '수정'}
            disabled={isSubmitting}
            onClick={handleSubmit}
          />
        </InputWrap>
      </ContentWrap>
    </div>
  );
};

export default PaginationPatch;

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 5px 0;
  background-color: #006b60;
  color: #fff;
`;

// #649B92 진초
// #C3FCF2 하늘
// #D2EE15 라임

const ContentWrap = styled.div`
  margin: 20px auto;
  min-width: 500px;
  max-width: 1200px;
  min-height: 500px;
  max-height: 1500px;
  background-color: #eee;
`;

const BtnWrap = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

const NavigateBtn = styled.button`
  margin-right: 9px;
`;

const InputWrap = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h2 {
    font-size: 1.5rem;
    padding: 10px 35px;
    border: 3px solid #999;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;

    input {
      width: 70%;
      text-align: center;
      height: 40px;
      font-size: 1.2rem;
    }
    input::placeholder {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  > input {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #649b92;
    color: #fff;

    &:hover {
      background-color: #5fc4b3;
    }
  }
`;
