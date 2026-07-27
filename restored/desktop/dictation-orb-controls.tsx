// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Wet`) / export `_lt`.

import type { ReactElement } from "react";

export type DictationOrbControlsPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: DictationOrbControlsPeers | null = null;

/** Wire DictationOrbControls peers once companions land. */
export function setDictationOrbControlsPeers(
  next: DictationOrbControlsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_lt` / internal `Wet`.
 * UI body restored from extractFn(internal `Wet`).
 */
export type DictationOrbControlsProps = {
  [key: string]: unknown;
};

export function DictationOrbControls(
  props: DictationOrbControlsProps,
): ReactElement {
  if (peers == null) {
    throw new Error("DictationOrbControls peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
