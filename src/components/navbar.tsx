import Link from 'next/link';
import { MarkGithubIcon } from '@primer/octicons-react';

const Navbar = () => {
  const githubURL =
    'https://github.com/' +
    process.env.NEXT_PUBLIC_GITHUB_USERNAME +
    '/' +
    process.env.NEXT_PUBLIC_GITHUB_REPO;

  return (
    <nav className="sticky top-0 border-b border-slate bg-main bg-opacity-50 backdrop-blur backdrop-filter">
      <div className="box flex items-center justify-between py-5  text-white">
        <div className="text-3xl font-bold text-accent">
          <Link href="/">a.</Link>
        </div>
        <div className="flex items-center space-x-4 font-semibold">
          <Link href="/blog">Blog</Link>
          <a
            className="text-gray hover:text-white"
            href={githubURL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex cursor-pointer">
              <MarkGithubIcon size={20} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
