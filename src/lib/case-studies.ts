export type ContentSection =
  | {
      type: 'text';
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
      outro?: string;
      resultsLabel?: string;
      results?: { value: string; label: string }[];
    }
  | {
      type: 'numbered';
      heading: string;
      intro?: string;
      items: {
        title: string;
        intro?: string;
        bullets?: string[];
        outro?: string;
      }[];
    }
  | {
      type: 'chain';
      heading: string;
      intro?: string;
      bullets?: string[];
      chain?: string[];
      chainLabel?: string;
      layers?: { label: string; description: string }[];
      outro?: string;
    }
  | {
      type: 'results';
      heading: string;
      items: { value: string; label: string }[];
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
      paragraphs?: string[];
      src: string;
      alt?: string;
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
  company: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  meta?: string;
  role?: string;
  description: string;
  metaBelow?: boolean;
  heroImage?: string;
  stats: { label: string; value: string }[];
  images: { src: string; caption?: string }[];
  sections?: ContentSection[];
  liveUrl?: string;
  liveLabel?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'get-real-ready',
    company: 'Get Rent Ready',
    eyebrow: 'Get Rent Ready',
    title:
      'Get Rent Ready: Using Market Data to Increase Rental Income and Property Value',
    subtitle:
      'I developed a data-driven approach to identify rent potential, prioritize property improvements, and measure their financial impact. Applied to a real property, the approach increased rental income by 24%, reduced operating expenses by 4–5%, and increased estimated asset value by 5–6%.',
    tagline: 'Real Estate Analytics Platform',
    meta: 'Responsive Web App · 2025',
    role: 'Product Design · Research · Strategy',
    description:
      'A data-driven approach to identify rent potential, prioritize property improvements, and measure their financial impact — increasing rental income by 24%, reducing operating expenses by 4–5%, and lifting estimated asset value by 5–6% on a real property.',
    metaBelow: true,
    heroImage: '/apps/getrenteady/updated_getrentready.png',
    stats: [],
    images: [
      { src: '/images/portfolio/grr_phase1.png', caption: 'Phase 1' },
      { src: '/images/portfolio/grr_phase2.png', caption: 'Phase 2' },
      { src: '/images/portfolio/grr_phase3.png', caption: 'Phase 3' },
      { src: '/images/portfolio/grr_concepts.png', caption: 'Concepts' },
      { src: '/images/portfolio/grr_prototype.png', caption: 'Prototype' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Real estate investors have access to enormous amounts of market data, but determining what to do with it is much harder.',
          'I identified an opportunity to develop a repeatable method for comparing rental properties to the market, identifying underperformance, and determining where improvements could generate meaningful financial returns.',
          'This led to Get Rent Ready—a data-driven product designed to help investors make clearer, faster decisions about rental performance, property improvements, and where to invest.',
        ],
        resultsLabel: 'Real Property Results',
        results: [
          { label: 'Increase in rental income', value: '24%' },
          { label: 'Increase in estimated asset value', value: '5–6%' },
          { label: 'Reduction in operating expenses', value: '4–5%' },
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Many rental properties have untapped income and asset value, but owners often lack a clear way to identify where those opportunities exist or how to capture them.',
          'A unit may be renting below its market potential. An improvement may generate additional income. Or capital may be going toward upgrades that produce little financial return.',
          'As a result:',
        ],
        bullets: [
          'Rental income opportunities go unidentified',
          'Potential asset value remains unrealized',
          'Improvements are made without a clear understanding of ROI',
          'Owners lack a consistent way to prioritize where to invest',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "Investors don't want more data—they want clear direction on what to do next.",
          'Through research and testing, several patterns emerged:',
        ],
        bullets: [
          'Many investment decisions are influenced by agents and property managers, not just owners',
          'Users prioritize outcomes—rent, cash flow, and property value—over complex financial models',
          'Investors want to understand the financial impact before committing capital',
          'Simplicity and clear recommendations drive adoption more than analytical depth',
        ],
        outro:
          'The opportunity was to translate complex market information into a relatively simple question: where can I invest in this property to generate the strongest return?',
      },
      {
        type: 'numbered',
        heading: 'Approach',
        intro:
          'We started with real-world property outcomes and worked backward to define the product.',
        items: [
          {
            title: 'Real-World Testing',
            intro:
              'Renovations across multiple units were used to understand and validate:',
            bullets: [
              'Rent lift potential',
              'Cost-versus-return thresholds',
              'Which improvements influenced marketability',
              'How the market responded to renovated units',
            ],
            outro:
              'These projects helped establish the financial framework behind the product.',
          },
          {
            title: 'Market + Data Analysis',
            intro:
              'I built datasets of comparable rental listings and analyzed the relationship between apartment characteristics, condition, amenities, location, and asking rent.',
            outro:
              'This allowed us to benchmark individual units against the market rather than relying primarily on intuition or broad rent averages.',
          },
          {
            title: 'Concept Iteration',
            intro:
              'Early concepts explored broader asset-management tools, but testing showed limited traction.',
            outro:
              'A second direction focused much more specifically on cash flow and rent optimization. Users responded more strongly when the product connected market information directly to a financial opportunity — shifting it from a collection of property-management tools toward a decision-support platform for real estate investment.',
          },
          {
            title: 'Product Direction',
            intro: 'The resulting product was designed to:',
            bullets: [
              'Benchmark current rents against comparable properties',
              'Identify potential rent opportunities',
              'Show what characteristics are driving higher rents',
              'Estimate the financial impact of improvements',
              'Help investors prioritize where to deploy capital',
            ],
          },
        ],
      },
      {
        type: 'image',
        heading: 'The Product',
        paragraphs: [
          'Get Rent Ready gives investors a unit-level view of property performance.',
          'Current rent is benchmarked against comparable nearby apartments, allowing an owner to see where the unit sits within the market and how its condition, amenities, size, and location compare with higher-performing properties.',
          'From there, the product identifies potential improvements and helps connect those decisions to rent potential, cash flow, and estimated property value.',
          "The goal is not simply to tell an investor what an apartment could rent for. It's to help answer why—and what they can do about it.",
        ],
        src: '/apps/getrenteady/getrentready_unit.png',
        alt: 'Get Rent Ready unit detail screen showing current vs. target rent, comparable listings, and a renovation path to a higher grade',
      },
      {
        type: 'chain',
        heading: 'How the Model Works',
        intro:
          'Get Rent Ready uses market data to understand how apartment characteristics relate to rental value.',
        layers: [
          {
            label: 'Grade the Market',
            description:
              'I sampled and scored 900+ rental listings, assigning each apartment a grade from D to A across four dimensions: Location, Amenities, Quality, and Size. This creates a consistent framework for comparing properties that would otherwise be difficult to evaluate objectively.',
          },
          {
            label: 'Model Rental Value',
            description:
              'Using the graded dataset, I applied linear regression to analyze how property characteristics relate to asking rents and estimate market rent for comparable units. Rather than relying on a single neighborhood average, the model considers differences between individual apartments.',
          },
          {
            label: 'Identify the Opportunity',
            description:
              "A property's current rent and condition can then be compared with similar units in the market. This helps identify the gap between current performance and estimated market potential, and provides context for why comparable apartments may command higher rents.",
          },
          {
            label: 'Support Investment Decisions',
            description:
              'The analysis connects market performance back to action. Owners can see which characteristics are associated with higher rents, where improvements may create value, and which investments may offer the strongest potential return.',
          },
        ],
        chainLabel: 'Decision Model',
        chain: [
          'Understand the Market',
          'Identify the Gap',
          'Evaluate Improvements',
          'Invest Where It Makes Sense',
        ],
      },
    ],
  },
  {
    slug: 'azibo-insurance',
    company: 'Azibo',
    eyebrow: 'Azibo',
    title: 'Streamlining Property Insurance for Landlords',
    tagline: 'Property Insurance Product',
    meta: 'Responsive Web App · 2022',
    role: 'Lead Product Designer',
    description:
      'Transforming a fragmented insurance workflow into a scalable, data-driven product experience.',
    metaBelow: true,
    heroImage: '/images/portfolio/insurance-BVxChoGW.png',
    stats: [
      { label: 'Growth in premiums (2 quarters)', value: '3.5×' },
      { label: 'Premiums sold (3 fiscal quarters)', value: '$1.5M' },
      { label: 'Reduction in customer workload', value: '66%' },
      { label: 'Fewer screens via simplification', value: '33%' },
    ],
    images: [
      { src: '/images/portfolio/insurance_quote.png', caption: 'Quote flow' },
      { src: '/images/portfolio/in_arch.png', caption: 'Architecture' },
      { src: '/images/portfolio/in_wireframes.png', caption: 'Wireframes' },
      {
        src: '/images/portfolio/in_hifidelity.png',
        caption: 'Hi-fidelity designs',
      },
      { src: '/images/portfolio/in_models.png', caption: 'Models' },
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'At Azibo, we launched a new revenue stream by embedding property insurance directly into the platform.',
          'The challenge was to simplify a traditionally complex underwriting process into a fast, mobile-friendly experience—without compromising the data requirements of insurance carriers.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Purchasing property insurance is slow, manual, and fragmented.',
        ],
        bullets: [
          'Insurance carriers require 100+ data points for underwriting',
          'Landlords often lack immediate access to this information',
          'Manual entry leads to errors, rework, and drop-off',
          'Existing workflows are not designed for speed or usability',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "Reducing friction wasn't just about better UX—it required rethinking how data is gathered and validated.",
          'We found that:',
        ],
        bullets: [
          'Users prioritized price and speed, not process transparency',
          'Most users did not fully understand their property or coverage details',
          'Manual input was the primary source of failure',
          'Carrier pricing competitiveness would impact adoption regardless of UX',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Simplify Data Collection',
            bullets: [
              'Reduced required user input through automated property data lookup',
              'Transformed a 100+ field process into a sub-5-minute experience',
            ],
          },
          {
            title: 'Progressive Validation',
            bullets: [
              'Introduced real-time error checking to prevent downstream issues',
              'Reduced incomplete submissions and support overhead',
            ],
          },
          {
            title: 'Multi-Quote Experience',
            bullets: [
              'Designed a system for comparing multiple insurance providers',
              'Delivered quotes in real-time or next-day depending on carrier',
            ],
          },
          {
            title: 'Iterative Testing + Collaboration',
            bullets: [
              'Conducted moderated usability testing using Figma prototypes',
              'Continuously refined flows based on behavioral insights',
              'Centralized collaboration across Product, Design, and Engineering',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro:
          'This product connected multiple systems that traditionally operate independently:',
        layers: [
          {
            label: 'User Input Layer',
            description: 'fragmented, incomplete property data',
          },
          {
            label: 'Data Enrichment Layer',
            description: 'automated lookup + validation',
          },
          {
            label: 'Carrier APIs',
            description: 'strict underwriting requirements',
          },
          {
            label: 'Decision Layer',
            description: 'quote comparison and selection',
          },
        ],
        outro:
          'By orchestrating these layers, we reduced friction while still satisfying carrier constraints.',
      },
      {
        type: 'video',
        heading: 'Prototype Walkthrough',
        embedUrl: 'https://www.loom.com/embed/8a5b65a6c84446d5ac36ec02480921e2',
        aspectRatio: '58.00%',
      },
      {
        type: 'results',
        heading: 'Results',
        items: [
          { value: '3.5×', label: 'growth in premiums sold over two quarters' },
          {
            value: '$1.5M',
            label: 'in premiums sold within three fiscal quarters',
          },
          { value: '66%', label: 'reduction in customer workload' },
          {
            value: '33%',
            label: 'fewer screens through workflow simplification',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Impact',
        paragraphs: [
          'What was previously a high-friction, manual process became a streamlined experience that:',
        ],
        bullets: [
          'Reduced user effort dramatically',
          'Increased conversion and revenue',
          'Enabled a scalable insurance offering within the platform',
        ],
      },
      {
        type: 'text',
        heading: 'Key Takeaways',
        bullets: [
          'Automation must balance efficiency with user trust',
          'Real-time validation improves completion and confidence',
          'Data quality is a product problem, not just a backend problem',
          'Seamless integration across systems is critical for adoption',
        ],
      },
    ],
  },
  {
    slug: 'azibo-rentals',
    company: 'Azibo',
    eyebrow: 'Azibo',
    title:
      'Saving Tenants Money and Landlords Time During the Rental Application Process',
    tagline: 'Rental Application Product',
    meta: 'Responsive Web App · 2023',
    role: 'Lead Product Designer',
    description:
      'Redesigned the rental application flow to reduce friction for tenants and improve landlord efficiency—cutting application review time by 30% and saving renters $39.95 per application.',
    metaBelow: true,
    heroImage: '/images/portfolio/rentals-R0CN0DOq.png',
    stats: [
      { label: 'Savings per tenant application', value: '$39.95' },
      { label: 'Faster landlord application review', value: '30%' },
      { label: 'Landlords in research panel', value: '50+' },
      { label: 'Formal applications per unit, before', value: 'Up to 40' },
    ],
    images: [],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Azibo set out to give property owners a faster way to review rental applicants, and to let tenants apply for an apartment more easily and affordably — without the stack of separate, paid applications renters were used to filing.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          "The team had a strategy deck and a development plan, but hadn't yet validated it against how tenants and landlords actually behaved during a search. Renting an apartment is a two-sided problem: landlords need a reliable way to compare applicants, and tenants need a real shot at being considered without paying for every attempt.",
        ],
        bullets: [
          'Some landlords received up to 40 formal applications for a single unit and could only seriously consider 1–3',
          'Tenants paid $30–50 for each application, with no guarantee of being chosen',
          'Landlords largely evaluated applicants against the same handful of criteria, applied inconsistently across a fragmented set of tools',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "Landlords weren't evaluating every applicant from scratch — they were screening against a consistent set of criteria to narrow the field before anyone paid for a formal, third-party report.",
        ],
        bullets: [
          'A free, self-reported pre-apply step could carry the same signal landlords already used to shortlist candidates',
          'A formal, paid application only needed to happen once a landlord was genuinely interested',
          'Landlords cared as much about a fair process for applicants as they did about their own review speed',
        ],
      },
      {
        type: 'numbered',
        heading: 'Research & Discovery',
        intro:
          "We talked to both sides of the transaction — tenants who had recently signed a lease, and landlords recruited from a 50+ member design panel — to understand each side's process and decision criteria.",
        items: [
          {
            title: 'Tenant Interviews',
            bullets: [
              'Conducted 8 phone interviews with tenants who had leased an apartment in the past year',
              'Covered the application process, security deposits, and renters insurance',
            ],
          },
          {
            title: 'Landlord & Property Manager Discovery',
            bullets: [
              'Conducted 6–8 discovery interviews with landlords and property managers active in a leasing process within the past six months',
              'Recruited from a 50+ member design panel, plus referrals for tenant-side participants',
            ],
          },
        ],
      },
      {
        type: 'image',
        heading: 'How Tenants Search Today',
        intro:
          "Mapping the apartment seeker's existing path showed two branches: a free pre-apply step, or the fee-based formal application most tenants were used to hitting immediately.",
        src: '/images/portfolio/rent_tenantflow.png',
        alt: 'Apartment seeker flow diagram showing a free pre-apply branch and a fee-based application branch',
      },
      {
        type: 'image',
        heading: 'How Landlords Manage Applicants',
        intro:
          'On the landlord side, we mapped the setup flow that lets a property manager choose whether a unit accepts free pre-applications, formal paid applications, or both.',
        src: '/images/portfolio/rent_landlordflow.png',
        alt: 'Landlord flow diagram showing dashboard, unit setup, application configuration, and invite steps',
      },
      {
        type: 'numbered',
        heading: 'Design Process',
        items: [
          {
            title: 'Concept Development',
            intro:
              'Partnered with the credit and background-check provider to understand what data was actually available, then built lightweight functioning prototypes for early customer review.',
          },
          {
            title: 'Iterative Testing',
            intro:
              'Ran moderated usability testing on Figma prototypes across multiple rounds, adjusting the flow after each round of participant feedback.',
          },
          {
            title: 'Wireframes & Handoff',
            intro:
              'Built and reviewed final wireframes with the engineering team to plan and launch the product.',
          },
        ],
      },
      {
        type: 'image',
        heading: 'Self-Reported Application',
        intro:
          'The core redesign: a free, self-reported application that walks a tenant through the same information landlords already screen for — contact and financial basics, rental history, then an optional rental resume — before any formal, paid step.',
        src: '/images/portfolio/rent_tenantscreens.png',
        alt: 'Three mobile screens of the tenant self-reported application: contact/credit/income, eviction and occupancy history, and rental resume upload',
      },
      {
        type: 'video',
        heading: 'Product Demo',
        embedUrl: 'https://www.loom.com/embed/9e83c303e0f34553a132002bedf38305',
        aspectRatio: '58.00%',
      },
      {
        type: 'text',
        heading: 'Business Context',
        paragraphs: [
          "Alongside this redesign, Azibo's platform saw strong growth over the same period — a useful signal that the broader product direction was working, even though these platform-wide numbers reflect more than this feature alone:",
        ],
        bullets: [
          '+36% average month-over-month growth in platform transaction volume',
          '+2.2× quarter-over-quarter customer growth, with 7,300+ monthly transacting users',
          '$1.6M+ in banking cash deposit balances',
        ],
      },
      {
        type: 'text',
        heading: 'Key Takeaways',
        bullets: [
          'Iterating in small increments — sometimes mid-testing — kept the team aligned and shortened the time from insight to design change',
          'Landlords cared as much about a fair, complete experience for applicants as they did about their own review speed',
          'Locking a delivery plan and deadline earlier would have kept the project closer to schedule; we were more disciplined about direction than about pacing',
          'Handing off visual design to an outside resource after the core UX was set was a new approach for this team, and it introduced delays worth planning around next time',
        ],
      },
    ],
  },
  {
    slug: 'kaiser',
    company: 'Kaiser Permanente',
    eyebrow: 'Kaiser',
    title: 'Reimagining Home-Based Care Delivery (Focus Home)',
    tagline: 'Product Strategy · Systems Design · Research',
    meta: 'Strategic Design · 2022',
    role: 'Product Design · Research · Systems Thinking',
    description:
      'Designing a system to deliver personalized healthcare beyond the clinic and into the home.',
    metaBelow: true,
    heroImage: '/images/portfolio/kaiser-CynDbDDb.png',
    stats: [
      { label: 'Potential member candidates', value: '1.4M' },
      { label: 'Addressable population expansion', value: '7×' },
      { label: 'System layers designed', value: '4' },
      { label: 'Rollout strategy', value: 'Phased' },
    ],
    images: [
      {
        src: '/images/portfolio/kaiser-CynDbDDb.png',
        caption: 'Vision framework',
      },
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Contributed to the development of Focus Home, a future-state care model at Kaiser Permanente designed to shift care delivery from hospitals and clinics into patients homes.',
          'The initiative explored how an interconnected system of services, technology, and operations could deliver more personalized, timely, and scalable care.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Traditional healthcare delivery is centralized, reactive, and resource-intensive.',
        ],
        bullets: [
          'Care is primarily delivered in clinics and hospitals',
          'High-need patients require continuous, coordinated support',
          'Existing systems are fragmented across services and touchpoints',
          'Scaling home-based care is operationally complex',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "Improving care delivery is not a single product problem—it's a system design challenge.",
          'We identified that:',
        ],
        bullets: [
          'Care must extend beyond episodic visits into continuous engagement',
          'Value emerges from connecting services, not optimizing them in isolation',
          'High-need patients are the most impactful starting point for validation',
          'Scale requires sufficient member density to support operational efficiency',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Vision to System Design',
            intro: 'Translated a future-state vision into a structured system:',
            bullets: [
              'Defined key components across care delivery, engagement, and technology',
              'Mapped how these components interact to support patient needs over time',
            ],
          },
          {
            title: 'Ecosystem Modeling',
            intro: 'Designed an interconnected framework that enables:',
            bullets: [
              'Coordinated care across multiple services',
              'Real-time responsiveness to patient conditions',
              'Continuous engagement beyond clinical settings',
            ],
          },
          {
            title: 'Proof of Concept (POC)',
            intro: 'Developed a phased approach to validate the model:',
            bullets: [
              'Initial focus on high-need patients already receiving home care',
              'Iterative refinement of workflows and operational efficiency',
              'Expansion toward broader patient populations over time',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro: 'Focus Home operates as a connected system:',
        layers: [
          {
            label: 'Care Layer',
            description: 'in-home services and clinical support',
          },
          {
            label: 'Engagement Layer',
            description: 'patient interaction and communication',
          },
          {
            label: 'Technology Layer',
            description: 'data, coordination, and decision support',
          },
          {
            label: 'Operations Layer',
            description: 'logistics, staffing, and supply chain',
          },
        ],
        outro:
          'As these components integrate, the system enables more proactive and personalized care, improved coordination across touchpoints, and scalable delivery beyond traditional facilities.',
      },
      {
        type: 'results',
        heading: 'Impact',
        items: [
          {
            value: '1.4M',
            label: 'members identified as potential candidates in early phases',
          },
          {
            value: '7×',
            label:
              'expansion of addressable population vs current home health capacity',
          },
          {
            value: 'Phased',
            label: 'rollout strategy established for operational feasibility',
          },
          {
            value: 'Aligned',
            label:
              'stakeholders around a validated direction for future investment',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Organizational Impact',
        paragraphs: [
          'The initiative also served as a catalyst for internal alignment:',
        ],
        bullets: [
          'Positioned Focus Home as a validated direction for future investment',
          'Supported continued funding discussions and product development',
          'Helped stakeholders align on next steps for scaling the model',
        ],
      },
      {
        type: 'text',
        heading: 'Strategic Value',
        paragraphs: [
          'This initiative reframed care delivery from a location-based model to a system-based model, helping:',
        ],
        bullets: [
          'Align stakeholders around a shared future-state vision',
          'De-risk large-scale transformation through phased validation',
          'Connect clinical, operational, and technology strategies',
          'Advance the program as a viable candidate for continued funding and expansion',
        ],
      },
      {
        type: 'text',
        heading: 'Key Takeaways',
        bullets: [
          'Complex service problems require system-level design, not feature design',
          'Value emerges from integration, not individual components',
          'Starting with high-need users accelerates learning and impact',
          'Scale depends on aligning user needs with operational feasibility',
          'Early system validation can drive alignment, funding, and organizational momentum',
        ],
      },
    ],
  },
  {
    slug: 'amazon',
    company: 'Amazon',
    eyebrow: 'Amazon',
    title: 'Reducing Returns Through Virtual Try-On',
    tagline: 'Product Strategy · UX Design · Research',
    meta: 'Proof of Concept · 2021',
    role: 'Product Design · Research (Consulting via Wisepix LLC)',
    description:
      'Exploring how virtual try-on can increase purchase confidence and reduce returns—while validating product viability before investment.',
    metaBelow: true,
    heroImage: '/images/portfolio/amazon/amazons-CJAIeNbr.png',
    stats: [],
    images: [
      {
        src: '/images/portfolio/amazon/amazons-CJAIeNbr.png',
        caption: 'Concept overview',
      },
      { src: '/images/portfolio/amazon/1.jpg', caption: '' },
      { src: '/images/portfolio/amazon/3.jpg', caption: '' },
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
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Partnered with Amazon to explore new product functionality aimed at reducing friction in apparel purchasing and lowering high return rates.',
          'The focus was to design and validate a virtual try-on experience that could replicate—or exceed—the confidence of an in-store fitting room.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Online apparel shopping lacks confidence and fit certainty.',
        ],
        bullets: [
          'Customers cannot accurately assess fit, size, or appearance',
          'This leads to high return rates and operational cost',
          'Existing solutions fail to replicate the in-store fitting experience',
          'Setup and onboarding for new tools often introduce friction',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          'Returns are not just a logistics problem—they are a confidence problem.',
          'We found that:',
        ],
        bullets: [
          'Customers need to visualize themselves, not just the product',
          'Fit is both functional (size) and emotional (how it looks/feels)',
          'Reducing friction in setup is critical for adoption',
          'Continuous usage depends on trust in the output, not novelty',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Concept Exploration',
            intro:
              'Developed multiple experience concepts for in-home evaluation:',
            bullets: [
              'Virtual try-on via mobile and desktop',
              '360° visualization of garments on a user body',
              'Fit and style feedback to guide purchase decisions',
            ],
          },
          {
            title: 'Proof of Concept (POC)',
            intro: 'Created a POC to test feasibility and user response:',
            bullets: [
              'Evaluated onboarding and setup flows',
              'Explored tradeoffs between accuracy and usability',
              'Generated alternative interaction models for testing',
            ],
          },
          {
            title: 'User Validation',
            bullets: [
              'Tested concepts with prospective users',
              'Identified friction points in setup and interaction',
              'Assessed perceived trust and usefulness of the experience',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro: 'This solution sits within a broader commerce system:',
        layers: [
          { label: 'User Input Layer', description: 'body data, preferences' },
          {
            label: 'Visualization Layer',
            description: 'virtual try-on rendering',
          },
          { label: 'Decision Layer', description: 'purchase confidence' },
          {
            label: 'Business Outcome',
            description: 'reduced returns, increased conversion',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Key Challenge',
        paragraphs: ['The key challenge was balancing:'],
        bullets: [
          'Accuracy vs ease of use',
          'Setup friction vs long-term value',
        ],
      },
      {
        type: 'text',
        heading: 'Impact',
        paragraphs: ['The work established a foundation for:'],
        bullets: [
          'Reducing return rates through improved pre-purchase confidence',
          'Defining interaction models for virtual try-on experiences',
          'Identifying critical factors for adoption (trust, simplicity, speed)',
        ],
      },
      {
        type: 'text',
        heading: 'Business Insight',
        paragraphs: ['The project also surfaced a critical business finding:'],
        bullets: [
          'The initiative lacked clear ownership and funding within the organization',
          'Early discovery clarified misalignment before significant investment',
          'Prevented unnecessary allocation of time, resources, and engineering effort',
        ],
      },
      {
        type: 'text',
        heading: 'Key Takeaways',
        bullets: [
          'Confidence is the primary driver of purchase behavior in apparel',
          'Reducing onboarding friction is critical for new product adoption',
          'Visualization must feel personally relevant to be effective',
          'Product success depends on balancing technical capability with usability',
          'Early discovery can de-risk product investment and prevent wasted effort',
        ],
      },
    ],
  },
  {
    slug: 'yoss-adecco',
    company: 'YOSS / Adecco Group',
    eyebrow: 'Yoss / Adecco',
    title: 'Discovery Research for a Freelance Marketplace',
    tagline: 'UX Research',
    meta: 'UX Research · 2023',
    role: 'UX Researcher',
    description:
      'Partnered with YOSS (an Adecco Group company) to define user needs across a two-sided marketplace connecting businesses with independent professionals.',
    metaBelow: true,
    heroImage: '/images/portfolio/yoss-D4gN2hxd.png',
    stats: [],
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
        caption: 'Synthesis & diagramming',
      },
      { src: '/images/portfolio/ur_survey.png', caption: 'Survey design' },
      {
        src: '/images/portfolio/ur_urmethods.png',
        caption: 'Research methods',
      },
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Partnered with YOSS (an Adecco Group company) to define user needs across a two-sided marketplace connecting businesses with independent professionals.',
          'The goal was to uncover how both sides—freelancers and hiring companies—make decisions, and translate those insights into a clearer product direction.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'The platform lacked a deep understanding of its core users:',
        ],
        bullets: [
          'What freelancers actually need to succeed on the platform',
          'How small businesses evaluate and hire talent',
          'Which features drive engagement, trust, and repeat usage',
          'Without this, product decisions risked being feature-driven rather than need-driven',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "This is not a single user problem—it's a system of interdependent behaviors.",
          'We uncovered that:',
        ],
        bullets: [
          'Freelancers vary significantly in motivation (primary income vs supplemental)',
          'Businesses use two distinct hiring models: short-term transactional and long-term relationship-driven',
          'Trust, clarity, and expectations differ across both sides',
          'Designing for one side in isolation would break the system',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Research Design',
            bullets: [
              'Developed a structured research plan aligned with product goals',
              'Defined participant segments across freelancers and businesses',
              'Created screening surveys and interview guides',
            ],
          },
          {
            title: 'Qualitative Research',
            bullets: [
              'Conducted in-depth interviews with both user groups',
              'Captured behavioral patterns, decision drivers, and pain points',
            ],
          },
          {
            title: 'Synthesis + Modeling',
            bullets: [
              'Translated findings into customer journey maps',
              'Identified key moments of friction and opportunity',
              'Developed early user archetypes based on behavior and motivation',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro:
          'The marketplace operates as a dynamic system between two user groups:',
        layers: [
          {
            label: 'Freelancers',
            description: 'availability, pricing, reliability',
          },
          {
            label: 'Businesses',
            description: 'urgency, budget, risk tolerance',
          },
        ],
        outro:
          'We identified two core dynamics — Business Segments: Transactional (speed and cost-driven) vs Strategic (long-term fit and reliability). Freelancer Segments: Primary earners (stability and consistent work) vs Supplemental earners (flexibility and optional income).',
      },
      {
        type: 'text',
        heading: 'Segment Influence',
        paragraphs: ['These segments directly shape three product dimensions:'],
        bullets: [
          'Matching logic — how talent is surfaced and ranked',
          'Feature prioritization — what to build and for whom',
          'Trust and communication models — how expectations are set and maintained',
        ],
      },
      {
        type: 'text',
        heading: 'Impact',
        paragraphs: ['The research helped the team:'],
        bullets: [
          'Visualize the marketplace as a two-sided system, not a single flow',
          'Clarify distinct user segments and their needs',
          'Identify where the product needed to differentiate between use cases',
          'Lay the foundation for feature prioritization, marketplace design, and future roadmap planning',
        ],
      },
      {
        type: 'text',
        heading: 'Key Takeaways',
        bullets: [
          'Marketplace products require balanced design across both sides',
          'User segmentation should be behavior-driven, not demographic',
          'Research must translate into clear product implications',
          'Early alignment and stakeholder buy-in are critical for impact',
        ],
      },
    ],
  },
  {
    slug: 'generations-in-color',
    company: 'Generations in Color',
    eyebrow: 'Generations in Color',
    title: 'An Intergenerational Public Art Initiative for Alameda',
    tagline: 'Public Art Proposal',
    meta: 'Interactive Proposal Site · 2026',
    role: 'Concept · Product Design · Web Development',
    description:
      'A civic proposal pairing experienced local artists with young people to collaboratively design and paint public artwork across Alameda, starting with utility boxes — designed and built as an interactive, narrative-driven site instead of a static PDF.',
    metaBelow: true,
    heroImage: '/apps/generations/_generations.png',
    liveUrl: 'https://generations-mu.vercel.app/',
    liveLabel: 'View live proposal',
    stats: [
      { label: 'Utility boxes (pilot)', value: '8–10' },
      { label: 'Youth participants (pilot)', value: '8–16' },
      { label: 'Proposal sections', value: '20' },
      { label: 'Status', value: 'Under review' },
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
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Generations in Color is a proposal to the Alameda Arts Commission for a framework that pairs experienced local artists with young people to collaboratively design and paint public artwork across the city, beginning with utility boxes.',
          'Rather than presenting the idea as a static PDF, I designed and built it as an interactive, narrative-driven website — so commissioners and stakeholders could explore the proposal at their own pace, or follow a guided walkthrough structured like a five-part story.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Public art proposals are usually pitched as documents: a PDF, a deck, a stack of renderings. That format struggles to convey something this initiative depends on — that the process (mentorship, collaboration, shared learning) matters as much as the finished murals.',
        ],
        bullets: [
          "A flat document can't distinguish the framework's five movements — Discover, Learn, Collaborate, Create, Grow — from a list of unordered features",
          'Reviewers skim; a linear deck buries the framing before the ask',
          'The proposal needed to work for two audiences at once: commissioners reviewing it in five minutes, and stakeholders reading it closely',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          'Treating the proposal itself as a designed artifact — not just its contents — was the real product problem.',
        ],
        bullets: [
          'Structuring the 20 sections into five narrative phases let people either browse freely or follow a guided, slide-by-slide story',
          'A "digital companion" concept for the murals themselves — QR-code plaques linking to each artwork\'s story — reinforced the initiative\'s real subject: relationships, not paint',
          'A working print/PDF export meant the interactive site never became a liability for reviewers who still wanted a document',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Structure',
            bullets: [
              'Organized 20 proposal sections into five journey phases: Discover, Learn, Collaborate, Create, Grow',
              'Built both a free-browse mode and a guided, slide-by-slide story mode',
            ],
          },
          {
            title: 'Content System',
            bullets: [
              'Modeled every section, stat, and precedent as structured content data rather than hardcoded copy, so language could be revised without touching layout code',
              'Kept the project name and pilot figures explicitly provisional throughout, since neither was finalized',
            ],
          },
          {
            title: 'Interactive Companion',
            bullets: [
              'Designed a sample artwork-story page previewing the QR-code companion experience proposed for a future phase',
              'Included a community dashboard concept, clearly labeled as illustrative, to show commissioners where the platform could grow',
            ],
          },
          {
            title: 'Presentation-Ready',
            bullets: [
              'Built a print/PDF-formatted version of the full proposal for reviewers who preferred a document',
              'Shipped as a live, shareable site rather than a static file, so it can be updated as the proposal evolves',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro:
          'The proposal itself is organized around the same four pillars it asks the Commission to fund:',
        chain: ['Connect', 'Learn', 'Create', 'Grow'],
      },
      {
        type: 'text',
        heading: 'Status',
        paragraphs: [
          'Generations in Color is a live proposal, not a completed program. The pilot figures — 8–10 utility boxes, 6–8 artists, 8–16 youth participants — are explicitly framed as preliminary, pending collaboration with the Arts Commission, city staff, and community partners.',
        ],
      },
    ],
  },
  {
    slug: 'property-deal-sheet',
    company: 'Property Deal Sheet',
    eyebrow: 'Property Deal Sheet',
    title: 'A Fast First Read on if a Property is Worth Pursuing',
    tagline: 'Real Estate Deal Screening Tool',
    meta: 'Proof of Concept · 2026',
    role: 'Design · Development · User Research',
    description:
      'A quick-read profitability calculator for rental deals — and a proof of concept for comparing AI-assisted development platforms and design systems against a real underwriting problem.',
    metaBelow: true,
    heroImage: '/apps/deal-sheet/dealsheet4.png',
    liveUrl: 'https://v0-grr-calc.vercel.app/',
    liveLabel: 'Try the Tool',
    stats: [
      { label: 'Format', value: 'Proof of Concept' },
      { label: 'Focus', value: 'AI Platform Comparison' },
      { label: 'Inputs', value: '2' },
      { label: 'Live Outputs', value: '4 Metrics' },
    ],
    images: [
      {
        src: '/apps/deal-sheet/property-deal-sheet.png',
        caption: 'An earlier build of the same tool, on a different platform',
      },
    ],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          "Real estate investors use dozens of methods to evaluate a deal, but a few tried-and-true questions can tell you almost immediately whether it's worth a closer look:",
        ],
        bullets: [
          'Does the property generate positive monthly cash flow?',
          "Based on comparable sales, what's the cap rate at this purchase price?",
          'Would this money earn a better return somewhere else? (cash-on-cash return)',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'There are a lot of moving parts to analyze before purchasing real estate — a process known as underwriting. But before running a full analysis, investors need a faster, back-of-the-napkin way to tell whether a property is worth pursuing at all.',
          'The starting point is simple: will this property make money? From there, the goal was to:',
        ],
        bullets: [
          'Start from two inputs — price and income — and estimate the rest',
          'Make the relationship between price, income, and returns easy to see at a glance',
          'Let investors adjust assumptions and immediately see how the numbers move',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "A property either clears the bar or it doesn't — and investors want to know which in seconds, not spreadsheets.",
        ],
        bullets: [
          'Time is the real constraint; most deals get screened before anyone opens a full underwriting model',
          'Investors think in outcomes — cash flow up, returns up — not in financial models',
          'A fast first pass determines whether deeper underwriting is worth the time at all',
        ],
      },
      {
        type: 'text',
        heading: 'About This Build',
        paragraphs: [
          'This tool doubles as a proof of concept. Rather than build another throwaway demo, I used a real underwriting question as the test case to compare several AI-assisted ("vibe-coding") development platforms and design systems against each other — the same tool, built more than once, to see how each platform\'s defaults, constraints, and design language actually held up.',
        ],
      },
    ],
  },
  {
    slug: 'property-development',
    company: 'Property Development',
    eyebrow: 'Property Development',
    title:
      'From Single-Family to Six-Unit: Rebuilding the Boomer Wealth Transfer as Attainable Housing',
    subtitle:
      'A case study in turning a $70–90T generational asset transfer into a scalable infill housing model.',
    tagline: 'Infill Housing Financial Model',
    meta: 'Real Estate Development · 2026',
    role: 'Design · Development · Financial Modeling',
    description:
      'A case study in turning a $70–90T generational asset transfer into a scalable infill housing model — replacing single-family homes with 6–10-unit developments priced for the next generation.',
    metaBelow: true,
    heroImage: '/apps/prop-dev/prop-dev_desktop.png',
    stats: [],
    images: [],
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        paragraphs: [
          'Over the next decade, Baby Boomers will pass on an estimated $70–90 trillion in assets, much of it locked inside single-family homes. At the same time, younger generations are largely priced out of buying in those same markets. This project partners with aging homeowners to replace their single-family home with a small-footprint, higher-density development — 6–10 modular units in place of one — sold at a price the next generation can actually afford.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        bullets: [
          "The wealth is real, but it's stuck in real estate. Most Boomer net worth sits in home equity, about to change hands over the next ~10 years.",
          "Heirs don't want the house. About 70% of the time, heirs sell an inherited home rather than keep it — they want the value, not the property.",
          "The next generation can't buy in. Those same homes are unaffordable at their current single-family price point, in the same neighborhoods.",
        ],
        outro:
          'The result: a huge, predictable wave of aging single-family lots about to hit the market — in exactly the places where housing is least affordable — with no mechanism connecting the two.',
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "The value isn't in the house — it's in the land, and what the land is allowed to become.",
          'One lot that supports a single home today can support 6–10 smaller units instead, priced well below the original home but worth more collectively than one traditional sale. Because the eventual sale or inheritance is predictable (age, location, and asset data are largely knowable in advance), owners can be approached proactively — before the estate sale even happens.',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        items: [
          {
            title: 'Identify Target Properties',
            intro: 'Aging owners, strong land value, favorable zoning.',
          },
          {
            title: 'Partner with the Owner Pre-Transfer',
            intro: 'Offer a better outcome than a traditional sale.',
          },
          {
            title: 'Raise Project-Level Capital',
            intro: 'Sized off a detailed, defensible per-unit cost model.',
          },
          {
            title: 'Tear Down and Rebuild at Higher Density',
            intro: 'Smaller, efficient, all-electric units, 6–10 per lot.',
          },
          {
            title: 'Sell into the Affordability Gap',
            intro: 'Priced below prevailing single-family prices nearby.',
          },
        ],
      },
      {
        type: 'image',
        heading: "Modeling the Owner's Baseline",
        intro:
          'Before an owner will consider a different path, the traditional sale has to be on the table for comparison. This screen models that baseline — current home value, existing debt, and the estimated net proceeds from selling as-is today — including the step-up in cost basis that shelters heirs from capital gains tax on an inherited sale.',
        src: '/apps/prop-dev/prop-dev.PNG',
        alt: 'PropDev mobile screen showing home value, existing debt, and estimated net proceeds from selling as-is today',
        mobile: true,
      },
      {
        type: 'table',
        heading: 'How the Model Works',
        intro:
          'At 6–10 units per lot, small per-unit cost swings compound fast — so pricing has to be built bottom-up, system by system, not estimated per square foot. The attached tool shows that approach applied to one system: all-electric mechanical (HVAC + hot water) for a 6-unit building, broken into equipment, distribution, electrical, and labor, with rebates and tax credits layered in to get to a true net cost.',
        caption: '6-unit example (Alameda, CA, 2025–26 pricing)',
        columns: ['System', 'Project total', 'Per-unit avg.'],
        rows: [
          ['Ducted heat pump HVAC', '$74,500 – $174,000', '~$12,400 – $29,000'],
          ['Heat pump water heaters', '$18,300 – $44,400', '~$3,050 – $7,400'],
          ['Net after incentives', '~$86,000 – $201,000', '~$14,300 – $33,500'],
        ],
        outro:
          'The same bottom-up approach extends to structure, sitework, and soft costs, so the full per-unit price — and what it takes to hit an affordable sale price — can be defended line by line to capital partners and the owners trusting the model with their land.',
      },
      {
        type: 'embed',
        heading: 'Try the Calculator',
        intro:
          'A working version of the partnership deal calculator — model construction financing, a seller-financed note back to the homeowner, and a traditional-build vs. prefab comparison, across the Property, Development, Summary, and Ownership Op tabs.',
        src: '/apps/prop-dev/app',
        height: 1000,
      },
      {
        type: 'text',
        heading: 'Why It Matters',
        paragraphs: [
          'Without unit-level cost precision, "replace one house with six" is just an idea. With it, it\'s a repeatable product: a way to turn illiquid Boomer home equity into housing the next generation can actually buy — with enough margin to fund the next lot.',
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((s) => s.slug === slug);
}
