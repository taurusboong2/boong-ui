import React from 'react';
import Button from '../components/Button/index';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <div id="tutorial">
      <h2>Tutorial</h2>
      <div className="color">
        <Button>
          <strong>버튼1</strong>
        </Button>
        <Button color="blue">버튼2</Button>
        <Button color="green">버튼3</Button>
        <Button color="orange">버튼4</Button>
      </div>
      <div className="size">
        <Button size="s">size s</Button>
        <Button size="m">size m</Button>
        <Button size="l">size l</Button>
        <Button size="xl">size xl</Button>
      </div>
      <div className="disabled">
        <Button disabled={false}>disabled off</Button>
        <Button disabled>disabled on</Button>
      </div>
      <div className="borderRadius">
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
      </div>
      <div className="function">
        <Button
          onClick={() => {
            alert('클릭하지마세요!');
          }}
        >
          기능1
        </Button>
        <Button
          onClick={() => {
            console.log('콘솔창 출력!');
          }}
        >
          기능2
        </Button>
        <Button
          onClick={() => {
            navigate('/');
          }}
          id="df"
          type="submit"
        >
          기능3
        </Button>
      </div>
    </div>
  );
};

export default Tutorial;
