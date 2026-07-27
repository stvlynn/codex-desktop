// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `TGr`) / export `qX`.

import type { ReactElement, ReactNode } from "react";

export type GmDerivedLabelPeers = {
  useHostRegistry: () => {
    addRegistryCallback: (listener: () => void) => () => void;
    getForHostId: (hostId: unknown) => unknown;
  };
  useSyncExternalStore: (
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => unknown,
  ) => unknown;
  renderLabel: (value: unknown) => ReactNode;
};

let peers: GmDerivedLabelPeers | null = null;

/** Wire GmDerivedLabel peers once companions land. */
export function setGmDerivedLabelPeers(next: GmDerivedLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `qX` / internal `TGr`.
 * Subscribe to a host-scoped gM registry value via useSyncExternalStore.
 */
export type GmDerivedLabelProps = {
  hostId?: unknown;
  [key: string]: unknown;
};

export function GmDerivedLabel(props: GmDerivedLabelProps): ReactElement {
  if (peers == null) {
    throw new Error("GmDerivedLabel peers are not configured");
  }
  const registry = peers.useHostRegistry();
  const value = peers.useSyncExternalStore(
    (onStoreChange) => registry.addRegistryCallback(onStoreChange),
    () => registry.getForHostId(props.hostId),
  );
  return peers.renderLabel(value) as ReactElement;
}
