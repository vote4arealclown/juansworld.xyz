import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "What I build with AI: a self-reporting prediction loop, a two-machine agent pipeline, a public prediction desk, and agent-built client work.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Four working systems, one habit: write it down before the result, so
          afterward there is a record instead of a story.
        </p>
      </div>

      <ul className="mt-12 space-y-8">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800"
          >
            <Link href={`/projects/${project.slug}`} className="group">
              <h2 className="text-2xl font-semibold tracking-tight group-hover:underline">
                {project.name}
              </h2>
              <p className="mt-1 font-medium text-zinc-500 dark:text-zinc-500">
                {project.tagline}
              </p>
              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-600 group-hover:text-foreground dark:text-zinc-400 dark:group-hover:text-zinc-50">
                Read the breakdown &rarr;
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
