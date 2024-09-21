import React from 'react';

export interface ContactsPageProps {
  classname?: string;
}

export default function ContactsPage({}: ContactsPageProps) {
  return <div className="container">Contacts Page</div>;
}
