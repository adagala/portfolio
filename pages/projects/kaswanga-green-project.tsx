import type { NextPage } from 'next';
import Seo from '../../components/Seo';
import Link from 'next/link';

const initiatives = [
  {
    number: '01',
    title: 'Plant & restore',
    body: 'Tree planting in schools, farms, communities and degraded landscapes.',
  },
  {
    number: '02',
    title: 'Teach & mobilise',
    body: 'Practical environmental education shaped around local communities.',
  },
  {
    number: '03',
    title: 'Care & measure',
    body: 'Long-term stewardship, survival monitoring and transparent reporting.',
  },
];

const roadmap = [
  'Registration and governance details',
  'Project locations and photography',
  'Verified impact figures',
  'Partners and participation pathways',
];

const ArrowUpRight = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const SproutMark = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path d="M32 56V29" stroke="currentColor" strokeWidth="3" />
    <path
      d="M32 31C18 30 10 21 9 9c13-1 23 5 23 22Z"
      fill="currentColor"
    />
    <path
      d="M33 39c1-14 9-23 22-24 1 13-7 23-22 24Z"
      fill="currentColor"
      opacity=".62"
    />
  </svg>
);

const KaswangaGreenProject: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#f1efdf] text-[#153a2e] selection:bg-[#d9ff63] selection:text-[#153a2e]">
      <Seo
        title="Kaswanga Green Project"
        description="Brand and website direction for Kaswanga Green Project, an environmental organisation focused on tree planting and community greening."
        path="/projects/kaswanga-green-project"
      />

      <header className="sticky top-0 z-40 border-b border-[#153a2e]/15 bg-[#f1efdf]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#153a2e]/25 transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Henry Adagala
          </Link>
          <p className="hidden text-xs font-bold uppercase tracking-[0.18em] sm:block">
            Project / 2026
          </p>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-[#153a2e]/15">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
            aria-hidden="true"
            style={{
              backgroundImage:
                'repeating-radial-gradient(ellipse at 82% 38%, transparent 0 34px, #153a2e 35px 36px, transparent 37px 58px)',
            }}
          />
          <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-[1440px] px-5 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:px-12">
            <div className="flex flex-col justify-between py-12 sm:py-16 lg:border-r lg:border-[#153a2e]/15 lg:py-20 lg:pr-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#153a2e] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f1efdf]">
                  Web direction
                </span>
                <span className="text-xs font-medium text-[#153a2e]/60">
                  Limited by Guarantee
                </span>
              </div>

              <div className="my-20 lg:my-12">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#337c5c]">
                  Growing greener communities
                </p>
                <h1 className="max-w-5xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.78] tracking-[-0.075em]">
                  Kaswanga{' '}
                  <span className="block italic text-[#337c5c]">Green</span>
                  {' '}Project
                </h1>
              </div>

              <div className="grid gap-8 border-t border-[#153a2e]/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-lg text-base leading-relaxed text-[#153a2e]/75 sm:text-lg">
                  A credible, community-first digital identity for an emerging
                  environmental organisation—designed to grow as its impact does.
                </p>
                <a
                  href="#case-study"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]"
                >
                  Explore the work
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9ff63]">
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
              <div className="absolute inset-x-12 top-16 flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#153a2e]/50">
                <span>01° 06&apos; S</span>
                <span>34° 45&apos; E</span>
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative grid aspect-square w-[72%] place-items-center rounded-full border border-[#153a2e]/20">
                  <div className="absolute inset-[12%] rounded-full border border-dashed border-[#153a2e]/30" />
                  <div className="grid h-[52%] w-[52%] place-items-center rounded-full bg-[#153a2e] text-[#d9ff63] shadow-[0_35px_90px_rgba(21,58,46,.28)]">
                    <SproutMark className="h-1/2 w-1/2" />
                  </div>
                  <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#e46d3f]" />
                  <span className="absolute right-[8%] top-[13%] h-2 w-2 rounded-full bg-[#337c5c]" />
                </div>
              </div>
              <p className="absolute bottom-12 left-12 max-w-[16rem] text-sm leading-relaxed text-[#153a2e]/60">
                Planting trees. Restoring places. Building a culture of care.
              </p>
            </div>
          </div>
        </section>

        <section id="case-study" className="bg-[#153a2e] text-[#f1efdf]">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.65fr_1.35fr] lg:px-12 lg:py-32">
            <div>
              <p className="sticky top-28 font-mono text-xs uppercase tracking-[0.22em] text-[#d9ff63]">
                01 / The opportunity
              </p>
            </div>
            <div>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
                Starting with purpose,
                <span className="text-[#8cac9c]"> not assumptions.</span>
              </h2>
              <div className="mt-14 grid gap-8 border-t border-[#f1efdf]/20 pt-8 md:grid-cols-2">
                <p className="text-lg leading-relaxed text-[#f1efdf]/80">
                  Kaswanga had a clear cause—plant trees and green the
                  environment—but its programmes, proof points and public voice
                  were still taking shape.
                </p>
                <p className="text-lg leading-relaxed text-[#f1efdf]/80">
                  The concept creates a useful foundation today, with a content
                  system that can absorb verified projects, impact data and
                  partnerships tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#153a2e]/15 bg-[#f7f5e9]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#337c5c]">
                02 / Design direction
              </p>
              <div>
                <h2 className="font-serif text-5xl leading-none tracking-[-0.045em] sm:text-7xl">
                  Rooted. Hopeful.
                  <br />Built to be trusted.
                </h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#153a2e]/70">
                  The identity balances the authority expected by partners with
                  the warmth needed to mobilise communities. Earthy neutrals
                  ground the system; vivid new-growth green signals action.
                </p>
              </div>
            </div>

            <div className="mt-20 grid min-h-[390px] gap-3 md:grid-cols-12">
              <div className="flex flex-col justify-between rounded-[2rem] bg-[#153a2e] p-7 text-[#f1efdf] md:col-span-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em]">Forest / #153A2E</span>
                <SproutMark className="h-24 w-24 text-[#d9ff63]" />
              </div>
              <div className="flex flex-col justify-between rounded-[2rem] bg-[#d9ff63] p-7 md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em]">New growth</span>
                <span className="font-serif text-6xl tracking-[-0.06em]">Aa</span>
              </div>
              <div className="grid gap-3 md:col-span-4">
                <div className="flex items-end justify-between rounded-[2rem] bg-[#e46d3f] p-7 text-[#f7f5e9]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">Earth</span>
                  <span className="text-4xl">●</span>
                </div>
                <div className="flex items-end rounded-[2rem] border border-[#153a2e]/20 bg-[#f1efdf] p-7">
                  <p className="max-w-[14rem] font-serif text-3xl italic leading-tight">
                    Growth is a long-term commitment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#d9ff63]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#337c5c]">
                  03 / Experience concept
                </p>
                <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none tracking-[-0.05em] sm:text-7xl">
                  A website designed to turn attention into action.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#153a2e]/70">
                Clear pathways for volunteers, communities and partners—without
                making unverified claims about work still in development.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f7f5e9] p-3 shadow-[0_40px_100px_rgba(21,58,46,.2)] sm:p-5 lg:rounded-[3rem] lg:p-7">
              <div className="overflow-hidden rounded-[1.3rem] border border-[#153a2e]/15 bg-[#f1efdf] lg:rounded-[2rem]">
                <div className="flex items-center justify-between border-b border-[#153a2e]/15 px-5 py-4 sm:px-8">
                  <div className="flex items-center gap-3 font-bold">
                    <SproutMark className="h-7 w-7" />
                    <span className="text-xs uppercase tracking-[0.15em]">Kaswanga Green</span>
                  </div>
                  <div className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.16em] sm:flex">
                    <span>Our work</span><span>Impact</span><span>About</span>
                    <span className="rounded-full bg-[#153a2e] px-5 py-3 text-[#f1efdf]">Get involved</span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-[1.15fr_.85fr]">
                  <div className="p-7 sm:p-12 lg:p-16">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#337c5c]">
                      Community-led environmental action
                    </p>
                    <h3 className="mt-8 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.84] tracking-[-0.065em]">
                      A greener future starts here.
                    </h3>
                    <div className="mt-10 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-3 rounded-full bg-[#153a2e] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#f1efdf]">
                        Get involved <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <span className="rounded-full border border-[#153a2e]/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em]">
                        Our approach
                      </span>
                    </div>
                  </div>
                  <div className="relative min-h-[420px] overflow-hidden bg-[#337c5c]">
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{ backgroundImage: 'radial-gradient(#d9ff63 1px, transparent 1px)', backgroundSize: '18px 18px' }}
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative grid h-64 w-64 place-items-center rounded-full border border-[#d9ff63]/45">
                        <div className="absolute h-[138%] w-[138%] rounded-full border border-[#d9ff63]/20" />
                        <SproutMark className="h-40 w-40 text-[#d9ff63]" />
                      </div>
                    </div>
                    <p className="absolute bottom-7 left-7 max-w-[13rem] text-xs leading-relaxed text-[#f1efdf]/75">
                      Planting is the beginning. Stewardship makes it last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5e9]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#337c5c]">
                04 / Content system
              </p>
              <div>
                <h2 className="font-serif text-5xl leading-none tracking-[-0.045em] sm:text-7xl">
                  A simple story with three active verbs.
                </h2>
                <div className="mt-16 border-t border-[#153a2e]/20">
                  {initiatives.map((initiative) => (
                    <article
                      key={initiative.number}
                      className="grid gap-5 border-b border-[#153a2e]/20 py-8 sm:grid-cols-[80px_1fr_1fr] sm:items-start"
                    >
                      <span className="font-mono text-xs text-[#337c5c]">{initiative.number}</span>
                      <h3 className="font-serif text-3xl tracking-[-0.035em]">{initiative.title}</h3>
                      <p className="text-sm leading-relaxed text-[#153a2e]/65">{initiative.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#f1efdf]/15 bg-[#153a2e] text-[#f1efdf]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="border-b border-[#f1efdf]/15 px-5 py-20 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-28">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#d9ff63]">
                Built for responsible growth
              </p>
              <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[.98] tracking-[-0.045em] sm:text-7xl">
                Publish what is known. Make room for what comes next.
              </h2>
            </div>
            <div className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
              <p className="max-w-lg text-lg leading-relaxed text-[#f1efdf]/70">
                Instead of inventing impact, the first release uses honest,
                useful content. These items become richer as the project team
                obtains and verifies information.
              </p>
              <ol className="mt-12">
                {roadmap.map((item, index) => (
                  <li key={item} className="flex items-center gap-5 border-t border-[#f1efdf]/15 py-5 text-sm">
                    <span className="font-mono text-xs text-[#d9ff63]">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-[#e46d3f] text-[#153a2e]">
          <div className="mx-auto max-w-[1440px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.24em]">Project outcome</p>
            <h2 className="mx-auto mt-8 max-w-5xl font-serif text-5xl leading-[.94] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              A flexible foundation for an organisation ready to grow.
            </h2>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              <Link
                href="/website-proposal/kaswanga-green-project"
                className="group inline-flex items-center gap-4 rounded-full bg-[#153a2e] px-7 py-5 text-xs font-bold uppercase tracking-[0.18em] text-[#f1efdf] transition-transform hover:-translate-y-1"
              >
                Read website proposal
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-[#153a2e]/35 px-7 py-5 text-xs font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-1"
              >
                Back to all work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-3 bg-[#0b2019] px-5 py-7 text-[10px] uppercase tracking-[0.18em] text-[#f1efdf]/55 sm:flex-row sm:px-8 lg:px-12">
        <span>Kaswanga Green Project — Concept direction</span>
        <span>Designed by Henry Adagala</span>
      </footer>
    </div>
  );
};

export default KaswangaGreenProject;
