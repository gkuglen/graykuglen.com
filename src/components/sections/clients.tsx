type Client = { name: string; logo: string; noFilter?: boolean };

const CLIENTS: Client[] = [
  {
    name: 'Wells Fargo',
    logo: '/images/portfolio/svg/justSVG/wellsfargo.svg',
    noFilter: true,
  },
  { name: 'Sony', logo: '/images/portfolio/svg/justSVG/sony 1.svg' },
  { name: 'SAP', logo: '/images/portfolio/svg/justSVG/sap 1.svg' },
  { name: 'Autodesk', logo: '/images/portfolio/svg/justSVG/autodesk 1.svg' },
  { name: "Macy's", logo: '/images/portfolio/svg/justSVG/macys.svg' },
  { name: 'Netgear', logo: '/images/portfolio/svg/justSVG/netgear 1.svg' },
  {
    name: 'Blue Shield',
    logo: '/images/portfolio/svg/justSVG/blueshield 1.svg',
  },
  { name: 'Veritas', logo: '/images/portfolio/svg/justSVG/veritas 1.svg' },
  { name: 'TIBCO', logo: '/images/portfolio/svg/justSVG/tibco 1.svg' },
  { name: 'Apple', logo: '/images/portfolio/svg/justSVG/apple 1.svg' },
  { name: 'Tintri', logo: '/images/portfolio/svg/justSVG/tintri.svg' },
  {
    name: 'Pro Unlimited',
    logo: '/images/portfolio/svg/justSVG/prounlimited.png',
  },
];

const LOGO_FILTER = 'brightness(0) invert(45%)';

const Clients = () => {
  return (
    <section
      id="clients"
      className="bg-background border-border border-t px-6 lg:px-0"
    >
      <div className="container px-0 py-16 sm:py-20 md:px-6">
        <h2 className="text-foreground text-3xl leading-tight font-black tracking-tight sm:text-4xl">
          Earlier work
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl text-base leading-relaxed sm:text-lg">
          Enterprise, fintech, healthcare and consumer products. Highlights: a
          Wells Fargo bill pay redesign (3M+ customers), Pro Unlimited vendor
          management redesign (~$2.4M a year in efficiency gains), Netgear
          cameras (spun out as Arlo).
        </p>
        <ul className="mt-10 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-6">
          {CLIENTS.map((c) => {
            const plain = c.noFilter || c.logo.endsWith('.png');
            return (
              <li key={c.name} className="flex h-10 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-8 w-auto max-w-[120px] object-contain"
                  style={{ filter: plain ? undefined : LOGO_FILTER }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
