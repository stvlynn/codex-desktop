// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gL` / export `mU` — status / promo callout shell.
// Init `vL` / export `hU` retained as no-op.
// Case-sensitive: mU ≠ MU (resolveBrowserTabPanelSide); hU ≠ HU (ensureAppShellAtomsInit).

import type { ComponentType, ReactNode } from "react";
import { Button, type ButtonColor } from "./button";
import { cx } from "./cx";

export type CalloutType =
  | "normal"
  | "warning"
  | "error"
  | "success"
  | "infoAccent";

export type CalloutLayout =
  | "horizontal"
  | "vertical"
  | "verticalIcon"
  | "warningCallout";

export type CalloutProps = {
  title?: ReactNode;
  content?: ReactNode;
  customCtas?: ReactNode;
  onPrimaryCtaClick?: () => void;
  primaryCtaText?: ReactNode;
  primaryCtaColor?: ButtonColor;
  secondaryCtaColor?: ButtonColor;
  onSecondaryCtaClick?: () => void;
  onDangerCtaClick?: () => void;
  secondaryCtaText?: ReactNode;
  dangerCtaText?: ReactNode;
  Icon?: ComponentType<{ className?: string }>;
  iconClassName?: string;
  isPrimaryCtaDisabled?: boolean;
  isSecondaryCtaDisabled?: boolean;
  isDangerCtaDisabled?: boolean;
  type?: CalloutType;
  layout?: CalloutLayout;
  stackOnNarrow?: boolean;
  ariaLive?: "off" | "polite" | "assertive";
  role?: string;
};

const TYPE_BORDER: Record<CalloutType, string> = {
  error: "border-token-error-foreground/20 text-token-error-foreground",
  infoAccent: "border-token-text-link-foreground/40 text-token-foreground",
  normal: "border-token-input-border text-token-foreground",
  success: "border-token-charts-green/30 text-token-charts-green",
  warning: "border-token-editor-warning-foreground/30 text-token-foreground",
};

function typeBackground(type: CalloutType, warningCallout: boolean): string {
  switch (type) {
    case "error":
      return "bg-token-input-validation-error-background/20";
    case "infoAccent":
      return "bg-token-input-background";
    case "success":
      return "bg-token-charts-green/15";
    case "warning":
      return warningCallout
        ? "bg-token-input-validation-warning-background/15"
        : "bg-token-input-validation-warning-background/30";
    default:
      return "bg-token-input-background";
  }
}

function contentToneClass(
  type: CalloutType,
  hasTitle: boolean,
): string | undefined {
  if (!hasTitle) return undefined;
  if (type === "error") return "text-token-error-foreground";
  if (type === "success") return "text-token-charts-green";
  return "text-token-description-foreground";
}

/**
 * Bundle export `mU` — bordered callout with optional icon, title, body, CTAs.
 */
