// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Ofl`) / export `_c`.

import type { ReactElement, ReactNode } from "react";

export type DriveResourceKindIconProps = {
  className?: string;
  resourceKind?: string;
};

export type DriveResourceKindIconPeers = {
  DocumentIcon: (props: { className?: string }) => ReactNode;
  SpreadsheetIcon: (props: { className?: string }) => ReactNode;
  PresentationIcon: (props: { className?: string }) => ReactNode;
  DriveIcon: (props: { className?: string }) => ReactNode;
};

let peers: DriveResourceKindIconPeers | null = null;

/** Wire DriveResourceKindIcon peers once companions land. */
export function setDriveResourceKindIconPeers(
  next: DriveResourceKindIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_c` / internal `Ofl`.
 * Render an icon for a drive resource kind.
 */
export function DriveResourceKindIcon(
  props: DriveResourceKindIconProps,
): ReactElement | null {
  if (peers == null) {
    throw new Error("DriveResourceKindIcon peers are not configured");
  }
  const { className, resourceKind } = props;
  switch (resourceKind) {
    case "document":
      return peers.DocumentIcon({ className }) as ReactElement;
    case "spreadsheet":
      return peers.SpreadsheetIcon({ className }) as ReactElement;
    case "presentation":
      return peers.PresentationIcon({ className }) as ReactElement;
    case "drive":
      return peers.DriveIcon({ className }) as ReactElement;
    default:
      return null;
  }
}
