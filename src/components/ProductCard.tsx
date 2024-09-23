import Image from 'next/image';
import React from 'react';

import ButtonCard from './ButtonCard';

export interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface ProductCardProps {
  classname?: string;
  product: Product;
}

export default function ProductCard({
  product: { title, description, price, image },
}: ProductCardProps) {
  return (
    <li className="flex flex-col justify-between p-6 w-[284px] h-[462px] border-[1px] border-green  hover:shadow-basic">
      <Image src={image} alt={title} width={236} height={238} />
      <div>
        <h3 className="text-lg mb-3">{title}</h3>
        <p className="text-sm leading-4 font-regular tracking-wider">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center py-3">
        <p className="text-xl tracking-wider font-semibold leading-[23px]">
          {price}
        </p>
        <ButtonCard type="button" />
      </div>
    </li>
  );
}
