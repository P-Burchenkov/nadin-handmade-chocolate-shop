import SideBar from '@/components/SideBar';
import React, { ReactNode } from 'react';

export interface CatalogLayoutProps {
  classname?: string;

  children: ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <div className="container flex gap-13 justify-between">
      <SideBar />
      {children}
    </div>
  );
}
