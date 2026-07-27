// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lb` / export `ent` — preventDefault + open via browser bridge.

import {
  openHrefViaBrowserBridge,
  setOpenHrefAllowlist,
  setOpenHrefNormalizer,
  setOpenInBrowserDispatcher,
} from "./open-href-via-browser-bridge";
import { resolveLinkOpenBehavior } from "./resolve-link-open-behavior";

type IsAllowedAbsoluteUrl = (href: string) => boolean;
type IsOpenableHref = (href: string) => boolean;

let isAllowedAbsoluteUrl: IsAllowedAbsoluteUrl | null = null;
let isOpenableHref: IsOpenableHref | null = null;

export function setAnchorAbsoluteUrlChecker(fn: IsAllowedAbsoluteUrl): void {
  isAllowedAbsoluteUrl = fn;
}
export function setAnchorOpenableHrefChecker(fn: IsOpenableHref): void {
  isOpenableHref = fn;
}

// Re-export wiring helpers for the underlying bridge.
export {
  setOpenHrefAllowlist,
  setOpenHrefNormalizer,
  setOpenInBrowserDispatcher,
};

export function handleAnchorOpenHref(args: {
  disposition?: unknown;
  event: { preventDefault: () => void };
  href: string;
  hostId?: unknown;
  initiator?: unknown;
  openTarget?: unknown;
  originHostId?: unknown;
  source?: string;
  useExternalBrowser?: unknown;
}): boolean {
  const allowed =
    isAllowedAbsoluteUrl?.(args.href) === true ||
    isOpenableHref?.(args.href) === true;
  if (!allowed) return false;
  const behavior = resolveLinkOpenBehavior({
    defaultDisposition:
      typeof args.disposition === "string" ? args.disposition : "same-tab",
    event: args.event,
    href: args.href,
  });
  args.event.preventDefault();
  return openHrefViaBrowserBridge({
    disposition: behavior.disposition,
    href: args.href,
    hostId: args.hostId,
    initiator: args.initiator,
    openTarget: args.openTarget,
    openTargetIntent: behavior.openTargetIntent,
    originHostId: args.originHostId,
    source: args.source,
    useExternalBrowser: behavior.useExternalBrowser ?? args.useExternalBrowser,
  });
}
