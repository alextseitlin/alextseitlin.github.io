import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "catppuccin-macchiato",
      // keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
