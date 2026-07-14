import { fetchBlogs, getImageUrl } from '@/lib/blog-api';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in').replace(/\/$/, '');
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Data Storage Solutions';

export const revalidate = 3600;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const posts = await fetchBlogs().catch(() => []);
  const published = posts.filter((post) => !post.noindex);

  const items = published
    .map((post) => {
      const url = `${SITE_URL}/blogs/${post.slug}`;
      const pubDate = post.updatedAt ? new Date(post.updatedAt).toUTCString() : new Date().toUTCString();
      const description = escapeXml(post.metaDescription || post.excerpt || post.title);
      const imageUrl = getImageUrl(post.image, true);

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      ${post.category ? `<category>${escapeXml(post.category)}</category>` : ''}
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg" />` : ''}
      <content:encoded><![CDATA[${post.content || ''}]]></content:encoded>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_URL}/blogs</link>
    <atom:link href="${SITE_URL}/blogs/feed.xml" rel="self" type="application/rss+xml" />
    <description>Data recovery tips, guides and news from ${escapeXml(SITE_NAME)}.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
