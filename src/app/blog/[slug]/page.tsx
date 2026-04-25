import { compileMDX } from 'next-mdx-remote/rsc';

import MetafiBlogPost from '@/components/sections/metafi-blog-post';
import { getBlogBySlug, getBlogSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <MetafiBlogPost
      tagline={post.tagline}
      title={post.title}
      intro={post.description}
      image={post.coverImage}
      appUrl={post.appUrl}
    >
      {content}
    </MetafiBlogPost>
  );
}
