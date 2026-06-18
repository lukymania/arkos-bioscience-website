import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: string;
  schema?: Record<string, unknown>;
}

export function SEO({ title, description, pathname = '', image = '/images/arkos-droplet.png', type = 'website', schema }: SEOProps) {
  const siteUrl = 'https://arkosbio.com';
  const fullUrl = `${siteUrl}${pathname}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = title.includes('Arkos') ? title : `${title} | Arkos Bioscience`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Arkos Bioscience" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arkos Bioscience',
  url: 'https://arkosbio.com',
  logo: 'https://arkosbio.com/images/arkos-droplet.png',
  description: 'Ivy League PhD formulated nano-CBD with 3-8x better absorption than traditional CBD oil. Water-compatible, THC-free, made in USA.',
  sameAs: [
    'https://facebook.com/arkosbioscience',
    'https://instagram.com/arkosbioscience',
  ],
};

export const faqSchema = (questions: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
});
