// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sV` / export `XI` — icon + title/subtitle + trailing row content.

import type { ReactNode } from "react";
import { cx } from "./cx";

const PADDING: Record<string, string> = {
  default: "px-3 py-2",
  compact: "px-2 py-1.5",
  none: "",
};
const PADDING_TRAILING: Record<string, string> = {
  default: "py-2 pl-3 pr-10",
  compact: "py-1.5 pl-2 pr-8",
  none: "",
};

export type ListRowContentProps = {
  className?: string;
  icon?: ReactNode;
  padding?: keyof typeof PADDING | string;
  reserveTrailingSpace?: boolean;
  subtitle?: ReactNode;
  title?: ReactNode;
  titleTooltip?: string;
  trailing?: ReactNode;
};

export function ListRowContent({
  className,
  icon,
  padding = "default",
  reserveTrailingSpace = false,
  subtitle,
  title,
  titleTooltip,
  trailing,
}: ListRowContentProps): ReactNode {
  const pad =
    (reserveTrailingSpace ? PADDING_TRAILING : PADDING)[padding] ??
    PADDING.default;
  return (
    <span
      className={cx(
        "flex min-w-0 items-center gap-2.5 text-left",
        pad,
        className,
      )}
    >
      {icon}
      <span className="flex min-w-0 flex-1 flex-col">
        <span
          className="text-size-chat truncate font-medium text-token-foreground"
          title={titleTooltip}
        >
          {title}
        </span>
        {subtitle == null ? null : (
          <span className="text-size-chat-sm truncate text-token-text-secondary">
            {subtitle}
          </span>
        )}
      </span>
      {trailing}
    </span>
  );
}
