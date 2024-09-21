import React from 'react';

export interface BlogPageProps {
  classname?: string;
}

export default function BlogPage({}: BlogPageProps) {
  return <div className="container">Blog Page</div>;
}
