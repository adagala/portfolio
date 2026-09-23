import Head from 'next/head';

const SITE_NAME = 'Henry Adagala';
const DEFAULT_DESCRIPTION =
  'Henry Adagala is a full-stack software developer in Nairobi, Kenya, building web products with TypeScript, React and Next.js.';
const SOCIAL_IMAGE_PATH = '/images/henry-adagala-social-card.png';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  imagePath?: string;
  imageAlt?: string;
  profile?: boolean;
};

export default function Seo({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  imagePath = SOCIAL_IMAGE_PATH,
  imageAlt = 'Henry Adagala — Full-stack developer in Nairobi, Kenya',
  profile = false,
}: SeoProps) {
  const pageTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = configuredSiteUrl
    ? `${configuredSiteUrl}${path === '/' ? '' : path}`
    : undefined;
  const imageUrl = configuredSiteUrl
    ? `${configuredSiteUrl}${imagePath}`
    : imagePath;

  const profileSchema = profile && configuredSiteUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Henry Adagala',
        url: configuredSiteUrl,
        jobTitle: 'Full-stack software developer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
        sameAs: [
          'https://linkedin.com/in/adagalahenry',
          'https://github.com/adagala',
          'https://twitter.com/adagalahenry',
        ],
        knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js'],
      }
    : undefined;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Henry Adagala" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#030712" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <meta property="og:type" content={profile ? 'profile' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={imageAlt} />
      {profile ? <meta property="profile:first_name" content="Henry" /> : null}
      {profile ? <meta property="profile:last_name" content="Adagala" /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@adagalahenry" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {profileSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        />
      ) : null}
    </Head>
  );
}
