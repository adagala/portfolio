import type { NextPage } from 'next';
import Seo from '../../components/Seo';
import Link from 'next/link';
import type { ReactNode } from 'react';

const toc = [
  ['overview', 'Overview'],
  ['structure', 'Website structure'],
  ['homepage', 'Homepage content'],
  ['foundation', 'Mission & foundation'],
  ['activities', 'Activities & impact'],
  ['participation', 'Participation'],
  ['content-needs', 'Information needs'],
  ['visual-direction', 'Visual direction'],
  ['features', 'Website features'],
  ['development', 'Development approach'],
  ['investment', 'Investment'],
];

const audience = [
  'Community members',
  'Schools and educational institutions',
  'Volunteers',
  'Environmental organizations',
  'Government agencies',
  'Corporate sponsors',
  'Development partners',
  'Donors and supporters',
  'Farmers and landowners',
  'Members of the general public interested in environmental conservation',
];

const websitePages = [
  {
    number: '01',
    title: 'Home',
    description:
      'Introduces KASWANGA GREEN PROJECT and provides an overview of its work.',
    items: [
      'Main headline and introductory statement',
      'Mission and vision',
      'Overview of activities',
      'Environmental impact statistics',
      'Featured projects',
      'Latest news or activities',
      'Ways to get involved',
      'Partner and sponsor logos',
      'Contact call-to-action',
    ],
  },
  {
    number: '02',
    title: 'About Us',
    description:
      'Explains the organization’s identity, history, purpose, and governance.',
    items: [
      'Organization background',
      'Registration and legal status',
      'Mission',
      'Vision',
      'Core values',
      'Objectives',
      'Leadership, directors, or trustees',
      'Areas of operation',
      'Organizational approach',
    ],
  },
  {
    number: '03',
    title: 'Our Work',
    description:
      'Describes the organization’s principal environmental activities.',
    items: [
      'Tree planting',
      'Reforestation and land restoration',
      'Community greening',
      'School environmental programmes',
      'Seedling production and distribution',
      'Environmental education',
      'Community awareness campaigns',
      'Climate-change awareness',
      'Protection of indigenous trees',
      'Maintenance and monitoring of planted trees',
      'Partnerships with communities and institutions',
    ],
  },
  {
    number: '04',
    title: 'Projects and Impact',
    description:
      'Presents current, completed, and planned projects with verified results.',
    items: [
      'Project name, location, objective, and dates',
      'Number and type of trees planted',
      'Communities or institutions involved',
      'Partners and sponsors',
      'Photographs and videos',
      'Results and achievements',
      'Tree survival and monitoring information',
      'Future plans',
    ],
    note: 'Verified statistics may include trees planted, seedlings distributed, communities reached, schools involved, volunteers engaged, land restored, and active project locations.',
  },
  {
    number: '05',
    title: 'Get Involved',
    description:
      'Explains how people and organizations can support the project.',
    items: [
      'Become a volunteer or join a tree-planting event',
      'Sponsor trees or fund a community project',
      'Donate seedlings or equipment',
      'Provide land for tree planting',
      'Become an institutional partner',
      'Support environmental education',
      'Offer technical expertise',
      'Make a financial contribution, if applicable',
    ],
  },
  {
    number: '06',
    title: 'News and Gallery',
    description:
      'Provides updates and visual evidence of the organization’s activities.',
    items: [
      'Tree-planting events',
      'Community activities',
      'School programmes',
      'Environmental awareness campaigns',
      'Project announcements',
      'Volunteer stories',
      'Partner recognition',
      'Photographs, videos, and progress reports',
    ],
  },
  {
    number: '07',
    title: 'Contact Us',
    description: 'Helps visitors communicate with the organization.',
    items: [
      'Telephone number and email address',
      'Physical or postal address',
      'Office hours',
      'Contact form',
      'Map and directions',
      'Social-media links',
      'General, partnership, and volunteer enquiries',
    ],
  },
];

