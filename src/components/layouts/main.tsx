import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Navbar } from '@/components/navbar';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { asPath } = useRouter();

  const currentURL = 'https://' + process.env.NEXT_PUBLIC_WEBSITE_URL + asPath;
  const twitterHandle = '@' + process.env.NEXT_PUBLIC_TWITTER_USERNAME;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#93c5fd" key="theme-color" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:url" content={currentURL} key="og-url" />
        <meta property="og:image" content="/main.png" key="og-image" />

        {/* Twitter */}
        <meta name="twitter:image" content="/main.png" key="twitter-image" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta
          name="twitter:creator"
          content={twitterHandle}
          key="twitter-creator"
        />
        <meta name="twitter:site" content={twitterHandle} key="twitter-site" />

        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>

      <Navbar />
      <main className="box">{children}</main>
    </>
  );
};

export default MainLayout;
