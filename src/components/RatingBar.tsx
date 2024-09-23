import React, { ReactElement } from 'react';

import Star from '../../public/icons/star.svg';

export interface RaitingBarProps {
  classname?: string;
  raiting: number;
}

export default function RaitingBar({ raiting }: RaitingBarProps) {
  const stars: ReactElement[] = [];

  for (let i = 1; i < 6; i++) {
    if (raiting >= i) {
      stars.push(<Star width={20} height={20} className="fill-green" />);
    } else {
      stars.push(<Star width={20} height={20} />);
    }
  }

  return <div className="flex gap-3">{stars.map((star) => star)}</div>;
}
