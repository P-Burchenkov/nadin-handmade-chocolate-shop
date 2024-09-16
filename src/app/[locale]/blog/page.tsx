import Container from '@/components/Container';
import React from 'react';

export interface BlogPageProps {
  classname?: string;
}

export default function BlogPage({}: BlogPageProps) {
  return (
    <Container>
      <div>Blog Page</div>
    </Container>
  );
}
