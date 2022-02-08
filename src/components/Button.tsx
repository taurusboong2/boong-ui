import React from 'react';
import { useNavigate } from 'react-router-dom';

type Button = {
  text?: string;
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  disabled?: boolean;
  radius?: boolean;
  func?: number;
};

const Button = ({ text, color, size, disabled, radius, func }: Button) => {
  const navigate = useNavigate();

  const pushAlert = (): void => {
    alert('클릭하지마세요!');
  };

  const pushConsole = (): void => {
    console.log('콘솔창 출력!');
  };

  const goHome = (): void => {
    navigate('/');
  };

  const myFunc = [pushAlert, pushConsole, goHome];

  return (
    <div className="btn_wrap">
      <button
        className={`${color} ${size} ${disabled ? 'dis' : null} ${radius ? 'br' : null}`}
        onClick={myFunc?.[func ?? -1]}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
