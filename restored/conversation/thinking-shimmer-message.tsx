// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `voc`) / export `xp`.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

import { cx } from "../ui/cx";

export type ThinkingShimmerMessageProps = {
  className?: string;
  message?: ReactNode;
  [key: string]: unknown;
};

export type ThinkingShimmerMessageParts = {
  Shimmer: (props: {
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }) => ReactElement;
};

let parts: ThinkingShimmerMessageParts | null = null;

/** Wire shimmer surface once companions land. */
export function setThinkingShimmerMessageParts(
  next: ThinkingShimmerMessageParts,
): void {
  parts = next;
}

/**
 * Bundle export `xp` / internal `voc`.
 * Placeholder shimmer shown while the assistant is thinking.
 */
export function ThinkingShimmerMessage(
  props: ThinkingShimmerMessageProps,
): ReactElement {
  if (parts == null) {
    throw new Error("ThinkingShimmerMessage parts are not configured");
  }
  const { className, message, ...rest } = props;
  const mergedClassName = cx(
    "text-size-chat leading-[calc(var(--codex-chat-font-size)_+_8px)] select-none truncate",
    className,
  );
  const content = message ?? (
    <FormattedMessage
      id="thinkingShimmer.default"
      defaultMessage="Thinking"
      description="Default placeholder shown while the assistant is thinking"
    />
  );
  return (
    <parts.Shimmer className={mergedClassName} {...rest}>
      {content}
    </parts.Shimmer>
  );
}
