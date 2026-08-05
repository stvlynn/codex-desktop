// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Chrome site-details URL helpers for embedded browser settings (bundle `Mve`/`fve`).

import { CHROME_SETTINGS_CONTENT_URL } from "./chrome-internal-urls";

/** Bundle `Mve` — chrome://settings/content/siteDetails */
export const CHROME_SITE_DETAILS_URL = `${CHROME_SETTINGS_CONTENT_URL}/siteDetails`;

/** Parse http(s) origin from a URL string; null when not a web origin. */
export function originFromHttpUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:")
      return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

/**
 * Bundle `fve` / export `Eht` — site-details chrome URL for a site origin.
 * Returns null when `site` is missing or not an http(s) origin.
 */
export function buildChromeSiteDetailsUrl(
  site: string | null | undefined,
): string | null {
  if (site == null) return null;
  const origin = originFromHttpUrl(site);
  if (origin == null) return null;
  return `${CHROME_SITE_DETAILS_URL}?site=${encodeURIComponent(origin)}`;
}
