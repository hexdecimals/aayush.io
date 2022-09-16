import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Code = ({ children }: Props) => (
  <code className="rounded-lg bg-gray-100 p-3 font-mono text-lg">
    {children}
  </code>
);

export { Code };
