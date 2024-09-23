import React from 'react';

import RaitingBar from './RatingBar';

export type Review = {
  name: string;
  comment: string;
  rating: number;
};

export interface ReviewCardProps {
  classname?: string;
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { name, comment, rating } = review;

  return (
    <li
      key={name}
      className="flex basis-[32%]  flex-shrink-0 flex-col justify-between  p-4 border-[1px] border-green   min-h-[300px] "
    >
      <p className="text-xl text-grey underline font-medium leading-6 tracking-wide ">
        {name}
      </p>
      <p className="text-xl text-grey  font-regular leading-[23px] tracking-wider">
        {comment}
      </p>
      <RaitingBar raiting={rating} />
    </li>
  );
}
