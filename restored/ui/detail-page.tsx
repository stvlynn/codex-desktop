// Restored from ref/webview/assets/detail-page-Kk44C3vf.js
// Detail page shell: section header, collapsible section, and page container.
// Stage 3: Sft→AppIconSft; wft→cx; Ivt/jvt/Tft/Cft ESM inits dropped.

import type { ReactNode } from "react";
import { AppIconSft } from "../icons/app-icon-sft";
import { cx } from "./cx";

export type DetailPageSectionHeaderProps = {
  action?: ReactNode;
  as?: "div" | "summary" | string;
  count?: ReactNode;
  showDivider?: boolean;
  sticky?: boolean;
  title: ReactNode;
};

/**
 * Bundle export `o` — section header row (title + optional action/count).
 */
export function DetailPageSectionHeader({
  action,
  as = "div",
  count,
  showDivider = true,
  sticky,
  title,
}: DetailPageSectionHeaderProps): ReactNode {
  const summaryClass =
    as === "summary" ? "cursor-interaction list-none marker:hidden" : false;
  const stickyClass = sticky
    ? "relative sticky top-0 z-10 bg-token-main-surface-primary after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-token-main-surface-primary after:content-['']"
    : false;
  const dividerClass = showDivider
    ? "border-b border-token-border-light"
    : false;
  const className = cx(
    "flex items-center justify-between gap-3 pr-0.5 pb-2 text-token-foreground [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
    summaryClass,
    stickyClass,
    dividerClass,
  );

  const countNode =
    count == null ? null : (
      <span className="text-token-input-placeholder-foreground">{count}</span>
    );
  const titleInner = (
    <>
      {title}
      {countNode}
    </>
  );
  const TitleTag = (as === "summary" ? "span" : "h2") as "span" | "h2";
  const ActionWrap = (as === "summary" ? "span" : "div") as "span" | "div";
  const Root = as as "div" | "summary";

  return (
    // @ts-expect-error polymorphic intrinsic tag from bundle `as` prop
    <Root className={className} data-slot="section-header">
      <TitleTag className="flex min-h-7 items-center gap-1.5 text-lg leading-6 font-medium">
        {titleInner}
      </TitleTag>
      {action == null ? null : (
        <ActionWrap className="shrink-0">{action}</ActionWrap>
      )}
    </Root>
  );
}

/** Bundle export `s` — section-header ESM init (no-op). */
export function ensureDetailPageSectionHeaderInit(): void {}

export type DetailPageSectionProps = {
  actions?: ReactNode;
  children?: ReactNode;
  collapsible?: boolean;
  disableContentInlineInset?: boolean;
  count?: ReactNode;
  id?: string;
  title: ReactNode;
};

/**
 * Bundle export `i` — detail page section (optionally collapsible `<details>`).
 */
export function DetailPageSection({
  actions,
  children,
  collapsible,
  disableContentInlineInset = false,
  count,
  id,
  title,
}: DetailPageSectionProps): ReactNode {
  const actionsNode =
    actions == null ? null : (
      <span
        className="flex items-center gap-2"
        onClick={(event) => {
          if (collapsible) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onKeyDown={(event) => {
          if (collapsible) event.stopPropagation();
        }}
      >
        {actions}
      </span>
    );

  const chevron = collapsible ? (
    <AppIconSft className="icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none" />
  ) : null;

  const titleWithChevron = (
    <>
      {title}
      {chevron}
    </>
  );

  const Root = (collapsible ? "details" : "section") as "details" | "section";
  const openProps = collapsible ? { open: true } : {};
  const headerAs = collapsible ? "summary" : "div";
  const header = (
    <DetailPageSectionHeader
      action={actionsNode}
      as={headerAs}
      count={count}
      title={titleWithChevron}
    />
  );

  const contentClass = cx(
    "flex flex-col gap-1",
    !disableContentInlineInset && "px-[var(--detail-page-inline-inset,0px)]",
  );

  return (
    <Root
      {...openProps}
      id={id}
      className="group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]"
    >
      {header}
      <div className={contentClass}>{children}</div>
    </Root>
  );
}

/** Bundle export `a` — section ESM init (no-op). */
export function ensureDetailPageSectionInit(): void {}

/** Bundle export `t` — default stack gap class for detail page body. */
export const DETAIL_PAGE_STACK_CLASS =
  "flex flex-col gap-[var(--detail-page-section-gap)]";

export type DetailPageProps = {
  children?: ReactNode;
};

/**
 * Bundle export `n` — detail page width/inset container.
 */
export function DetailPage({ children }: DetailPageProps): ReactNode {
  const className = cx(
    DETAIL_PAGE_STACK_CLASS,
    "@container mx-auto w-full max-w-[var(--thread-content-max-width)] [--detail-page-inline-inset:var(--padding-row-x)] [--detail-page-section-gap:calc(var(--spacing)*6)]",
  );
  return <div className={className}>{children}</div>;
}

/** Bundle export `r` — page container ESM init (no-op). */
export function ensureDetailPageInit(): void {}
