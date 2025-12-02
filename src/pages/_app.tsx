import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ConsentProvider, useConsent } from '@/context/ConsentContext';
import ConsentBanner from '@/components/ConsentBanner';

function MyAppContent({ Component, pageProps }: AppProps) {
  const { setUserHasConsented } = useConsent();

  const handleConsent = () => {
    setUserHasConsented(true);
    localStorage.setItem('userConsent', 'true');
  };

  return (
    <>
      <Component {...pageProps} />
      <ConsentBanner onConsent={handleConsent} />
    </>
  );
}

function MyApp(props: AppProps) {
  return (
    <ConsentProvider>
      <MyAppContent {...props} />
    </ConsentProvider>
  );
}

export default MyApp;
