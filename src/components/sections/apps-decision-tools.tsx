'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type AppTool = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string | string[];
  href: string;
};

const TOOLS: AppTool[] = [
  {
    slug: 'get-rent-ready',
    category: 'Rental Analytics',
    title: 'Get Rent Ready',
    description:
      'A unit-by-unit rent tracker that benchmarks each unit against nearby comps and surfaces the monthly upside.',
    image: '/apps/getrenteady/_getrentready.png',
    href: '/work/get-real-ready',
  },
  {
    slug: 'propdev',
    category: 'Investment Modeling',
    title: 'PropDev',
    description:
      'A return calculator that models the cash-flow split between an investor and a property owner across a development deal.',
    image: '/apps/prop-dev/prop-dev_desktop.png',
    href: '/work/property-development',
  },
  {
    slug: 'property-deal-sheet',
    category: 'Deal Underwriting',
    title: 'Property Deal Sheet',
    description:
      'A profitability lookup that stress-tests cap rate and cash-on-cash return across a grid of price and rent scenarios.',
    image: '/apps/deal-sheet/property-deal-sheet2.png',
    href: '/work/property-deal-sheet',
  },
  {
    slug: 'generations-in-color',
    category: 'Public Art Proposal',
    title: 'Generations in Color',
    description:
      'An intergenerational public art initiative pairing local artists with youth to paint utility boxes across Alameda.',
    image: [
      '/apps/generations/generations-mobile.PNG',
      '/apps/generations/generations-mobile2.PNG',
    ],
    href: '/work/generations-in-color',
  },
];

export default function AppsDecisionTools() {
  return (
    <section id="recent-explorations" className="px-6 py-16 lg:py-24">
      <div className="container px-0 md:px-6">
        <div className="text-center">
          <div className="text-tagline text-sm font-medium">Apps</div>
          <h2 className="text-foreground mt-2 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl">
            Recent Explorations
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-[720px]">
            Interactive prototypes and proofs of concept I&apos;m building right
            now — exploration in progress, not a finished portfolio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: AppTool }) {
  return (
    <Link href={tool.href} className="group block">
      <article className="border-border bg-card h-full overflow-hidden rounded-2xl border transition-shadow duration-300 hover:shadow-lg">
        <div
          className={`relative aspect-[16/10] overflow-hidden ${
            Array.isArray(tool.image) ? 'bg-white' : 'bg-accent'
          }`}
        >
          {Array.isArray(tool.image) ? (
            <div className="flex h-full w-full items-center justify-evenly p-5">
              {tool.image.map((src, i) => (
                <div
                  key={src}
                  className="relative h-full w-[34%] overflow-hidden rounded-xl ring-1 shadow-[0_16px_28px_-8px_rgba(0,0,0,0.28)] ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <Image
                    src={src}
                    alt={`${tool.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 17vw, 34vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={tool.image}
              alt={tool.title}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
        </div>
        <div className="p-6">
          <span className="text-tagline text-xs font-semibold tracking-wide uppercase">
            {tool.category}
          </span>
          <h3 className="text-foreground mt-1 flex items-center gap-1.5 text-xl font-medium tracking-tight">
            {tool.title}
            <ArrowUpRight
              className="h-4 w-4 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
