import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from './../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="nextjs-typescript-tailwind-redux-graphql" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default wrapper.withRedux(MyApp)
