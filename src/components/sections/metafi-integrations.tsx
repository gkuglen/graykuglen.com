type PreviousWork = {
  company: string;
  title: string;
  description: string;
  logo: string | null;
  noFilter?: boolean;
};

const PREVIOUS_WORK: PreviousWork[] = [
  {
    company: 'Veritas',
    title: 'Enterprise Support Experience',
    description:
      'Redesigned customer support workflows to improve engagement and ticket resolution outcomes.',
    logo: '/images/portfolio/svg/justSVG/veritas 1.svg',
  },
  {
    company: 'Netgear / Arlo',
    title: 'Connected Camera Ecosystem',
    description:
      "Designed mobile and web experiences for smart home and business monitoring; product later spun out and IPO'd as Arlo.",
    logo: '/images/portfolio/svg/justSVG/netgear 1.svg',
  },
  {
    company: 'UX-Ometer',
    title: 'Measuring UX Performance',
    description:
      'Created an MVP tool to evaluate product UX, reducing evaluation time by ~50%.',
    logo: null,
  },
  {
    company: 'Sony',
    title: 'eReader Usability Research',
    description:
      'Led usability testing on prototype devices to refine UI concepts across key user segments.',
    logo: '/images/portfolio/svg/justSVG/sony 1.svg',
  },
  {
    company: 'Wells Fargo',
    title: 'Bill Pay Redesign at Scale',
    description:
      'Improved a bill pay experience used by 3M+ customers, addressing usability gaps and long-term product strategy.',
    logo: '/images/portfolio/svg/justSVG/wellsfargo.svg',
    noFilter: true,
  },
  {
    company: 'Blue Shield',
    title: 'Healthcare Plan Management Tool',
    description:
      'Redesigned internal platform to improve workflows, data consistency, and operational efficiency.',
    logo: '/images/portfolio/svg/justSVG/blueshield 1.svg',
  },
  /* {
    company: 'Sony',
    title: 'Competitive UX Analysis (Kindle)',
    description:
      'Analyzed Kindle experience to identify opportunities for next-gen Sony eReader products.',
    logo: '/images/portfolio/svg/justSVG/sony 1.svg',
  }, */
  /* {
    company: 'Sony',
    title: 'eCommerce Store Audit',
    description:
      'Audited and restructured online bookstore experience to support redesign and platform migration.',
    logo: '/images/portfolio/svg/justSVG/sony 1.svg',
  }, */
  {
    company: 'Apple',
    title: 'Education Experience Design',
    description:
      "Partnered on UX improvements for Apple's education platform to increase clarity and adoption.",
    logo: '/images/portfolio/svg/justSVG/apple 1.svg',
  },
  {
    company: 'TIBCO',
    title: 'SOA Policy Management Tool',
    description:
      'Designed enterprise application for managing service-oriented architecture within ActiveMatrix platform.',
    logo: '/images/portfolio/svg/justSVG/tibco 1.svg',
  },
  {
    company: 'Autodesk',
    title: 'Digital Gallery Experience',
    description:
      "Designed online experience to showcase global design work for Autodesk's SF gallery.",
    logo: '/images/portfolio/svg/justSVG/autodesk 1.svg',
  },
  {
    company: "Macy's",
    title: 'Agile POS Redesign for Retail',
    description:
      'Designed and delivered a modern point-of-sale system to replace legacy infrastructure using Agile methods.',
    logo: '/images/portfolio/svg/justSVG/macys.svg',
  },
  {
    company: 'SAP',
    title: 'Marketplace Concept & UX Strategy',
    description:
      'Evaluated and prototyped improvements for an early-stage enterprise app marketplace.',
    logo: '/images/portfolio/svg/justSVG/sap 1.svg',
  },
  {
    company: 'Pro Unlimited',
    title: 'Vendor Management System Redesign',
    description:
      'Led redesign of enterprise tools, driving efficiency gains estimated at $2.4M annually. (Purchased by Magnit)',
    logo: '/images/portfolio/svg/justSVG/prounlimited.png',
  },
  {
    company: 'Tintri',
    title: 'Optimizing the Sales Funnel',
    description:
      'Led end-to-end redesign to improve conversion using journey mapping, rapid prototyping, and user testing.',
    logo: '/images/portfolio/svg/justSVG/tintri.svg',
  },
];

const LOGO_FILTER = 'brightness(0) invert(65%)';

function LogoBadge({
  company,
  logo,
  noFilter,
}: {
  company: string;
  logo: string | null;
  noFilter?: boolean;
}) {
  if (logo) {
    const isPng = logo.endsWith('.png');
    return (
      <div className="mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${company} logo`}
          style={{
            filter: isPng || noFilter ? undefined : LOGO_FILTER,
            maxWidth: '100%',
          }}
        />
      </div>
    );
  }
  return (
    <div className="mb-4">
      <div
        className="bg-muted inline-flex h-8 items-center justify-center rounded-md px-2.5 text-xs font-semibold tracking-wide uppercase"
        style={{ color: '#A5A5A5' }}
      >
        {company.slice(0, 2)}
      </div>
    </div>
  );
}

function WorkCard({ item }: { item: PreviousWork }) {
  return (
    <li className="bg-card border-border-light rounded-[16px] border p-6 shadow-[0_2px_8px_-1px_rgba(13,13,18,0.04)]">
      <LogoBadge
        company={item.company}
        logo={item.logo}
        noFilter={item.noFilter}
      />
      <h3 className="text-base leading-snug font-black text-[#141414]">
        {item.title}
      </h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {item.description}
      </p>
    </li>
  );
}

const MetafiIntegrations = () => {
  return (
    <section id="metafi-integrations" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Previous Work
        </p>

        <h2 className="mx-auto max-w-3xl text-center text-3xl leading-tight font-black tracking-tight text-balance text-[#141414] sm:text-4xl md:text-5xl">
          Clients & Engagements
        </h2>

        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          Experience across Fortune 500 companies, startups, and everything in
          between—from fintech and healthcare to enterprise software and
          consumer products.
        </p>

        <ul className="mt-12 grid items-start gap-4 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {PREVIOUS_WORK.map((item, i) => (
            <WorkCard key={`${item.company}-${i}`} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetafiIntegrations;
