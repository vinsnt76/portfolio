import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ConsentProvider } from '@/context/ConsentContext';
import ConsentBanner from '@/components/ConsentBanner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConsentProvider>
      <Component {...pageProps} />
      {/*
        The ConsentBanner now lives inside the provider's scope.
        It will use the `useConsent` hook internally to manage its visibility
        and update the global state.
      */}
      <ConsentBanner />
    </ConsentProvider>
  );
}

export default MyApp;