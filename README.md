# Hi, my name is Alex and I am passionate about building awesome frontend.

I have been doing web design and UI/UX for 20 years and frontend for 15 years. I used and worked with almost anything out there but I am most passionate working with Nextjs,Tailwind and Figma.

Worked and have

- Nextjs
- Tailwind
- Figma

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)
