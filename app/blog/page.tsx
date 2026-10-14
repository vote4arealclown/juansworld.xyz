import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building working systems with AI — prediction loops, agent-built client work, and what breaks along the way. By Jason Spooner.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          What I build with AI, and what it costs. Written by Jason Spooner.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-zinc-600 dark:text-zinc-400">
          Nothing here yet.
        </p>
      ) : (
        <ul className="mt-12 space-y-10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-zinc-200 pb-10 last:border-0 dark:border-zinc-800">
              <Link href={`/blog/${post.slug}`} className="group">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {post.date}
                  {post.tags.length > 0 && (
                    <span className="ml-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mr-2 rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  )}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
