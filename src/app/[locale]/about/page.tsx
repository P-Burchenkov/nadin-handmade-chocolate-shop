import Container from '@/components/Container';
import React from 'react';

export interface PageProps {
  classname?: string;
}

export default function Page({}: PageProps) {
  return (
    <Container>
      <div>About</div>
    </Container>
  );
}
