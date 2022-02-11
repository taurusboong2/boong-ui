import classNames from 'classnames/bind';
import React, { FC } from 'react';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

type Props = {
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  radius?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = props => {
  const { children, color, size, radius, ...restProps } = props;

  return (
    <div className={cx('btn_wrap')}>
      <button className={cx(color, size, radius ? 'br' : null)} {...restProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
