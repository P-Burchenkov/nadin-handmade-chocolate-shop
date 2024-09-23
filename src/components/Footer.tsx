import React from 'react';

import Logo from './Logo';
import FeedbackForm from './FeedbackForm';
import PrivacyMenu from './PrivacyMenu';
import SocialMedia from './SocialMedia';
import SiteNav from './SiteNav';

export interface FooterProps {
  classname?: string;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="px-30 py-13 bg-brown">
      <div className="container">
        <div className="flex gap justify-between">
          <div>
            <Logo classname="text-yellow  mb-10" />
            <SiteNav navType="footer" />
          </div>
          <FeedbackForm />
          <div className="flex flex-col justify-between py-6">
            <address>
              <a
                href="tel:+380671990913"
                className="text-2xl not-italic text-yellow leading-[28px] font-semibold"
              >
                +38(067)1990913
              </a>
            </address>
            <PrivacyMenu />
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}