export function Callout({
  title,
  content,
  customCtas,
  onPrimaryCtaClick,
  primaryCtaText,
  primaryCtaColor,
  secondaryCtaColor,
  onSecondaryCtaClick,
  onDangerCtaClick,
  secondaryCtaText,
  dangerCtaText,
  Icon,
  iconClassName,
  isPrimaryCtaDisabled = false,
  isSecondaryCtaDisabled = false,
  isDangerCtaDisabled = false,
  type = "normal",
  layout = "horizontal",
  stackOnNarrow = false,
  ariaLive,
  role,
}: CalloutProps): ReactNode {
  const vertical = layout === "vertical";
  const verticalIcon = layout === "verticalIcon";
  const warningCallout = layout === "warningCallout";
  const horizontalStack = layout === "horizontal" && stackOnNarrow;
  const warningStack = warningCallout && stackOnNarrow;

  const ctaRowClass = cx(
    "flex gap-2",
    vertical ? "w-full justify-end" : "shrink-0",
    warningCallout && "border-token-border-default border-l pl-3",
    horizontalStack &&
      "max-[400px]:w-full max-[400px]:shrink max-[400px]:flex-wrap max-[400px]:justify-center",
    warningStack &&
      "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center [@container_(max-width:400px)]:border-t [@container_(max-width:400px)]:border-l-0 [@container_(max-width:400px)]:pt-2 [@container_(max-width:400px)]:pl-0",
  );

  const ctas =
    customCtas != null ? (
      <div className={ctaRowClass}>{customCtas}</div>
    ) : primaryCtaText || secondaryCtaText || dangerCtaText ? (
      <div className={ctaRowClass}>
        {primaryCtaText ? (
          <Button
            onClick={onPrimaryCtaClick}
            color={primaryCtaColor ?? "outline"}
            className="shrink-0"
            disabled={isPrimaryCtaDisabled}
          >
            {primaryCtaText}
          </Button>
        ) : null}
        {secondaryCtaText ? (
          <Button
            onClick={onSecondaryCtaClick}
            color={secondaryCtaColor ?? "ghost"}
            className="shrink-0"
            disabled={isSecondaryCtaDisabled}
          >
            {secondaryCtaText}
          </Button>
        ) : null}
        {dangerCtaText ? (
          <Button
            onClick={onDangerCtaClick}
            color="danger"
            className="shrink-0"
            disabled={isDangerCtaDisabled}
          >
            {dangerCtaText}
          </Button>
        ) : null}
      </div>
    ) : null;

  const iconClass = cx(
    "icon-sm shrink-0",
    type === "infoAccent" && "text-token-text-link-foreground",
    type === "success" && "text-token-charts-green",
    type === "warning" && "text-token-editor-warning-foreground",
    iconClassName,
  );

  const shellClass = cx(
    "relative isolate flex w-full overflow-hidden rounded-2xl border bg-token-main-surface-primary py-2 pl-3 pr-2 text-sm shadow-xs lg:mx-auto electron:border-0 electron:ring-[0.5px] electron:ring-token-border-heavy",
    TYPE_BORDER[type],
    warningCallout &&
      type === "warning" &&
      "before:bg-token-editor-warning-foreground/60 before:absolute before:inset-y-0 before:left-0 before:w-0.5",
  );

  const wash = (
    <div
      aria-hidden
      className={cx(
        "absolute inset-0 -z-10",
        typeBackground(type, warningCallout),
      )}
    />
  );

  const body = (gapClass?: string) => (
    <div className={cx("flex min-w-0 flex-1 flex-col", gapClass)}>
      <div
        className={cx(
          "electron:leading-relaxed min-w-0 flex-1 text-pretty",
          contentToneClass(type, title != null),
        )}
      >
        {content}
      </div>
    </div>
  );

  if (vertical) {
    return (
      <aside
        aria-live={ariaLive}
        className={cx(shellClass, "flex-col gap-1.5")}
        role={role}
      >
        {wash}
        {(Icon || title) && (
          <div className="flex items-center gap-1">
            {Icon ? <Icon className={iconClass} /> : null}
            {title ? (
              <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
                {title}
              </h3>
            ) : null}
          </div>
        )}
        {body("gap-1.5")}
        {ctas}
      </aside>
    );
  }

  if (verticalIcon) {
    return (
      <aside
        aria-live={ariaLive}
        className={cx(shellClass, "gap-3")}
        role={role}
      >
        {wash}
        {Icon ? <Icon className={iconClass} /> : null}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {title ? (
            <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
              {title}
            </h3>
          ) : null}
          {body()}
          {ctas}
        </div>
      </aside>
    );
  }

  if (warningCallout) {
    return (
      <aside
        aria-live={ariaLive}
        className={cx(shellClass, "gap-2")}
        role={role}
      >
        {wash}
        <div
          className={cx(
            "flex min-w-0 grow flex-row items-start justify-between gap-2",
            stackOnNarrow &&
              "max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2",
          )}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            {title ? (
              <h3 className="text-sm font-bold text-pretty">{title}</h3>
            ) : null}
            {body()}
          </div>
          {ctas}
        </div>
      </aside>
    );
  }

  // horizontal (default) — onboarding-banner path: content + customCtas + stackOnNarrow
  return (
    <aside aria-live={ariaLive} className={shellClass} role={role}>
      {wash}
      <div
        className={cx(
          "flex min-w-0 grow flex-row items-center justify-between gap-2",
          horizontalStack &&
            "max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2",
        )}
      >
        {title ? (
          <h3 className="text-sm font-bold text-pretty">{title}</h3>
        ) : null}
        {body()}
        {ctas}
      </div>
    </aside>
  );
}

/** Bundle export `hU` — Rolldown ESM init retained as no-op. */
export function ensureCalloutInit(): void {}
