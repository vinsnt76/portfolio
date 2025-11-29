// src/components/SEO/index.tsx
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Vinnie Baker | Technical Architect & Designer",
  description = "Portfolio of Vinnie Baker, a technical architect specializing in cloud automation, design systems, and full-stack development.",
  keywords = "Technical Architect, Automation Consultant, Designer, Next.js, React, TypeScript, AWS",
  ogImage = "/og-image.png",
}: SEOProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fullOgImageUrl = `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vinnie Baker" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImageUrl} />
    </Head>
  );
};

export default SEO;