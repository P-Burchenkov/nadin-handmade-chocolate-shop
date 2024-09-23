import React from 'react';

import Instagram from '../../public/icons/instagram.svg';
import Facebook from '../../public/icons/facebook.svg';

export interface SocialMediaProps {
  classname?: string;
}

export default function SocialMedia({}: SocialMediaProps) {
  console.log(typeof Instagram);

  return (
    <div className="flex gap-8 items-center">
      <a href="#" className="group">
        <Instagram
          width={52}
          height={52}
          className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow  "
        />
      </a>
      <a href="#" className="group">
        <Facebook
          width={52}
          height={52}
          className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow  "
        />
      </a>
    </div>
  );
}
