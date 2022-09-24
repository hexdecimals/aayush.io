import type { NextPage } from 'next';
import { Seo } from '@/components/seo';

const Links = [
  {
    name: 'GitHub',
    duration: 1,
    url: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  },
  {
    name: 'Twitter',
    duration: 1.3,
    url: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`,
  },
];

const IndexPage: NextPage = () => (
  <>
    <Seo description="Personal website and a blog, mostly related to web technologies." />

    <div className="hero flex h-[calc(100vh-15vh)] flex-col justify-center space-y-3">
      <h1 className="text-4xl font-black sm:text-5xl">Hello World! 👋</h1>

      <p className="text-lg leading-7 tracking-wide md:text-xl">
        I&lsquo;m Aayush, a self-taught fullstack developer with experience in{' '}
        <code>NextJS</code>, <code>ReactJS</code>, <code>Prisma</code>,{' '}
        <code>ExpressJS</code>, etc.
      </p>

      <div className="flex space-x-2">
        {Links.map((link) => (
          <div key={link.name}>
            <a
              className="rounded-lg bg-slate py-2 px-4"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default IndexPage;
