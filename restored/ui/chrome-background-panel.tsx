// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `BHa`) / export `NM`.

import type { ReactElement, ReactNode } from "react";
import { useLocation } from "../boundaries/react-router-navigation";
import { cx } from "./cx";
import { isHotkeyWindowPath } from "./is-hotkey-window-path";

export type ChromeBackgroundPanelProps = {
  background?: "default" | "transparent" | string;
  children?: ReactNode;
  chromeVariant?:
    | "default"
    | "expandedTopTray"
    | "embeddedExpandedTopTray"
    | string;
  className?: string;
};

/**
 * Bundle export `NM` / internal `BHa`.
 * Sticky chrome / tray background wrapping description text.
 */
export function ChromeBackgroundPanel(
  props: ChromeBackgroundPanelProps,
): ReactElement {
  const {
    children,
    className,
    background = "default",
    chromeVariant = "default",
  } = props;
  const location = useLocation();
  const compactTray =
    chromeVariant === "expandedTopTray" ||
    chromeVariant === "embeddedExpandedTopTray" ||
    isHotkeyWindowPath(location.pathname);
  const mergedClassName = cx(
    compactTray
      ? "px-row-x pb-1 text-sm text-token-description-foreground"
      : cx(
          "text-token-description-foreground sticky top-0 z-10 px-row-x py-1 text-sm",
          background === "default"
            ? "bg-token-dropdown-background/95 backdrop-blur-sm"
            : "bg-transparent",
        ),
    className,
  );
  return <div className={mergedClassName}>{children}</div>;
}
