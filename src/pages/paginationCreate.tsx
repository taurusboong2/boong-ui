import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { ArticleCreateValue } from '../types/article';

const PaginationCreate = () => {
  const navigate = useNavigate();
  const pageGoBack = () => navigate(-1);
  const pageGoHome = () => navigate('/');

  const [inputData, setInputData] = useState<ArticleCreateValue>({
    title: '',
    description: '',
  });

  const { title, description } = inputData;

  const inputValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const createArticle = async () => {
    console.log(inputData);
    const response = await axios.post('http://localhost:1337/api/articles', {
      data: {
        ...inputData,
      },
    });
    console.log(response);
    navigate(-1);
  };

  return (
    <div>
      <Header>[CREATE] Article page</Header>
      <ContentWrap>
        <BtnWrap>
          <NavigateBtn onClick={pageGoBack}>뒤로가기</NavigateBtn>
          <NavigateBtn onClick={pageGoHome}>홈으로가기</NavigateBtn>
        </BtnWrap>
        <InputWrap>
          <h2>새로운 게시글 작성</h2>
          <div>
            <label htmlFor="title">게시글 제목 입력칸</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="제목 입력"
              value={title}
              onChange={inputValueChange}
            />
          </div>
          <div>
            <label htmlFor="description">게시글 내용 입력칸</label>
            <textarea
              name="description"
              id="des"
              cols={30}
              rows={5}
              placeholder="내용 입력"
              value={description}
              onChange={inputValueChange}
            />
          </div>
          <input id="submit_btn" type="button" value="생성" onClick={createArticle} />
        </InputWrap>
      </ContentWrap>
    </div>
  );
};

export default PaginationCreate;

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 5px 0;
  background-color: #ff1493;
  color: #fff;
`;

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

    label {
      font-size: 1.25rem;
      width: 70%;
      text-align: center;
      padding-bottom: 5px;
      margin-bottom: 10px;
      border-bottom: 1px dotted #999;
    }

    input,
    textarea {
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

  input {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
