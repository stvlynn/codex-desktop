// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Local shell chrome surfaces that avoid peer-gated AppShellLayout / EmptyState throws.

import type { ReactElement, ReactNode } from "react";

/** Bundle export `ah` — compact header title row (`start` label). */
export function ThreadHeaderStart({
  start,
}: {
  start?: ReactNode;
}): ReactElement {
  return (
    <div
      className="min-w-0 truncate text-token-foreground"
      data-thread-header-start=""
    >
      {start}
    </div>
  );
}

/** Bundle export `iO` — empty state (skills EmptyState peers throw). */
export function LocalEmptyState({
  className,
  title,
  description,
  actions,
}: {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}): ReactElement {
  return (
    <div
      className={
        className ??
        "flex h-full w-full flex-col items-center justify-center gap-3 px-3 py-6 text-center"
      }
      data-local-empty-state=""
    >
      {title ? (
        <div className="text-base font-medium text-token-foreground">
          {title}
        </div>
      ) : null}
      {description ? (
        <div className="max-w-xl text-sm text-token-description-foreground">
          {description}
        </div>
      ) : null}
      {actions}
    </div>
  );
}

/** App-shell layout slots that avoid peer-gated AppShellLayout proxy throws. */
export function LocalMainContentLayout({
  layout,
}: {
  layout?: string;
}): ReactElement {
  return <div className="contents" data-main-content-layout={layout} />;
}

export function LocalShellHeader({
  children,
}: {
  children?: ReactNode;
}): ReactElement {
  return (
    <div className="sticky top-0 z-10 shrink-0" data-local-shell-header="">
      {children}
    </div>
  );
}

export type LocalThreadChromeProps = {
  showReviewTab?: boolean;
  threadType?: string;
  showUtilityBar?: boolean;
  browserHostDisplayName?: string | null;
  conversationId?: string | null;
};

/**
 * Bundle `threadAppShellChromeT` / IMPORT_MAP `ThreadAppShellChrome` stand-in.
 * Public `thread/thread-app-shell-chrome.tsx` still carries residual companion
 * stubs, so Stage-3 keeps a typed chrome mount that mirrors the `$u` call shape
 * (`browserHostDisplayName`, `conversationId`, `threadType`) without throwing.
 */
export function LocalThreadAppShellChrome(
  props: LocalThreadChromeProps,
): ReactElement {
  const {
    showReviewTab = false,
    threadType = "local",
    showUtilityBar = false,
    browserHostDisplayName = null,
    conversationId = null,
  } = props;
  return (
    <div
      className="contents"
      data-local-thread-chrome=""
      data-thread-type={threadType}
      data-conversation-id={conversationId ?? undefined}
      data-browser-host-display-name={browserHostDisplayName ?? undefined}
      data-show-review-tab={showReviewTab ? "true" : undefined}
      data-show-utility-bar={showUtilityBar ? "true" : undefined}
    />
  );
}
