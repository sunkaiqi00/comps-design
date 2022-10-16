import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './index.css';

export interface ButtonProps {
  className?: string;
  type?: string;
  children: ReactNode | string;
}

const Button: FC<ButtonProps> = props => {
  const { className, type, children } = props;
  const classnames = classNames({
    'ant-btn': true,
    [`ant-btn-${type}`]: type,
    [className as string]: className
  });
  return <button className={classnames}>{children}</button>;
};

export default Button;
