import Link from "next/link";
import { projects } from "@/lib/projects";
import { getPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          I build things with AI. Then I write down what breaks.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I'm Juan. I run a clock-driven prediction loop that prices games and
          files a report on itself every six hours, a two-machine agent
          pipeline that collects facts, drafts posts, and waits for my
          signature, a published prediction desk that grades every pick in
          public, and the occasional client project built mostly by agents and
          supervised by a human. This site is the workshop door — projects on
          one side, the notebook on the other.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            See the projects
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-200 px-6 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            Read the notebook
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <h3 className="text-lg font-semibold tracking-tight group-hover:underline">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-500">
                {project.tagline}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            From the notebook
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            All posts &rarr;
          </Link>
        </div>
        <ul className="mt-8 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {post.date}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-1 leading-7 text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold tracking-tight">
          Working on something similar?
        </h2>
        <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
          If you want a prediction pipeline, an agent-built site with a human
          holding the reins, or just an honest opinion on whether AI fits your
          problem — the contact form works, and a person reads it.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
