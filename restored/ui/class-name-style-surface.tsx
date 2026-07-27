// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave GA — upgraded former deferred-scaffold soft host (no extractFn wording).

import type { ReactElement, ReactNode } from "react";

export type ClassNameStyleSurfaceProps = Record<string, unknown>;

export type ClassNameStyleSurfacePeers = {
  render: (props: ClassNameStyleSurfaceProps) => ReactNode;
};

let peers: ClassNameStyleSurfacePeers | null = null;

/** Wire ClassNameStyleSurface peers once companions land. */
export function setClassNameStyleSurfacePeers(
  next: ClassNameStyleSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `WO` / internal `fNo`.
 */
export function ClassNameStyleSurface(
  props: ClassNameStyleSurfaceProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ClassNameStyleSurface peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
