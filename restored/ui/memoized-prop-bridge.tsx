// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `MXi`) / export `HB`.

import type { ReactNode } from "react";

export type MemoizedPropBridgePeers = {
  mapProps: (entries: unknown[]) => unknown;
  defaultMemo: (value: unknown) => unknown;
  useBridgedValue: (atom: unknown, value: unknown) => ReactNode;
  bridgeAtom: unknown;
};

/** Prop entries bridged through a memoized atom. */
export type MemoizedPropBridgeProps = unknown[] | null | undefined;

let peers: MemoizedPropBridgePeers | null = null;

/** Wire memoized prop-bridge peers once companions land. */
export function setMemoizedPropBridgePeers(
  next: MemoizedPropBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `HB` / internal `MXi`.
 * Bridge mapped props through a memoized atom value.
 */
export function MemoizedPropBridge(props: MemoizedPropBridgeProps): ReactNode {
  if (peers == null) {
    throw new Error("MemoizedPropBridge peers are not configured");
  }
  const mapped =
    props == null ? undefined : peers.defaultMemo(peers.mapProps(props));
  return peers.useBridgedValue(peers.bridgeAtom, mapped);
}
