import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-1571996475837550" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
