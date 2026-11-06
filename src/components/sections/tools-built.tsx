import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Tool = {
  title: string;
  summary: string;
  builtWith: string;
  image: string | string[];
  href: string;
};

const TOOLS: Tool[] = [
  {
    title: 'PropDev',
    summary:
      'Models how cash flow splits between an investor and an owner across a tear-down-and-rebuild deal.',
    builtWith: 'React · Vite · cost modeling',
    image: '/apps/prop-dev/prop-dev_desktop.png',
    href: '/work/property-development',
  },
  {
    title: 'Property Deal Sheet',
    summary:
      'Stress-tests cap rate and cash-on-cash return across a grid of price and rent scenarios. Built on several AI platforms to compare them.',
    builtWith: 'v0 · Replit · Cursor',
    image: '/apps/deal-sheet/property-deal-sheet2.png',
    href: '/work/property-deal-sheet',
  },
  {
    title: 'Generations in Color',
    summary:
      'Proposal site for a public art program pairing local artists with youth to paint Alameda’s utility boxes.',
    builtWith: 'Next.js · Claude Code',
    image: [
      '/apps/generations/generations-mobile.PNG',
      '/apps/generations/generations-mobile2.PNG',
    ],
    href: '/work/generations-in-color',
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} className="group block">
      <article className="border-border bg-card h-full overflow-hidden rounded-[16px] border transition-shadow duration-300 hover:shadow-[0_8px_24px_-8px_rgba(13,13,18,0.18)]">
        <div
          className={`relative aspect-[16/10] overflow-hidden ${
            Array.isArray(tool.image) ? 'bg-white' : 'bg-accent'
          }`}
        >
          {Array.isArray(tool.image) ? (
            <div className="flex h-full w-full items-center justify-evenly p-5">
              {tool.image.map((src) => (
                <div
                  key={src}
                  className="relative h-full w-[34%] overflow-hidden rounded-xl ring-1 shadow-[0_16px_28px_-8px_rgba(0,0,0,0.28)] ring-black/5"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 11vw, 30vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={tool.image}
              alt=""
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="text-foreground flex items-center gap-1.5 text-lg font-black tracking-tight">
            {tool.title}
            <ArrowUpRight
              className="h-4 w-4 opacity-40 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden="true"
            />
          </h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {tool.summary}
          </p>
          <p className="text-foreground mt-4 text-xs font-medium">
            Built with {tool.builtWith}
          </p>
        </div>
      </article>
    </Link>
  );
}

const ToolsBuilt = () => {
  return (
    <section id="tools" className="bg-background scroll-mt-20 px-6 lg:px-0">
      <div className="container px-0 pb-16 sm:pb-20 md:px-6 md:pb-24">
        <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight sm:text-4xl">
          Tools I&rsquo;ve built
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base sm:text-lg">
          I design these, then code, test and ship them myself with AI coding
          tools. Each one tests an idea on a real problem.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.href} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsBuilt;
