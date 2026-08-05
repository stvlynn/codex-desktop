// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DAr`) / export `b$`.

export type UseRemoteProjectsSelectionPeers = {
  EAr: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  MD: (...args: unknown[]) => unknown;
  OAr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TAr: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: UseRemoteProjectsSelectionPeers | null = null;

/** Wire useRemoteProjectsSelection peers once companions land. */
export function setUseRemoteProjectsSelectionPeers(
  next: UseRemoteProjectsSelectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `b$` / internal `DAr`.
 */
export function useRemoteProjectsSelection() {
  if (peers == null) {
    throw new Error("useRemoteProjectsSelection peers are not configured");
  }

  let e = (0, peers.OAr.c)(16),
    t = peers.Io(peers.Q),
    { data: n, isLoading: r } = peers.MD(peers.Fl.REMOTE_PROJECTS),
    { data: i, isLoading: a } = peers.MD(peers.Fl.SELECTED_PROJECT),
    o;
  e[0] === n ? (o = e[1]) : ((o = n ?? []), (e[0] = n), (e[1] = o));
  let s = o,
    c = i?.type === `remote` ? i.projectId : null,
    l;
  e[2] !== s || e[3] !== c
    ? ((l = s.find((e) => e.id === c) ?? null),
      (e[2] = s),
      (e[3] = c),
      (e[4] = l))
    : (l = e[4]);
  let u = l,
    d = r || a,
    f = c ?? null,
    p;
  e[5] === t
    ? (p = e[6])
    : ((p = (e) => peers.TAr(t, e)), (e[5] = t), (e[6] = p));
  let m;
  e[7] === t
    ? (m = e[8])
    : ((m = (e) => peers.EAr(t, e)), (e[7] = t), (e[8] = m));
  let h;
  return (
    e[9] !== s ||
    e[10] !== u ||
    e[11] !== d ||
    e[12] !== f ||
    e[13] !== p ||
    e[14] !== m
      ? ((h = {
          isLoading: d,
          selectedRemoteProject: u,
          selectedRemoteProjectId: f,
          setSelectedRemoteProjectId: p,
          remoteProjects: s,
          setRemoteProjects: m,
        }),
        (e[9] = s),
        (e[10] = u),
        (e[11] = d),
        (e[12] = f),
        (e[13] = p),
        (e[14] = m),
        (e[15] = h))
      : (h = e[15]),
    h
  );
}
