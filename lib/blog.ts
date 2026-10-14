import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
}

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getPosts(): Post[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fileContents = fs.readFileSync(
        path.join(blogDirectory, fileName),
        "utf8",
      );
      const { data, content } = matter(fileContents);

      const rawDate = data.date || new Date().toISOString().split("T")[0];
      const dateStr =
        rawDate instanceof Date
          ? rawDate.toISOString().split("T")[0]
          : String(rawDate);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: dateStr,
        author: typeof data.author === "string" ? data.author : "Jason Spooner",
        content,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}
