// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ub` / export `tnt` — dispatch open-in-browser when href is allowed.

type NormalizeHref = (href: string) => string;
type IsOpenableHref = (href: string) => boolean;
type DispatchOpenInBrowser = (payload: Record<string, unknown>) => void;

let normalizeHref: NormalizeHref | null = null;
let isOpenableHref: IsOpenableHref | null = null;
let dispatchOpenInBrowser: DispatchOpenInBrowser | null = null;

export function setOpenHrefNormalizer(fn: NormalizeHref): void {
  normalizeHref = fn;
}
export function setOpenHrefAllowlist(fn: IsOpenableHref): void {
  isOpenableHref = fn;
}
export function setOpenInBrowserDispatcher(fn: DispatchOpenInBrowser): void {
  dispatchOpenInBrowser = fn;
}

export function openHrefViaBrowserBridge(args: {
  conversationId?: unknown;
  disposition?: unknown;
  href: string;
  hostId?: unknown;
  initiator?: unknown;
  openTarget?: unknown;
  openTargetIntent?: unknown;
  originHostId?: unknown;
  source?: string;
  useExternalBrowser?: unknown;
}): boolean {
  if (isOpenableHref?.(args.href) !== true) return false;
  dispatchOpenInBrowser?.({
    conversationId: args.conversationId,
    disposition: args.disposition,
    hostId: args.hostId,
    initiator: args.initiator,
    openTarget: args.openTarget,
    openTargetIntent: args.openTargetIntent,
    originHostId: args.originHostId,
    source: args.source ?? "manual",
    useExternalBrowser: args.useExternalBrowser,
    url: normalizeHref?.(args.href) ?? args.href,
  });
  return true;
}
