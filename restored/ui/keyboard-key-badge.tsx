// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `IFs` / export `L_`.

import type { ReactNode } from "react";
import { cx } from "./cx";

export type KeyboardKeyBadgeProps = {
  children?: ReactNode;
  variant?: "primary" | "secondary" | string;
};

export function KeyboardKeyBadge({
  children,
  variant,
}: KeyboardKeyBadgeProps): ReactNode {
  const tone =
    variant === "primary"
      ? "text-token-dropdown-background"
      : "text-token-foreground group-hover:bg-token-foreground/15";
  return (
    <kbd
      aria-hidden
      className={cx(
        "inline-flex h-4 min-w-4 items-center justify-center rounded-md border-0 bg-current/10 px-1.5 py-0 font-sans text-xs leading-4 text-current shadow-none",
        tone,
      )}
    >
      {children}
    </kbd>
  );
}
