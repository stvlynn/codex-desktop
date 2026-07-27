// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `pJr`) / export `sX`.

import type { ReactElement } from "react";

export type HostConfigPathToolbarButtonProps = {
  hostId: unknown;
};

export type HostConfigPathToolbarButtonPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  resolveConfigPath: (hostId: unknown) => { configPath: string; label: string };
  openPath: (path: string, hostId: unknown) => void;
  Button: unknown;
  Tooltip: unknown;
};

let peers: HostConfigPathToolbarButtonPeers | null = null;

/** Wire HostConfigPathToolbarButton peers once companions land. */
export function setHostConfigPathToolbarButtonPeers(
  next: HostConfigPathToolbarButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sX` / internal `pJr`.
 * Toolbar button that reveals/opens a host config path.
 */
export function HostConfigPathToolbarButton(
  props: HostConfigPathToolbarButtonProps,
): ReactElement {
  if (peers == null) {
    throw new Error("HostConfigPathToolbarButton peers are not configured");
  }
  const { configPath, label } = peers.resolveConfigPath(props.hostId);
  return peers.createElement(peers.Tooltip, {
    label,
    children: peers.createElement(peers.Button, {
      onClick: () => peers!.openPath(configPath, props.hostId),
      children: label,
    }),
  }) as ReactElement;
}
