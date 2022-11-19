import type { AppProps } from 'next/app';
import { ThemeProvider } from '@makerdao-dicu/makerdao-ui';
import Layout from '../components/Layout';
import { NextIntlProvider } from 'next-intl';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextIntlProvider>
  );
}
