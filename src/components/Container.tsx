import React, { ReactNode } from 'react';

export interface ContainerProps {
  classname?: string;
  children: ReactNode;
}

export default function Container({ children, classname }: ContainerProps) {
  return (
    <div className={`${classname} w-[1440px] px-[120px] mx-auto`}>
      {children}
    </div>
  );
}
