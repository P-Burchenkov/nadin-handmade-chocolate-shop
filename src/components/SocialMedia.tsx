import React from 'react';

import Instagram from '../../public/icons/instagram.svg';
import Facebook from '../../public/icons/facebook.svg';

export interface SocialMediaProps {
  classname?: string;
}

export default function SocialMedia({}: SocialMediaProps) {
  return (
    <div className="flex gap-8 items-center">
      <a href="#">
        <Instagram width={52} height={52} />
      </a>
      <a href="#">
        <Facebook width={52} height={52} />
      </a>
    </div>
  );
}
