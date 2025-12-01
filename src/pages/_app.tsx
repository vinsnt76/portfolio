// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // The useTheme hook now handles theme initialization within the Header component
  return <Component {...pageProps} />;
}

export default MyApp;