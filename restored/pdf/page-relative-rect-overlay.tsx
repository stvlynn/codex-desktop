// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `bXs`) / export `dg`.

import type { CSSProperties, ReactElement } from "react";

export type PageRelativeRect = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export type PageRelativeRectOverlayProps = {
  pageSize: { height: number; width: number };
  rect: PageRelativeRect;
  testId?: string;
};

const OVERLAY_BACKGROUND =
  "color-mix(in srgb, var(--color-text-accent, var(--color-accent-blue)) 20%, transparent)";
const OVERLAY_BORDER = "var(--color-text-accent, var(--color-accent-blue))";

/**
 * Bundle export `dg` / internal `bXs`.
 * Percent-positioned dashed rect overlay relative to pageSize.
 */
export function PageRelativeRectOverlay(
  props: PageRelativeRectOverlayProps,
): ReactElement {
  const { pageSize, rect, testId } = props;
  const style: CSSProperties = {
    backgroundColor: OVERLAY_BACKGROUND,
    borderColor: OVERLAY_BORDER,
    borderStyle: "dashed",
    borderWidth: 2,
    height: `${(rect.height / pageSize.height) * 100}%`,
    left: `${(rect.x / pageSize.width) * 100}%`,
    top: `${(rect.y / pageSize.height) * 100}%`,
    width: `${(rect.width / pageSize.width) * 100}%`,
  };
  return (
    <div
      className="pointer-events-none absolute box-border shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]"
      data-testid={testId}
      style={style}
    />
  );
}
