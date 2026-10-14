import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPost, getPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        <Link
          href="/blog"
          className="hover:text-foreground dark:hover:text-zinc-50"
        >
          &larr; Blog
        </Link>
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
        {post.date} &middot; By {post.author}
      </p>
      <div className="prose prose-zinc mt-10 max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}
