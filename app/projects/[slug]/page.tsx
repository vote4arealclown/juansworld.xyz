import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { smartBetFieldGuideUrl } from "@/lib/affiliates";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        <Link
          href="/projects"
          className="hover:text-foreground dark:hover:text-zinc-50"
        >
          &larr; Projects
        </Link>
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 text-lg font-medium text-zinc-500 dark:text-zinc-500">
        {project.tagline}
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
        {project.status}
      </p>

      <div className="mt-10 space-y-6">
        {project.body.map((paragraph, i) => (
          <p key={i} className="leading-8 text-zinc-700 dark:text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          Stack
        </h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          {project.link.label}
        </a>
      )}

      {project.slug === "saskpoly" && (
        <div className="mt-8 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            The books
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            The method, bound:{" "}
            <a
              href={smartBetFieldGuideUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-foreground dark:hover:text-zinc-50"
            >
              Smart Bet Field Guide, Vol. 1: NFL Survivor Pools
            </a>{" "}
            — on Amazon. Buying it supports the desk, and the desk stays free
            either way.
          </p>
        </div>
      )}
    </article>
  );
}