const values = [
  [
    'Environmental Responsibility',
    'We recognize our responsibility to protect and restore the natural environment.',
  ],
  [
    'Community Participation',
    'We believe lasting environmental change is achieved when communities are actively involved.',
  ],
  [
    'Sustainability',
    'We support solutions that provide long-term environmental and social benefits.',
  ],
  [
    'Integrity',
    'We aim to conduct our activities honestly, responsibly, and transparently.',
  ],
  [
    'Collaboration',
    'We work with individuals, communities, institutions, government agencies, and development partners to achieve shared environmental goals.',
  ],
  [
    'Accountability',
    'We are committed to monitoring our activities, reporting our progress, and using resources responsibly.',
  ],
];

const objectives = [
  'Increase tree cover in communities, schools, farms, and degraded areas.',
  'Restore damaged land and improve local ecosystems.',
  'Promote environmental awareness and responsible use of natural resources.',
  'Encourage community participation in environmental conservation.',
  'Support the production, planting, and care of appropriate tree species.',
  'Build partnerships that strengthen environmental programmes.',
  'Engage young people in tree planting and environmental education.',
  'Monitor planted trees and promote high survival rates.',
  'Contribute to climate resilience and healthier communities.',
];

const activities = [
  [
    'Tree Planting',
    'We organize and support tree-planting activities in communities, schools, farms, institutions, and other suitable locations.',
  ],
  [
    'Community Greening',
    'We help communities identify opportunities to create and improve green spaces that support healthier living environments.',
  ],
  [
    'Environmental Education',
    'We raise awareness about the importance of trees, biodiversity, responsible land use, and environmental conservation.',
  ],
  [
    'Seedling Support',
    'We seek to support the production, sourcing, distribution, and planting of suitable seedlings for different environments.',
  ],
  [
    'Land Restoration',
    'We promote tree planting and other environmentally responsible practices in areas affected by land degradation.',
  ],
  [
    'Partnerships',
    'We collaborate with communities, schools, businesses, public institutions, environmental organizations, and development partners.',
  ],
  [
    'Tree Care and Monitoring',
    'Tree planting is only the beginning. We encourage proper care, monitoring, and reporting to improve tree survival and long-term impact.',
  ],
];

const treeBenefits = [
  'Improve air quality',
  'Reduce soil erosion',
  'Support biodiversity',
  'Provide shade and improve local surroundings',
  'Help protect water sources',
  'Store carbon',
  'Support climate resilience',
  'Improve soil quality',
  'Provide habitats for wildlife',
  'Create greener and healthier communities',
];

const involvement = [
  [
    'Volunteer',
    'Take part in tree planting, environmental education, seedling care, project monitoring, or community mobilization.',
  ],
  [
    'Partner With Us',
    'Organizations and institutions can collaborate with us on community greening, school programmes, restoration activities, and environmental campaigns.',
  ],
  [
    'Sponsor a Project',
    'Support may be directed towards seedlings, planting equipment, transportation, environmental education, project monitoring, or the establishment of green spaces.',
  ],
  [
    'Provide Land or a Planting Site',
    'Schools, communities, institutions, farmers, and landowners may propose suitable locations for tree planting and environmental restoration.',
  ],
  [
    'Share Expertise',
    'Environmental specialists, educators, researchers, and other professionals may contribute knowledge and technical support.',
  ],
];

const callsToAction = [
  'Join a Tree-Planting Activity',
  'Become a Volunteer',
  'Partner With Us',
  'Sponsor a Project',
  'Propose a Planting Site',
  'Support Our Mission',
  'Explore Our Projects',
  'Contact Our Team',
  'Follow Our Progress',
];

const informationNeeds = [
  'Registration number and year established',
  'Country and area of operation',
  'Physical and postal addresses',
  'Organization history and background',
  'Names and roles of directors, trustees, or team members',
  'Telephone number and email address',
  'Social-media accounts',
  'Logo, brand colours, and visual style',
  'Current, completed, and planned projects',
  'Project names and locations',
  'Photographs and videos',
  'Number and type of trees planted',
  'Tree survival and monitoring records',
  'Number of beneficiaries, schools, communities, and volunteers reached',
  'Partner and sponsor information',
  'Testimonials and project stories',
  'Volunteer procedures',
  'Partnership and sponsorship procedures',
  'Donation procedures, if applicable',
  'Bank or digital-payment information, if online contributions will be accepted',
  'Privacy policy',
  'Terms of use',
  'Safeguarding or child-protection information, where activities involve children',
  'Any other required legal notices',
];

