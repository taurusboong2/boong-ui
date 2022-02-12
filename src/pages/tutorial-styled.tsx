import React from 'react';
import Button from '../components/ButtonStyled';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Stutorial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  h2 {
    width: 100%;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
    padding: 5px 0;
    background-color: brown;
    color: #fff;
  }
`;

const SdivBox = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  align-items: center;
`;

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <Stutorial id="tutorial">
      <h2>Tutorial Styled</h2>
      <SdivBox className="color">
        <Button>버튼1</Button>
        <Button color="blue">버튼2</Button>
        <Button color="green">버튼3</Button>
        <Button color="orange">버튼4</Button>
      </SdivBox>
      <SdivBox className="size">
        <Button size="s">size s</Button>
        <Button size="m">size m</Button>
        <Button size="l">size l</Button>
        <Button size="xl">size xl</Button>
      </SdivBox>
      <SdivBox className="disabled">
        <Button disabled={false}>disabled off</Button>
        <Button disabled>disabled on</Button>
      </SdivBox>
      <SdivBox className="borderRadius">
        <Button size="s" radius={true}>
          s br true
        </Button>
        <Button size="m" color="blue" radius={true}>
          m br
        </Button>
        <Button size="l" color="green" radius={true}>
          l br
        </Button>
        <Button size="xl" color="orange" radius={true}>
          xl br
        </Button>
      </SdivBox>
      <SdivBox className="function">
        <Button
          onClick={() => {
            alert('클릭하지마세요!');
          }}
        >
          기능1 alert
        </Button>
        <Button
          onClick={() => {
            console.log('콘솔창 출력!');
          }}
        >
          기능2 console
        </Button>
        <Button
          onClick={() => {
            navigate('/');
          }}
          id="df"
          type="submit"
        >
          기능3 home이동
        </Button>
      </SdivBox>
    </Stutorial>
  );
};

export default Tutorial;
