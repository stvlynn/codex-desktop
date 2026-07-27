// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `MGr`) / export `GX`.

import { useSyncExternalStore } from "react";

export type ConfigNoticesApi = {
  addConfigNoticeCallback: (listener: () => void) => () => void;
  getConfigNotices: () => unknown;
};

export type UseConfigNoticesApiPeers = {
  resolveApi: (host?: unknown) => ConfigNoticesApi;
  defaultHost: unknown;
};

let peers: UseConfigNoticesApiPeers | null = null;

/** Wire config notices host once companions land. */
export function setUseConfigNoticesApiPeers(
  next: UseConfigNoticesApiPeers,
): void {
  peers = next;
}

/**
 * Bundle export `GX` / internal `MGr`.
 * Subscribe to host config notices via useSyncExternalStore.
 */
export function useConfigNoticesApi(host?: unknown): unknown {
  if (peers == null) {
    throw new Error("UseConfigNoticesApi peers are not configured");
  }
  const api = peers.resolveApi(host === undefined ? peers.defaultHost : host);
  return useSyncExternalStore(
    (listener) => api.addConfigNoticeCallback(listener),
    () => api.getConfigNotices(),
  );
}