const visuals = {
  colours: [
    'Forest green',
    'Leaf green',
    'Earth brown',
    'Warm cream',
    'White',
    'Yellow or orange highlights',
  ],
  images: [
    'Tree-planting activities',
    'Healthy seedlings',
    'Community volunteers',
    'School environmental activities',
    'Restored landscapes',
    'Indigenous trees',
    'Hands holding seedlings',
    'Before-and-after project photographs',
  ],
  style: [
    'Simple and easy to navigate',
    'Mobile-friendly',
    'Accessible and readable',
    'Warm and community-focused',
    'Professional enough for partners and sponsors',
    'Rich in authentic project photography',
    'Clear about measurable environmental impact',
  ],
};

const features = [
  'Mobile-responsive design',
  'Contact and enquiry form',
  'Volunteer registration form',
  'Partnership enquiry form',
  'Project gallery',
  'News and updates section',
  'Project-location map',
  'Social-media links',
  'Newsletter subscription',
  'Downloadable reports',
  'Secure website connection',
  'Basic search-engine optimization',
  'Website visitor analytics',
  'Content-management system for future updates',
  'Donation or sponsorship functionality, when approved and ready',
];

const phases = [
  [
    '01',
    'Foundation',
    [
      'Confirm the organization’s identity and goals',
      'Establish the website structure',
      'Develop the visual direction',
      'Prepare the initial written content',
      'Gather available photographs and organization details',
    ],
  ],
  [
    '02',
    'Design and Development',
    [
      'Design the main pages',
      'Build the website',
      'Add forms and required features',
      'Optimize the website for mobile devices',
      'Add initial projects, images, and contact information',
    ],
  ],
  [
    '03',
    'Review and Launch',
    [
      'Review all content',
      'Verify legal and organizational information',
      'Test forms, links, and mobile layouts',
      'Set up the domain and hosting',
      'Publish the website',
      'Connect visitor analytics and search tools',
    ],
  ],
  [
    '04',
    'Growth',
    [
      'Add new projects and impact statistics',
      'Publish news and event updates',
      'Expand the gallery',
      'Add reports and downloadable resources',
      'Introduce donation or sponsorship tools when ready',
      'Continue improving search visibility and public engagement',
    ],
  ],
];

const pricing = [
  {
    label: 'Website design and development',
    amount: 'KES 30,000.00',
    billing: 'One-time fee',
    items: [
      'Design and build of the pages outlined in this proposal',
      'Forms and recommended website features',
      'Mobile-responsive layouts',
      'Content set-up, testing, and launch',
    ],
  },
  {
    label: 'Website and email hosting',
    amount: 'KES 5,000.00',
    billing: 'Per year',
    items: [
      'Hosting for the website',
      'Email hosting for organization email accounts',
      'Secure website connection',
      'Renewed annually to keep the website and email running',
    ],
  },
];

const domainOptions = [
  {
    domain: 'kaswangagreen.or.ke',
    tag: 'Recommended',
    note: 'The Kenyan domain for non-profit organizations.',
  },
  {
    domain: 'kaswangagreen.org',
    tag: 'Alternative',
    note: 'A widely recognized international domain for organizations.',
  },
  {
    domain: 'kaswangagreenproject.org',
    tag: 'Alternative',
    note: 'Matches the full organization name, but is longer to type and produces longer email addresses.',
  },
];

const emailAccounts = [
  ['info@kaswangagreen.or.ke', 'General enquiries from the public'],
  [
    'volunteer@kaswangagreen.or.ke',
    'Volunteer registrations and event sign-ups',
  ],
  [
    'partnerships@kaswangagreen.or.ke',
    'Sponsors, donors, and institutional partners',
  ],
  [
    'director@kaswangagreen.or.ke',
    'Individual accounts for directors or staff',
  ],
];

