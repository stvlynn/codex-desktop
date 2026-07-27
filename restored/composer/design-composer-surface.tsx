// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `UNo`) / export `RO`.
// Design composer surface from extractFn(UNo).

import type { ReactElement, ReactNode } from "react";

export type DesignComposerSurfaceProps = Record<string, unknown>;

export type DesignComposerSurfacePeers = {
  render: (props: DesignComposerSurfaceProps) => ReactNode;
};

let peers: DesignComposerSurfacePeers | null = null;

/** Wire DesignComposerSurface peers once companions land. */
export function setDesignComposerSurfacePeers(
  next: DesignComposerSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `RO` / internal `UNo`.
 * Design composer surface from extractFn(UNo).
 */
export function DesignComposerSurface(
  props: DesignComposerSurfaceProps,
): ReactElement {
  if (peers == null) {
    throw new Error("DesignComposerSurface peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
