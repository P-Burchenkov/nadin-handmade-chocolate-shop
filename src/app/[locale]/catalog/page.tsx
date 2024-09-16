import Container from '@/components/Container';
import React from 'react';

export interface PageProps {
  classname?: string;
}

export default function Page({}: PageProps) {
  return (
    <Container>
      <div>Catalog Page</div>
    </Container>
  );
}
