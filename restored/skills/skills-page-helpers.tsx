// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BN`) / export `RK`.

import type { ReactElement, ReactNode } from "react";

export type EmptyStateIllustrationSize = "icon" | "large";
export type EmptyStateLayout = "page" | "inline";

export type EmptyStateProps = {
  title: ReactNode;
  description?: ReactNode;
  illustration?: ReactNode;
  illustrationSize?: EmptyStateIllustrationSize;
  layout?: EmptyStateLayout;
  children?: ReactNode;
  className?: string;
};

/**
 * Generic centered empty-state block (title + optional description /
 * illustration), shared by route pages that have nothing to show yet.
 */
export function EmptyState({
  title,
  description,
  illustration,
  illustrationSize = "icon",
  layout = "inline",
  children,
  className,
}: EmptyStateProps): ReactElement {
  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-3 text-center",
        layout === "page" ? "h-full min-h-0 p-8" : "p-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {illustration != null && (
        <div
          className={illustrationSize === "icon" ? "size-10" : "size-24"}
        >
          {illustration}
        </div>
      )}
      <div className="text-heading-lg font-semibold text-token-foreground">
        {title}
      </div>
      {description != null && (
        <div className="text-sm text-token-description-foreground">
          {description}
        </div>
      )}
      {children}
    </div>
  );
}

export type BindSkillsPageHelpersPeers = {
  Fo: (...args: unknown[]) => unknown;
  OD: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  f6r: (...args: unknown[]) => unknown;
  p6r: (...args: unknown[]) => unknown;
  /** Shared classnames-merge utility (bundle `$`). */
  cn: (...classes: unknown[]) => string;
};

let peers: BindSkillsPageHelpersPeers | null = null;

/** Wire bindSkillsPageHelpers peers once companions land. */
export function setBindSkillsPageHelpersPeers(next: BindSkillsPageHelpersPeers): void {
  peers = next;
}

/**
 * Bundle export `RK` / internal `BN`.
 */
export function bindSkillsPageHelpers(e: unknown) {
  if (peers == null) {
    throw new Error("bindSkillsPageHelpers peers are not configured");
  }

  let t = (0, peers.p6r.c)(4),
    { hostId: n } = e,
    { data: r } = peers.Fo(peers.OD, n),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  return (
    t[2] === a ? (o = t[3]) : ((o = a.find(peers.f6r)), (t[2] = a), (t[3] = o)),
    o?.enabled ?? !0
  );
}

export type EmptyStateProps = {
  className?: string;
  contentClassName?: string;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  illustration?: ReactNode;
  illustrationSize?: "default" | "icon" | "hero";
  layout?: "default" | "page";
  spacing?: "compact" | "default";
  tone?: "default" | "faded";
};

/**
 * Bundle export `iO` — generic empty-state placeholder (illustration + title
 * + description + actions) used by settings/security/MCP pages.
 */
export function EmptyState(props: EmptyStateProps): ReactNode {
  const {
    className,
    contentClassName,
    title,
    description,
    actions,
    illustration,
    illustrationSize = "default",
    layout = "default",
    spacing = "compact",
    tone = "default",
  } = props;
  if (peers == null) {
    throw new Error("EmptyState peers are not configured");
  }
  const containerClassName = peers.cn(
    "flex w-full flex-col items-center justify-center px-3 py-6",
    layout === "page" &&
      "min-h-[var(--height-token-empty-state-page)] flex-1",
    className,
  );
  const contentGap = spacing === "compact" ? "gap-3" : "gap-4";
  const contentTone = tone === "faded" && "opacity-60";
  const innerClassName = peers.cn(
    "flex w-full max-w-xl flex-col items-center justify-center text-center",
    contentGap,
    contentTone,
    contentClassName,
  );
  return (
    <div className={containerClassName}>
      <div className={innerClassName}>
        {illustration ? (
          <div
            className={peers.cn(
              "pointer-events-none flex items-center justify-center",
              illustrationSize === "icon" &&
                "[&>svg]:size-8 [&>svg]:text-token-text-secondary",
              illustrationSize === "hero" &&
                "relative h-32 w-[30rem] max-w-full overflow-visible",
            )}
          >
            {illustrationSize === "hero" ? (
              <div className="absolute top-1/2 left-1/2 size-[30rem] max-h-[55vh] max-w-full -translate-x-1/2 -translate-y-1/2">
                {illustration}
              </div>
            ) : (
              illustration
            )}
          </div>
        ) : null}
        {title != null || description != null ? (
          <div className="flex flex-col items-center gap-2">
            {title == null ? null : (
              <div className="text-lg leading-6 font-medium text-token-foreground">
                {title}
              </div>
            )}
            {description ? (
              <div className="text-sm text-token-text-secondary">
                {description}
              </div>
            ) : null}
          </div>
        ) : null}
        {actions ? (
          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
