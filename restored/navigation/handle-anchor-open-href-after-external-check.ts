// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vXt` / export `Ztt` — extractFn(vXt); companions H_e/J_e via isExternalBrowserHref.

import { handleAnchorOpenHref } from "./handle-anchor-open-href";
import { isExternalBrowserHref } from "./is-external-browser-href";

/** Evaluate external-protocol allowlist, then open via the anchor href bridge. */
export function handleAnchorOpenHrefAfterExternalCheck(args: {
  event: { preventDefault(): void };
  href: string;
  hostId?: unknown;
  initiator?: unknown;
  openTarget?: unknown;
  originHostId?: unknown;
}): boolean {
  const { event, href, hostId, initiator, openTarget, originHostId } = args;
  isExternalBrowserHref(href);
  return handleAnchorOpenHref({
    event,
    href,
    hostId,
    initiator,
    openTarget,
    originHostId,
  });
}
