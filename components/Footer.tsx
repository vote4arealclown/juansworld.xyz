import Link from "next/link";
import { smartBetFieldGuideUrl } from "@/lib/affiliates";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &copy; {currentYear} JuansWorld.XYZ. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/projects"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Blog
            </Link>
            <Link
              href="/now"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Now
            </Link>
            <a
              href={smartBetFieldGuideUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Support the work
            </a>
            <Link
              href="/terms-of-service"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
