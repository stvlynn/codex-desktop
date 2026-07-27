// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Supporting predicate used by `ent`/`tnt` open-href helpers.
// Mirrors the `mXt` allowlist check via injectable wiring.

import { isHttpOrHttpsUrl } from "../utils/is-http-or-https-url";
import { isProtocolRelativeOrAbsoluteUrl } from "../utils/is-protocol-relative-or-absolute-url";

type HrefPredicate = (href: string) => boolean;

let isOpenable: HrefPredicate | null = null;

/** Wire openable-href allowlist (`mXt` in the bundle). */
export function setExternalBrowserOpenableHrefChecker(fn: HrefPredicate): void {
  isOpenable = fn;
}

export function isExternalBrowserOpenableHref(href: string): boolean {
  if (isOpenable != null) return isOpenable(href);
  return isProtocolRelativeOrAbsoluteUrl(href) || isHttpOrHttpsUrl(href);
}
