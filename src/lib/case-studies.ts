export type ContentSection =
  | {
      type: 'text';
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
    }
  | {
      type: 'numbered';
      heading: string;
      intro?: string;
      items: {
        title: string;
        intro?: string;
        bullets?: string[];
      }[];
    }
  | {
      type: 'chain';
      heading: string;
      intro?: string;
      bullets?: string[];
      chain?: string[];
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
    };

export type CaseStudy = {
  slug: string;
  company: string;
  eyebrow: string;
  title: string;
  tagline?: string;
  meta?: string;
  role?: string;
  description: string;
  metaBelow?: boolean;
  heroImage: string;
  stats: { label: string; value: string }[];
  images: { src: string; caption?: string }[];
  sections?: ContentSection[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'get-real-ready',
    company: 'Get Real Ready',
    eyebrow: 'Get Real Ready',
    title:
      'Machine Learning for Real Estate: Increasing Cash Flow and Asset Value',
    tagline: 'Real Estate Analytics Platform',
    meta: 'Responsive Web App · 2025',
    role: 'Product Design · Research · Strategy',
    description:
      'Data-driven valuation models increased cash flow by 16% on a single unit while driving a 5–6% lift in asset value. Scaled across a portfolio, this approach delivered a 46% increase in cash flow and reduced expenses by 4–5% since 2023.',
    metaBelow: true,
    heroImage: '/images/portfolio/grr_mobile2.png',
    stats: [
      { label: 'Cash flow increase (single unit)', value: '16%' },
      { label: 'Asset value lift', value: '5–6%' },
      { label: 'Portfolio cash flow increase', value: '46%' },
      { label: 'Expense reduction', value: '4–5%' },
    ],
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
          'We identified a gap in how real estate investors evaluate property performance and uncovered a repeatable method to increase rental income and asset value.',
          'This led to the development of a data-driven product that helps investors make clearer, faster decisions around property upgrades and pricing.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        paragraphs: [
          'Most investors struggle to translate complex financial metrics—cap rate, cash-on-cash return, IRR—into actionable decisions.',
          'As a result:',
        ],
        bullets: [
          'Opportunities to increase rent and value are often missed',
          'Decision-making is inconsistent and intuition-driven',
          'Existing tools are fragmented and difficult to interpret',
        ],
      },
      {
        type: 'text',
        heading: 'Key Insight',
        paragraphs: [
          "Investors don't want more data—they want clear direction on what to do next.",
          'Additionally:',
        ],
        bullets: [
          'Many decisions are influenced by agents, not just owners',
          'Users prioritize outcomes (rent ↑, value ↑), not financial models',
          'Simplicity drives adoption more than analytical depth',
        ],
      },
      {
        type: 'numbered',
        heading: 'Approach',
        intro:
          'We started with real-world outcomes and worked backward to define the product.',
        items: [
          {
            title: 'Real-World Testing',
            intro: 'Executed renovations across multiple units to validate:',
            bullets: [
              'Rent lift potential',
              'Cost vs return thresholds',
              'Market response',
            ],
          },
          {
            title: 'Market + Data Analysis',
            bullets: [
              'Built datasets across multiple cities',
              'Benchmarked unit quality vs rent performance',
              'Identified patterns between upgrades and revenue',
            ],
          },
          {
            title: 'Concept Iteration',
            intro: 'Tested lightweight concepts before building:',
            bullets: [
              'Gen 1: Asset management tools → low traction',
              'Gen 2: Cash flow optimization → strong validation',
            ],
          },
          {
            title: 'Product Direction',
            intro: 'Shifted toward a decision-support tool that:',
            bullets: [
              'Quantifies upgrade impact',
              'Simplifies financial outputs',
              'Recommends actionable improvements',
            ],
          },
        ],
      },
      {
        type: 'chain',
        heading: 'System Thinking',
        intro: 'This product sits at the intersection of:',
        bullets: [
          'Physical assets (apartment quality)',
          'Market dynamics (rent comps, demand)',
          'Financial performance (cash flow, valuation)',
        ],
        chain: ['Unit Condition', 'Rent Potential', 'Cash Flow', 'Asset Value'],
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
    stats: [
      { label: 'Problem', value: 'Returns' },
      { label: 'Category', value: 'Apparel' },
      { label: 'Approach', value: 'POC' },
      { label: 'Focus', value: 'Confidence' },
    ],
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
    stats: [
      { label: 'User groups studied', value: '2' },
      { label: 'Research method', value: 'Qualitative' },
      { label: 'Deliverables', value: 'Archetypes' },
      { label: 'Outcome', value: 'Product direction' },
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
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((s) => s.slug === slug);
}
