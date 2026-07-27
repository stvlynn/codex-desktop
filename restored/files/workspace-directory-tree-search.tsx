// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lpo`) / export `Ej`.

export type WorkspaceDirectoryTreeSearchPeers = {
  BG: (...args: unknown[]) => unknown;
  Df: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Iqr: (...args: unknown[]) => unknown;
  Po: (...args: unknown[]) => unknown;
  Spo: (...args: unknown[]) => unknown;
  Tpo: (...args: unknown[]) => unknown;
  VG: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  d0a: (...args: unknown[]) => unknown;
  dWi: (...args: unknown[]) => unknown;
  dpo: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  fWi: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  hpo: (...args: unknown[]) => unknown;
  lKa: (...args: unknown[]) => unknown;
  lWi: (...args: unknown[]) => unknown;
  mWi: (...args: unknown[]) => unknown;
  npo: (...args: unknown[]) => unknown;
  pWi: (...args: unknown[]) => unknown;
  ppo: (...args: unknown[]) => unknown;
  uWi: (...args: unknown[]) => unknown;
  upo: (...args: unknown[]) => unknown;
  vpo: (...args: unknown[]) => unknown;
  wpo: (...args: unknown[]) => unknown;
  ypo: (...args: unknown[]) => unknown;
};
let peers: WorkspaceDirectoryTreeSearchPeers | null = null;

/** Wire WorkspaceDirectoryTreeSearch peers once companions land. */
export function setWorkspaceDirectoryTreeSearchPeers(
  next: WorkspaceDirectoryTreeSearchPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ej` / internal `lpo`.
 */
export function WorkspaceDirectoryTreeSearch(props: unknown) {
  const Npo = peers.npo;
  const Dpo = peers.dpo;
  const Upo = peers.upo;
  if (peers == null) {
    throw new Error("WorkspaceDirectoryTreeSearch peers are not configured");
  }
  let {
      activeFilePath,
      autoFocusSearch,
      root,
      includeHidden,
      hostId,
      onSelectFile,
      refreshKey,
    } = props,
    l = peers.Io(peers.hT),
    u = {
      hostId,
      includeHidden,
      root,
    };
  let d = peers.Po(peers.wpo, u),
    f = peers.Y(d),
    p = {
      hostId,
      includeHidden,
      root,
    };
  let m = peers.Po(peers.Tpo, p),
    h = peers.Y(m),
    g = peers.eu(root);
  let _ = g,
    v,
    y;
  v =
    activeFilePath == null
      ? null
      : peers.fWi({
          filePath: activeFilePath,
          root,
        });
  y = peers.dWi(f, v);
  let b = y,
    [x, S] = peers.BG.useState(b.expandedPaths),
    [C, w] = peers.BG.useState(b.selectedPath),
    T = peers.BG.useRef(x),
    E = peers.BG.useRef(null),
    D = peers.BG.useRef(null),
    O = peers.BG.useRef(C),
    k = {
      directoryPath: null,
      expandedPaths: x,
      hostId,
      includeHidden,
      refreshKey,
      workspaceRoot: root,
    };
  let { error, files, isEmpty, isLoading } = peers.Fo(peers.d0a, k),
    P = [root];
  let F = P,
    I = (e) => {
      let { files: __files, query } = e;
      query.trim().length !== 0 &&
        l.set(m, {
          files: __files,
          query,
        });
    };
  let L = peers.Wm(I),
    R = {
      hostId,
      onFiles: L,
      query: f.searchQuery,
      roots: F,
    };
  let { files: _files, isLoading: _isLoading } = peers.lKa(R),
    V = f.searchQuery.trim();
  let H = V,
    U = peers.mWi(_files, h, f.searchQuery);
  let W = U,
    G = (e, t) => {
      if (onSelectFile != null) {
        onSelectFile(peers.Df(root, e), t);
        return;
      }
      l.get(peers.Iqr).mutate({
        cwd: _,
        path: e,
      });
    };
  let K = peers.Wm(G),
    q = (e) => {
      peers.ppo(e, (e) => {
        K(e, {
          isPreview: true,
        });
      });
    };
  let ee = peers.Wm(q),
    te = (e) => {
      K(e, {
        isPreview: false,
      });
    };
  let ne = peers.Wm(te),
    re = (e) => {
      W != null &&
        l.set(m, {
          files: W,
          query: f.searchQuery,
        });
      K(e, {
        isPreview: true,
      });
    };
  let ie = peers.Wm(re),
    ae = (e) => {
      K(e, {
        isPreview: false,
      });
    };
  let oe = peers.Wm(ae),
    se = () => {
      let e = E.current;
      e != null &&
        ((E.current = null),
        l.set(d, (t) => {
          return peers.lWi(t, e);
        }));
    };
  let ce = peers.Wm(se),
    le = (e) => {
      l.set(d, (t) => {
        return peers.uWi(t, e);
      });
    };
  let ue = peers.Wm(le),
    de = (e) => {
      E.current = e;
      D.current != null && window.clearTimeout(D.current);
      D.current = window.setTimeout(() => {
        D.current = null;
        ce();
      }, peers.Spo);
    };
  let fe = peers.Wm(de),
    pe = (e) => {
      peers.vpo(T.current, e.expandedPaths) ||
        ((T.current = e.expandedPaths), S(e.expandedPaths));
      O.current !== e.selectedPath &&
        ((O.current = e.selectedPath), w(e.selectedPath));
      fe(e);
    };
  let me = peers.Wm(pe),
    he,
    ge;
  he = () => {
    if (v == null) return;
    let e = peers.pWi(T.current, v);
    peers.vpo(T.current, e) || ((T.current = e), S(e));
    O.current !== v && ((O.current = v), w(v));
    E.current = null;
    D.current != null && (window.clearTimeout(D.current), (D.current = null));
    l.set(d, (e) => {
      return peers.dWi(e, v);
    });
  };
  ge = [v, d, l];
  peers.BG.useEffect(he, ge);
  let _e, ve;
  _e = () => {
    peers.hpo(l, {
      expandedItems: x,
      hostId,
      includeHidden,
      refreshKey,
      root,
    });
  };
  ve = [x, hostId, includeHidden, refreshKey, root, l];
  peers.BG.useEffect(_e, ve);
  let ye, be;
  ye = () => {
    return () => {
      D.current != null && (window.clearTimeout(D.current), (D.current = null));
      ce();
    };
  };
  be = [ce];
  peers.BG.useEffect(ye, be);
  let xe = (
    <div className="shrink-0 px-2 pt-2 pb-px">
      {
        <Npo
          autoFocus={autoFocusSearch}
          inputId="workspace-directory-tree-search"
          onQueryChange={ue}
          searchQuery={f.searchQuery}
        />
      }
    </div>
  );
  let Se = (
    <div className="min-h-0 flex-1">
      {H.length > 0 ? (
        <Dpo
          files={W}
          hostId={hostId}
          isLoading={_isLoading}
          onOpenFile={oe}
          onSelectFile={ie}
          query={f.searchQuery}
          root={root}
        />
      ) : (
        <Upo
          error={error}
          files={files}
          gitCwd={_}
          hostId={hostId}
          initialExpandedPaths={x}
          initialScrollTop={f.scrollTop}
          isEmpty={isEmpty}
          isLoading={isLoading}
          onOpenFile={ne}
          onSelectionChange={ee}
          onStateChange={me}
          revealSelectedPath={v != null}
          selectedPath={C}
        />
      )}
    </div>
  );
  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      {xe}
      {Se}
    </div>
  );
}
