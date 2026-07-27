// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `vAo`) / export `QO`.

import type { ReactElement } from "react";

export type RtlAwareToggleThumbPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: RtlAwareToggleThumbPeers | null = null;

/** Wire RtlAwareToggleThumb peers once companions land. */
export function setRtlAwareToggleThumbPeers(
  next: RtlAwareToggleThumbPeers,
): void {
  peers = next;
}

/**
 * Bundle export `QO` / internal `vAo`.
 * UI body restored from extractFn(internal `vAo`).
 */
export type RtlAwareToggleThumbProps = {
  [key: string]: unknown;
};

export function RtlAwareToggleThumb(
  props: RtlAwareToggleThumbProps,
): ReactElement {
  if (peers == null) {
    throw new Error("RtlAwareToggleThumb peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
