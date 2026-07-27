// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `dFa`) / export `yN`.

import type { ReactElement, ReactNode } from "react";

export type ElectronHttpsSchemeProviderPeers = {
  electronScheme: unknown;
  renderProviders: (props: Record<string, unknown>) => ReactNode;
};

let peers: ElectronHttpsSchemeProviderPeers | null = null;

/** Wire ElectronHttpsSchemeProvider peers once companions land. */
export function setElectronHttpsSchemeProviderPeers(
  next: ElectronHttpsSchemeProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yN` / internal `dFa`.
 * Provide electron custom-scheme and browser https children.
 */
export type ElectronHttpsSchemeProviderProps = Record<string, unknown>;

export function ElectronHttpsSchemeProvider(
  props: ElectronHttpsSchemeProviderProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ElectronHttpsSchemeProvider peers are not configured");
  }
  return peers.renderProviders({
    ...props,
    electronScheme: peers.electronScheme,
  }) as ReactElement;
}
