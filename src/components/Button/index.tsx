import React, { FC } from 'react';

type Props = {
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  radius?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SampleDivProps = {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Button: FC<Props> = props => {
  const { children, color, size, radius, ...restProps } = props;

  return (
    <div className={'btn_wrap'}>
      <button className={`${color} ${size} ${radius ? 'br' : null}`} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
