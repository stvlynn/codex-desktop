// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `kza`) / export `JM`.

import type { ReactElement, ReactNode } from "react";
import { useState, type ComponentType } from "react";

export type LazyValueChildrenProviderProps = {
  children?: ReactNode;
  [key: string]: unknown;
};

export type LazyValueChildrenProviderPeers = {
  createInitialValue: () => unknown;
  Provider: ComponentType<{ value: unknown; children?: ReactNode }>;
};

let peers: LazyValueChildrenProviderPeers | null = null;

/** Wire lazy value provider peers once companions land. */
export function setLazyValueChildrenProviderPeers(
  next: LazyValueChildrenProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `JM` / internal `kza`.
 * Provider that lazily initializes a stable value for children.
 */
export function LazyValueChildrenProvider(
  props: LazyValueChildrenProviderProps,
): ReactElement {
  if (peers == null) {
    throw new Error("LazyValueChildrenProvider peers are not configured");
  }
  const { children } = props;
  const [value] = useState(peers.createInitialValue);
  return <peers.Provider value={value}>{children}</peers.Provider>;
}
