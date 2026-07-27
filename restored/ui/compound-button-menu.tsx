// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `G2i`) / export `Jz`.

import type { ReactElement } from "react";

export type CompoundButtonMenuPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: CompoundButtonMenuPeers | null = null;

/** Wire CompoundButtonMenu peers once companions land. */
export function setCompoundButtonMenuPeers(
  next: CompoundButtonMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Jz` / internal `G2i`.
 * UI body restored from extractFn(internal `G2i`).
 */
export type CompoundButtonMenuProps = {
  [key: string]: unknown;
};

export function CompoundButtonMenu(
  props: CompoundButtonMenuProps,
): ReactElement {
  if (peers == null) {
    throw new Error("CompoundButtonMenu peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
