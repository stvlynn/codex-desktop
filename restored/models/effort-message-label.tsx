// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `$Qc`) / export `pu`.

import type { ReactElement, ReactNode } from "react";

export type EffortMessageLabelProps = {
  effort: string | number;
};

export type EffortMessageLabelPeers = {
  FormattedMessage: (props: Record<string, unknown>) => ReactNode;
  messageByEffort: Record<string | number, Record<string, unknown>>;
};

let peers: EffortMessageLabelPeers | null = null;

/** Wire effort message label peers once companions land. */
export function setEffortMessageLabelPeers(
  next: EffortMessageLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pu` / internal `$Qc`.
 * Render an intl message label for a reasoning-effort enum.
 */
export function EffortMessageLabel(
  props: EffortMessageLabelProps,
): ReactElement {
  if (peers == null) {
    throw new Error("EffortMessageLabel peers are not configured");
  }
  const message = peers.messageByEffort[props.effort];
  return peers.FormattedMessage({ ...message }) as ReactElement;
}
