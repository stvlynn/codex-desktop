// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Settings section shell layout (bundle `x2l` / export `ii`) plus scroll-target
// provider (bundle `S2l` / export `ai`) sharing one context.

import {
  createContext,
  useContext,
  useLayoutEffect,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import { cx } from "../ui/cx";

export type SettingsSectionHeaderVariant = "default" | "settings" | "page";

export type SettingsSectionHeaderProps = {
  actions?: ReactNode;
  asset?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  title: ReactNode;
  variant?: SettingsSectionHeaderVariant;
};

/**
 * Title + optional subtitle/actions header used inside section layouts
 * (bundle `v2l`, not separately exported).
 */
function SettingsSectionHeader({
  actions,
  asset,
  subtitle,
  subtitleClassName,
  title,
  variant = "default",
}: SettingsSectionHeaderProps) {
  const titleClassName = cx(
    "min-w-0 break-words text-token-foreground",
    variant === "settings" && "heading-lg font-normal",
    variant === "page" && "heading-lg electron:heading-xl",
    variant === "default" && "heading-base electron:heading-lg",
  );

  return (
    <header className="flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]">
      {asset == null ? null : <div className="flex">{asset}</div>}
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 basis-64 flex-col gap-1.5">
          <h1 className={titleClassName}>{title}</h1>
          {subtitle == null ? null : (
            <div
              className={cx(
                "text-base text-token-text-secondary",
                subtitleClassName,
              )}
            >
              {subtitle}
            </div>
          )}
        </div>
        {actions == null ? null : (
          <div className="flex max-w-full shrink-0 items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}

type StickyControlsProps = {
  children: ReactNode;
  className?: string;
};

/** Sticky control strip with fade underlay (bundle `Z8s`). */
function StickyControls({ children, className }: StickyControlsProps) {
  return (
    <div
      className={cx(
        "sticky z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type SettingsSectionScrollTarget = {
  navigationKey?: string | null;
  targetId: string;
};

const SettingsSectionScrollContext =
  createContext<SettingsSectionScrollTarget | null>(null);

export type SettingsSectionScrollProviderProps = {
  children: ReactNode;
  navigationKey?: string | null;
  targetId?: string | null;
};

/**
 * Provides scroll-into-view target metadata for nested section layouts
 * (bundle `S2l` / export `ai`).
 */
export function SettingsSectionScrollProvider({
  children,
  navigationKey,
  targetId,
}: SettingsSectionScrollProviderProps) {
  const value = targetId == null ? null : { navigationKey, targetId };
  return (
    <SettingsSectionScrollContext.Provider value={value}>
      {children}
    </SettingsSectionScrollContext.Provider>
  );
}

export type SettingsSectionLayoutProps = {
  title?: ReactNode;
  backSlot?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  fullWidth?: boolean;
  contentClassName?: string;
  subtitleClassName?: string;
  action?: ReactNode;
  stickyControls?: ReactNode;
  /** When true, skip main-surface chrome (embedded panel). */
  embedded?: boolean;
  ref?: Ref<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

/**
 * Shared settings / detail section layout shell (bundle `x2l` / export `ii`).
 * Fan-in ~32 settings pages.
 */
export function SettingsSectionLayout({
  title,
  backSlot,
  subtitle,
  children,
  fullWidth = false,
  contentClassName,
  subtitleClassName,
  action,
  stickyControls,
  embedded = false,
  ref,
  className,
  ...rest
}: SettingsSectionLayoutProps) {
  const scrollTarget = useContext(SettingsSectionScrollContext);
  const targetId = scrollTarget?.targetId ?? null;
  const navigationKey = scrollTarget?.navigationKey ?? null;

  useLayoutEffect(() => {
    if (targetId == null) return;
    document.getElementById(targetId)?.scrollIntoView?.({ block: "center" });
  }, [navigationKey, targetId]);

  const maxWidthClass = fullWidth
    ? null
    : embedded
      ? "max-w-2xl"
      : "max-w-3xl electron:min-w-[calc(320px*var(--codex-window-zoom))]";

  const innerClassName = cx(
    "mx-auto flex w-full flex-col",
    maxWidthClass,
    contentClassName,
  );

  const header =
    title == null ? null : (
      <div className={embedded ? "pb-panel" : "pb-8"}>
        <SettingsSectionHeader
          actions={action}
          subtitle={subtitle}
          subtitleClassName={cx("text-balance", subtitleClassName)}
          title={title}
          variant={embedded ? "default" : "settings"}
        />
      </div>
    );

  const sticky =
    stickyControls == null ? null : (
      <StickyControls className="top-[calc(-1*var(--padding-panel))] pt-panel pb-2">
        {stickyControls}
      </StickyControls>
    );

  const bodyGap =
    embedded && !fullWidth ? "gap-[var(--padding-panel)]" : "gap-10";
  const bodyPad = stickyControls != null && "pt-5";
  const body = (
    <div className={cx("flex flex-col", bodyGap, bodyPad)}>{children}</div>
  );

  const content = (
    <div className={innerClassName}>
      {header}
      {sticky}
      {body}
    </div>
  );

  if (embedded) {
    return (
      <div
        ref={ref}
        className={cx("flex min-h-0 flex-col", className)}
        {...rest}
      >
        {backSlot ? (
          <div className="flex items-center pb-panel">{backSlot}</div>
        ) : null}
        {content}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cx("main-surface flex h-full min-h-0 flex-col", className)}
      {...rest}
    >
      <div className="draggable flex items-center px-panel electron:h-toolbar extension:h-toolbar-sm">
        {backSlot}
      </div>
      <div className="scrollbar-stable flex-1 overflow-y-auto p-panel">
        {content}
      </div>
    </div>
  );
}

/** No-op Rolldown ESM init for the section-layout cluster (export `ci`). */
export function ensureSettingsSectionLayoutInit(): void {}
