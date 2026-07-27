// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Xqs`) / export `Vg`.

import type { ReactElement, ReactNode } from "react";

export type OperationStatus = {
  status: "queued" | "running" | "warning" | "success" | "error" | string;
  [key: string]: unknown;
};

export type OperationStatusOverlayProps = {
  operation: OperationStatus;
  onClose?: () => void;
  onRetry?: () => void;
};

export type OperationStatusOverlayParts = {
  QueuedOrRunning: (props: { operation: OperationStatus }) => ReactNode;
  Warning: (props: {
    operation: OperationStatus;
    onClose?: () => void;
  }) => ReactNode;
  Success: (props: { operation: OperationStatus }) => ReactNode;
  Error: (props: {
    operation: OperationStatus;
    onClose?: () => void;
    onRetry?: () => void;
  }) => ReactNode;
};

let parts: OperationStatusOverlayParts | null = null;

/** Wire operation status panes once companions land. */
export function setOperationStatusOverlayParts(
  next: OperationStatusOverlayParts,
): void {
  parts = next;
}

/**
 * Bundle export `Vg` / internal `Xqs`.
 * Status overlay for queued/running/warning/success/error operations.
 */
export function OperationStatusOverlay(
  props: OperationStatusOverlayProps,
): ReactElement {
  if (parts == null) {
    throw new Error("OperationStatusOverlay parts are not configured");
  }
  const { operation, onClose, onRetry } = props;
  if (operation.status === "queued" || operation.status === "running") {
    return (<>{parts.QueuedOrRunning({ operation })}</>) as ReactElement;
  }
  if (operation.status === "warning") {
    return (<>{parts.Warning({ operation, onClose })}</>) as ReactElement;
  }
  if (operation.status === "success") {
    return (<>{parts.Success({ operation })}</>) as ReactElement;
  }
  return (<>{parts.Error({ operation, onClose, onRetry })}</>) as ReactElement;
}
