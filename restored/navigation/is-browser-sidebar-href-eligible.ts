// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kfa` / export `lL` — extractFn(Kfa); companions mXt/Vfa/Jfa/hXt/wfa.

import { normalizeLooseHref } from "../utils/normalize-loose-href";
import {
  canCoerceHttpHref,
  isHttpLoopbackOrLocalFileUrl,
  isLikelyNavigableHref,
} from "./coerce-openable-href";

/** True when browser sidebar should offer in-app open for this href (bundle `Kfa` / `lL`). */
export function isBrowserSidebarHrefEligible(args: {
  href: string;
  isBrowserSidebarEnabled: boolean;
}): boolean {
  const normalized = normalizeLooseHref(args.href);
  return (
    args.isBrowserSidebarEnabled &&
    isLikelyNavigableHref(args.href) &&
    (canCoerceHttpHref(args.href) || isHttpLoopbackOrLocalFileUrl(normalized))
  );
}
