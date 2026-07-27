// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lDo` / export `ck`. Resource resolver left injectable.

import { canonicalizeHttpUrl, parseSafeHttpUrl } from "./parse-safe-http-url";

type ResourceKeyResolver = {
  getResourceKey: (url: URL) => string | null | undefined;
};

let resourceKeyResolver: ResourceKeyResolver | null = null;

/** Bind host-specific resource-key lookup (bundle `BEo`). */
export function bindHttpUrlResourceKeyResolver(resolver: ResourceKeyResolver | null): void {
  resourceKeyResolver = resolver;
}

/** Resource key for a URL, else `url:${canonicalHref}`. */
export function resourceKeyFromHttpUrl(value: string): string | null {
  const url = parseSafeHttpUrl(value);
  if (url == null) return null;
  return (
    resourceKeyResolver?.getResourceKey(url) ??
    `url:${canonicalizeHttpUrl(url)}`
  );
}
