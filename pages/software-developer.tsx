import { ChevronLeftIcon } from '@heroicons/react/solid';
import { MailIcon, ChatAltIcon } from '@heroicons/react/outline';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const SoftwareDeveloper: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Software Developer Advert</title>
        <meta
          name="description"
          content="Software Developer, Performance Management, Human Resource Management, Job Advert, Angular, Firebase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <div className="">
          <div className="font-bold text-3xl underline mt-3 font-serif">
            FULL STACK DEVELOPER
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Project
            </div>
            <div>Performance Management / Human Resource Management</div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Timeline
            </div>
            <div>3 months (1st May 2022 - 31st July 2022)</div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Qualities
            </div>
            <div>
              <ul className="list-disc ml-4">
                <li>A team player</li>
                <li>A good communicator</li>
                <li>Good understanding of Front End Enterprise Design</li>
                <li>
                  A Human Resources/Performance Management work background would
                  be an added bonus
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Skills
            </div>
            <div className="flex">
              <div className="w-1/2">
                <ul className="list-disc ml-4">
                  <li>Angular</li>
                  <li>NgRx</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="list-disc ml-4">
                  <li>Firebase</li>
                  <li>Git</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              More Info
            </div>
            <div>
              <ul className="list-disc ml-4">
                <li>100% Remote</li>
                <li>Flexible working hours</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Compensation
            </div>
            <div>
              KES 50,000/month (Subject to tasks allocation & completion)
            </div>
          </div>
          <div>
            <div className="font-semibold text-xl uppercase mt-3 font-serif">
              Communication
            </div>
            <div>
              <a href="mailto:adagalahenry@gmail.com">
                <div className="flex items-center hover:opacity-50">
                  <MailIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  ></MailIcon>
                  <span className="ml-2">adagalahenry@gmail.com</span>
                </div>
              </a>
              <div>
                <a
                  href="https://twitter.com/messages/compose?recipient_id=1044264361"
                  target="_blank"
                  className="flex items-center hover:opacity-50"
                >
                  <ChatAltIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  ></ChatAltIcon>
                  <span className="ml-2">
                    twitter.com/adagalahenry (Direct Message Only)
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <Link href="/">
                <a className="flex items-center cursor-pointer justify-center mt-4 hover:opacity-50">
                  <ChevronLeftIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  ></ChevronLeftIcon>
                  <span className="ml-2">Back Home</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDeveloper;
