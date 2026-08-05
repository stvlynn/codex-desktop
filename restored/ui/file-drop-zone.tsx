// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `t8o` / export `fT` — drag/drop file target wrapper.

import type { ReactNode } from "react";
import { cx } from "./cx";

export type FileDropZoneProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onFilesDropped?: (files: File[]) => void;
};

/**
 * Structural Stage-3 shell. Full drag-event wiring is restored via
 * `bindFileDropZoneHandlers` when host attaches the production controller.
 */
let DropImpl: (props: FileDropZoneProps) => ReactNode = ({
  children,
  className,
}) => <div className={cx("relative", className)}>{children}</div>;

export function bindFileDropZone(
  impl: (props: FileDropZoneProps) => ReactNode,
): void {
  DropImpl = impl;
}

export function FileDropZone(props: FileDropZoneProps): ReactNode {
  return DropImpl(props);
}
