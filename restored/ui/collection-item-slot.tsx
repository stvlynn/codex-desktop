// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `No`) / export `N_t`.

import type { ReactElement, ReactNode } from "react";

export type CollectionItemSlotPeers = {
  useContext: (context: unknown) => unknown;
  createContextValue: (args: {
    parent: unknown;
    scope: unknown;
    value: unknown;
  }) => unknown;
  Provider: unknown;
  context: unknown;
  createElement: (
    type: unknown,
    props: { value: unknown },
    children: ReactNode,
  ) => ReactElement;
};

let peers: CollectionItemSlotPeers | null = null;

/** Wire CollectionItemSlot peers once companions land. */
export function setCollectionItemSlotPeers(
  next: CollectionItemSlotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `N_t` / internal `No`.
 * Provide a collection item slot context value to children.
 */
export type CollectionItemSlotProps = {
  children?: ReactNode;
  scope?: unknown;
  value: unknown;
};

export function CollectionItemSlot(
  props: CollectionItemSlotProps,
): ReactElement {
  if (peers == null)
    throw new Error("CollectionItemSlot peers are not configured");
  const { children, scope, value } = props;
  const parent = peers.useContext(peers.context);
  const next = peers.createContextValue({ parent, scope, value });
  return peers.createElement(peers.Provider, { value: next }, children);
}
