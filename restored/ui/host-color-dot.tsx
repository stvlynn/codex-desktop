// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Colored host status dot (bundle `q$` / export `sh`).
// Color comes from a bound host→color lookup until deep-restored.

import type { CSSProperties, ReactNode } from "react";

import { cx } from "./cx";

export type HostColorDotProps = {
  hostId: string;
  className?: string;
};

let colorForHost: ((hostId: string) => string | undefined) | null = null;

/** Wire host id → CSS color lookup (bundle `Sus`). */
export function bindHostColorLookup(
  lookup: (hostId: string) => string | undefined,
): void {
  colorForHost = lookup;
}

/** No-op Rolldown ESM init for the host-color-dot cluster (export `ch` / `f3s`). */
export function ensureHostColorDotInit(): void {}

/**
 * Small circular host indicator (bundle `q$` / export `sh`).
 */
export function HostColorDot({
  hostId,
  className,
}: HostColorDotProps): ReactNode {
  const color = colorForHost?.(hostId);
  const style: CSSProperties | undefined =
    color == null ? undefined : { color };
  return (
    <span
      aria-hidden
      className={cx(
        "inline-block size-2 shrink-0 rounded-full bg-current",
        className,
      )}
      style={style}
    />
  );
}
