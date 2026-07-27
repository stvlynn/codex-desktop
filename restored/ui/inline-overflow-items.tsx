// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$kl` / export `dc` — visible chip/items row with +N overflow.

import type { ReactNode } from "react";
import { cx } from "./cx";

const DEFAULT_VISIBLE = 3;

export type InlineOverflowItem = {
  key?: string;
  node: ReactNode;
};

export type InlineOverflowItemsProps = {
  ariaLabel?: string;
  className?: string;
  items: ReactNode[];
  overflowLabel?: (count: number) => ReactNode;
  statusAriaLive?: "off" | "polite" | "assertive";
  statusLabel?: ReactNode;
  testId?: string;
  onOverflowClick?: () => void;
  maxVisible?: number;
};

export function InlineOverflowItems({
  ariaLabel,
  className,
  items,
  overflowLabel,
  statusAriaLive,
  statusLabel,
  testId,
  onOverflowClick,
  maxVisible = DEFAULT_VISIBLE,
}: InlineOverflowItemsProps): ReactNode {
  if (items.length === 0) return null;
  const visible = items.slice(0, maxVisible);
  const overflow = items.length - visible.length;
  return (
    <section
      aria-label={ariaLabel}
      className={cx("min-w-0 text-sm leading-5", className)}
      data-testid={testId}
    >
      {statusLabel != null ? (
        <span className="sr-only" aria-live={statusAriaLive}>
          {statusLabel}
        </span>
      ) : null}
      <span className="align-middle text-base">
        {visible.map((item, index) => (
          <span key={index} className="relative top-px align-middle text-base">
            {item}
          </span>
        ))}
        {overflow > 0 ? (
          onOverflowClick == null ? (
            <span className="align-middle text-base">
              {overflowLabel?.(overflow) ?? `+${overflow}`}
            </span>
          ) : (
            <button
              type="button"
              className="mr-1.5 cursor-pointer align-middle text-base underline decoration-token-border-heavy underline-offset-2"
              onClick={onOverflowClick}
            >
              {overflowLabel?.(overflow) ?? `+${overflow}`}
            </button>
          )
        ) : null}
      </span>
    </section>
  );
}
