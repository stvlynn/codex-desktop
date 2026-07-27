// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `r3s`) / export `lh`.

import type { ReactElement, ReactNode } from "react";

export type AppOutsidePointerBoundaryProps = Record<string, unknown>;

export type AppOutsidePointerBoundaryPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  useStore: (store: unknown) => unknown;
  useContext: (ctx: unknown) => unknown;
  useGate: (gateId: string) => boolean;
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  rootStore: unknown;
  boundaryContext: unknown;
  attachOutsideListener: (args: Record<string, unknown>) => () => void;
};

let peers: AppOutsidePointerBoundaryPeers | null = null;

/** Wire AppOutsidePointerBoundary peers once companions land. */
export function setAppOutsidePointerBoundaryPeers(
  next: AppOutsidePointerBoundaryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lh` / internal `r3s`.
 * Capture outside pointer-down events for app chrome dismissals.
 */
export function AppOutsidePointerBoundary(props: {
  children?: ReactNode;
  onPointerDownOutside?: (event: unknown) => void;
}): ReactElement {
  if (peers == null) {
    throw new Error("AppOutsidePointerBoundary peers are not configured");
  }
  const store = peers.useStore(peers.rootStore);
  const ctx = peers.useContext(peers.boundaryContext);
  const gated = peers.useGate("4018050594");
  peers.useEffect(() => {
    if (!gated) return;
    return peers!.attachOutsideListener({
      store,
      ctx,
      onPointerDownOutside: props.onPointerDownOutside,
    });
  }, [gated, store, ctx, props.onPointerDownOutside]);
  return peers.createElement("div", {
    "data-outside-pointer-boundary": true,
    children: props.children,
  }) as ReactElement;
}
