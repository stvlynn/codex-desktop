// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `fqo`) / export `sD`.

import type { ReactElement, ReactNode } from "react";

export type StatusToneIconPeers = {
  resolveIcon: (input: { status: unknown; tone: unknown }) => {
    Icon: (props: { className?: string }) => ReactNode;
    iconClassName?: string;
  };
  mergeClassNames: (...parts: Array<string | undefined>) => string;
};

let peers: StatusToneIconPeers | null = null;

/** Wire StatusToneIcon peers once companions land. */
export function setStatusToneIconPeers(next: StatusToneIconPeers): void {
  peers = next;
}

/**
 * Bundle export `sD` / internal `fqo`.
 * Render a status/tone icon with merged class names.
 */
export type StatusToneIconProps = {
  status: unknown;
  className?: string;
  tone?: unknown;
};

export function StatusToneIcon(props: StatusToneIconProps): ReactElement {
  if (peers == null) {
    throw new Error("StatusToneIcon peers are not configured");
  }
  const tone = props.tone === undefined ? "status" : props.tone;
  const { Icon, iconClassName } = peers.resolveIcon({
    status: props.status,
    tone,
  });
  const className = peers.mergeClassNames(props.className, iconClassName);
  return Icon({ className }) as ReactElement;
}
