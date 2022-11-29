import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import { client, config } from '../config';
import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import { RecoilRoot } from 'recoil';

Bugsnag.start({
  apiKey: config.bugsnagApiKey,
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react')!.createErrorBoundary(React);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel=" icon" href="./Subtract.svg" />
        <title>Hightable POS</title>
      </Head>
      <RecoilRoot>
        <ErrorBoundary>
          <ApolloProvider client={client}>
            <BaseLayout router={router}>
              <Component {...pageProps} />
            </BaseLayout>
          </ApolloProvider>
        </ErrorBoundary>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
