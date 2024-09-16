import Container from '@/components/Container';
import React from 'react';

export interface ContactsPageProps {
  classname?: string;
}

export default function ContactsPage({}: ContactsPageProps) {
  return (
    <Container>
      <div>Contacts Page</div>
    </Container>
  );
}
