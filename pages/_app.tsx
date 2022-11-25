import type { AppProps } from 'next/app';
import { ThemeProvider } from '@makerdao-dicu/makerdao-ui';
import Layout from '../components/layout_temp';
import { NextIntlProvider } from 'next-intl';
import { SWRConfig } from 'swr';
import ErrorBoundary from '../components/ErrorBoundary';

async function fetcher(path: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_V1_URL + path, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_V1_TOKEN
    }
  });
  const data = await response.json();

  return data;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <ThemeProvider>
        <SWRConfig
          value={{
            fetcher
          }}>
          <Layout>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </SWRConfig>
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
