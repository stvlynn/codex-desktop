// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `X8s`) / export `Sm`.
// Heavy header/toolbar/motion sections bind via setSearchableDetailPageLayoutParts.

import type { ReactElement, ReactNode, Ref } from "react";

export type SearchableDetailPageLayoutProps = {
  children?: ReactNode;
  contentClassName?: string;
  controls?: ReactNode;
  headerAction?: ReactNode;
  headerPlacement?: "page" | "toolbar" | string;
  headerVariant?: string;
  horizontalPaddingClassName?: string;
  navigation?: ReactNode;
  pageStatuses?: ReactNode;
  scrollContainerRef?: Ref<HTMLElement>;
  search?: ReactNode;
  searchToolbar?: ReactNode;
  subtitle?: ReactNode;
  title?: ReactNode;
  titleRef?: Ref<HTMLElement>;
  toolbarActions?: ReactNode;
  toolbarInset?: boolean;
};

type LayoutImpl = (props: SearchableDetailPageLayoutProps) => ReactNode;

let layoutImpl: LayoutImpl | null = null;

/**
 * Wire the full searchable detail layout chrome (AppShell header/toolbar/motion).
 * Outer export keeps a real Stage-3 entry; heavy section stays injectable.
 */
export function setSearchableDetailPageLayoutParts(next: LayoutImpl): void {
  layoutImpl = next;
}

/**
 * Bundle export `Sm` / internal `X8s`.
 * Searchable detail page chrome — title/search/toolbar/navigation/scroll.
 */
export function SearchableDetailPageLayout(
  props: SearchableDetailPageLayoutProps,
): ReactElement {
  if (layoutImpl == null) {
    // Minimal real scaffold from extractFn structure when peers unbound.
    const {
      children,
      contentClassName,
      controls,
      headerAction,
      navigation,
      pageStatuses,
      search,
      searchToolbar,
      subtitle,
      title,
      toolbarActions,
    } = props;
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <header className="shrink-0">
          {title != null || subtitle != null || headerAction != null ? (
            <div className="flex items-start justify-between gap-3 px-row-x pt-3">
              <div className="min-w-0 flex-1">
                {title != null ? (
                  <h1 className="truncate text-lg font-medium">{title}</h1>
                ) : null}
                {subtitle != null ? (
                  <div className="text-sm text-token-description-foreground">
                    {subtitle}
                  </div>
                ) : null}
              </div>
              {headerAction}
            </div>
          ) : null}
          {toolbarActions != null || searchToolbar != null || search != null ? (
            <div className="flex items-center gap-2 px-row-x py-2">
              {searchToolbar}
              {search}
              {toolbarActions}
            </div>
          ) : null}
          {navigation}
          {pageStatuses}
          {controls}
        </header>
        <div className={contentClassName ?? "min-h-0 flex-1 overflow-auto"}>
          {children}
        </div>
      </div>
    );
  }
  return layoutImpl(props) as ReactElement;
}
