// Restored from ref/webview/assets/control-group-B2I1_VJW.js
// Horizontal control cluster wrapper.
// Stage 3: wft→cx; jvt jsx dropped; Tft/Ivt ESM inits dropped.

import type { ReactNode } from "react";
import { cx } from "./cx";

export type ControlGroupProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Bundle export `t` — flex row for grouped controls.
 */
export function ControlGroup({
  children,
  className,
}: ControlGroupProps): ReactNode {
  return (
    <div className={cx("flex items-center gap-2", className)}>{children}</div>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureControlGroupInit(): void {}
