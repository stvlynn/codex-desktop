// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lra` / export `qL` — inline mention chip (brand color + icon).

import type {
  CSSProperties,
  ComponentType,
  ReactElement,
  ReactNode,
} from "react";
import { cloneElement, createElement, isValidElement } from "react";
import { INLINE_MENTION_GROUP_CLASS } from "./inline-mention-class-names";
import { cx } from "../ui/cx";

export type InlineMentionProps = {
  className?: string;
  children?: ReactNode;
  brandColor?: string | null;
  dataAttributes?: Record<string, unknown>;
  underlineOnHover?: boolean;
  icon?: ReactElement | ComponentType<{ className?: string }>;
  iconClassName?: string;
  iconSlotProps?: Record<string, unknown>;
  interactive?: boolean;
  labelClassName?: string;
  layout?: "inline-flow" | "wrapped-label";
  style?: CSSProperties;
  [key: string]: unknown;
};

function brandStyle(
  brandColor?: string | null,
  style?: CSSProperties,
): CSSProperties {
  if (brandColor == null || brandColor === "") return { ...style };
  return {
    ...style,
    ["--inline-mention-base-color" as string]: brandColor,
    ["--inline-mention-dark-base-color" as string]: `color-mix(in oklch, ${brandColor} 50%, var(--color-token-foreground) 50%)`,
  };
}

export function InlineMention({
  className,
  children,
  brandColor,
  dataAttributes,
  underlineOnHover = false,
  icon,
  iconClassName,
  iconSlotProps,
  interactive = false,
  labelClassName,
  layout = "inline-flow",
  style,
  ...rest
}: InlineMentionProps): ReactNode {
  const iconNode =
    icon == null
      ? null
      : isValidElement(icon)
        ? cloneElement(icon as ReactElement<{ className?: string }>, {
            className: cx(
              "icon-xs",
              iconClassName,
              (icon.props as { className?: string }).className,
            ),
          })
        : createElement(icon as ComponentType<{ className?: string }>, {
            className: cx("icon-xs", iconClassName),
          });

  return (
    <span
      {...rest}
      {...dataAttributes}
      className={cx(
        INLINE_MENTION_GROUP_CLASS,
        "inline-mention-brand-aware font-medium",
        layout === "wrapped-label"
          ? "inline-flex max-w-full items-center gap-1"
          : "inline",
        underlineOnHover &&
          "group-hover/inline-mention:underline group-hover/inline-mention:decoration-dashed",
        interactive && "cursor-interaction",
        className,
      )}
      style={brandStyle(brandColor, style)}
    >
      {iconNode == null ? null : (
        <span
          {...iconSlotProps}
          className={cx(
            "inline-flex shrink-0",
            iconSlotProps?.className as string | undefined,
          )}
        >
          {iconNode}
        </span>
      )}
      <span
        className={cx(
          layout === "inline-flow" && "whitespace-normal",
          labelClassName,
        )}
      >
        {children}
      </span>
    </span>
  );
}
