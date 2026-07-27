// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P3s`) / export `rh`.

export type CommandMenuFileSearchBridgePeers = {
  Eds: (...args: unknown[]) => unknown;
  F3s: (...args: unknown[]) => unknown;
  I3s: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  Kf: (...args: unknown[]) => unknown;
  MFi: (...args: unknown[]) => unknown;
  O3s: (...args: unknown[]) => unknown;
  OM: (...args: unknown[]) => unknown;
  Wm: (...args: unknown[]) => unknown;
  X$: (...args: unknown[]) => unknown;
  XFi: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  fj: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
};
let peers: CommandMenuFileSearchBridgePeers | null = null;

/** Wire CommandMenuFileSearchBridge peers once companions land. */
export function setCommandMenuFileSearchBridgePeers(
  next: CommandMenuFileSearchBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rh` / internal `P3s`.
 */
export function CommandMenuFileSearchBridge() {
  if (peers == null) {
    throw new Error("CommandMenuFileSearchBridge peers are not configured");
  }
  let t = peers.Io(peers.hT),
    n = peers.Y(peers.X$),
    r = peers.Y(peers.kI),
    i = peers.Y(peers.XFi),
    a = i[0] ?? null,
    o = peers.MFi(i),
    s = i.length > 0,
    c = (e) => {
      s &&
        peers.OM({
          scope: t,
          path: e,
          cwd: a == null ? null : peers.eu(a),
          hostConfig: r,
          hostId: r.id,
          openInSidePanel: true,
        });
    };
  let l = c,
    u;
  u = () => {
    s &&
      (peers.Jf.dispatchHostMessage({
        type: "command-menu",
        query: "",
      }),
      t.set(peers.X$, "files"),
      t.set(peers.fj, true));
  };
  peers.Kf("file-search-command-menu", peers.Wm(u));
  let d;
  return (
    (d = (e, t) => {
      return s ? (
        <peers.O3s
          clearSearch={t}
          close={e}
          hostId={r.id}
          onSelectFile={l}
          fileSearchRootPaths={o}
        />
      ) : null;
    }),
    peers.Eds({
      commandMenuFeature: "codex",
      dependencies: [s, n, r.id, a, ...o],
      enabled: s,
      exclusive: n === "files",
      groupKey: "suggested",
      id: "thread-file-search",
      order: -1000,
      render: d,
    }),
    null
  );
}
