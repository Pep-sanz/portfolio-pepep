import React from "react";
import dynamic from "next/dynamic";
import ContactList from "./components/ContactList";
import PageContainer from "@/components/elements/PageContainer";

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: false,
});

export default function ContactSection() {
  return (
    <PageContainer contentClassName="pt-20 md:pt-28">
      <section className="flex flex-col gap-8 md:gap-12">
        <ContactList />
        <ContactForm />
      </section>
    </PageContainer>
  );
}
