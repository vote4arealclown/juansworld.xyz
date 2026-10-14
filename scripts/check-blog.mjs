// Sanity check for content/blog: every post parses, has required frontmatter,
// and has a unique slug. Run with `npm run check`.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content/blog");
const required = ["title", "date", "description"];

if (!fs.existsSync(dir)) {
  console.error("check-blog: content/blog/ does not exist");
  process.exit(1);
}

const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

if (files.length === 0) {
  console.error("check-blog: no posts found in content/blog/");
  process.exit(1);
}

const slugs = new Set();
let failures = 0;

for (const file of files) {
  const slug = file.replace(/\.mdx?$/, "");
  const label = `check-blog: ${file}:`;

  if (slugs.has(slug)) {
    console.error(`${label} duplicate slug`);
    failures++;
  }
  slugs.add(slug);

  let data;
  try {
    ({ data } = matter(fs.readFileSync(path.join(dir, file), "utf8")));
  } catch (err) {
    console.error(`${label} failed to parse — ${err.message}`);
    failures++;
    continue;
  }

  for (const field of required) {
    if (!data[field]) {
      console.error(`${label} missing frontmatter "${field}"`);
      failures++;
    }
  }

  if (data.date && Number.isNaN(new Date(data.date).getTime())) {
    console.error(`${label} invalid date "${data.date}"`);
    failures++;
  }
}

if (failures > 0) {
  console.error(`check-blog: FAILED with ${failures} problem(s)`);
  process.exit(1);
}

console.log(`check-blog: OK — ${files.length} post(s), slugs: ${[...slugs].join(", ")}`);
