import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Tutorial = () => {
  const navigate = useNavigate();
  return (
    <div id="tutorial">
      <h2>Tutorial</h2>
      <div className="color">
        <Button text="버튼1" />
        <Button text="버튼2" color="blue" />
        <Button text="버튼3" color="green" />
        <Button text="버튼4" color="orange" />
      </div>
      <div className="size">
        <Button text="s 사이즈" size="s" />
        <Button text="m 사이즈" size="m" />
        <Button text="l 사이즈" size="l" />
        <Button text="xl 사이즈" size="xl" />
      </div>
      <div className="disabled">
        <Button text="disabled off" disabled={false} />
        <Button text="disabled on" disabled={true} />
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
        />
      </div>
    </div>
  );
};

export default Tutorial;
