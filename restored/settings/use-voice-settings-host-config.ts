// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LM`) / export `YY`.

export type UseVoiceSettingsHostConfigPeers = {
  B_: (...args: unknown[]) => unknown;
  CE: (...args: unknown[]) => unknown;
  DAr: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  G_: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  _Yr: (...args: unknown[]) => unknown;
  gYr: (...args: unknown[]) => unknown;
  mYr: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  xE: (...args: unknown[]) => unknown;
};

let peers: UseVoiceSettingsHostConfigPeers | null = null;

/** Wire useVoiceSettingsHostConfig peers once companions land. */
export function setUseVoiceSettingsHostConfigPeers(next: UseVoiceSettingsHostConfigPeers): void {
  peers = next;
}

/**
 * Bundle export `YY` / internal `LM`.
 */
export function useVoiceSettingsHostConfig(e: unknown) {
  if (peers == null) {
    throw new Error("useVoiceSettingsHostConfig peers are not configured");
  }

  let t = (0, peers._Yr.c)(13),
    n = e === void 0 ? null : e,
    r = peers.Fo(peers.oD, n),
    i = peers.Fo(peers.rD, n),
    { data: a, isLoading: o } = peers.Y(peers.xE),
    s = peers.Y(peers.CE),
    c = peers.Y(peers.SE),
    { remoteConnections: l } = peers.Y(peers.mYr),
    { selectedRemoteProject: u } = peers.DAr(),
    [d] = peers.B_(`host_config`),
    f = a?.roots?.[0] ?? null,
    p,
    m;
  t[0] !== s ||
  t[1] !== r ||
  t[2] !== i ||
  t[3] !== d ||
  t[4] !== l ||
  t[5] !== u
    ? ((p = peers.gYr({
        activeLocalProjectCwd: s,
        conversationCwd: r,
        conversationHostId: i,
        selectedRemoteProject: u,
      })),
      (m = d && p.hostId === d.id ? d : peers.G_(p.hostId, l)),
      (t[0] = s),
      (t[1] = r),
      (t[2] = i),
      (t[3] = d),
      (t[4] = l),
      (t[5] = u),
      (t[6] = p),
      (t[7] = m))
    : ((p = t[6]), (m = t[7]));
  let h = m,
    g = o || c,
    _;
  return (
    t[8] !== f || t[9] !== h || t[10] !== p || t[11] !== g
      ? ((_ = {
          activeWorkspaceRoot: f,
          isActiveWorkspaceRootLoading: g,
          hostConfig: h,
          ...p,
        }),
        (t[8] = f),
        (t[9] = h),
        (t[10] = p),
        (t[11] = g),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
