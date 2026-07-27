// Restored from ref/webview/assets/onboarding-banner-C3hNSPU0.js
// Onboarding promo banner built on Callout + Badge + Button.
// Stage 3: mU→Callout (≠ MU), hU→ensureCalloutInit (≠ HU); Elt/Dlt Badge;
// but/yut Button; wft→cx; Ivt/jvt/Tft ESM inits dropped.

import type { ReactNode, Ref } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Callout } from "../ui/callout";
import { cx } from "../ui/cx";

type BannerIcon = (props: { className?: string }) => ReactNode;

export type OnboardingBannerAction = {
  ariaLabel?: string;
  disabled?: boolean;
  icon?: BannerIcon;
  label?: ReactNode;
  loading?: boolean;
  onClick?: () => void;
};

export type OnboardingBannerActionsPlacement =
  | "aside"
  | "body"
  | "bodyOnNarrow";

export type OnboardingBannerProps = {
  actionsPlacement?: OnboardingBannerActionsPlacement;
  additionalActions?: ReactNode;
  badge?: ReactNode;
  description?: ReactNode;
  dismissAction?: OnboardingBannerAction;
  leadingVisual?: ReactNode;
  primaryAction?: OnboardingBannerAction;
  primaryActionRef?: Ref<HTMLButtonElement>;
  secondaryAction?: OnboardingBannerAction;
  title?: ReactNode;
};

function BannerActionButton({
  action,
  buttonRef,
  kind,
}: {
  action: OnboardingBannerAction;
  buttonRef?: Ref<HTMLButtonElement>;
  kind: "primary" | "secondary" | "dismiss";
}): ReactNode {
  const iconOnly = action.icon != null && action.label == null;
  const className = iconOnly
    ? "border-transparent text-token-description-foreground hover:text-token-foreground"
    : "px-3 max-[400px]:flex-1 max-[400px]:justify-center";
  const color = kind === "primary" ? "primary" : "ghost";
  const Icon = action.icon;
  return (
    <Button
      ref={buttonRef}
      aria-label={action.ariaLabel}
      className={className}
      color={color}
      disabled={action.disabled}
      loading={action.loading}
      onClick={action.onClick}
      size="composerSm"
      uniform={iconOnly}
    >
      {Icon ? <Icon className="icon-xs" /> : null}
      {action.label}
    </Button>
  );
}

/**
 * Bundle export `t` — onboarding / promo banner with title, badge, and CTAs.
 */
export function OnboardingBanner({
  actionsPlacement = "aside",
  additionalActions,
  badge,
  description,
  dismissAction,
  leadingVisual,
  primaryAction,
  primaryActionRef,
  secondaryAction,
  title,
}: OnboardingBannerProps): ReactNode {
  const hasActions =
    additionalActions != null ||
    primaryAction != null ||
    secondaryAction != null ||
    dismissAction != null;

  const placementClass = {
    aside:
      "self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch",
    body: "mt-3 w-full justify-end",
    bodyOnNarrow: "mt-3 justify-start",
  }[actionsPlacement];

  const renderActions = (extraClass?: string) => (
    <div className={cx("flex items-center gap-2", placementClass, extraClass)}>
      {secondaryAction ? (
        <BannerActionButton action={secondaryAction} kind="secondary" />
      ) : null}
      {primaryAction ? (
        <BannerActionButton
          action={primaryAction}
          buttonRef={primaryActionRef}
          kind="primary"
        />
      ) : null}
      {dismissAction ? (
        <BannerActionButton action={dismissAction} kind="dismiss" />
      ) : null}
      {additionalActions}
    </div>
  );

  const bodyActions =
    hasActions && actionsPlacement === "body" ? renderActions() : null;
  const bodyOnNarrowVisible =
    hasActions && actionsPlacement === "bodyOnNarrow"
      ? renderActions("hidden max-[400px]:flex")
      : null;
  const asideActions =
    hasActions && actionsPlacement === "aside" ? renderActions() : null;
  const bodyOnNarrowDesktop =
    hasActions && actionsPlacement === "bodyOnNarrow"
      ? renderActions("max-[400px]:hidden")
      : null;

  const leading = leadingVisual ? (
    <div className="flex size-12 shrink-0 items-center justify-center self-center text-token-text-secondary">
      {leadingVisual}
    </div>
  ) : null;

  const content = (
    <div className="flex min-w-0 items-center gap-2 max-[400px]:items-start">
      {leading}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <div className="min-w-0 text-base font-medium text-token-text-primary">
            {title}
          </div>
          {badge ? (
            <Badge className="border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary">
              {badge}
            </Badge>
          ) : null}
        </div>
        <div className="text-sm leading-tight text-pretty text-token-text-secondary">
          {description}
        </div>
        {bodyActions}
        {bodyOnNarrowVisible}
      </div>
    </div>
  );

  return (
    <Callout
      stackOnNarrow
      content={content}
      customCtas={asideActions ?? bodyOnNarrowDesktop ?? undefined}
    />
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureOnboardingBannerInit(): void {}
