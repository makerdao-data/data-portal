import type { AppProps } from 'next/app';
import { ThemeProvider } from '@makerdao-dicu/makerdao-ui';
import Layout from '../components/layout';
import { NextIntlProvider } from 'next-intl';
import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <ThemeProvider>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../i18n/messages/${locale}.json`)).default
    }
  };
}
