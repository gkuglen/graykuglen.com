import Link from 'next/link';

import { Button } from '@/components/ui/button';

const CALENDLY_URL = 'https://calendly.com/graykuglen/meet_gray';

const TOOLKIT = [
  'Product design',
  'User research',
  'Figma',
  'Sketch',
  'Claude Code',
  'Cursor',
  'v0',
  'Python / R',
  'Supabase',
  'Playwright',
  'GitHub',
  'VS Code',
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-background border-b-border border-b px-6 lg:px-0"
    >
      <div className="container px-0 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-6 py-20 text-center sm:py-24 md:gap-8 md:pt-28 md:pb-24">
          <h1 className="text-foreground text-4xl leading-[1.08] font-black tracking-[-0.03em] text-balance sm:text-5xl md:text-[64px]">
            Product designer, now building with AI.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base text-pretty sm:text-lg">
            0-to-1 product design for Kaiser, Amazon and Wells Fargo, to name a
            few. Since 2023 I&rsquo;ve added AI coding tools and data modeling,
            so I can take an idea from research to working software myself.
            Recent builds: rent-pricing models, deal calculators and real-estate
            prototypes.
          </p>

          <ul
            aria-label="Toolkit"
            className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2"
          >
            {TOOLKIT.map((tool) => (
              <li
                key={tool}
                className="border-border text-foreground rounded-full border px-3 py-1 text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#work">See the work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
