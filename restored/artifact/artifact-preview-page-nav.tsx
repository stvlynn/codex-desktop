// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `c8i`) / export `VR`.

export type ArtifactPreviewPageNavPeers = {
  Hm: (...args: unknown[]) => unknown;
  Iz: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
};
let peers: ArtifactPreviewPageNavPeers | null = null;

/** Wire ArtifactPreviewPageNav peers once companions land. */
export function setArtifactPreviewPageNavPeers(
  next: ArtifactPreviewPageNavPeers,
): void {
  peers = next;
}

/**
 * Bundle export `VR` / internal `c8i`.
 */
export function ArtifactPreviewPageNav(props: unknown) {
  const Hm = peers.Hm;
  const Np = peers.Np;
  const Xm = peers.Xm;
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("ArtifactPreviewPageNav peers are not configured");
  }
  let { currentPage, onNextPage, onPreviousPage, totalPages } = props,
    o = peers.Ju(),
    s = o.formatMessage({
      id: "artifactTab.preview.previousPage",
      defaultMessage: "Previous page",
      description:
        "Tooltip for navigating to the previous page in an artifact preview",
    });
  let c = s,
    l = o.formatMessage({
      id: "artifactTab.preview.nextPage",
      defaultMessage: "Next page",
      description:
        "Tooltip for navigating to the next page in an artifact preview",
    });
  let u = l,
    d = currentPage <= 1,
    f = <Hm className="icon-2xs rotate-180" />;
  let p = (
    <Np
      color="ghost"
      size="toolbar"
      uniform={true}
      aria-label={c}
      className="[@container_(max-width:240px)]:hidden"
      disabled={d}
      onClick={onPreviousPage}
    >
      {f}
    </Np>
  );
  let m = <Xm tooltipContent={c}>{p}</Xm>;
  let h = (
    <span className="min-w-12 px-1 text-center text-sm text-token-text-primary tabular-nums [@container_(max-width:300px)]:min-w-9 [@container_(max-width:300px)]:px-0.5">
      {
        <Z
          id="artifactTab.preview.pageIndicator"
          defaultMessage={"{current}/{total}"}
          description="Current page indicator in an artifact preview header"
          values={{
            current: currentPage,
            total: totalPages,
          }}
        />
      }
    </span>
  );
  let g = currentPage >= totalPages,
    _ = <Hm className="icon-2xs" />;
  let v = (
    <Np
      color="ghost"
      size="toolbar"
      uniform={true}
      aria-label={u}
      className="[@container_(max-width:240px)]:hidden"
      disabled={g}
      onClick={onNextPage}
    >
      {_}
    </Np>
  );
  let y = <Xm tooltipContent={u}>{v}</Xm>;
  return (
    <div className="flex items-center gap-0.5">
      {m}
      {h}
      {y}
    </div>
  );
}
