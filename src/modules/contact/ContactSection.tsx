'use client';
import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

export default function ContactSection() {
  return (
    <section className="space-y-12 container md:max-w-[80vw] grid items-center justify-items-center">
      <ContactList />
      <ContactForm />
    </section>
  );
}
