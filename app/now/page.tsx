import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What Juan is working on this month.",
};

export default function NowPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-zinc-500 dark:text-zinc-500">October 2026</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        Now
      </h1>
      <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
        What I'm actually working on, updated by hand when it changes. The
        machine files its own reports; this page is mine.
      </p>

      <ul className="mt-10 space-y-6">
        <li className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="font-semibold tracking-tight">
            NFL season, survivor vertical
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            The desk runs its weekly survivor cycle — brief on Wednesday,
            grading on Monday, losses in the first paragraph. The loop drafts,
            I edit, the ledger keeps the score. Mid-season is where the chalk
            starts charging interest.
          </p>
        </li>
        <li className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="font-semibold tracking-tight">
            The loop, postseason mode
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            MLB playoffs mean hand-built desk cards — the odds feed stops at
            the regular season, so the machine prices games from probables and
            box scores pulled by hand. Failures are data; manual coverage is a
            logged failure mode, two days running if necessary.
          </p>
        </li>
        <li className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="font-semibold tracking-tight">
            This site
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Rebuilt from a games promo into the workshop door. Next up: more
            notebook posts, and whatever the next client project turns out to
            be.
          </p>
        </li>
      </ul>

      <p className="mt-10 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        The live desk is at{" "}
        <a
          href="https://saskpoly.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline hover:text-foreground dark:hover:text-zinc-50"
        >
          saskpoly.xyz
        </a>
        . If you want the longer story, start with{" "}
        <Link
          href="/blog"
          className="font-medium underline hover:text-foreground dark:hover:text-zinc-50"
        >
          the notebook
        </Link>
        .
      </p>
    </section>
  );
}
