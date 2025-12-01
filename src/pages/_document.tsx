import { Html, Head, Main, NextScript } from 'next/document';

/**
 * A blocking inline script to set the theme before React hydration.
 * - Checks localStorage for a 'theme' value.
 * - If not found, checks the user's system preference via `prefers-color-scheme`.
 * - Adds or removes the 'dark' class on the <html> element accordingly.
 * This runs before any content is painted, preventing FOUC.
 */
const themePreloadScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // Fails gracefully
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=Montserrat:wght@700&family=Raleway:wght@400;500&display=swap"
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