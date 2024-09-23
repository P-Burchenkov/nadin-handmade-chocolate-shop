import React from 'react';

import Left from '../../public/icons/left.svg';
import Right from '../../public/icons/right.svg';
import ReviewCard, { Review } from './ReviewCard';

export interface SliderProps {
  classname?: string;
  reviews: Review[];
}

export default function Slider({ reviews }: SliderProps) {
  return (
    <div className="flex gap-[20px] items-center">
      <button>
        <Left width={100} height={100} />
      </button>
      <ul className="flex gap-[20px] overflow-hidden">
        {reviews.map((review) => {
          return <ReviewCard key={review.name} review={review} />;
        })}
      </ul>
      <button>
        <Right width={100} height={100} />
      </button>
    </div>
  );
}
