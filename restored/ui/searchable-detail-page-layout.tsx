// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `X8s`) / export `Sm`.

export type SearchableDetailPageLayoutPeers = {
  $: (...args: unknown[]) => unknown;
  $8s: (...args: unknown[]) => unknown;
  Gd: (...args: unknown[]) => unknown;
  Q8s: (...args: unknown[]) => unknown;
  WD: (...args: unknown[]) => unknown;
  Z8s: (...args: unknown[]) => unknown;
  ef: (...args: unknown[]) => unknown;
  kJe: (...args: unknown[]) => unknown;
  p1: (...args: unknown[]) => unknown;
  q8s: (...args: unknown[]) => unknown;
  uM: (...args: unknown[]) => unknown;
};
let peers: SearchableDetailPageLayoutPeers | null = null;

/** Wire SearchableDetailPageLayout peers once companions land. */
export function setSearchableDetailPageLayoutPeers(
  next: SearchableDetailPageLayoutPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sm` / internal `X8s`.
 */
export function SearchableDetailPageLayout(props: unknown) {
  const Header = peers.uM.Header;
  const HeaderToolbar = peers.uM.HeaderToolbar;
  const Gd = peers.Gd;
  const Div = peers.ef.div;
  const Z8s = peers.Z8s;
  const Q8s = peers.q8s;
  const Q8s2 = peers.Q8s;
  if (peers == null) {
    throw new Error("SearchableDetailPageLayout peers are not configured");
  }
  let {
      children,
      contentClassName,
      controls,
      headerAction,
      headerPlacement = "page",
      headerVariant,
      horizontalPaddingClassName,
      navigation,
      pageActions,
      scrollContainerRef,
      search,
      searchToolbar,
      subtitle,
      title,
      titleRef,
      toolbarActions: _,
      toolbarInset = true,
    } = props,
    x = headerPlacement === "toolbar",
    S = (!x && navigation != null) || pageActions != null,
    C = peers.kJe(),
    w = C
      ? {
          duration: 0,
        }
      : peers.WD;
  let T = w,
    E =
      x || _ != null ? (
        <Header>
          <HeaderToolbar inset={toolbarInset}>
            <Gd initial={false}>
              {x ? (
                <Div
                  key="toolbar-heading"
                  animate={{
                    opacity: 1,
                    transform: "translateY(0)",
                  }}
                  className="min-w-0 flex-1 overflow-hidden"
                  exit={{
                    opacity: 0,
                    transform: "translateY(4px)",
                  }}
                  initial={{
                    opacity: 0,
                    transform: "translateY(4px)",
                  }}
                  transition={T}
                >
                  {navigation == null ? (
                    <h1
                      ref={titleRef}
                      className={peers.$(
                        "min-w-0 truncate text-base text-token-foreground electron:font-medium",
                        headerVariant === "inset" ? "px-2" : null,
                      )}
                    >
                      {title}
                    </h1>
                  ) : (
                    <>
                      <h1 ref={titleRef} className="sr-only">
                        {title}
                      </h1>
                      {navigation}
                    </>
                  )}
                </Div>
              ) : null}
            </Gd>
            {_ == null ? null : (
              <div className="ml-auto flex min-w-0 items-center justify-end gap-2">
                {_}
              </div>
            )}
          </HeaderToolbar>
        </Header>
      ) : null;
  let D = x ? null : (
    <Div
      key="page-heading"
      animate={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      exit={{
        opacity: 0,
        transform: "translateY(-4px)",
      }}
      initial={{
        opacity: 0,
        transform: "translateY(-4px)",
      }}
      transition={T}
    >
      <div
        className={peers.$(
          "mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-panel",
          search == null ? "pb-4" : null,
          horizontalPaddingClassName,
        )}
      >
        <div
          className={peers.$(
            "flex items-start justify-between gap-4",
            headerVariant === "inset" ? "px-2" : null,
          )}
        >
          <div
            className={peers.$(
              "flex min-w-0 flex-col",
              headerVariant === "inset" ? "gap-2" : "gap-1",
            )}
          >
            <h1
              ref={titleRef}
              className="heading-xl font-normal text-token-foreground"
            >
              {title}
            </h1>
            {subtitle == null ? null : (
              <div className="text-lg leading-6 text-token-text-secondary">
                {subtitle}
              </div>
            )}
          </div>
          {headerAction == null ? null : (
            <div className="shrink-0">{headerAction}</div>
          )}
        </div>
      </div>
    </Div>
  );
  let O = (
    <Gd initial={false} mode="popLayout">
      {D}
    </Gd>
  );
  let k =
    search == null ? null : (
      <Z8s className="top-0">
        <div
          className={peers.$(
            "mx-auto flex w-full max-w-[var(--thread-content-max-width)] items-center gap-2 px-panel pt-panel pb-2",
            horizontalPaddingClassName,
          )}
        >
          {
            <Q8s
              {...search}
              className={peers.$("min-w-0 flex-1", search.className)}
              variant="composer"
            />
          }
          {searchToolbar}
        </div>
      </Z8s>
    );
  let A = search == null ? "pt-panel" : "pt-5",
    j = peers.$(
      "mx-auto flex min-h-0 w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col px-panel pb-panel",
      A,
      contentClassName,
      horizontalPaddingClassName,
    );
  let M = S ? (
    <Q8s2>
      {x ? null : navigation}
      {pageActions == null ? null : (
        <div className="ml-auto">{pageActions}</div>
      )}
    </Q8s2>
  ) : null;
  let N = (
    <Div layout="position" className={j} transition={T}>
      {M}
      {controls}
      {children}
    </Div>
  );
  let P = (
    <div className="flex min-h-full w-full flex-col">
      {O}
      {k}
      {N}
    </div>
  );
  let F = (
    <div
      ref={scrollContainerRef}
      className="relative h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]"
    >
      {P}
    </div>
  );
  return (
    <>
      {E}
      {F}
    </>
  );
}
