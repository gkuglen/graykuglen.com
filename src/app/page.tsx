import MetafiCta from '@/components/sections/matafi-cta';
import MetafiFaq from '@/components/sections/metafi-faq';
import MetafiFeaturedBlogPosts, {
  FeaturedCard,
} from '@/components/sections/metafi-featured-blog-posts';
import MetafiFeatures from '@/components/sections/metafi-features';
import MetafiHero from '@/components/sections/metafi-hero';
import MetafiIntegrations from '@/components/sections/metafi-integrations';
import { getAllBlogs } from '@/lib/blog';

export default function Home() {
  const latest = getAllBlogs()
    .filter((p) => p.latest)
    .slice(0, 4);

  const cards: FeaturedCard[] = latest.map((p) => ({
    slug: p.slug,
    title: p.title,
    intro: p.description,
    tagline: p.tagline,
    author: p.author,
    date: p.date,
    coverImage: p.coverImage,
  }));

  return (
    <>
      <MetafiHero />
      <MetafiFeatures />
      <MetafiIntegrations />
      <MetafiFeaturedBlogPosts
        posts={cards}
        title="Decision Tools"
        overline="Apps"
        subtitle="Interactive tools I've designed and built to simplify complex investment and product decisions."
      />
      <MetafiFaq />
      <MetafiCta />
    </>
  );
}
