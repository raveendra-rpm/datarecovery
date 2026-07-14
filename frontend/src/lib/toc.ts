// Extracts H2/H3 headings from CMS-authored article HTML to build a table
// of contents, and injects matching `id` attributes into the content so the
// TOC links can jump to them. The content is trusted admin/editor output
// (see blogController.js), not user input, so a regex pass is fine here.

export interface TocEntry {
  level: 2 | 3;
  text: string;
  id: string;
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').trim();

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function buildTableOfContents(html: string): { toc: TocEntry[]; html: string } {
  if (!html) return { toc: [], html };

  const toc: TocEntry[] = [];
  const usedIds = new Set<string>();
  let index = 0;

  const processedHtml = html.replace(
    /<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag: string, attrs: string, inner: string) => {
      const text = stripTags(inner);
      if (!text) return match;

      index += 1;
      let id = slugify(text) || `section-${index}`;
      let unique = id;
      let counter = 2;
      while (usedIds.has(unique)) {
        unique = `${id}-${counter}`;
        counter += 1;
      }
      usedIds.add(unique);

      toc.push({ level: tag.toLowerCase() === 'h2' ? 2 : 3, text, id: unique });

      const attrsWithoutId = attrs.replace(/\sid="[^"]*"/i, '');
      return `<${tag} id="${unique}"${attrsWithoutId}>${inner}</${tag}>`;
    },
  );

  return { toc, html: processedHtml };
}
