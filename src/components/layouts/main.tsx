import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Boilerplate</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
