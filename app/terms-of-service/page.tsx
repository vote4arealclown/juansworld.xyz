import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JuansWorld.XYZ",
  description: "Terms of Service for JuansWorld.XYZ.",
};

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Last updated: October 13, 2026
      </p>
      <div className="mt-10 space-y-6 text-zinc-600 dark:text-zinc-400">
        <p>
          By using JuansWorld.XYZ, you agree to these terms. If you don't agree,
          don't use the site.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Use of the Site
        </h2>
        <p>
          You agree to use the site only for lawful purposes and in a way that
          doesn't infringe anyone else's rights or enjoyment of it.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Content Is Not Advice
        </h2>
        <p>
          Posts about prediction, betting markets, and trading are written to
          document a process, not to tell you what to do with your money. Nothing
          here is financial, betting, or legal advice. If you wager, you are on
          your own ledger.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Intellectual Property
        </h2>
        <p>
          The writing and code on this site belong to the site's operator unless
          stated otherwise. Linking and quoting with attribution is fine.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Changes to These Terms
        </h2>
        <p>
          We may update these terms from time to time. Continued use after
          changes are posted means you accept the revised terms.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>
          For questions about these terms, use the Contact page.
        </p>
      </div>
    </section>
  );
}
