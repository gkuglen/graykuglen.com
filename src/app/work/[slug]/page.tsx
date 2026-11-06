import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  CASE_STUDIES,
  type CaseStudy,
  type ContentSection,
  getCaseStudy,
  getNextCaseStudy,
} from '@/lib/case-studies';
import { cn } from '@/lib/utils';

const CALENDLY_URL = 'https://calendly.com/graykuglen/meet_gray';

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [{ url: study.heroImage, alt: study.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.summary,
      images: [study.heroImage],
    },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-foreground mb-3 text-2xl font-black tracking-tight">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground mb-3 max-w-[68ch] text-base leading-relaxed">
      {children}
    </p>
  );
}

function SectionText({
  section,
}: {
  section: Extract<ContentSection, { type: 'text' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.paragraphs?.map((p, i) => <Prose key={i}>{p}</Prose>)}
      {section.bullets && (
        <ul className="max-w-[68ch] list-disc space-y-2 pl-5">
          {section.bullets.map((b, i) => (
            <li
              key={i}
              className="text-muted-foreground marker:text-tagline pl-1 text-base leading-relaxed"
            >
              {b}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function SectionChain({
  section,
}: {
  section: Extract<ContentSection, { type: 'chain' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && <Prose>{section.intro}</Prose>}

      {section.layers && (
        <ol className="mt-4 space-y-2">
          {section.layers.map((layer, i) => (
            <li key={i} className="flex items-stretch gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-foreground text-background flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  {i + 1}
                </div>
                {i < section.layers!.length - 1 && (
                  <div className="bg-foreground/20 mt-1 w-px flex-1" />
                )}
              </div>
              <div className="bg-accent mb-2 flex-1 rounded-[12px] px-5 py-4">
                <span className="text-foreground font-black">
                  {layer.label}
                </span>
                <span className="text-muted-foreground">
                  {' '}
                  · {layer.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.chain && (
        <ol className="mt-4 flex flex-wrap items-center gap-2">
          {section.chain.map((node, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="bg-foreground text-background rounded-lg px-4 py-2 text-sm font-semibold">
                {node}
              </span>
              {i < section.chain!.length - 1 && (
                <ArrowRight
                  className="text-muted-foreground size-4"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function SectionVideo({
  section,
}: {
  section: Extract<ContentSection, { type: 'video' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="mt-4 max-w-[720px]">
        <div
          className="relative h-0 overflow-hidden rounded-[16px]"
          style={{ paddingBottom: section.aspectRatio ?? '56.25%' }}
        >
          <iframe
            src={section.embedUrl}
            title={section.heading}
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function SectionEmbed({
  section,
}: {
  section: Extract<ContentSection, { type: 'embed' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && <Prose>{section.intro}</Prose>}
      <div className="border-border mt-4 overflow-hidden rounded-[16px] border">
        <iframe
          src={section.src}
          title={section.heading}
          loading="lazy"
          className="block w-full border-0"
          style={{ height: section.height ?? 800 }}
        />
      </div>
      <a
        href={section.src}
        target="_blank"
        rel="noopener noreferrer"
        className="text-tagline mt-3 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
      >
        Open full screen
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
    </section>
  );
}

function SectionImage({
  section,
}: {
  section: Extract<ContentSection, { type: 'image' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && <Prose>{section.intro}</Prose>}
      <div
        className={cn(
          'bg-accent mt-4 overflow-hidden rounded-[16px]',
          section.mobile && 'mx-auto max-w-xs sm:max-w-sm',
        )}
      >
        <Image
          src={section.src}
          alt={section.alt}
          width={section.mobile ? 500 : 1200}
          height={section.mobile ? 1080 : 800}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

function SectionTable({
  section,
}: {
  section: Extract<ContentSection, { type: 'table' }>;
}) {
  return (
    <section>
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && <Prose>{section.intro}</Prose>}
      <div className="border-border mt-4 overflow-x-auto rounded-[12px] border">
        <table className="w-full min-w-[480px] border-collapse text-sm tabular-nums">
          {section.caption && (
            <caption className="text-muted-foreground px-4 pt-3 pb-2 text-left text-sm">
              {section.caption}
            </caption>
          )}
          <thead>
            <tr className="bg-accent">
              {section.columns.map((col, i) => (
                <th
                  key={i}
                  scope="col"
                  className="text-foreground px-4 py-3 text-left text-sm font-semibold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className="border-border border-t">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      'px-4 py-3',
                      j === 0
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.outro && (
        <p className="text-muted-foreground mt-4 max-w-[68ch] text-base leading-relaxed">
          {section.outro}
        </p>
      )}
    </section>
  );
}

function renderSection(section: ContentSection, i: number) {
  switch (section.type) {
    case 'text':
      return <SectionText key={i} section={section} />;
    case 'chain':
      return <SectionChain key={i} section={section} />;
    case 'video':
      return <SectionVideo key={i} section={section} />;
    case 'embed':
      return <SectionEmbed key={i} section={section} />;
    case 'image':
      return <SectionImage key={i} section={section} />;
    case 'table':
      return <SectionTable key={i} section={section} />;
  }
}

function Header({ study }: { study: CaseStudy }) {
  return (
    <header>
      <h1 className="text-foreground max-w-3xl text-3xl leading-tight font-black tracking-[-0.02em] text-balance md:text-4xl lg:text-[40px]">
        {study.title}
      </h1>
      <p className="text-muted-foreground mt-3 text-sm">
        {study.company} · {study.year} · {study.role}
      </p>
      <p className="text-foreground/80 mt-5 max-w-[68ch] text-lg leading-relaxed">
        {study.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-muted-foreground mr-1 text-sm">
          {study.toolsLabel}
        </span>
        {study.tools.map((tool) => (
          <span
            key={tool}
            className="border-border text-foreground rounded-full border px-3 py-1 text-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tagline text-primary-foreground mt-6 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
        >
          {study.liveLabel ?? 'View live site'}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      )}

      {study.stats.length > 0 && (
        <div
          className={cn(
            'mt-8 grid grid-cols-2 gap-4',
            study.stats.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3',
          )}
        >
          {study.stats.map((stat) => (
            <div key={stat.label} className="bg-accent rounded-[12px] p-4">
              <p className="text-foreground text-2xl font-black tabular-nums">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-accent mt-8 overflow-hidden rounded-[16px]">
        <Image
          src={study.heroImage}
          alt={study.heroAlt}
          width={1200}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>
    </header>
  );
}

function Gallery({ study }: { study: CaseStudy }) {
  if (study.images.length === 0) return null;
  return (
    <section>
      <SectionHeading>More from the project</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {study.images.map((img) => (
          <figure
            key={img.src}
            className="bg-accent overflow-hidden rounded-[16px]"
          >
            <Image
              src={img.src}
              alt={`${study.name}: ${img.caption}`}
              width={800}
              height={600}
              className="h-auto w-full"
            />
            <figcaption className="text-muted-foreground px-4 py-3 text-sm">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function NextUp({ study }: { study: CaseStudy }) {
  const next = getNextCaseStudy(study.slug);
  return (
    <footer className="border-border grid gap-6 border-t pt-10 md:grid-cols-2">
      <Link
        href={`/work/${next.slug}`}
        className="group bg-accent hover:bg-accent/70 rounded-[16px] p-6 transition-colors"
      >
        <span className="text-muted-foreground text-sm">Next project</span>
        <span className="text-foreground mt-1 flex items-center gap-2 text-xl font-black tracking-tight">
          {next.title}
          <ArrowRight
            className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
      <div className="border-border rounded-[16px] border p-6">
        <span className="text-muted-foreground text-sm">
          Working on something similar?
        </span>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground mt-1 flex items-center gap-2 text-xl font-black tracking-tight hover:underline hover:underline-offset-4"
        >
          Book a call
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="px-6 py-12 md:px-12 md:py-16">
      <Header study={study} />
      <div className="mt-14 space-y-14">
        {study.sections.map((section, i) => renderSection(section, i))}
        <Gallery study={study} />
        <NextUp study={study} />
      </div>
    </article>
  );
}
