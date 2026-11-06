import Image from 'next/image';
import Link from 'next/link';

type Work = {
  company: string;
  title: string;
  summary: string;
  metric: string;
  image: string;
  href: string;
};

const WORK: Work[] = [
  {
    company: 'Get Rent Ready',
    title: 'Pricing rentals with market data',
    summary:
      'Graded 900+ listings and built a regression model to find each unit’s rent gap and which upgrades pay back.',
    metric: '+24% rental income',
    image: '/apps/getrenteady/updated_getrentready.png',
    href: '/work/get-real-ready',
  },
  {
    company: 'Azibo',
    title: 'Landlord insurance quotes in minutes',
    summary:
      'Designed and launched a new insurance product, with API-driven quotes landlords complete on their phone.',
    metric: 'Under 5 min to quote',
    image: '/images/portfolio/insurance-BVxChoGW.png',
    href: '/work/azibo-insurance',
  },
  {
    company: 'Azibo',
    title: 'Faster rental applications',
    summary:
      'Redesigned the application flow for tenants and landlords, from interviews through tested prototypes.',
    metric: '30% faster review',
    image: '/images/portfolio/rentals-R0CN0DOq.png',
    href: '/work/azibo-rentals',
  },
  {
    company: 'Kaiser Permanente',
    title: 'The future of home-based care',
    summary:
      'Modeled the care ecosystem and set a North Star vision for Kaiser’s house-call services.',
    metric: 'North Star vision',
    image: '/images/portfolio/kaiser-CynDbDDb.png',
    href: '/work/kaiser',
  },
  {
    company: 'Amazon',
    title: 'Reducing apparel returns',
    summary:
      'Prototyped and tested virtual try-on concepts to help shoppers judge fit before they buy.',
    metric: 'Proof of concept',
    image: '/images/portfolio/amazon/amazons-CJAIeNbr.png',
    href: '/work/amazon',
  },
  {
    company: 'Yoss / Adecco',
    title: 'Discovery for a freelance marketplace',
    summary:
      'Led research with businesses and contractors that shaped early direction for a global staffing platform.',
    metric: 'Foundational research',
    image: '/images/portfolio/yoss-D4gN2hxd.png',
    href: '/work/yoss-adecco',
  },
];

function WorkCard({ item }: { item: Work }) {
  return (
    <Link href={item.href} className="group block">
      <article className="flex h-full flex-col">
        <div className="bg-accent relative aspect-[16/10] overflow-hidden rounded-[12px] transition-[transform,box-shadow] duration-300 ease-out group-hover:shadow-[0_12px_28px_-12px_rgba(13,13,18,0.25)] motion-safe:group-hover:-translate-y-1">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-contain p-3 sm:p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <h3 className="text-foreground mt-5 text-xl leading-snug font-black tracking-tight group-hover:underline group-hover:underline-offset-4">
          {item.title}
        </h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {item.company} ·{' '}
          <span className="text-foreground">{item.metric}</span>
        </p>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          {item.summary}
        </p>
      </article>
    </Link>
  );
}

const SelectedWork = () => {
  return (
    <section id="work" className="bg-background scroll-mt-20 px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight sm:text-4xl">
          Selected work
        </h2>
        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {WORK.map((item) => (
            <WorkCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
