import React, { useState, useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ConsentBanner from '@/components/ConsentBanner';

function MyApp({ Component, pageProps }: AppProps) {
  const [userHasConsented, setUserHasConsented] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after hydration
    setIsClient(true);
    if (window.localStorage.getItem('userConsent') === 'true') {
      setUserHasConsented(true);
    }
  }, []);

  const handleConsent = () => {
    setUserHasConsented(true);
  };

  return (
    <>
      <Component {...pageProps} userHasConsented={userHasConsented} />
      {/* Only render the banner on the client if consent has not been given */}
      {isClient && !userHasConsented && <ConsentBanner onConsent={handleConsent} />}
    </>
  );
}

export default MyApp;