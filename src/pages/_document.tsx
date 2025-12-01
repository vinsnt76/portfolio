import { Html, Head, Main, NextScript } from 'next/document';

/**
 * A blocking inline script to set the theme before React hydration.
 * - Checks localStorage for a 'theme' value.
 * - If not found, checks the user's system preference.
 * - Applies 'dark' class to the <html> element if the theme is dark.
 * This runs before any content is painted, preventing FOUC (Flash of Unstyled Content).
 */
const themePreloadScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themePreloadScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=Montserrat:wght@700&family=Raleway:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}