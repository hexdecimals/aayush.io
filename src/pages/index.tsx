import type { NextPage } from 'next';
import { Code } from '@/components/code';

const IndexPage: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold">
      Welcome to{' '}
      <a className="text-blue-600" href="https://nextjs.org">
        Next.js!
      </a>
    </h1>
    <p className="mt-3 text-2xl">
      Get started by editing <Code>src/pages/index.tsx</Code>
    </p>
  </div>
);

export default IndexPage;
