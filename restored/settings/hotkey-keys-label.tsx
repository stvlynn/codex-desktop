// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `Km`) / export `Glt`.

import type { ReactElement, ReactNode } from "react";
import { cx } from "../ui/cx";

export type HotkeyKeysLabelProps = {
  className?: string;
  keysLabel?: ReactNode;
  variant?: "default" | "button" | string;
};

/**
 * Bundle export `Glt` / internal `Km`.
 * Inline `<kbd>` badge for hotkey key labels.
 */
export function HotkeyKeysLabel(props: HotkeyKeysLabelProps): ReactElement {
  const { keysLabel, variant = "default", className } = props;
  const sizeClass =
    variant === "button"
      ? "h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4"
      : "!px-1.5 !py-0.5 !leading-none";
  return (
    <kbd
      className={cx(
        "inline-flex !rounded-md !border-0 !bg-current/10 !font-sans !text-xs !text-current !shadow-none",
        sizeClass,
        className,
      )}
    >
      {keysLabel}
    </kbd>
  );
}
