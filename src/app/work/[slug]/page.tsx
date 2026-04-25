import Image from 'next/image';
import { notFound } from 'next/navigation';

import { CASE_STUDIES, ContentSection, getCaseStudy } from '@/lib/case-studies';

function MetaPills({
  study,
}: {
  study: { tagline?: string; meta?: string; role?: string };
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {study.tagline && (
        <span className="bg-accent rounded-full px-3 py-1 text-sm font-medium text-black">
          {study.tagline}
        </span>
      )}
      {study.meta && (
        <span className="bg-accent rounded-full px-3 py-1 text-sm text-black">
          {study.meta}
        </span>
      )}
      {study.role && (
        <span className="bg-accent rounded-full px-3 py-1 text-sm text-black">
          {study.role}
        </span>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

function SectionText({
  section,
}: {
  section: Extract<ContentSection, { type: 'text' }>;
}) {
  return (
    <div className="border-border border-t pt-10">
      <h2 className="mb-4 text-2xl font-black text-[#141414]">
        {section.heading}
      </h2>
      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className="text-muted-foreground mb-3 text-base leading-relaxed"
        >
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="text-muted-foreground flex gap-3 text-base">
              <span className="text-tagline mt-1 shrink-0">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionNumbered({
  section,
}: {
  section: Extract<ContentSection, { type: 'numbered' }>;
}) {
  return (
    <div className="border-border border-t pt-10">
      <h2 className="mb-2 text-2xl font-black text-[#141414]">
        {section.heading}
      </h2>
      {section.intro && (
        <p className="text-muted-foreground mb-8 text-base leading-relaxed">
          {section.intro}
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        {section.items.map((item, i) => (
          <div key={i} className="bg-accent rounded-[12px] p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-base font-black text-[#141414]">
                {item.title}
              </h3>
            </div>
            {item.intro && (
              <p className="text-muted-foreground mb-3 text-sm">{item.intro}</p>
            )}
            {item.bullets && (
              <ul className="space-y-1.5">
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-muted-foreground flex gap-2 text-sm"
                  >
                    <span className="shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionChain({
  section,
}: {
  section: Extract<ContentSection, { type: 'chain' }>;
}) {
  return (
    <div className="border-border border-t pt-10">
      <h2 className="mb-2 text-2xl font-black text-[#141414]">
        {section.heading}
      </h2>
      {section.intro && (
        <p className="text-muted-foreground mb-6 text-base leading-relaxed">
          {section.intro}
        </p>
      )}
      {section.bullets && (
        <ul className="mb-8 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="text-muted-foreground flex gap-3 text-base">
              <span className="text-tagline mt-1 shrink-0">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Layered system stack */}
      {section.layers && (
        <div className="mb-6 space-y-2">
          {section.layers.map((layer, i) => (
            <div key={i} className="flex items-stretch gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {i + 1}
                </div>
                {i < section.layers!.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-black/20" />
                )}
              </div>
              <div className="bg-accent mb-2 flex-1 rounded-[12px] px-5 py-4">
                <span className="font-black text-[#141414]">{layer.label}</span>
                <span className="text-muted-foreground">
                  {' '}
                  — {layer.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Simple horizontal chain */}
      {section.chain && (
        <div className="bg-accent rounded-[12px] p-6">
          <p className="text-muted-foreground mb-4 text-sm font-medium tracking-widest uppercase">
            System flow
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {section.chain.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">
                  {node}
                </span>
                {i < section.chain!.length - 1 && (
                  <span className="text-muted-foreground font-medium">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {section.outro && (
        <p className="text-muted-foreground mt-6 text-base leading-relaxed">
          {section.outro}
        </p>
      )}
    </div>
  );
}

function SectionResults({
  section,
}: {
  section: Extract<ContentSection, { type: 'results' }>;
}) {
  return (
    <div className="border-border border-t pt-10">
      <h2 className="mb-6 text-2xl font-black text-[#141414]">
        {section.heading}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {section.items.map((item, i) => (
          <div key={i} className="bg-accent rounded-[12px] p-5">
            <p className="text-3xl font-black text-[#141414]">{item.value}</p>
            <p className="text-muted-foreground mt-1 text-sm leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionVideo({
  section,
}: {
  section: Extract<ContentSection, { type: 'video' }>;
}) {
  return (
    <div className="border-border border-t pt-10">
      <h2 className="mb-6 text-2xl font-black text-[#141414]">
        {section.heading}
      </h2>
      <div className="max-w-[720px]">
        <div
          className="overflow-hidden rounded-[16px]"
          style={{
            position: 'relative',
            paddingBottom: section.aspectRatio ?? '56.25%',
            height: 0,
          }}
        >
          <iframe
            src={section.embedUrl}
            title={section.heading}
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

function renderSection(section: ContentSection, i: number) {
  if (section.type === 'text') return <SectionText key={i} section={section} />;
  if (section.type === 'numbered')
    return <SectionNumbered key={i} section={section} />;
  if (section.type === 'chain')
    return <SectionChain key={i} section={section} />;
  if (section.type === 'results')
    return <SectionResults key={i} section={section} />;
  if (section.type === 'video')
    return <SectionVideo key={i} section={section} />;
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
      {/* Header */}
      <p className="text-tagline mb-3 text-xs font-semibold tracking-widest uppercase">
        {study.eyebrow}
      </p>
      <h1 className="max-w-3xl text-3xl leading-tight font-black tracking-tight text-black md:text-4xl lg:text-[40px]">
        {study.title}
      </h1>

      {/* Meta row — shown above stats unless metaBelow is set */}
      {!study.metaBelow && (study.tagline || study.meta || study.role) && (
        <MetaPills study={study} />
      )}

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {study.stats.map((stat) => (
          <div key={stat.label} className="bg-accent rounded-[12px] p-4">
            <p className="text-2xl font-black text-[#141414]">{stat.value}</p>
            <p className="text-muted-foreground mt-1 text-xs leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Hero image */}
      <div className="bg-accent mt-10 overflow-hidden rounded-[16px]">
        <Image
          src={study.heroImage}
          alt={study.title}
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Meta row — shown below hero image when metaBelow is set */}
      {study.metaBelow && (study.tagline || study.meta || study.role) && (
        <MetaPills study={study} />
      )}

      {/* Content sections */}
      {study.sections && study.sections.length > 0 && (
        <div className="mt-10 space-y-10">
          {study.sections.map((section, i) => renderSection(section, i))}
        </div>
      )}

      {/* Additional images */}
      {study.images.length > 1 && (
        <div className="border-border mt-12 grid gap-6 border-t pt-12 md:grid-cols-2">
          {study.images.slice(1).map((img) => (
            <div
              key={img.src}
              className="bg-accent overflow-hidden rounded-[16px]"
            >
              <Image
                src={img.src}
                alt={img.caption ?? study.title}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
              {img.caption && (
                <p className="text-muted-foreground px-4 py-3 text-sm">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
