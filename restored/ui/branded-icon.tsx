// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jas` / export `WS` — icon with brand color + fallback.

import type {
  ComponentType,
  CSSProperties,
  ReactElement,
  ReactNode,
} from "react";
import { cloneElement, createElement, isValidElement } from "react";
import { cx } from "./cx";

export type BrandedIconProps = {
  className?: string;
  color?: string | null;
  fallbackIcon?: ReactElement | ComponentType<{ className?: string }>;
  icon?: ReactElement | ComponentType<{ className?: string }> | null;
};

export function BrandedIcon({
  className,
  color,
  fallbackIcon,
  icon,
}: BrandedIconProps): ReactNode {
  const resolved = icon ?? fallbackIcon;
  if (resolved == null) return null;
  const node = isValidElement(resolved)
    ? cloneElement(resolved as ReactElement<{ className?: string }>, {
        className: cx(
          "icon-xs",
          className,
          (resolved.props as { className?: string }).className,
        ),
      })
    : createElement(resolved as ComponentType<{ className?: string }>, {
        className: cx("icon-xs", className),
      });
  const style: CSSProperties | undefined = color
    ? ({ ["--branded-icon-color" as string]: color } as CSSProperties)
    : undefined;
  return (
    <span className="inline-flex shrink-0" style={style}>
      {node}
    </span>
  );
}
