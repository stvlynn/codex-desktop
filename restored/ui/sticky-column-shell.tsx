// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Q4s` / export `fh` — sticky header + scrollable body column.

import type { CSSProperties, ReactNode, Ref } from "react";
import { cx } from "./cx";

export type StickyColumnShellProps = {
  header?: ReactNode;
  banner?: ReactNode;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
  containerRef?: Ref<HTMLDivElement>;
  tabIndex?: number;
  style?: CSSProperties;
};

export function StickyColumnShell({
  header,
  banner,
  children,
  className,
  bodyClassName,
  containerRef,
  tabIndex,
  style,
  ...rest
}: StickyColumnShellProps): ReactNode {
  return (
    <div
      ref={containerRef}
      className={cx("relative flex h-full flex-col", className)}
      tabIndex={tabIndex}
      style={style}
      {...rest}
    >
      <div className="sticky top-0 z-10 shrink-0">{header}</div>
      {banner}
      <div className={cx("min-h-0 flex-1 overflow-auto", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
