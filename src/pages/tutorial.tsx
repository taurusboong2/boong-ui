import React from 'react';
import Button from '../components/Button';
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
      <div>
        <div className="btn_wrap">
          <input />
          adfasdf
          <button>asdfsadf</button>
        </div>
      </div>
      {/* <div className="size">
        <Button text="s 사이즈" size="s" />
        <Button text="m 사이즈" size="m" />
        <Button text="l 사이즈" size="l" />
        <Button text="xl 사이즈" size="xl" />
      </div>
      <div className="disabled">
        <Button text="disabled off" disabled={false} />
        <Button text="disabled on" disabled />
      </div>
      <div className="borderRadius">
        <Button text="s br" size="s" radius={true} />
        <Button text="m br" size="m" color="blue" radius={true} />
        <Button text="l br" size="l" color="green" radius={true} />
        <Button text="xl br" size="xl" color="orange" radius={true} />
      </div>
      <div className="function">
        <Button
          text="기능1"
          onClick={() => {
            alert('클릭하지마세요!');
          }}
        />
        <Button
          text="기능2"
          onClick={() => {
            console.log('콘솔창 출력!');
          }}
        />
        <Button
          text="기능3"
          onClick={() => {
            navigate('/');
          }}
          id="df"
          type="submit"
        />
      </div> */}
    </div>
  );
};

export default Tutorial;
