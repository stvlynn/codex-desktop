// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `n1l`) / export `wi`.
// Heavy rate-limit row/upsell peers bind via setRateLimitsUsagePanelParts.

import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "react-intl";

export type RateLimitSnapshot = {
  limitName?: string | null;
  remainingPercent?: number;
  snapshot?: unknown;
  [key: string]: unknown;
};

export type RateLimitsUsagePanelProps = {
  rateLimits?: RateLimitSnapshot[];
  activeLimitName?: string | null;
  planType?: unknown;
  suppressUpsell?: boolean;
  selectedModel?: unknown;
  availableRateLimitResetCount?: number;
  onRateLimitResetClick?: () => void;
  onRequestLimitIncreaseClick?: () => void;
  onPlanUpgradeClick?: () => void;
  isLoading?: boolean;
  showLearnMore?: boolean;
  layout?: "default" | "compact" | string;
};

export type RateLimitsUsagePanelParts = {
  render: (props: RateLimitsUsagePanelProps) => ReactNode;
};

let parts: RateLimitsUsagePanelParts | null = null;

/** Wire full rate-limit rows / upsell once companions land. */
export function setRateLimitsUsagePanelParts(next: RateLimitsUsagePanelParts): void {
  parts = next;
}

/**
 * Bundle export `wi` / internal `n1l`.
 * Rate limits / plan usage panel with a real Stage-3 scaffold.
 */
export function RateLimitsUsagePanel(props: RateLimitsUsagePanelProps): ReactElement | null {
  if (parts != null) {
    return parts.render(props) as ReactElement | null;
  }
  const {
    rateLimits = [],
    availableRateLimitResetCount = 0,
    isLoading = false,
    layout = "default",
    onRateLimitResetClick,
    onPlanUpgradeClick,
    onRequestLimitIncreaseClick,
  } = props;
  if (
    !isLoading &&
    rateLimits.length === 0 &&
    availableRateLimitResetCount === 0
  ) {
    return null;
  }
  const compact = layout === "compact";
  return (
    <div className="flex flex-col text-sm">
      {isLoading ? (
        <div className="px-[var(--padding-row-x)] py-2 text-token-description-foreground">
          <FormattedMessage
            id="composer.mode.rateLimit.loading"
            defaultMessage="Loading usage…"
            description="Loading state for the rate limit summary submenu"
          />
        </div>
      ) : (
        <>
          <div className="px-[var(--padding-row-x)] py-1 font-medium">
            <FormattedMessage
              id="composer.mode.rateLimit.heading"
              defaultMessage="Usage remaining"
              description="Rate limit summary heading"
            />
          </div>
          <div
            className={
              compact
                ? "grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-1.5 px-[var(--padding-row-x)] py-1"
                : "grid grid-cols-[auto_1fr] gap-x-16 gap-y-1.5 px-[var(--padding-row-x)] py-1"
            }
          >
            {rateLimits.map((item, index) => (
              <div
                key={`${item.limitName ?? "default"}-${index}`}
                className="contents"
              >
                <span className="truncate text-token-description-foreground">
                  {item.limitName ?? "Limit"}
                </span>
                <span className="whitespace-nowrap text-token-input-placeholder-foreground opacity-60">
                  {item.remainingPercent != null
                    ? `${Math.round(item.remainingPercent)}%`
                    : "—"}
                </span>
              </div>
            ))}
          </div>
          {onRequestLimitIncreaseClick != null || onPlanUpgradeClick != null ? (
            <div className="flex flex-col gap-1 px-[var(--padding-row-x)] py-1">
              {onRequestLimitIncreaseClick != null ? (
                <button
                  type="button"
                  className="text-left text-token-text-link-foreground"
                  onClick={onRequestLimitIncreaseClick}
                >
                  Request limit increase
                </button>
              ) : null}
              {onPlanUpgradeClick != null ? (
                <button
                  type="button"
                  className="text-left text-token-text-link-foreground"
                  onClick={onPlanUpgradeClick}
                >
                  Upgrade plan
                </button>
              ) : null}
            </div>
          ) : null}
          {availableRateLimitResetCount > 0 ? (
            <button
              type="button"
              className="px-[var(--padding-row-x)] py-2 text-left"
              onClick={onRateLimitResetClick}
            >
              <FormattedMessage
                id="composer.mode.rateLimit.resetsAvailable"
                defaultMessage="{availableRateLimitResetCount, plural, one {# available reset} other {# available resets}}"
                description="Menu item for opening available rate limit resets"
                values={{ availableRateLimitResetCount }}
              />
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}
