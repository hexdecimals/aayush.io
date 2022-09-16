import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import MainLayout from '@/layouts/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
