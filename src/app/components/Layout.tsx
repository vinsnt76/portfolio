// src/components/Layout.tsx
import Head from 'next/head';
import Header from '@/components/Header';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  title = 'Vincent Baker | Portfolio',
  description = 'Portfolio showcasing projects, skills, and contact information.',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Vincent Baker. All rights reserved.
      </footer>
    </>
  );
}
