// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `SYr`) / export `KY`.

import type { ReactElement, ReactNode } from "react";

export type HostCwdPathLabelProps = {
  hostId: unknown;
  cwd: unknown;
  [key: string]: unknown;
};

export type HostCwdPathLabelPeers = {
  isHostRegisteredAtom: unknown;
  useAtomValue: (atom: unknown, hostId: unknown) => boolean;
  renderLabel: (args: {
    hostId: unknown;
    cwd: unknown;
    isHostRegistered: boolean;
    waitForModelList: true;
  }) => ReactNode;
};

let peers: HostCwdPathLabelPeers | null = null;

/** Wire host cwd path label peers once companions land. */
export function setHostCwdPathLabelPeers(next: HostCwdPathLabelPeers): void {
  peers = next;
}

/**
 * Bundle export `KY` / internal `SYr`.
 * Path label for a host cwd, waiting for model list when registered.
 */
export function HostCwdPathLabel(props: HostCwdPathLabelProps): ReactElement {
  if (peers == null) {
    throw new Error("HostCwdPathLabel peers are not configured");
  }
  const { hostId, cwd } = props;
  const isHostRegistered = peers.useAtomValue(
    peers.isHostRegisteredAtom,
    hostId,
  );
  return peers.renderLabel({
    hostId,
    cwd,
    isHostRegistered,
    waitForModelList: true,
  }) as ReactElement;
}
