// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `vat`) / export `dct`.

import type { ReactElement } from "react";

export type CodexAvatarRootPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: CodexAvatarRootPeers | null = null;

/** Wire CodexAvatarRoot peers once companions land. */
export function setCodexAvatarRootPeers(next: CodexAvatarRootPeers): void {
  peers = next;
}

/**
 * Bundle export `dct` / internal `vat`.
 * UI body restored from extractFn(internal `vat`).
 */
export type CodexAvatarRootProps = {
  [key: string]: unknown;
};

export function CodexAvatarRoot(props: CodexAvatarRootProps): ReactElement {
  if (peers == null) {
    throw new Error("CodexAvatarRoot peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
