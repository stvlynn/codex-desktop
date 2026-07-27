// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oir` / export `j0` — centered loading state with optional logo/overlay.

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import { cx } from "./cx";

type LogoProps = { className?: string };

let Logo: ComponentType<LogoProps> | null = null;

export function setPageLoadingStateLogo(impl: ComponentType<LogoProps>): void {
  Logo = impl;
}

export type PageLoadingStateProps = {
  overlay?: boolean;
  fillParent?: boolean;
  showLogo?: boolean;
  debugName?: string;
  children?: ReactNode;
};

export function PageLoadingState({
  overlay = false,
  fillParent = false,
  showLogo = true,
  children,
}: PageLoadingStateProps): ReactNode {
  const [, setReady] = useState(false);
  void setReady;
  const position = overlay
    ? "absolute inset-0 z-10 bg-token-bg-primary/70"
    : fillParent
      ? "absolute inset-0 bg-transparent"
      : "relative size-full bg-transparent";
  return (
    <div className={cx("flex items-center justify-center", position)}>
      {overlay || fillParent ? null : (
        <div className="draggable absolute inset-x-0 top-0 electron:h-toolbar extension:h-toolbar-sm" />
      )}
      <div className="flex flex-col items-center gap-2">
        {showLogo && Logo != null ? <Logo className="size-14" /> : null}
        {children}
      </div>
    </div>
  );
}
