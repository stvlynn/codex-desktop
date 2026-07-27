// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QQo`) / export `EE`.

export type BindReviewGitActionsMenuPeers = {
  DFi: (...args: unknown[]) => unknown;
  I8i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KQo: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  MI: (...args: unknown[]) => unknown;
  N8i: (...args: unknown[]) => unknown;
  NI: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  OFi: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Vq: (...args: unknown[]) => unknown;
  WQo: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  e$o: (...args: unknown[]) => unknown;
  iV: (...args: unknown[]) => unknown;
  mY: (...args: unknown[]) => unknown;
  n$o: (...args: unknown[]) => unknown;
  r$o: (...args: unknown[]) => unknown;
  sh: (...args: unknown[]) => unknown;
  t$o: (...args: unknown[]) => unknown;
};
let peers: BindReviewGitActionsMenuPeers | null = null;

/** Wire bindReviewGitActionsMenu peers once companions land. */
export function setBindReviewGitActionsMenuPeers(
  next: BindReviewGitActionsMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `EE` / internal `QQo`.
 */
export function bindReviewGitActionsMenu(props: unknown) {
  const IV = peers.iV;
  const Np = peers.Np;
  const Xm = peers.Xm;
  const Item = peers.KR.Item;
  const Separator = peers.KR.Separator;
  const To = peers.t$o;
  const VR = peers.VR;
  const Eo = peers.e$o;
  if (peers == null) {
    throw new Error("bindReviewGitActionsMenu peers are not configured");
  }
  let {
      copyGitApplyCommandDisabled,
      expanded,
      onClickCopyGitApplyCommand,
      onRefreshGitQueries,
      onToggleExpanded,
      refreshGitQueriesDisabled,
      showCopyGitApplyCommand,
      showHideWhitespace = true,
      showLoadFullFiles = true,
      showRefreshGitQueries,
    } = props,
    m = peers.Io(peers.Q),
    h = peers.Ju(),
    g = peers.Y(peers.NI),
    _ = peers.Y(peers.Vq),
    v = peers.Y(peers.OFi),
    y = peers.Y(peers.DFi),
    b = peers.Y(peers.MI),
    [x, S] = peers.r$o.useState(false),
    C = h.formatMessage({
      id: "codex.review.refreshGitQueries",
      defaultMessage: "Refresh",
      description:
        "Menu item to refresh git queries for the current repository",
    });
  let w = C,
    T = b
      ? h.formatMessage({
          id: "codex.review.wrap.disable",
          defaultMessage: "Disable word wrap",
          description: "Menu item to disable word wrap in diff view",
        })
      : h.formatMessage({
          id: "codex.review.wrap.enable",
          defaultMessage: "Enable word wrap",
          description: "Menu item to enable word wrap in diff view",
        });
  let E = T,
    D = expanded
      ? h.formatMessage({
          id: "codex.review.expandOrCollapseDiffMenu.collapse",
          defaultMessage: "Collapse all diffs",
          description:
            "Menu item to collapse all diffs in the review options menu",
        })
      : h.formatMessage({
          id: "codex.review.expandOrCollapseDiffMenu.expand",
          defaultMessage: "Expand all diffs",
          description:
            "Menu item to expand all diffs in the review options menu",
        });
  let O = D,
    k = h.formatMessage({
      id: "codex.review.header.moreOptions",
      defaultMessage: "Review options",
      description: "Aria label for review header dropdown menu button",
    });
  let A = k,
    j = () => {
      S(false);
    };
  let M = j,
    N = <IV className="icon-xs" />;
  let P = (
    <Np aria-label={A} color="ghost" size="toolbar" uniform={true}>
      {N}
    </Np>
  );
  let F = (
    <Xm tooltipContent={A} delayOpen={true}>
      {P}
    </Xm>
  );
  let I = showRefreshGitQueries ? (
    <Item
      onSelect={(event) => {
        event.preventDefault();
        onRefreshGitQueries?.();
        M();
      }}
      LeftIcon={peers.sh}
      disabled={refreshGitQueriesDisabled || !onRefreshGitQueries}
    >
      {w}
    </Item>
  ) : null;
  let L = (event) => {
    event.preventDefault();
    m.set(peers.MI, !b);
    M();
  };
  let R = b ? peers.I8i : peers.N8i,
    z = (
      <Item onSelect={L} LeftIcon={R}>
        {E}
      </Item>
    );
  let B = <Separator />;
  let V = () => {
    m.set(peers.OFi, !v);
  };
  let H = () => {
    m.set(peers.DFi, !y);
  };
  let U = () => {
    m.set(peers.NI, !g);
  };
  let W = () => {
    m.set(peers.Vq, !_);
  };
  let G = (
    <To
      onClose={M}
      wordDiffsEnabled={y}
      showCopyGitApplyCommand={showCopyGitApplyCommand}
      showHideWhitespace={showHideWhitespace}
      showLoadFullFiles={showLoadFullFiles}
      copyGitApplyCommandDisabled={copyGitApplyCommandDisabled}
      onClickCopyGitApplyCommand={onClickCopyGitApplyCommand}
      richPreviewEnabled={v}
      onToggleRichPreview={V}
      onToggleWordDiffs={H}
      hideWhitespace={g}
      onToggleHideWhitespace={U}
      loadFullFilesEnabled={_}
      onToggleLoadFullFiles={W}
    />
  );
  let K = (
    <VR
      open={x}
      onOpenChange={S}
      align="end"
      contentWidth="menu"
      triggerButton={F}
    >
      {I}
      {z}
      {B}
      {G}
    </VR>
  );
  let q = expanded ? peers.KQo : peers.WQo,
    ee = <Eo Icon={q} label={O} onClick={onToggleExpanded} />;
  return (
    <>
      {K}
      {ee}
    </>
  );
}
