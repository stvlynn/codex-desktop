// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Q7e`) / export `Vlt`.

import type { ReactElement, ReactNode } from "react";

export type TooltipDelayProviderProps = Record<string, unknown>;

export type TooltipDelayProviderPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  Provider: unknown;
  defaultDelayDuration: number;
  defaultSkipDelayDuration: number;
  useMemo: <T>(factory: () => T, deps: unknown[]) => T;
};

let peers: TooltipDelayProviderPeers | null = null;

/** Wire TooltipDelayProvider peers once companions land. */
export function setTooltipDelayProviderPeers(
  next: TooltipDelayProviderPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Vlt` / internal `Q7e`.
 * Provide tooltip open/skip delay context to descendants.
 */
export function TooltipDelayProvider(props: {
  delayDuration?: number;
  skipDelayDuration?: number;
  children?: ReactNode;
}): ReactElement {
  if (peers == null) {
    throw new Error("TooltipDelayProvider peers are not configured");
  }
  const delayDuration = props.delayDuration ?? peers.defaultDelayDuration;
  const skipDelayDuration =
    props.skipDelayDuration ?? peers.defaultSkipDelayDuration;
  const value = peers.useMemo(
    () => ({ delayDuration, skipDelayDuration }),
    [delayDuration, skipDelayDuration],
  );
  return peers.createElement(
    peers.Provider,
    { value },
    props.children,
  ) as ReactElement;
}