const BulletList = ({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) => (
  <ul className={`grid gap-x-8 gap-y-3 ${columns ? 'sm:grid-cols-2' : ''}`}>
    {items.map((item) => (
      <li
        key={item}
        className="flex gap-3 text-[15px] leading-relaxed text-[#29463b]/80"
      >
        <span className="mt-[.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-green-300" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="scroll-mt-24 border-t border-[#173d2e]/15 py-16 sm:py-20"
  >
    <p className="proposal-accent font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#718d27]">
      $ section --
      {eyebrow.toLowerCase().replaceAll(' / ', '-').replaceAll(' ', '-')}
    </p>
    <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.04em] text-[#173d2e] sm:text-5xl">
      {title}
    </h2>
    <div className="mt-10">{children}</div>
  </section>
);

const WebsiteProposal: NextPage = () => {
  return (
    <div
      id="proposal-terminal"
      className="min-h-screen bg-black px-3 py-4 font-mono text-gray-300 selection:bg-green-400 selection:text-black sm:px-5 sm:py-8"
    >
      <Seo
        title="Website Proposal — Kaswanga Green Project"
        description="Website content and structure proposal for Kaswanga Green Project."
        path="/website-proposal/kaswanga-green-project"
      />

      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-2xl">
        <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em]"
            >
              <span className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="hidden text-gray-500 sm:inline">
                henry@portfolio — proposal.md
              </span>
            </Link>
            <Link
              href="/"
              className="text-[10px] text-gray-500 transition-colors hover:text-green-400"
            >
              esc / back
            </Link>
          </div>
        </header>

        <main>
          <section className="border-b border-gray-800 bg-gray-950">
            <div className="grid min-h-125 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_.42fr] lg:px-16 lg:py-20">
              <div className="flex flex-col justify-between">
                <p className="proposal-accent font-mono text-[11px] tracking-[0.12em] text-green-400">
                  $ open website-content-and-structure-proposal.md
                </p>
                <div className="my-16 lg:my-12">
                  <p className="mb-5 text-sm text-gray-500"># Prepared for</p>
                  <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[.98] tracking-[-0.055em] text-white">
                    Kaswanga{' '}
                    <span className="block text-green-400">Green Project</span>
                  </h1>
                </div>
                <p className="max-w-xl text-lg leading-relaxed text-[#173d2e]/65">
                  A practical foundation for a credible, community-focused and
                  future-ready environmental website.
                </p>
              </div>
              <div className="flex flex-col justify-end border-t border-gray-800 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <dl className="grid gap-5 border-t border-[#173d2e]/10 pt-7 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#173d2e]/40">Entity</dt>
                    <dd className="text-right">Limited by Guarantee</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#173d2e]/40">Nature</dt>
                    <dd className="text-right">
                      Tree planting &amp; environmental greening
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#173d2e]/40">Document</dt>
                    <dd className="text-right">Website proposal</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <div className="document-surface grid bg-gray-950 lg:grid-cols-[240px_1fr]">
            <aside className="border-b border-gray-800 bg-gray-900/35 px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-7 lg:py-16">
              <nav
                aria-label="Proposal contents"
                className="lg:sticky lg:top-24"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#173d2e]/45">
                  Contents
                </p>
                <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-1">
                  {toc.map(([id, label], index) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="group flex gap-3 text-xs leading-relaxed text-[#173d2e]/60 hover:text-[#718d27]"
                      >
                        <span className="font-mono text-[10px] text-[#718d27]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="group-hover:underline">{label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="min-w-0 px-6 sm:px-10 lg:px-12 xl:px-16">
              <Section
                id="overview"
                eyebrow="01 / Overview"
                title="A professional home for the project’s mission and impact."
              >
                <div className="grid gap-10 lg:grid-cols-2">
                  <div className="space-y-5 text-lg leading-relaxed text-[#29463b]/80">
                    <p>
                      The website will establish a professional online presence
                      for KASWANGA GREEN PROJECT. It will explain the
                      organization’s mission, showcase its environmental
                      activities, document its impact, and encourage
                      individuals, communities, institutions, and development
                      partners to get involved.
                    </p>
                    <p>
                      The website should present the organization as credible,
                      community-focused, transparent, and committed to long-term
                      environmental conservation.
                    </p>
                  </div>
                  <div className="border-l border-[#173d2e]/20 pl-7 sm:pl-8">
                    <h3 className="font-serif text-2xl">Target audience</h3>
                    <div className="mt-6">
                      <BulletList items={audience} />
                    </div>
                  </div>
                </div>
              </Section>

              <Section
                id="structure"
                eyebrow="02 / Information architecture"
                title="A seven-page structure that guides visitors from awareness to action."
              >
                <div className="divide-y divide-[#173d2e]/15 border-y border-[#173d2e]/15">
                  {websitePages.map((page) => (
                    <details
                      key={page.number}
                      className="group py-6"
                      open={page.number === '01'}
                    >
                      <summary className="flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden">
                        <span className="font-mono text-xs text-[#718d27]">
                          {page.number}
                        </span>
                        <span className="flex-1">
                          <span className="block font-serif text-2xl tracking-[-0.02em]">
                            {page.title}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-[#29463b]/60">
                            {page.description}
                          </span>
                        </span>
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-[#173d2e]/20 text-lg transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="ml-0 mt-6 border-l border-[#173d2e]/15 pl-6 sm:ml-10 sm:pl-8">
                        <BulletList items={page.items} columns />
                        {page.note ? (
                          <p className="mt-6 border-t border-[#173d2e]/10 pt-5 text-sm italic leading-relaxed text-[#29463b]/65">
                            {page.note}
                          </p>
                        ) : null}
                      </div>
                    </details>
                  ))}
                </div>
              </Section>

              <Section
                id="homepage"
                eyebrow="03 / Proposed homepage"
                title="Growing Greener Communities, One Tree at a Time"
              >
                <div className="border-l-2 border-[#607c67] py-2 pl-7 sm:pl-9">
                  <p className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                    KASWANGA GREEN PROJECT is committed to planting trees,
                    restoring green spaces, and encouraging communities to
                    protect the natural environment.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {[
                      'Get Involved',
                      'Explore Our Work',
                      'Partner With Us',
                    ].map((label, index) => (
                      <span
                        key={label}
                        className={`border-b px-1 py-2 text-[11px] font-bold uppercase tracking-[0.16em] ${index === 0 ? 'border-[#173d2e]' : 'border-[#173d2e]/20 text-[#173d2e]/60'}`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 space-y-5 text-lg leading-relaxed text-[#29463b]/80">
                  <h3 className="font-serif text-3xl text-[#173d2e]">
                    About KASWANGA GREEN PROJECT
                  </h3>
                  <p>
                    KASWANGA GREEN PROJECT is an organization limited by
                    guarantee and dedicated to tree planting and environmental
                    greening.
                  </p>
                  <p>
                    We work to restore and protect the environment by planting
                    trees, supporting community participation, promoting
                    environmental awareness, and encouraging responsible care
                    for natural resources.
                  </p>
                  <p>
                    Our work brings together communities, schools, institutions,
                    businesses, volunteers, and development partners to create
                    greener, healthier, and more resilient environments.
                  </p>
                </div>
              </Section>

              <Section
                id="foundation"
                eyebrow="04 / Strategic foundation"
                title="A clear mission, an optimistic vision and values built for trust."
              >
                <div className="grid border-y border-[#173d2e]/15 sm:grid-cols-2">
                  <div className="py-8 sm:border-r sm:pr-9">
                    <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#607c67]">
                      Mission
                    </p>
                    <p className="mt-5 font-serif text-2xl leading-snug">
                      To restore and protect the environment through tree
                      planting, community participation, environmental
                      education, and sustainable land-management practices.
                    </p>
                  </div>
                  <div className="border-t border-[#173d2e]/15 py-8 sm:border-t-0 sm:pl-9">
                    <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#607c67]">
                      Vision
                    </p>
                    <p className="mt-5 font-serif text-2xl leading-snug">
                      A greener, healthier, and more resilient environment for
                      present and future generations.
                    </p>
                  </div>
                </div>
                <h3 className="mt-14 font-serif text-3xl">
                  Proposed core values
                </h3>
                <div className="mt-6 grid border-t border-[#173d2e]/15 sm:grid-cols-2">
                  {values.map(([title, body]) => (
                    <div
                      key={title}
                      className="border-b border-[#173d2e]/15 py-6 sm:pr-8"
                    >
                      <h4 className="font-serif text-xl">{title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-[#29463b]/70">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-14 font-serif text-3xl">
                  Proposed objectives
                </h3>
                <div className="mt-6">
                  <BulletList items={objectives} columns />
                </div>
              </Section>

              <Section
                id="activities"
                eyebrow="05 / Programmes"
                title="What the organization does—and why trees matter."
              >
                <div className="grid border-t border-[#173d2e]/15 sm:grid-cols-2">
                  {activities.map(([title, body], index) => (
                    <article
                      key={title}
                      className={`border-b border-[#173d2e]/15 py-7 sm:pr-8 ${index === activities.length - 1 ? 'sm:col-span-2' : ''}`}
                    >
                      <span className="font-mono text-[10px] text-[#607c67]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#29463b]/70">
                        {body}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="mt-14 grid gap-8 border-y border-[#173d2e]/15 py-8 lg:grid-cols-[.7fr_1.3fr]">
                  <div>
                    <h3 className="font-serif text-3xl">Why trees matter</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#29463b]/65">
                      Trees provide important environmental, social, and
                      economic benefits.
                    </p>
                  </div>
                  <BulletList items={treeBenefits} columns />
                </div>
                <div className="mt-12 border-l-2 border-[#718d27] pl-6 text-lg leading-relaxed text-[#29463b]/75">
                  <h3 className="font-serif text-2xl text-[#173d2e]">
                    Projects and impact
                  </h3>
                  <p className="mt-4">
                    Our projects are designed to create meaningful and lasting
                    environmental benefits. We work with local communities and
                    partner organizations to identify suitable planting areas,
                    select appropriate tree species, organize planting
                    activities, and encourage continued care.
                  </p>
                  <p className="mt-4">
                    As our programmes grow, this section will document project
                    locations, activities, partnerships, achievements, and
                    verified impact.
                  </p>
                </div>
              </Section>

              <Section
                id="participation"
                eyebrow="06 / Participation"
                title="Help us grow a greener future."
              >
                <p className="max-w-3xl text-lg leading-relaxed text-[#29463b]/80">
                  Protecting the environment requires collective action.
                  Individuals, communities, schools, businesses, and
                  institutions can all contribute to the work of KASWANGA GREEN
                  PROJECT.
                </p>
                <div className="mt-10 divide-y divide-[#173d2e]/15 border-y border-[#173d2e]/15">
                  {involvement.map(([title, body], index) => (
                    <div
                      key={title}
                      className="grid gap-3 py-6 sm:grid-cols-[48px_1fr_1.4fr]"
                    >
                      <span className="font-mono text-xs text-[#718d27]">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-xl">{title}</h3>
                      <p className="text-sm leading-relaxed text-[#29463b]/70">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-12 font-serif text-3xl">
                  Suggested calls to action
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {callsToAction.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#173d2e]/20 px-4 py-2 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Section>

              <Section
                id="content-needs"
                eyebrow="07 / Content readiness"
                title="Information to obtain or identify as the project progresses."
              >
                <p className="max-w-3xl text-lg leading-relaxed text-[#29463b]/80">
                  The following information can be gathered, confirmed, or
                  developed during the website project:
                </p>
                <div className="mt-8 border-y border-[#173d2e]/15 py-8">
                  <BulletList items={informationNeeds} columns />
                </div>
                <div className="mt-8 border-l-2 border-[#607c67] py-2 pl-7 sm:pl-9">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                    Important publishing note
                  </p>
                  <p className="mt-4 max-w-4xl text-base leading-relaxed">
                    Details that are not immediately available can be identified
                    and developed as the project progresses. Impact figures,
                    registration information, partnerships, financial details,
                    and legal claims should be verified before publication.
                    Temporary wording such as “Project details coming soon” or
                    “Impact statistics being compiled” may be used until
                    accurate information is available.
                  </p>
                </div>
              </Section>

              <Section
                id="visual-direction"
                eyebrow="08 / Look and feel"
                title="Clean, natural and trustworthy."
              >
                <p className="max-w-3xl text-lg leading-relaxed text-[#29463b]/80">
                  The website should have a clean, natural, and trustworthy
                  appearance.
                </p>
                <div className="mt-10 grid border-y border-[#173d2e]/15 lg:grid-cols-3">
                  {Object.entries(visuals).map(([key, items]) => (
                    <div
                      key={key}
                      className="py-7 lg:border-r lg:border-[#173d2e]/15 lg:px-7 first:pl-0 last:border-r-0"
                    >
                      <h3 className="font-serif text-2xl capitalize">
                        Suggested {key}
                      </h3>
                      <div className="mt-6">
                        <BulletList items={items} />
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 grid grid-cols-6 border border-[#173d2e]/10"
                  aria-label="Suggested colour palette"
                >
                  {[
                    '#173d2e',
                    '#718d27',
                    '#8b5a3c',
                    '#f7f5e9',
                    '#ffffff',
                    '#f0aa61',
                  ].map((colour) => (
                    <span
                      key={colour}
                      className="h-14"
                      style={{ backgroundColor: colour }}
                    >
                      <span className="sr-only">Colour {colour}</span>
                    </span>
                  ))}
                </div>
              </Section>

              <Section
                id="features"
                eyebrow="09 / Functionality"
                title="Recommended website features."
              >
                <div className="grid border-t border-[#173d2e]/15 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex min-h-24 flex-col justify-between border-b border-[#173d2e]/15 py-5 sm:pr-6"
                    >
                      <span className="font-mono text-[10px] text-[#607c67]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-5 text-sm font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section
                id="development"
                eyebrow="10 / Delivery"
                title="A four-phase development approach."
              >
                <p className="max-w-3xl text-lg leading-relaxed text-[#29463b]/80">
                  The website can be developed in phases, allowing the
                  organization’s content and capabilities to grow in a
                  structured way.
                </p>
                <div className="mt-10 grid border-t border-[#173d2e]/15 sm:grid-cols-2">
                  {phases.map(([number, title, items]) => (
                    <article
                      key={number as string}
                      className="border-b border-[#173d2e]/15 py-8 sm:pr-9"
                    >
                      <span className="font-mono text-xs text-[#607c67]">
                        Phase {number as string}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl">
                        {title as string}
                      </h3>
                      <div className="mt-6">
                        <BulletList items={items as string[]} />
                      </div>
                    </article>
                  ))}
                </div>
              </Section>

              <Section
                id="investment"
                eyebrow="11 / Investment"
                title="Development rate and hosting."
              >
                <p className="max-w-3xl text-lg leading-relaxed text-[#29463b]/80">
                  A one-time fee covers designing and building the website.
                  Hosting for the website and email is billed separately each
                  year.
                </p>
                <div className="mt-10 grid border-t border-[#173d2e]/15 sm:grid-cols-2">
                  {pricing.map((plan) => (
                    <article
                      key={plan.label}
                      className="border-b border-[#173d2e]/15 py-8 sm:pr-9"
                    >
                      <span className="font-mono text-xs text-[#607c67]">
                        {plan.billing}
                      </span>
                      <h3 className="mt-4 font-serif text-2xl">{plan.label}</h3>
                      <p className="proposal-accent mt-3 font-mono text-2xl font-bold text-[#718d27]">
                        {plan.amount}
                      </p>
                      <div className="mt-6">
                        <BulletList items={plan.items} />
                      </div>
                    </article>
                  ))}
                </div>
                <div className="mt-12">
                  <h3 className="font-serif text-2xl">
                    Suggested domain names
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#29463b]/80">
                    The domain is the organization’s web address and the ending
                    of its email addresses. The final choice will be confirmed
                    with the organization and registered before launch.
                  </p>
                  <div className="mt-6 grid border-t border-[#173d2e]/15 sm:grid-cols-3">
                    {domainOptions.map((option) => (
                      <article
                        key={option.domain}
                        className="border-b border-[#173d2e]/15 py-6 sm:pr-6"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[.16em] text-[#607c67]">
                          {option.tag}
                        </span>
                        <p className="proposal-accent mt-3 break-all font-mono text-base font-bold text-[#718d27]">
                          {option.domain}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#29463b]/80">
                          {option.note}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-serif text-2xl">
                    Email hosting accounts
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#29463b]/80">
                    Email hosting gives the organization professional email
                    addresses on its own domain instead of personal Gmail or
                    Yahoo accounts. This builds trust with partners and donors,
                    and keeps messages sorted by purpose. For example:
                  </p>
                  <dl className="mt-6 grid border-t border-[#173d2e]/15">
                    {emailAccounts.map(([address, purpose]) => (
                      <div
                        key={address}
                        className="flex flex-col gap-1 border-b border-[#173d2e]/15 py-4 sm:flex-row sm:justify-between sm:gap-6"
                      >
                        <dt className="break-all font-mono text-sm font-bold">
                          {address}
                        </dt>
                        <dd className="text-sm text-[#29463b]/80 sm:text-right">
                          {purpose}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <dl className="mt-8 grid gap-3 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#173d2e]/60">First-year total</dt>
                    <dd className="text-right font-bold">KES 35,000.00</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-[#173d2e]/60">Each following year</dt>
                    <dd className="text-right font-bold">
                      KES 5,000.00 (hosting renewal)
                    </dd>
                  </div>
                </dl>
              </Section>

              <section className="mb-16 border-y border-gray-800 py-10 sm:py-14">
                <p className="proposal-accent text-xs text-green-400">
                  $ cat footer.txt
                </p>
                <p className="mt-12 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
                  Planting trees, restoring green spaces, and working with
                  communities to create a healthier and more sustainable
                  environment.
                </p>
                <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#173d2e]/15 pt-6 text-xs uppercase tracking-[.16em] text-[#173d2e]/45 sm:flex-row">
                  <span>KASWANGA GREEN PROJECT</span>
                  <span>Limited by Guarantee</span>
                </div>
              </section>
            </article>
          </div>
        </main>

        <footer className="border-t border-gray-800 bg-gray-900 px-5 py-5 text-center text-[10px] tracking-[.14em] text-gray-600">
          EOF — website content and structure proposal
        </footer>
      </div>

      <style jsx global>{`
        #proposal-terminal main {
          color: #d1d5db;
        }
        #proposal-terminal main * {
          border-color: #1f2937 !important;
        }
        #proposal-terminal main p,
        #proposal-terminal main li,
        #proposal-terminal main dt,
        #proposal-terminal main dd,
        #proposal-terminal main span {
          color: inherit;
        }
        #proposal-terminal main h1,
        #proposal-terminal main h2,
        #proposal-terminal main h3,
        #proposal-terminal main h4 {
          color: #f3f4f6;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        #proposal-terminal main h1 {
          font-size: clamp(2rem, 5vw, 3.5rem) !important;
          line-height: 1.02 !important;
        }
        #proposal-terminal main h2 {
          font-size: clamp(1.35rem, 3vw, 2rem) !important;
          line-height: 1.15 !important;
          letter-spacing: -0.035em !important;
        }
        #proposal-terminal main h3 {
          font-size: clamp(1.1rem, 2vw, 1.35rem) !important;
          line-height: 1.3 !important;
        }
        #proposal-terminal main h4 {
          font-size: 1rem !important;
          line-height: 1.4 !important;
        }
        #proposal-terminal main p.font-serif {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem) !important;
          line-height: 1.35 !important;
        }
        #proposal-terminal main .font-serif {
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }
        #proposal-terminal main .proposal-accent {
          color: #4ade80;
        }
        #proposal-terminal main aside a {
          color: #d1d5db !important;
        }
        #proposal-terminal main aside a span:first-child {
          color: #86efac !important;
        }
        #proposal-terminal main details summary > span:first-child {
          color: #86efac !important;
        }
        #proposal-terminal main details summary > span:last-child {
          color: #d1d5db !important;
        }
        #proposal-terminal main summary:hover {
          color: #facc15;
        }
        #proposal-terminal main a:hover {
          color: #4ade80;
        }
      `}</style>
    </div>
  );
};

export default WebsiteProposal;
