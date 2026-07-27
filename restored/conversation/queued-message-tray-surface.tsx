// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `ahs`) / export `Tx`.

import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";

import { cx } from "../ui/cx";

export type QueuedMessageTraySurfaceContextValue = {
  expandedTopTray?: boolean;
};

export const QueuedMessageTraySurfaceContext =
  createContext<QueuedMessageTraySurfaceContextValue>({});

export type QueuedMessageTraySurfaceProps = {
  className?: string;
  children?: ReactNode;
  opaque?: boolean;
  tone?: "normal" | "warning" | string;
};

/**
 * Bundle export `Tx` / internal `ahs`.
 * Surface chrome for queued composer / message tray rows.
 */
export function QueuedMessageTraySurface(
  props: QueuedMessageTraySurfaceProps,
): ReactElement {
  const { className, children, opaque = false, tone = "normal" } = props;
  const { expandedTopTray } = useContext(QueuedMessageTraySurfaceContext);
  const border =
    !expandedTopTray &&
    "border-token-border/80 border-x border-t first:rounded-t-2xl";
  const blur =
    !expandedTopTray && (!opaque || tone === "warning") && "backdrop-blur-sm";
  const warning =
    tone === "warning" && "bg-token-input-validation-warning-background/30";
  const normalBg =
    !expandedTopTray &&
    tone === "normal" &&
    (opaque ? "bg-token-input-background" : "bg-token-input-background/70");
  return (
    <div
      className={cx(
        "relative min-w-0 overflow-clip text-token-foreground",
        border,
        blur,
        warning,
        normalBg,
        className,
      )}
    >
      {children}
    </div>
  );
}
