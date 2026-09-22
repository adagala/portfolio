import Head from 'next/head';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    name: 'The Kenya Health Informatics Association (KeHIA)',
    description:
      'Online membership and resource platform for health informatics professionals in Kenya.',
    href: 'https://kehia.org',
  },
  {
    name: 'The MidBar Welfare Association (TMBWA)',
    description:
      'Member portal and mutual-support community for the MidBar Welfare Association.',
    href: 'https://app.themidbarwelfareassociation.co.ke',
  },
  {
    name: 'RemoteMore Marketplace',
    description: 'Marketplace connecting remote tech talent with companies.',
    href: 'https://app.remotemore.com',
  },
  {
    name: 'Onima Media',
    description:
      'Music distribution and publishing platform for independent artists and labels.',
    href: 'https://dashboard.onima.co',
  },
  {
    name: 'acelr8',
    description: 'Startup human resource management platform.',
    href: '#',
  },
  {
    name: 'Smart Apartment Data',
    description: 'Property management platform.',
    href: 'https://smartapartmentdata.com/',
  },
  {
    name: 'Delsco Kenya',
    description: 'Human Resource management platform.',
    href: '#',
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
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'GCP',
  'AI',
  'Tailwind',
  'Firebase',
  'Git',
  'Express.js',
];

const contacts = [
  {
    label: 'linkedin.com/in/adagalahenry',
    href: 'https://linkedin.com/in/adagalahenry',
  },
  { label: 'github.com/adagala', href: 'https://github.com/adagala' },
  {
    label: 'twitter.com/adagalahenry',
    href: 'https://twitter.com/adagalahenry',
  },
  {
    label: 'mailto:adagalahenry@gmail.com',
    href: 'mailto:adagalahenry@gmail.com',
  },
];

const menuSections = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'sites', label: 'sites' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
];

const menuItemDelays = [
  'delay-[40ms]',
  'delay-[70ms]',
  'delay-[100ms]',
  'delay-[130ms]',
  'delay-[160ms]',
];

const FloatingSectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6"
    >
      <div
        role="menu"
        aria-hidden={!isOpen}
        className={`absolute bottom-16 right-0 w-48 origin-bottom-right rounded-xl border border-gray-800 bg-gray-900 p-2 font-mono shadow-2xl transition-all ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]'
            : 'pointer-events-none translate-y-2 scale-95 opacity-0 duration-150 ease-in'
        }`}
      >
        {menuSections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-2 py-1.5 text-xs text-gray-200 transition-all hover:bg-gray-800 hover:text-green-400 ${
              isOpen
                ? `translate-y-0 opacity-100 duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuItemDelays[i]}`
                : 'translate-y-1 opacity-0 duration-100 ease-in delay-0'
            }`}
          >
            <span className="text-green-400">$</span> goto {section.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Open section menu"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400 bg-gray-900 font-mono text-sm font-bold text-teal-400 shadow-2xl transition-transform hover:-translate-y-0.5 active:scale-90"
      >
        &gt;_
      </button>
    </div>
  );
};

const CommandHeading = ({ id, command }: { id: string; command: string }) => (
  <a href={`#${id}`} className="group flex w-fit items-center gap-2 text-sm">
    <span className="text-green-400">$</span>
    <span className="text-gray-200 group-hover:underline">{command}</span>
    <span className="text-gray-600 opacity-0 transition-opacity group-hover:opacity-100">
      #
    </span>
  </a>
);

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
                Full-stack developer
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Nairobi, Kenya · @RemoteMore
              </p>
            </div>

            <section id="about" className="my-8 scroll-mt-6">
              <CommandHeading id="about" command="cat about.md" />
              <p className="mt-2 text-xs text-gray-500"># a short bio</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300">
                Building web products end-to-end, front to back, with a soft
                spot for getting the types right. Currently shipping with
                RemoteMore.
              </p>
            </section>

            <section id="contact" className="mt-8 scroll-mt-6">
              <div className="flex items-center gap-2">
                <CommandHeading id="contact" command="contact --list" />
                <span
                  className="inline-block h-4 w-2 animate-pulse bg-green-400 align-middle"
                  aria-hidden="true"
                />
              </div>
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

            <section id="sites" className="my-8 scroll-mt-6">
              <CommandHeading id="sites" command="open ~/sites --live" />
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

            <section id="projects" className="my-8 scroll-mt-6">
              <CommandHeading
                id="projects"
                command="ls ~/projects --sort=recent"
              />
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

            <section id="skills" className="my-8 scroll-mt-6">
              <CommandHeading id="skills" command="cat skills.json" />
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
          </div>
        </div>
      </main>

      <FloatingSectionMenu />

      <footer></footer>
    </div>
  );
};

export default Home;
