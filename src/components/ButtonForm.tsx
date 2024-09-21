import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonFormProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  theme: 'light' | 'dark';
}

export default function ButtonForm({
  className,
  theme,
  ...rest
}: ButtonFormProps) {
  return (
    <button
      {...rest}
      className={` text-base font-medium  leading-[19px] py-2 px-4  rounded-xl min-w-[238px] active:font-semibold ${theme === 'light' ? 'bg-yellow text-brown hover:bg-darkYellow focus:bg-darkYellow active:bg-darkYellow ' : ' bg-brown text-yellow hover:bg-darkBrown focus:bg-darkBrown active:bg-darkBrown'} disabled:text-lightBrown disabled:bg-lightYellow disabled:font-medium  ${className ? className : ''} `}
    />
  );
}
