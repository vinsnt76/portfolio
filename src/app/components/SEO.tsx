import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Vinnie Baker - Portfolio',
  description = 'The personal portfolio of Vince Baker, a Technical Architect & Digital Strategist.',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vince Baker's Portfolio" />
    </Head>
  );
};

export default SEO;