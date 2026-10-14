import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | JuansWorld.XYZ",
  description: "Get in touch with JuansWorld.XYZ.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Want a prediction pipeline, an agent-built site with a human holding
          the reins, or just an honest opinion on whether AI fits your problem?
          Send a message. A person reads it.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
