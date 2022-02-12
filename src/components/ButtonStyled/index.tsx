import classNames from 'classnames/bind';
import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  color?: 'blue' | 'green' | 'orange';
  size?: 's' | 'm' | 'l' | 'xl';
  radius?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Swrap = styled.div`
  padding: 10px 20px;
`;

const Sbtn = styled.button`
  box-shadow: 1px 1px 2px #666;
  padding: 15px 20px;
  background-color: rgb(230, 230, 230);

  &:hover {
    background-color: darken(rgb(230, 230, 230), 10%);
  }

  &.blue {
    background-color: #409eff;
    color: #fff;
  }
  &.blue:hover {
    background-color: darken(#409eff, 10%);
  }

  &.green {
    background-color: #67c23a;
    color: #fff;
  }
  &.green:hover {
    background-color: darken(#67c23a, 10%);
  }

  &.orange {
    background-color: #e6a23c;
    color: #fff;
  }
  &.orange:hover {
    background-color: darken(#e6a23c, 10%);
  }

  &.s {
    padding: 7px 12px;
  }
  &.m {
    padding: 15px 20px;
  }
  &.l {
    padding: 20px 25px;
  }
  &.xl {
    padding: 25px 32px;
  }

  &:disabled {
    pointer-events: none;
    background-color: rgb(189, 182, 182);
    color: rgb(233, 92, 92);
  }

  &.br {
    border-radius: 15px;
  }
`;

const Button: FC<Props> = props => {
  const { children, color, size, radius, ...restProps } = props;

  return (
    <Swrap className={classNames('btn_wrap')}>
      <Sbtn className={classNames(color, size, radius ? 'br' : null)} {...restProps}>
        {children}
      </Sbtn>
    </Swrap>
  );
};

export default Button;
