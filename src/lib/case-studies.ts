export type ContentSection =
  | {
      type: 'text';
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
    }
  | {
      type: 'chain';
      heading: string;
      intro?: string;
      chain?: string[];
      layers?: { label: string; description: string }[];
    }
  | {
      type: 'video';
      heading: string;
      embedUrl: string;
      aspectRatio?: string;
    }
  | {
      type: 'embed';
      heading: string;
      intro?: string;
      src: string;
      height?: number;
    }
  | {
      type: 'image';
      heading: string;
      intro?: string;
      src: string;
      alt: string;
      mobile?: boolean;
    }
  | {
      type: 'table';
      heading: string;
      intro?: string;
      caption?: string;
      columns: string[];
      rows: string[][];
      outro?: string;
    };

export type CaseStudy = {
  slug: string;
  /** Short name used in navigation, e.g. "Get Rent Ready" */
  name: string;
  /** One-line label used under the name in navigation */
  navLabel: string;
  group: 'work' | 'built';
  company: string;
  year: string;
  role: string;
  title: string;
  summary: string;
  /** "Built with" for things Gray built; "Methods" for client work */
  toolsLabel: 'Built with' | 'Methods';
  tools: string[];
  heroImage: string;
  heroAlt: string;
  liveUrl?: string;
  liveLabel?: string;
  stats: { value: string; label: string }[];
  sections: ContentSection[];
  images: { src: string; caption: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'get-rent-ready',
    name: 'Get Rent Ready',
    navLabel: 'Pricing rentals with market data',
    group: 'work',
    company: 'Get Rent Ready',
    year: '2025',
    role: 'Product design · Data modeling · Build',
    title: 'Pricing rentals with market data',
    summary:
      'I graded 900+ rental listings, modeled what drives rent, and turned it into an app that shows owners each unit’s rent gap and which upgrades pay back. On a real property, it raised rental income 24%.',
    toolsLabel: 'Built with',
    tools: ['R', 'Python', 'Playwright', 'Claude Code', 'Supabase', 'Figma'],
    heroImage: '/apps/getrenteady/updated_getrentready.png',
    heroAlt:
      'Three Get Rent Ready mobile screens: a property’s units, a unit’s rent gap, and a comparable listing',
    stats: [
      { value: '24%', label: 'increase in rental income' },
      { value: '5–6%', label: 'increase in estimated asset value' },
      { value: '4–5%', label: 'reduction in operating expenses' },
      { value: '900+', label: 'rental listings graded' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Investors have plenty of market data but no clear way to tell which units are underpriced or which improvements will pay back. Upgrades get made on instinct, and rent upside goes unclaimed.',
        ],
      },
      {
        type: 'chain',
        heading: 'How the model works',
        layers: [
          {
            label: 'Collect',
            description:
              'Collected comparable rental listings from across the local metro area.',
          },
          {
            label: 'Grade',
            description:
              'Scored each listing from D to A on location, amenities, quality and size.',
          },
          {
            label: 'Model',
            description:
              'Fit a linear regression on the graded data to estimate market rent for any unit.',
          },
          {
            label: 'Act',
            description:
              'Compared each unit’s current rent with its estimate, and priced the upgrades that close the gap.',
          },
        ],
      },
      {
        type: 'image',
        heading: 'Exploring the data',
        intro:
          'Early analysis in R: how rent varies by grade, area, bedroom count and size.',
        src: '/images/portfolio/grr_dataplay.png',
        alt: 'Grid of R charts showing rent distributions by apartment grade, city and size',
      },
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Renovated units on a real property to learn the rent lift, cost-versus-return thresholds and what renters respond to.',
          'Tested an early asset-management concept, saw little traction, and refocused on rent and cash flow.',
          'Designed the app in Figma, then built it with Claude Code on Supabase.',
        ],
      },
      {
        type: 'image',
        heading: 'The product',
        intro:
          'Each unit is benchmarked against nearby comparables, with the characteristics behind the gap and a path to a higher grade.',
        src: '/apps/getrenteady/getrentready_unit.png',
        alt: 'Get Rent Ready unit screen showing current vs. target rent, comparable listings, and a renovation path to a higher grade',
      },
      {
        type: 'text',
        heading: 'What I learned',
        paragraphs: [
          'Investors don’t want more data; they want to know what to do next. In testing, clear recommendations tied to rent and cash flow mattered more than analytical depth.',
        ],
      },
    ],
    images: [
      { src: '/images/portfolio/grr_phase1.png', caption: 'Phase 1' },
      { src: '/images/portfolio/grr_phase2.png', caption: 'Phase 2' },
      { src: '/images/portfolio/grr_phase3.png', caption: 'Phase 3' },
      { src: '/images/portfolio/grr_concepts.png', caption: 'Concepts' },
      { src: '/images/portfolio/grr_prototype.png', caption: 'Prototype' },
    ],
  },
  {
    slug: 'azibo-insurance',
    name: 'Azibo',
    navLabel: 'Landlord insurance quotes',
    group: 'work',
    company: 'Azibo',
    year: '2022',
    role: 'Lead product designer',
    title: 'Landlord insurance quotes in under five minutes',
    summary:
      'At Azibo I led design for a new embedded insurance product, turning a 100+ field underwriting process into a mobile flow landlords finish in minutes. It sold $1.5M in premiums in three quarters.',
    toolsLabel: 'Methods',
    tools: [
      'Figma prototypes',
      'Moderated usability testing',
      'API data enrichment',
    ],
    heroImage: '/images/portfolio/insurance-BVxChoGW.png',
    heroAlt: 'Three mobile screens of the Azibo insurance quote flow',
    stats: [
      { value: '3.5×', label: 'growth in premiums sold over two quarters' },
      { value: '$1.5M', label: 'premiums sold in three fiscal quarters' },
      { value: '66%', label: 'less work for customers' },
      { value: '33%', label: 'fewer screens' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Carriers need 100+ data points to underwrite a property, and most landlords don’t have them at hand. Manual entry led to errors, rework and drop-off.',
        ],
      },
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Replaced most manual input with automated property data lookup, so landlords confirm details instead of typing them.',
          'Added real-time validation to catch errors before they reached carriers.',
          'Designed side-by-side quotes from multiple carriers, returned instantly or next day.',
          'Ran moderated usability tests on Figma prototypes and refined the flow after each round.',
        ],
      },
      {
        type: 'video',
        heading: 'Prototype walkthrough',
        embedUrl: 'https://www.loom.com/embed/8a5b65a6c84446d5ac36ec02480921e2',
        aspectRatio: '58.00%',
      },
      {
        type: 'text',
        heading: 'What I learned',
        paragraphs: [
          'Data quality was a product problem, not just a backend one. The biggest gains came from changing how data was gathered, not how the forms looked. And carrier pricing affected adoption no matter how good the flow was.',
        ],
      },
    ],
    images: [
      { src: '/images/portfolio/insurance_quote.png', caption: 'Quote flow' },
      { src: '/images/portfolio/in_arch.png', caption: 'Architecture' },
      { src: '/images/portfolio/in_wireframes.png', caption: 'Wireframes' },
      {
        src: '/images/portfolio/in_hifidelity.png',
        caption: 'High-fidelity designs',
      },
      { src: '/images/portfolio/in_models.png', caption: 'Models' },
    ],
  },
  {
    slug: 'azibo-rentals',
    name: 'Azibo',
    navLabel: 'Faster rental applications',
    group: 'work',
    company: 'Azibo',
    year: '2023',
    role: 'Lead product designer',
    title: 'Free pre-applications for renters, faster review for landlords',
    summary:
      'At Azibo I redesigned the rental application so tenants apply free first and pay for a formal check only when a landlord is interested. That saved renters $39.95 per application and cut landlord review time 30%.',
    toolsLabel: 'Methods',
    tools: [
      'Tenant and landlord interviews',
      'Figma prototypes',
      'Moderated usability testing',
    ],
    heroImage: '/images/portfolio/rentals-R0CN0DOq.png',
    heroAlt: 'Three mobile screens of the Azibo rental application',
    stats: [
      { value: '$39.95', label: 'saved per tenant application' },
      { value: '30%', label: 'faster landlord review' },
      { value: 'Up to 40', label: 'paid applications per unit, before' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'What I did',
        paragraphs: [
          'Interviews with 8 recent tenants and 6–8 landlords showed that landlords screen everyone on the same few criteria before paying for a report. So we moved those criteria into a free, self-reported step and kept the paid check for shortlisted applicants.',
        ],
      },
      {
        type: 'image',
        heading: 'The self-reported application',
        src: '/images/portfolio/rent_tenantscreens.png',
        alt: 'Three mobile screens of the tenant self-reported application: contact, credit and income; rental history; and rental resume upload',
      },
      {
        type: 'video',
        heading: 'Product demo',
        embedUrl: 'https://www.loom.com/embed/9e83c303e0f34553a132002bedf38305',
        aspectRatio: '58.00%',
      },
      {
        type: 'text',
        heading: 'What I’d do differently',
        paragraphs: [
          'Lock the delivery plan earlier. We were disciplined about direction but not about pacing, and handing visual design to an outside resource added delays.',
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'kaiser',
    name: 'Kaiser Permanente',
    navLabel: 'Home-based care',
    group: 'work',
    company: 'Kaiser Permanente',
    year: '2022',
    role: 'Product design · Research · Systems design',
    title: 'A North Star for home-based care',
    summary:
      'For Kaiser Permanente’s Focus Home initiative, I helped turn a vision of moving care from clinics into patients’ homes into a phased system of care, engagement, technology and operations.',
    toolsLabel: 'Methods',
    tools: ['Ecosystem mapping', 'Service design', 'Phased rollout planning'],
    heroImage: '/images/portfolio/kaiser-CynDbDDb.png',
    heroAlt: 'Focus Home vision framework shown on desktop and tablet',
    stats: [
      { value: '1.4M', label: 'members identified as early candidates' },
      {
        value: '7×',
        label: 'addressable population vs. current home health capacity',
      },
    ],
    sections: [
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Mapped how in-home care, patient engagement, technology and operations connect over time.',
          'Designed a phased proof of concept starting with high-need patients already receiving home care.',
          'Helped align stakeholders on Focus Home as a direction for continued funding.',
        ],
      },
      {
        type: 'text',
        heading: 'What I learned',
        paragraphs: [
          'Care delivery is a system problem, not a feature problem. Starting with the highest-need patients made the model testable before scaling it.',
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    navLabel: 'Virtual try-on',
    group: 'work',
    company: 'Amazon (consulting via Wisepix LLC)',
    year: '2021',
    role: 'Product design · Research',
    title: 'Virtual try-on to reduce apparel returns',
    summary:
      'I designed and tested virtual try-on concepts to help Amazon shoppers judge fit before they buy, and to find out whether the idea justified further investment.',
    toolsLabel: 'Methods',
    tools: ['Concept prototyping', 'Proof of concept', 'User testing'],
    heroImage: '/images/portfolio/amazon/amazons-CJAIeNbr.png',
    heroAlt: 'Virtual try-on flow screens for a man’s and a woman’s outfit',
    stats: [],
    sections: [
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Designed mobile and desktop try-on concepts, including 360° views of garments on the shopper’s body.',
          'Built a proof of concept to test setup flows and the tradeoff between accuracy and ease of use.',
          'Tested concepts with prospective shoppers for trust and usefulness.',
        ],
      },
      {
        type: 'text',
        heading: 'What we found',
        paragraphs: [
          'Returns are a confidence problem: shoppers need to see themselves, not just the product. Discovery also showed the initiative had no clear owner or funding, which stopped it before major engineering investment.',
        ],
      },
    ],
    images: [
      { src: '/images/portfolio/amazon/1.jpg', caption: 'Concept' },
      { src: '/images/portfolio/amazon/3.jpg', caption: 'Concept' },
      { src: '/images/portfolio/amazon/mapping.jpg', caption: 'Mapping' },
      {
        src: '/images/portfolio/amazon/O3FConfigured.png',
        caption: 'Configured view',
      },
      {
        src: '/images/portfolio/amazon/O2MRendered.png',
        caption: 'Rendered view',
      },
    ],
  },
  {
    slug: 'yoss-adecco',
    name: 'YOSS / Adecco',
    navLabel: 'Freelance marketplace research',
    group: 'work',
    company: 'YOSS (Adecco Group)',
    year: '2023',
    role: 'UX researcher',
    title: 'Discovery research for a freelance marketplace',
    summary:
      'For YOSS, an Adecco Group company, I led research with freelancers and hiring businesses to define what each side needs from the marketplace.',
    toolsLabel: 'Methods',
    tools: [
      'Research planning',
      'Screening surveys',
      'In-depth interviews',
      'Journey maps',
    ],
    heroImage: '/images/portfolio/yoss-D4gN2hxd.png',
    heroAlt:
      'Research synthesis boards showing business and freelancer archetypes',
    stats: [],
    sections: [
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Wrote the research plan, screening surveys and interview guides.',
          'Interviewed freelancers and small businesses about how they find, hire and work with each other.',
          'Synthesized findings into journey maps and behavior-based archetypes.',
        ],
      },
      {
        type: 'text',
        heading: 'What we found',
        paragraphs: [
          'Businesses hire in two modes: fast and transactional, or long-term and relationship-driven. Freelancers split between primary earners who need steady work and supplemental earners who want flexibility. Matching, features and trust signals need to serve each combination.',
        ],
      },
    ],
    images: [
      {
        src: '/images/portfolio/ur_participants.png',
        caption: 'Research participants',
      },
      {
        src: '/images/portfolio/user_interviews.png',
        caption: 'User interviews',
      },
      {
        src: '/images/portfolio/ur_diagramming.png',
        caption: 'Synthesis and diagramming',
      },
      { src: '/images/portfolio/ur_survey.png', caption: 'Survey design' },
      {
        src: '/images/portfolio/ur_urmethods.png',
        caption: 'Research methods',
      },
    ],
  },
  {
    slug: 'property-development',
    name: 'PropDev',
    navLabel: 'Turning one house into six homes',
    group: 'built',
    company: 'Personal project',
    year: '2026',
    role: 'Design · Build · Financial modeling',
    title: 'PropDev: turning one house into six homes',
    summary:
      'A financial model and working calculator for replacing aging single-family homes with 6–10 smaller units, priced for buyers who can’t afford the house they replace.',
    toolsLabel: 'Built with',
    tools: ['Claude Code', 'v0', 'Replit', 'React', 'Figma'],
    heroImage: '/apps/prop-dev/prop-dev_desktop.png',
    heroAlt:
      'PropDev calculator summary screen showing investor and owner returns',
    stats: [],
    sections: [
      {
        type: 'text',
        heading: 'The opportunity',
        paragraphs: [
          'Baby Boomers will pass on an estimated $70–90 trillion over the next decade, much of it in single-family homes. Heirs sell about 70% of inherited homes, often in neighborhoods the next generation can’t afford. The same lot can hold 6–10 units, each priced well below the old house but worth more together.',
        ],
      },
      {
        type: 'chain',
        heading: 'How the deal works',
        chain: [
          'Find aging owners on well-zoned lots',
          'Partner before the sale',
          'Raise project capital',
          'Rebuild at 6–10 units',
          'Sell below local home prices',
        ],
      },
      {
        type: 'embed',
        heading: 'Try the calculator',
        intro:
          'Model construction financing, a seller-financed note back to the homeowner, and traditional build vs. prefab, across the Property, Development, Summary and Ownership tabs.',
        src: '/apps/prop-dev/app',
        height: 1000,
      },
      {
        type: 'table',
        heading: 'Costs, modeled bottom-up',
        intro:
          'At 6–10 units per lot, small per-unit cost swings compound fast, so pricing is built system by system rather than per square foot. Here is one system: all-electric heating and hot water for a 6-unit building, net of rebates and tax credits.',
        caption: '6-unit example, 2025–26 pricing',
        columns: ['System', 'Project total', 'Per-unit avg.'],
        rows: [
          ['Ducted heat pump HVAC', '$74,500 – $174,000', '~$12,400 – $29,000'],
          ['Heat pump water heaters', '$18,300 – $44,400', '~$3,050 – $7,400'],
          ['Net after incentives', '~$86,000 – $201,000', '~$14,300 – $33,500'],
        ],
        outro:
          'The same approach covers structure, sitework and soft costs, so the per-unit price can be defended line by line to capital partners and to owners trusting the model with their land.',
      },
    ],
    images: [],
  },
  {
    slug: 'property-deal-sheet',
    name: 'Property Deal Sheet',
    navLabel: 'A deal screener on three AI platforms',
    group: 'built',
    company: 'Personal project',
    year: '2026',
    role: 'Design · Build',
    title: 'A deal screener, built on three AI platforms',
    summary:
      'A quick profitability check for rental deals: enter price and income, and cash flow, cap rate and cash-on-cash return update live. I built the same tool on v0, Replit and Claude Code to compare how each platform handles a real problem.',
    toolsLabel: 'Built with',
    tools: ['v0', 'Replit', 'Claude Code', 'Figma'],
    heroImage: '/apps/deal-sheet/dealsheet4.png',
    heroAlt:
      'Property Deal Sheet showing price and income inputs and a grid of return scenarios',
    liveUrl: 'https://v0-grr-calc.vercel.app/',
    liveLabel: 'Try the tool',
    stats: [],
    sections: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Before full underwriting, investors need a back-of-the-napkin answer: does this property make money, and is it worth a closer look? Most deals get screened out before anyone opens a spreadsheet.',
        ],
      },
      {
        type: 'text',
        heading: 'What it does',
        bullets: [
          'Starts from two inputs, purchase price and monthly income, and estimates the rest.',
          'Shows monthly cash flow, cap rate and cash-on-cash return at a glance.',
          'Stress-tests returns across a grid of price and rent scenarios.',
        ],
      },
      {
        type: 'image',
        heading: 'Comparing AI platforms',
        intro:
          'I built the same tool more than once to see how each platform’s defaults, constraints and design language held up against a real underwriting problem. The live version runs on v0; this is an earlier build on another platform.',
        src: '/apps/deal-sheet/property-deal-sheet.png',
        alt: 'An earlier build of the Property Deal Sheet on a different platform',
      },
    ],
    images: [],
  },
  {
    slug: 'generations-in-color',
    name: 'Generations in Color',
    navLabel: 'A public art proposal site',
    group: 'built',
    company: 'Civic proposal, Alameda',
    year: '2026',
    role: 'Concept · Design · Build',
    title: 'A public art proposal, built as an interactive site',
    summary:
      'Generations in Color proposes pairing local artists with youth to paint Alameda’s utility boxes. I designed and built the proposal as an interactive site instead of a PDF, so commissioners can browse it or follow a guided story.',
    toolsLabel: 'Built with',
    tools: ['Claude Code', 'v0', 'Replit', 'Next.js', 'Figma'],
    heroImage: '/apps/generations/_generations.png',
    heroAlt: 'Generations in Color proposal site',
    liveUrl: 'https://generations-mu.vercel.app/',
    liveLabel: 'View live proposal',
    stats: [
      { value: '8–10', label: 'utility boxes in the pilot' },
      { value: '8–16', label: 'youth participants' },
      { value: 'Under review', label: 'with the Alameda Arts Commission' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'What I did',
        bullets: [
          'Organized 20 sections into five phases (Discover, Learn, Collaborate, Create, Grow), with a free-browse mode and a guided story mode.',
          'Stored all copy and figures as structured content, so text changes don’t touch layout code.',
          'Added a print/PDF version for reviewers who want a document.',
        ],
      },
    ],
    images: [
      {
        src: '/apps/generations/generations-mobile.PNG',
        caption: 'Proposal overview',
      },
      {
        src: '/apps/generations/generations-mobile2.PNG',
        caption: 'Utility box pilot map',
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((s) => s.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const i = CASE_STUDIES.findIndex((s) => s.slug === slug);
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}
