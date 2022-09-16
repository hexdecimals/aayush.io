import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
};

const Seo = ({ title = 'Aayush', description }: Props) => (
  <Head>
    <meta name="description" content={description} key="description" />

    {/* Open Graph */}
    <meta property="og:title" content={title} key="og-title" />
    <meta
      property="og:description"
      content={description}
      key="og-description"
    />

    {/* Twitter */}
    <meta name="twitter:title" content={title} key="twitter-title" />
    <meta
      name="twitter:description"
      content={description}
      key="twitter-description"
    />
    <title>{title}</title>
  </Head>
);

export { Seo };
