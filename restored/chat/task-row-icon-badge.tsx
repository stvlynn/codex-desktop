// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Compact icon badge with optional tooltip for sidebar task rows (`$Vl` / `po`).

import { cloneElement, type ReactElement, type ReactNode } from "react";

export type TaskRowIconBadgeDescriptor = {
  icon: ReactElement<{ className?: string }>;
  ariaLabel?: string;
  className?: string;
  tooltipContent?: ReactNode | null;
};

export type TaskRowIconBadgeProps = {
  badge: TaskRowIconBadgeDescriptor;
  /** Optional tooltip host (`Xm`). When omitted, the badge renders without a wrapper. */
  renderTooltip?: (args: {
    tooltipContent: ReactNode;
    children: ReactNode;
  }) => ReactNode;
};

function cn(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Renders a 20×20 leading/trailing status glyph for a task row, cloning the
 * supplied icon down to `icon-2xs` and optionally wrapping it in a tooltip.
 */
export function TaskRowIconBadge({
  badge,
  renderTooltip,
}: TaskRowIconBadgeProps) {
  const icon = cloneElement(badge.icon, {
    className: cn("icon-2xs block shrink-0", badge.icon.props.className),
  });

  const badgeNode = (
    <span
      aria-label={badge.ariaLabel}
      className={cn(
        "flex h-5 w-5 items-center justify-center leading-none",
        badge.className,
      )}
    >
      {icon}
    </span>
  );

  if (badge.tooltipContent == null || badge.tooltipContent === "") {
    return badgeNode;
  }

  if (renderTooltip) {
    return renderTooltip({
      tooltipContent: badge.tooltipContent,
      children: badgeNode,
    });
  }

  return badgeNode;
}
