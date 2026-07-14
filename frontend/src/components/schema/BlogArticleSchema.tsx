// BlogPosting JSON-LD schema for /blogs/[slug]
// Combined @graph: BlogPosting + WebPage + BreadcrumbList (Google's
// recommended shape). Set NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SITE_NAME and
// (optionally) NEXT_PUBLIC_LOGO_URL in env — everything else is derived
// from the blog post data passed in as props.

interface BlogArticleSchemaProps {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  author?: string;
  category?: string;
  readingTime?: number;
  dateModified?: string;
  keywords?: string;
  wordCount?: number;
  imageAlt?: string;
  canonicalUrl?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Data Storage Solutions';
const LOGO_URL = process.env.NEXT_PUBLIC_LOGO_URL || `${SITE_URL}/images/data_recovery_logo.webp`;

const PUBLISHER = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    caption: `${SITE_NAME} Logo`,
  },
};

const absoluteImage = (img: string): string => {
  if (!img) return LOGO_URL;
  if (img.startsWith('http')) return img;
  return `${SITE_URL}${img.startsWith('/') ? img : `/${img}`}`;
};

const normalizeDate = (d: string): string => {
  if (!d) return new Date().toISOString().split('T')[0];
  if (/^\d{4}-\d{2}-\d{2}/.test(d)) return d;
  try {
    return new Date(d).toISOString();
  } catch {
    return d;
  }
};

const normalizeKeywords = (k?: string): string[] | undefined => {
  if (!k) return undefined;
  return k.split(',').map((s) => s.trim()).filter(Boolean);
};

const stripHtml = (html: string): string => {
  if (!html) return '';
  let text = html.replace(/<[^>]*>/g, '');
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return text.replace(/\s+/g, ' ').trim();
};

export default function BlogArticleSchema({
  title,
  slug,
  excerpt,
  image,
  date,
  author,
  category,
  readingTime,
  dateModified,
  keywords,
  wordCount,
  imageAlt,
  canonicalUrl,
}: BlogArticleSchemaProps) {
  const articleUrl = canonicalUrl || `${SITE_URL}/blogs/${slug}`;
  const imgUrl = absoluteImage(image);
  const published = normalizeDate(date);
  const modified = normalizeDate(dateModified || date);
  const kws = normalizeKeywords(keywords);
  const cleanExcerpt = stripHtml(excerpt);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        isPartOf: { '@id': `${articleUrl}#webpage` },
        mainEntityOfPage: { '@id': `${articleUrl}#webpage` },
        headline: title,
        name: title,
        description: cleanExcerpt,
        url: articleUrl,
        datePublished: published,
        dateModified: modified,
        image: {
          '@type': 'ImageObject',
          url: imgUrl,
          contentUrl: imgUrl,
          caption: imageAlt || title,
        },
        author: {
          '@type': 'Person',
          name: author || 'Admin',
          url: `${SITE_URL}/`,
        },
        publisher: PUBLISHER,
        ...(category && { articleSection: category }),
        ...(kws && kws.length > 0 && { keywords: kws.join(', ') }),
        ...(readingTime && { timeRequired: `PT${readingTime}M` }),
        ...(wordCount && { wordCount }),
        isPartOfBlog: {
          '@type': 'Blog',
          '@id': `${SITE_URL}/blogs#blog`,
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blogs`,
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${articleUrl}#webpage`,
        url: articleUrl,
        name: title,
        description: cleanExcerpt,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        primaryImageOfPage: { '@type': 'ImageObject', url: imgUrl },
        datePublished: published,
        dateModified: modified,
        breadcrumb: { '@id': `${articleUrl}#breadcrumb` },
        potentialAction: { '@type': 'ReadAction', target: [articleUrl] },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
          ...(category
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: category,
                  item: `${SITE_URL}/blogs?category=${encodeURIComponent(category)}`,
                },
                { '@type': 'ListItem', position: 4, name: title, item: articleUrl },
              ]
            : [{ '@type': 'ListItem', position: 3, name: title, item: articleUrl }]),
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
