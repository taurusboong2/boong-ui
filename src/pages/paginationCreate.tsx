import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const paginationCreate = () => {
  const navigate = useNavigate();

  const pageGoBack = () => navigate(-1);
  const pageGoHome = () => navigate('/');

  return (
    <div>
      <Header>[CREATE] Article page</Header>
      <ContentWrap>
        <BtnWrap>
          <NavigateBtn onClick={pageGoBack}>뒤로가기</NavigateBtn>
          <NavigateBtn onClick={pageGoHome}>홈으로가기</NavigateBtn>
        </BtnWrap>
        <InputWrap>입력창</InputWrap>
      </ContentWrap>
    </div>
  );
};

export default paginationCreate;

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
`;
