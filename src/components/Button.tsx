import React, { FC } from 'react';

type Props = {
  text?: string;
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  radius?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SampleDivProps = {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Button: FC<Props> = props => {
  const { text, color, size, radius, ...restProps } = props;

  return (
    <div className="btn_wrap">
      <button className={`${color} ${size} ${radius ? 'br' : null}`} {...restProps}>
        {text}
      </button>
    </div>
  );
};

export default Button;
