import React from 'react';

export interface PageProps {
  classname?: string;
}

export default function Page({}: PageProps) {
  return <div className="container">Catalog Page</div>;
}
