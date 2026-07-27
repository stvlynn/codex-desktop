// Restored from ref/webview/assets/connector-logo-stack-CKYJhcR5.js
// Overlapping connector/provider logo chips.
// Stage 3: wft→cx; Lvt→react Children; Ivt/jvt/Tft dropped.

import { Children, type ReactNode } from "react";
import { cx } from "../ui/cx";

export type ConnectorLogoStackSize = "small" | "medium";

export type ConnectorLogoStackProps = {
  ariaLabel?: string;
  children?: ReactNode;
  size?: ConnectorLogoStackSize;
};

const SIZE_CLASS: Record<ConnectorLogoStackSize, string> = {
  small: "-ml-1 size-5",
  medium: "-ml-1.5 size-6",
};

/**
 * Bundle export `t` — horizontal overlapping logo stack.
 */
export function ConnectorLogoStack({
  ariaLabel,
  children,
  size = "small",
}: ConnectorLogoStackProps): ReactNode {
  const items = Children.toArray(children);
  if (items.length === 0) return null;

  const chip = (child: ReactNode) => (
    <span
      className={cx(
        "flex items-center justify-center overflow-hidden rounded-md border border-token-border-default bg-token-main-surface-primary first:ml-0 text-black dark:text-gray-200",
        SIZE_CLASS[size],
      )}
    >
      {child}
    </span>
  );

  return (
    <span
      aria-hidden={ariaLabel == null ? true : undefined}
      aria-label={ariaLabel}
      className="flex shrink-0 items-center"
      role={ariaLabel == null ? undefined : "img"}
    >
      {Children.map(items, chip)}
    </span>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureConnectorLogoStackInit(): void {}
