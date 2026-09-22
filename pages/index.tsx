import Head from 'next/head';
import type { NextPage } from 'next';

const projects = [
  {
    name: 'tmbwa',
    description: 'TypeScript · source on GitHub.',
    href: 'https://github.com/adagala/tmbwa',
  },
  {
    name: 'exchangerateskenya',
    description:
      'Daily exchange rates for popular currencies against the Kenyan shilling.',
    href: 'https://github.com/adagala/exchangerateskenya',
  },
  {
    name: 'molf',
    description: 'TypeScript · source on GitHub.',
    href: 'https://github.com/adagala/molf',
  },
];

const liveSites = [
  {
    name: 'remotemore.com',
    description:
      'Connects companies with vetted remote tech talent, plus global payroll and compliance.',
    href: 'https://remotemore.com/',
  },
  {
    name: 'blog.remotemore.com',
    description:
      'Insights on managing distributed teams — global hiring, compliance and payroll.',
    href: 'https://blog.remotemore.com/',
  },
  {
    name: 'hoa.help',
    description:
      'Condominium association management with 24/7 support and reserve-first budgeting.',
    href: 'https://www.hoa.help/',
  },
  {
    name: 'onima.co',
    description:
      'UK-based music distribution and publishing for independent artists and labels.',
    href: 'https://onima.co/',
  },
  {
    name: 'yegolaw.com',
    description: 'Z.K. Yego Law Offices — legal services firm.',
    href: 'https://www.yegolaw.com/',
  },
  {
    name: 'morganomusundilawfirm.co.ke',
    description: 'Morgan Omusundi Law Firm — legal services firm.',
    href: 'https://morganomusundilawfirm.co.ke/',
  },
  {
    name: 'orblaw.co.ke',
    description: 'ORB Advocates — legal services and representation.',
    href: 'https://orblaw.co.ke/',
  },
  {
    name: 'themidbarwelfareassociation.co.ke',
    description:
      'The MidBar Welfare Association — member portal and mutual-support community.',
    href: 'https://themidbarwelfareassociation.co.ke/',
  },
];

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Firebase',
  'Git',
];

const contacts = [
  { label: 'linkedin.com/in/adagalahenry', href: 'https://linkedin.com/in/adagalahenry' },
  { label: 'github.com/adagala', href: 'https://github.com/adagala' },
  { label: 'twitter.com/adagalahenry', href: 'https://twitter.com/adagalahenry' },
  { label: 'mailto:adagalahenry@gmail.com', href: 'mailto:adagalahenry@gmail.com' },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Henry Adagala</title>
        <meta
          name="description"
          content="Henry Adagala — full-stack software developer in Nairobi, Kenya, working with TypeScript, React and Next.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black flex items-center justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-2xl lg:max-w-5xl xl:max-w-6xl rounded-xl border border-gray-800 bg-gray-950 shadow-2xl overflow-hidden font-mono">
          <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-gray-500">
              henry@portfolio — zsh
            </span>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-16 xl:px-20">
            <p className="text-sm">
              <span className="text-green-400">$</span>{' '}
              <span className="text-gray-200">whoami</span>
            </p>
            <div className="mt-5 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Henry Adagala
              </h1>
              <p className="mt-1 text-sm text-green-400">
                Full-stack developer · TypeScript
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Nairobi, Kenya · @RemoteMore
              </p>
            </div>

            <section className="my-8">
              <p className="text-sm">
                <span className="text-green-400">$</span>{' '}
                <span className="text-gray-200">cat about.md</span>
              </p>
              <p className="mt-2 text-xs text-gray-500"># a short bio</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300">
                Building web products end-to-end, front to back, with a soft
                spot for getting the types right. Currently shipping with
                RemoteMore.
              </p>
            </section>

            <section className="my-8">
              <p className="text-sm">
                <span className="text-green-400">$</span>{' '}
                <span className="text-gray-200">ls ~/projects --sort=recent</span>
              </p>
              <ul className="mt-3 border-l-2 border-gray-800 pl-5">
                {projects.map((project) => (
                  <li key={project.name} className="mb-4 last:mb-0">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-400 hover:text-blue-300"
                    >
                      <span className="text-green-400">▸ </span>
                      {project.name}
                    </a>
                    <p className="ml-4 mt-1 max-w-lg text-xs leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="my-8">
              <p className="text-sm">
                <span className="text-green-400">$</span>{' '}
                <span className="text-gray-200">open ~/sites --live</span>
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-x-10 border-l-2 border-gray-800 pl-5 lg:grid-cols-2">
                {liveSites.map((site) => (
                  <li key={site.name} className="mb-4 last:mb-0">
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-yellow-400 hover:text-yellow-300"
                    >
                      <span className="text-yellow-400">▸ </span>
                      {site.name}
                    </a>
                    <p className="ml-4 mt-1 text-xs leading-relaxed text-gray-400">
                      {site.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="my-8">
              <p className="text-sm">
                <span className="text-green-400">$</span>{' '}
                <span className="text-gray-200">cat skills.json</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-gray-800 bg-gray-900 px-3 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <p className="text-sm">
                <span className="text-green-400">$</span>{' '}
                <span className="text-gray-200">contact --list</span>{' '}
                <span
                  className="inline-block h-4 w-2 animate-pulse bg-green-400 align-middle"
                  aria-hidden="true"
                />
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-200 hover:text-green-400"
                  >
                    <span className="text-gray-500">$ open </span>
                    {contact.label}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
