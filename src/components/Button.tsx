import React from 'react';
import { useNavigate } from 'react-router-dom';

type Button = {
  text?: string;
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  disabled?: boolean;
  radius?: boolean;
  onClick?: () => void;
};

const Button = ({ text, color, size, disabled, radius, onClick }: Button) => {
  return (
    <div className="btn_wrap">
      <button className={`${color} ${size} ${disabled ? 'dis' : null} ${radius ? 'br' : null}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
