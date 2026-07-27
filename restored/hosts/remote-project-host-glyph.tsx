// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `dZ`) / export `xS`.

import type { ReactElement, ReactNode } from "react";

export type RemoteProjectHostGlyphPeers = {
  renderLocal: (props: { className?: string }) => ReactNode;
  renderUnknownRemote: (props: { className?: string }) => ReactNode;
  renderRemoteHost: (props: {
    className?: string;
    hostId: unknown;
  }) => ReactNode;
};

let peers: RemoteProjectHostGlyphPeers | null = null;

/** Wire RemoteProjectHostGlyph peers once companions land. */
export function setRemoteProjectHostGlyphPeers(
  next: RemoteProjectHostGlyphPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xS` / internal `dZ`.
 * Render local / unknown / remote host glyph for a project.
 */
export type RemoteProjectHostGlyphProps = {
  className?: string;
  remoteHostId?: unknown;
  isRemoteProject?: boolean;
};

export function RemoteProjectHostGlyph(
  props: RemoteProjectHostGlyphProps,
): ReactElement {
  if (peers == null) {
    throw new Error("RemoteProjectHostGlyph peers are not configured");
  }
  const { className, remoteHostId, isRemoteProject } = props;
  if (!(isRemoteProject !== undefined && isRemoteProject)) {
    return peers.renderLocal({ className }) as ReactElement;
  }
  if (remoteHostId == null) {
    return peers.renderUnknownRemote({ className }) as ReactElement;
  }
  return peers.renderRemoteHost({
    className,
    hostId: remoteHostId,
  }) as ReactElement;
}
