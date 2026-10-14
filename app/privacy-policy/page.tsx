import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JuansWorld.XYZ",
  description: "Privacy Policy for JuansWorld.XYZ.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Last updated: October 13, 2026
      </p>
      <div className="mt-10 space-y-6 text-zinc-600 dark:text-zinc-400">
        <p>
          This site collects as little as possible. This policy explains the
          little it does collect and why.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Contact Form
        </h2>
        <p>
          If you use the contact form, your name, email address, and message are
          sent to us by email so we can reply. We don't add you to any list, and
          we don't share it with anyone else.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Analytics</h2>
        <p>
          We use Google Analytics and Vercel Analytics to collect anonymous
          usage data — pages visited, rough location, that kind of thing. It
          helps us understand what people read. No accounts exist on this site,
          so there is nothing to tie it to.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Affiliate Links
        </h2>
        <p>
          Some outbound links, including book links to Amazon, may be affiliate
          links. If you buy through them, we may earn a commission at no extra
          cost to you.
        </p>
        <h2 className="text-xl font-semibold text-foreground">
          Changes to This Policy
        </h2>
        <p>
          We may update this policy from time to time. Changes are posted on
          this page with an updated date.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>
          For questions about this policy, use the Contact page.
        </p>
      </div>
    </section>
  );
}
