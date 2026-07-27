// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jmo`) / export `sj`.

export type ReviewFileTreePeers = {
  Bmo: (...args: unknown[]) => unknown;
  Fmo: (...args: unknown[]) => unknown;
  Imo: (...args: unknown[]) => unknown;
  Lmo: (...args: unknown[]) => unknown;
  Mmo: (...args: unknown[]) => unknown;
  Nmo: (...args: unknown[]) => unknown;
  Omi: (...args: unknown[]) => unknown;
  Pmo: (...args: unknown[]) => unknown;
  Rmo: (...args: unknown[]) => unknown;
  Tmo: (...args: unknown[]) => unknown;
  UG: (...args: unknown[]) => unknown;
  Umo: (...args: unknown[]) => unknown;
  Vmo: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Wmo: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  iR: (...args: unknown[]) => unknown;
  j1a: (...args: unknown[]) => unknown;
  path: (...args: unknown[]) => unknown;
  treePath: (...args: unknown[]) => unknown;
  vk: (...args: unknown[]) => unknown;
  z1a: (...args: unknown[]) => unknown;
};
let peers: ReviewFileTreePeers | null = null;

/** Wire ReviewFileTree peers once companions land. */
export function setReviewFileTreePeers(next: ReviewFileTreePeers): void {
  peers = next;
}

/**
 * Bundle export `sj` / internal `jmo`.
 */
export function ReviewFileTree(props: unknown) {
  const Vk = peers.vk;
  const Tmo = peers.Tmo;
  const Z = peers.Z;
  const Z1a = peers.z1a;
  const Lmo = peers.Lmo;
  if (peers == null) {
    throw new Error("ReviewFileTree peers are not configured");
  }
  let {
      activePath,
      allowSelectingActivePath = false,
      cwd,
      hostId,
      onSelectPath,
      commentCountByPath,
      entries,
      reserveBottomPadding = false,
    } = props,
    f = cwd == null ? null : peers.eu(cwd);
  let p = f,
    m = peers.Omi(entries);
  let h = m,
    g = h.map(peers.Imo);
  let _ = g,
    v = h.map(peers.Fmo);
  let y = v,
    b = y.map(peers.Pmo).join("\0");
  let x = b,
    S = new Map(h.map(peers.Nmo));
  let C = S,
    w = peers.Rmo(_);
  let T = w,
    E = h.map(peers.Mmo);
  let D = E,
    O;
  bb0: {
    if (commentCountByPath == null) {
      O = undefined;
      break bb0;
    }
    let e;
    e = peers.Vmo(commentCountByPath.values());
    O = e;
  }
  let k = O,
    A = (e) => {
      let { item } = e;
      if (item.kind !== "file") return null;
      let n = C.get(item.path),
        r = n == null ? 0 : (commentCountByPath?.get(n.path) ?? 0);
      return r === 0
        ? null
        : {
            icon: peers.Bmo(r),
          };
    };
  let j = peers.Wm(A),
    M =
      activePath == null
        ? undefined
        : h.find((item) => {
            return item.entry.path === activePath;
          })?.treePath;
  let N = M,
    P = (e) => {
      let t = e.find((item) => {
        return C.get(item) != null;
      });
      if (t == null) return;
      let r = C.get(t)?.path;
      r != null && r !== activePath && onSelectPath(r);
    };
  let F = peers.Wm(P),
    I = (event) => {
      if (!allowSelectingActivePath) return;
      let t = peers.j1a(event.nativeEvent);
      if (t == null) return;
      let n = C.get(t)?.path;
      n != null && onSelectPath(n);
    };
  let L = I,
    R = reserveBottomPadding
      ? {
          paddingBottom: peers.iR,
        }
      : undefined;
  let z =
    h.length > 0 ? (
      <Vk
        name="ReviewFileTree"
        resetKey={x}
        fallback={
          <Tmo align="start" className="px-2 py-2">
            <Z
              id="codex.review.fileTree.renderError"
              defaultMessage="File tree couldn't render"
              description="Error shown when the review file tree fails to render"
            />
          </Tmo>
        }
      >
        <Z1a
          flattenEmptyDirectories={true}
          cwd={p}
          decorationIcons={k}
          gitStatus={D}
          hostId={hostId}
          initialExpandedPaths={T}
          itemHeight={peers.Wmo}
          onClick={L}
          onSelectionChange={F}
          paths={y}
          renderRowDecoration={j}
          selectedPath={N}
          unsafeCSS={
            "\n              [data-item-type='file'] {\n                color: var(--color-token-text-tertiary);\n              }\n\n              [data-item-type='file']:hover,\n              [data-item-type='file'][aria-selected='true'] {\n                color: var(--color-token-foreground);\n              }\n            "
          }
        />
      </Vk>
    ) : (
      <Lmo />
    );
  return (
    <div className="h-full min-h-0 w-full px-2" style={R}>
      {z}
    </div>
  );
}
