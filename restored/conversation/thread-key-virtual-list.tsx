// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `R5`) / export `La`.

export type ThreadKeyVirtualListPeers = {
  $: (...args: unknown[]) => unknown;
  AVl: (...args: unknown[]) => unknown;
  F5: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  JHl: (...args: unknown[]) => unknown;
  KHl: (...args: unknown[]) => unknown;
  MA: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  beforeThreadKey: (...args: unknown[]) => unknown;
  canPin: (...args: unknown[]) => unknown;
  cql: (...args: unknown[]) => unknown;
  disableHoverCard: (...args: unknown[]) => unknown;
  dql: (...args: unknown[]) => unknown;
  floatStatusIconsRight: (...args: unknown[]) => unknown;
  fql: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  hideRemoteHostEnvIcon: (...args: unknown[]) => unknown;
  hideTimestamp: (...args: unknown[]) => unknown;
  hql: (...args: unknown[]) => unknown;
  isGrouped: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  locationId: (...args: unknown[]) => unknown;
  manualThreadIds: (...args: unknown[]) => unknown;
  mql: (...args: unknown[]) => unknown;
  onActivateGroup: (...args: unknown[]) => unknown;
  onStartNewConversation: (...args: unknown[]) => unknown;
  pql: (...args: unknown[]) => unknown;
  showPinActionOnHover: (...args: unknown[]) => unknown;
  subscribe: (...args: unknown[]) => unknown;
  uql: (...args: unknown[]) => unknown;
  variant: (...args: unknown[]) => unknown;
  z5: (...args: unknown[]) => unknown;
};
let peers: ThreadKeyVirtualListPeers | null = null;

/** Wire ThreadKeyVirtualList peers once companions land. */
export function setThreadKeyVirtualListPeers(
  next: ThreadKeyVirtualListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `La` / internal `R5`.
 */
export function ThreadKeyVirtualList(props: unknown) {
  const Jp = peers.jp;
  const F5 = peers.F5;
  const AVl = peers.AVl;
  if (peers == null) {
    throw new Error("ThreadKeyVirtualList peers are not configured");
  }
  let {
      threadKeys,
      ariaLabel,
      itemWrapper,
      emptyState,
      emptyStateClassName,
      isLoading = false,
      rowOptions,
      currentThreadKey,
      dropIndicatorTarget,
      maxItems,
      expanded,
      onExpandedChange,
      variant = "default",
      className,
      paginationDropTargetRef,
      paginationMode: _,
      catalogPageScope,
    } = props,
    x = peers.Fo(peers.cql, threadKeys),
    S = peers.JHl(),
    C = peers.Y(peers.MA),
    [w, T] = peers.mql.useState(false),
    E = expanded ?? w,
    D = (e) => {
      return C?.subscribe(e) ?? peers.dql;
    };
  let O = () => {
    return C != null && catalogPageScope != null
      ? C.getPageState(catalogPageScope)
      : peers.hql;
  };
  let k = peers.mql.useSyncExternalStore(D, O),
    A,
    j;
  A = () => {
    C == null ||
      catalogPageScope == null ||
      C.ensurePage(catalogPageScope, (maxItems ?? 10) + (E ? 10 : 0)).catch(
        peers.uql,
      );
  };
  j = [catalogPageScope, C, E, maxItems];
  peers.mql.useEffect(A, j);
  let M = currentThreadKey === undefined ? x : currentThreadKey,
    N = (e) => {
      expanded ?? T(e);
      onExpandedChange?.(e);
    };
  let P = N,
    F;
  bb0: {
    if (itemWrapper == null) {
      F = undefined;
      break bb0;
    }
    let e = itemWrapper,
      n;
    n = function (_props) {
      const E2 = e;
      let {
        item,
        getNextItem,
        className: _className,
        children,
        isLastVisibleItem,
      } = _props;
      return (
        <E2
          getNextThreadKey={getNextItem}
          threadKey={item}
          className={_className}
          isLastVisibleItem={isLastVisibleItem}
        >
          {children}
        </E2>
      );
    };
    F = n;
  }
  let I = F;
  if (threadKeys.length === 0 && k.isLoading) return null;
  if (isLoading) {
    let e;
    return (
      <div className="flex items-center justify-center py-4">{<Jp />}</div>
    );
  }
  if (threadKeys.length === 0 && emptyState && !k.hasMore) {
    let e;
    return <div className={emptyStateClassName}>{emptyState}</div>;
  }
  let L = peers.$("isolate flex flex-col [contain:layout]", className);
  let R =
    C == null || catalogPageScope == null
      ? "live"
      : C.getListKey(catalogPageScope);
  let z =
    C == null || catalogPageScope == null
      ? undefined
      : () => {
          return C.loadMore(catalogPageScope, 10);
        };
  let B = variant === "tableRow" || rowOptions?.isGrouped ? "nested" : "edge",
    V =
      catalogPageScope?.manualThreadIds == null
        ? undefined
        : JSON.stringify(catalogPageScope.manualThreadIds);
  let H, U;
  H = (e) => {
    return dropIndicatorTarget?.beforeThreadKey != null &&
      e === dropIndicatorTarget.beforeThreadKey ? (
      <peers.F5 indented={rowOptions?.isGrouped} />
    ) : null;
  };
  U =
    dropIndicatorTarget != null &&
    dropIndicatorTarget.beforeThreadKey == null ? (
      <F5 indented={rowOptions?.isGrouped} />
    ) : null;
  let W = (e, t) => {
    return (
      <peers.KHl
        threadKey={e}
        canPin={rowOptions?.canPin}
        disableHoverCard={rowOptions?.disableHoverCard}
        floatStatusIconsRight={rowOptions?.floatStatusIconsRight}
        isGrouped={rowOptions?.isGrouped ?? false}
        hideRemoteHostEnvIcon={rowOptions?.hideRemoteHostEnvIcon}
        hideTimestamp={rowOptions?.hideTimestamp}
        locationId={rowOptions?.locationId}
        onArchiveStart={t.onArchiveStart}
        onArchiveSuccess={t.onArchiveSuccess}
        onArchiveError={t.onArchiveError}
        onActivateGroup={rowOptions?.onActivateGroup}
        onStartNewConversation={rowOptions?.onStartNewConversation}
        showPinActionOnHover={rowOptions?.showPinActionOnHover}
        variant={rowOptions?.variant}
        shortcutLabel={S?.get(e)}
      />
    );
  };
  let G = (
    <AVl
      key={R}
      items={threadKeys}
      getKey={peers.fql}
      ariaLabel={ariaLabel}
      itemWrapper={I}
      maxItems={maxItems}
      expanded={E}
      forcedVisibleItemKey={M}
      onExpandedChange={P}
      hasMoreItems={k.hasMore}
      isLoadingMore={k.isLoading}
      onLoadMore={z}
      paginationControlsAlignment={B}
      paginationMode={_}
      preserveExpandedItemOrderVersion={V}
      variant={variant}
      renderBeforeItem={H}
      afterItemsNode={U}
      paginationDropTargetRef={paginationDropTargetRef}
      renderRow={W}
    />
  );
  return <div className={L}>{G}</div>;
}
