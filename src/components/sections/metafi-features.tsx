import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type CaseStudy = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    eyebrow: 'Get Real Ready',
    title:
      'Machine Learning for Real Estate: Increasing Cash Flow and Asset Value',
    description:
      'Data-driven valuation models increased cash flow by 16% on a single unit while driving a 5–6% lift in asset value. Scaled across a portfolio, this approach delivered a 46% increase in cash flow and reduced expenses by 4–5% since 2023.',
    image: '/images/portfolio/grr_mobile2.png',
    href: '/work/get-real-ready',
  },
  {
    eyebrow: 'Azibo',
    title: 'Property Insurance in Minutes: Instant Quotes for Landlords',
    description:
      'Built and launched a new insurance product from the ground up, expanding Azibo into a new vertical. Designed a seamless, API-driven experience enabling landlords to generate quotes in under five minutes from their phone.',
    image: '/images/portfolio/insurance-BVxChoGW.png',
    href: '/work/azibo-insurance',
  },
  {
    eyebrow: 'Azibo',
    title: 'Faster Leasing, Lower Costs: Streamlining Rental Applications',
    description:
      'Redesigned the rental application flow to reduce friction for tenants and improve landlord efficiency—cutting application review time by 30% and saving renters $39.95 per application.',
    image: '/images/portfolio/rentals-R0CN0DOq.png',
    href: '#',
  },
  {
    eyebrow: 'Kaiser',
    title: 'Defining the Future of Home Healthcare',
    description:
      'Developed a forward-looking vision for home-based care, addressing shifting patient needs, cost pressures, and care delivery models. Established a North Star to guide Kaiser Permanente’s house-call services.',
    image: '/images/portfolio/kaiser-CynDbDDb.png',
    href: '/work/kaiser',
  },
  {
    eyebrow: 'Amazon',
    title: 'Reducing Returns: Rethinking Online Fit for Apparel',
    description:
      'Collaborated on a proof of concept to reduce clothing return rates by improving how customers assess fit online, exploring multiple concepts to bridge the gap between digital and physical try-on.',
    image: '/images/portfolio/amazon/amazons-CJAIeNbr.png',
    href: '/work/amazon',
  },
  {
    eyebrow: 'Yoss / Adecco',
    title: 'Discovery Research: Uncovering Needs in the Freelance Economy',
    description:
      'Led foundational research to identify the needs, motivations, and pain points of both businesses and independent contractors—shaping early product direction for a global staffing platform.',
    image: '/images/portfolio/yoss-D4gN2hxd.png',
    href: '/work/yoss-adecco',
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-card border-border-light flex flex-col rounded-[16px] border p-6 shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <p className="text-tagline mb-3 text-xs font-semibold tracking-widest uppercase">
        {study.eyebrow}
      </p>
      <h3 className="text-lg leading-snug font-black text-[#141414] sm:text-xl">
        {study.title}
      </h3>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
        {study.description}
      </p>

      <div className="bg-accent mt-6 w-full overflow-hidden rounded-[12px]">
        <Image
          src={study.image}
          alt={study.title}
          width={600}
          height={400}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="mt-6">
        <Button asChild variant="outline" size="sm">
          <Link href={study.href}>View Case Study</Link>
        </Button>
      </div>
    </div>
  );
}

const MetafiFeatures = () => {
  return (
    <section id="metafi-features" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <h2
          className="mb-10 text-center text-3xl leading-tight font-black tracking-tight text-[#141414] sm:text-4xl md:text-5xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Example Work
        </h2>

        <div className="mt-12 grid gap-6 md:mt-14 md:gap-8 lg:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetafiFeatures;
