// Shared SEO constants used across metadata exports and JSON-LD schema components.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in').replace(/\/$/, '');
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Data Storage Solutions';
export const LOGO_URL = process.env.NEXT_PUBLIC_LOGO_URL || `${SITE_URL}/images/data_recovery_logo.webp`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
