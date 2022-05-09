import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      style={{
        backgroundColor: props.variant === 'primary' ? '#00a8ff' : '#fff',
      }}
      {...props}
    >
      {children}
    </button>
  );
};
