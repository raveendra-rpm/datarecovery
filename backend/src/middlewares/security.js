// Escapes regex special characters from user input before building a
// `new RegExp(...)` — prevents ReDoS and broken search queries.
export const escapeRegex = (str = '') => {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
