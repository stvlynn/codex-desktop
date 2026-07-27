// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `s1`) / export `Vm`.

import type { ReactElement, ReactNode } from "react";

export type DebugNameProbeProps = {
  debugName: string;
};

export type DebugNameProbePeers = {
  Probe: (props: { debugName: string }) => ReactNode;
};

let peers: DebugNameProbePeers | null = null;

/** Wire debug probe peers once companions land. */
export function setDebugNameProbePeers(next: DebugNameProbePeers): void {
  peers = next;
}

/**
 * Bundle export `Vm` / internal `s1`.
 * Thin wrapper that renders a debug-name probe child.
 */
export function DebugNameProbe(props: DebugNameProbeProps): ReactElement {
  if (peers == null) {
    throw new Error("DebugNameProbe peers are not configured");
  }
  return peers.Probe({ debugName: props.debugName }) as ReactElement;
}
