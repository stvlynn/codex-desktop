// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `cwo`) / export `Lk`.

import type { ComponentType, CSSProperties, ReactElement } from "react";

import { cx } from "./cx";

export type CenteredSurfaceIconProps = {
  className?: string;
};

export type CenteredSurfaceIconParts = {
  SurfaceFill: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
  ForegroundGlyph: ComponentType<{ className?: string }>;
};

let parts: CenteredSurfaceIconParts | null = null;

/** Wire layered icon parts once companions land. */
export function setCenteredSurfaceIconParts(
  next: CenteredSurfaceIconParts,
): void {
  parts = next;
}

/**
 * Bundle export `Lk` / internal `cwo`.
 * Centered dual-layer surface icon (fill + foreground).
 */
export function CenteredSurfaceIcon(
  props: CenteredSurfaceIconProps,
): ReactElement {
  if (parts == null) {
    throw new Error("CenteredSurfaceIcon parts are not configured");
  }
  const { className } = props;
  return (
    <span
      aria-hidden="true"
      className={cx("relative flex items-center justify-center", className)}
    >
      <parts.SurfaceFill
        className="absolute inset-0 size-full"
        style={{ color: "var(--color-token-main-surface-primary)" }}
      />
      <parts.ForegroundGlyph className="absolute inset-0 size-full text-token-text-primary" />
    </span>
  );
}
