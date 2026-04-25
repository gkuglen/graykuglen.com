'use client';

import Script from 'next/script';

type Service = {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  outcome: string;
  pricing?: string;
  bestFor?: string[];
  approachLabel?: string;
  approach?: string[];
};

const START_HERE: Service[] = [
  {
    id: 'problem-framing',
    title: 'Problem Framing Sprint',
    duration: '1–2 Weeks · Fixed Scope',
    description:
      'Define the right problem before building solutions by grounding ideas in real user situations and desired outcomes. Clarify what users are trying to accomplish, where friction exists, and what success looks like.',
    deliverables: [
      'Clear problem definition',
      'Key user outcomes and jobs',
      'Opportunity areas prioritized by impact',
      'Actionable "How might we" directions',
    ],
    bestFor: [
      'Early-stage ideas',
      'Stalled products',
      'Teams lacking clarity or alignment',
    ],
    outcome: 'A focused problem and clear direction forward',
    pricing: '$3K–$8K',
  },
  {
    id: 'user-understanding',
    title: 'User Insight Review',
    duration: '1–2 Weeks · Fixed Scope',
    description:
      'Uncover how users think, behave, and make decisions through targeted research and behavioral analysis. Synthesize findings into clear patterns and prioritize insights into immediate actions.',
    deliverables: [
      'Key behavior patterns and pain points',
      'Decision drivers and blockers',
      'Prioritized insights tied to opportunities',
      'Recommended next steps',
    ],
    approachLabel: 'Approach:',
    approach: [
      'Interviews (lightweight, focused)',
      'Product or behavioral data review',
      'Rapid synthesis and prioritization',
    ],
    outcome: 'Evidence-based insight to guide decisions',
    pricing: '$4K–$10K',
  },
];

const EXPAND_INTO: Service[] = [
  {
    id: 'design-thinking',
    title: 'Product Design & Validation',
    duration: '4–8 Weeks · Scoped Engagement',
    description:
      'Translate insights into clear, testable solutions through rapid iteration and validation. Explore concepts, test early, and refine based on real feedback.',
    deliverables: [
      'Concept development and flows',
      'Wireframes and interaction design',
      'Prototyping and validation',
      'Iterative refinement',
    ],
    outcome: 'Tested solutions ready for development',
  },
  {
    id: 'systems-thinking',
    title: 'System & Growth Optimization',
    duration: 'Ongoing / Project-Based',
    description:
      'Design beyond individual features by connecting marketing, product, and operations into a cohesive system. Identify drop-offs, improve conversion, and support user progression over time.',
    deliverables: [
      'Funnel and conversion analysis',
      'End-to-end journey mapping',
      'Cohort and lifecycle analysis',
      'System gaps across product, ops, and growth',
    ],
    outcome: 'A connected system that drives adoption, retention, and growth',
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <section
      id={service.id}
      className="bg-card border-border-light scroll-mt-24 rounded-[16px] border p-8 shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)] md:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        {/* Left col */}
        <div>
          <h2 className="text-2xl leading-snug font-black text-[#141414] sm:text-3xl">
            {service.title}
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            {service.description}
          </p>
          {service.pricing && (
            <p className="mt-4 text-sm font-semibold text-[#141414]">
              Typical: <span className="text-tagline">{service.pricing}</span>
            </p>
          )}
          <span className="bg-accent mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-[#141414]">
            {service.duration}
          </span>
        </div>

        {/* Right col */}
        <div className="space-y-6">
          <div>
            <p className="mb-3 text-sm font-black tracking-wide text-[#141414] uppercase">
              What&apos;s delivered:
            </p>
            <ul className="space-y-2">
              {service.deliverables.map((item, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex gap-3 text-sm"
                >
                  <span className="text-tagline mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.approach && (
            <div>
              <p className="mb-3 text-sm font-black tracking-wide text-[#141414] uppercase">
                {service.approachLabel}
              </p>
              <ul className="space-y-2">
                {service.approach.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex gap-3 text-sm"
                  >
                    <span className="text-tagline mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.bestFor && (
            <div>
              <p className="mb-3 text-sm font-black tracking-wide text-[#141414] uppercase">
                Best for:
              </p>
              <ul className="space-y-2">
                {service.bestFor.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex gap-3 text-sm"
                  >
                    <span className="text-tagline mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-accent rounded-[12px] px-5 py-4">
            <span className="text-sm font-black text-[#141414]">Outcome: </span>
            <span className="text-muted-foreground text-sm">
              {service.outcome}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupLabel({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="text-tagline text-sm font-semibold tracking-widest uppercase">
        {label}
      </span>
      <div className="border-border h-px flex-1 border-t" />
    </div>
  );
}

export default function ServicesPage() {
  const openCalendly = () => {
    const w = window as Window & {
      Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    };
    if (typeof window !== 'undefined' && w.Calendly) {
      w.Calendly.initPopupWidget({
        url: 'https://calendly.com/graykuglen/meet_gray',
      });
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="bg-background px-6 lg:px-0">
        <div className="container px-0 py-16 md:px-6 md:py-24">
          {/* Page header */}
          <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <p className="text-tagline mb-4 text-sm font-semibold tracking-widest uppercase">
              Services
            </p>
            <h1 className="text-4xl leading-tight font-black tracking-tight text-balance text-[#141414] sm:text-5xl md:text-[56px]">
              How I work with teams and products
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              A structured approach to moving from ambiguity to clarity—across
              research, design, and systems.
            </p>
          </div>

          {/* Start Here */}
          <div className="mb-12">
            <GroupLabel label="Start Here" />
            <div className="space-y-8">
              {START_HERE.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Expand Into */}
          <div>
            <GroupLabel label="Expand Into" />
            <div className="space-y-8">
              {EXPAND_INTO.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <section className="bg-tagline relative overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:oklch(1_0_89.88)] opacity-30" />
        <div className="bg-tagline pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2" />
        <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
          <h2 className="text-primary-foreground mx-auto max-w-3xl text-4xl leading-tight font-black text-balance sm:text-5xl md:text-6xl">
            From clarity to growth.
          </h2>
          <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl text-base font-normal sm:text-lg">
            I don&apos;t just design products—I define the problem, understand
            the user, shape the solution, and ensure it performs as part of a
            larger system.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={openCalendly}
              className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 h-12 cursor-pointer rounded-[12px] px-6 text-sm font-semibold transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
