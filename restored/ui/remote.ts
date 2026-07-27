// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NY`) / export `BT`.

export type RemotePeers = {
  $1o: (...args: unknown[]) => unknown;
  A0o: (...args: unknown[]) => unknown;
  AY: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  B0o: (...args: unknown[]) => unknown;
  BA: (...args: unknown[]) => unknown;
  C0o: (...args: unknown[]) => unknown;
  D0o: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  E0o: (...args: unknown[]) => unknown;
  Ef: (...args: unknown[]) => unknown;
  F0o: (...args: unknown[]) => unknown;
  FA: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I0o: (...args: unknown[]) => unknown;
  IA: (...args: unknown[]) => unknown;
  ISo: (...args: unknown[]) => unknown;
  L0o: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  LSo: (...args: unknown[]) => unknown;
  M0o: (...args: unknown[]) => unknown;
  MY: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  N0o: (...args: unknown[]) => unknown;
  O0o: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  P0o: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R0o: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  T0o: (...args: unknown[]) => unknown;
  VA: (...args: unknown[]) => unknown;
  _Mr: (...args: unknown[]) => unknown;
  aT: (...args: unknown[]) => unknown;
  aj: (...args: unknown[]) => unknown;
  az: (...args: unknown[]) => unknown;
  b0o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ij: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  k0o: (...args: unknown[]) => unknown;
  ku: (...args: unknown[]) => unknown;
  lQr: (...args: unknown[]) => unknown;
  lp: (...args: unknown[]) => unknown;
  nj: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  oz: (...args: unknown[]) => unknown;
  pu: (...args: unknown[]) => unknown;
  sQr: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
  vMr: (...args: unknown[]) => unknown;
  x0o: (...args: unknown[]) => unknown;
  xK: (...args: unknown[]) => unknown;
  zA: (...args: unknown[]) => unknown;
};
let peers: RemotePeers | null = null;

/** Wire remote peers once companions land. */
export function setRemotePeers(next: RemotePeers): void {
  peers = next;
}

/**
 * Bundle export `BT` / internal `NY`.
 */
export function remote() {
  if (peers == null) {
    throw new Error("remote peers are not configured");
  }
  return peers.e(() => {
    peers.Ho();
    peers.Au();
    peers.DD();
    peers.lp();
    peers.RE();
    peers.IA();
    peers.ed();
    peers.OE();
    peers.oT();
    peers.vMr();
    peers.C0o();
    peers.AY();
    peers.oz();
    peers.aj();
    peers.xK();
    peers.HA();
    peers.lQr();
    peers.jf();
    T0o = [];
    E0o = peers.Ma(peers.Q, ({ get }) => {
      return get(peers.FA).data?.threadIds ?? peers.T0o;
    });
    D0o = peers.Ma(peers.Q, ({ get }) => {
      return get(peers.az, {
        threadKeys: get(peers.ij),
        enabled: true,
      }).groups;
    });
    O0o = peers.Ma(peers.Q, ({ get }) => {
      return peers.ISo(get(peers.D0o));
    });
    MY = peers.Oa(peers.Q, (e, { get }) => {
      return get(peers.O0o).get(e) ?? null;
    });
    k0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.nj, e);
      return n?.kind === "local" && n.conversation != null
        ? peers.sp(get, peers.Fl.THREAD_PROJECT_ASSIGNMENTS)?.[
            n.conversation.id
          ]
        : undefined;
    });
    A0o = peers.Ma(peers.Q, ({ get }) => {
      return peers.LSo(get(peers.D0o));
    });
    j0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.nj, e);
      if (n?.kind === "local" && n.conversation == null)
        return n.pendingWorktree.isPinned;
      switch (peers.zA(e)?.kind) {
        case "local":
        case "remote": {
          let r =
            n?.kind === "local" && n.conversation != null
              ? n.conversation.id
              : peers.VA(e);
          return r != null && get(peers.E0o).includes(r);
        }
        case undefined:
          return false;
      }
    });
    M0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = peers.BA(e),
        r = n == null ? null : get(peers.aT, n);
      return r != null && get(peers._Mr).automationThreadIds.has(r);
    });
    N0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = peers.BA(e),
        r = n == null ? null : get(peers.aT, n);
      return r == null
        ? null
        : (get(peers._Mr).automationDisplayNames.get(r) ?? null);
    });
    P0o = peers.Oa(
      peers.Q,
      (e, { get }) => {
        let n = get(peers.nj, e);
        if (n == null) return null;
        let r = peers.sp(get, peers.Fl.PROJECTLESS_THREAD_IDS);
        return peers.x0o({
          chatLabel: get(peers.LE).formatMessage({
            id: "sidebarElectron.threadHoverCardChatProject",
            defaultMessage: "Chat",
            description:
              "Fallback project label for a sidebar task hover card when it does not belong to a project or workspace",
          }),
          task: n,
          projectLabel: get(peers.MY, e)?.label,
          projectlessThreadIds: r == null ? undefined : new Set(r),
          showProjectlessHoverCard: get(peers.$1o),
        });
      },
      {
        isEqual: (e, t) => {
          return e?.isProjectless === t?.isProjectless && e?.label === t?.label;
        },
      },
    );
    F0o = peers.Oa(peers.Q, (e, { get }) => {
      return get(peers.MY, e)?.projectId ?? null;
    });
    I0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.MY, e)?.hostId;
      if (n == null) return null;
      let r = get(peers.DE, n);
      return r.id === n ? r : null;
    });
    L0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.nj, e);
      return n?.kind === "local"
        ? peers.ku({
            cwd:
              n.conversation == null
                ? (n.pendingWorktree.sourceWorkspaceRoot ?? null)
                : (n.conversation.cwd ?? null),
            assignment: get(peers.k0o, e),
          })
        : null;
    });
    R0o = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.MY, e),
        r = get(peers.nj, e),
        i = n?.repositoryData?.rootFolder ?? null;
      if (
        i == null &&
        n?.projectKind === "local" &&
        r?.kind === "local" &&
        r.conversation != null &&
        r.conversation.gitInfo != null &&
        get(peers.k0o, e)?.pendingCoreUpdate !== true
      ) {
        let n = r.conversation.gitInfo.originUrl,
          a = get(peers.L0o, e);
        n != null && (i = peers.sQr(n)?.repoName ?? null);
        i == null && a != null && !peers.pu(a) && (i = peers.Ef(a));
      }
      return peers.b0o({
        defaultProjectLabel: n?.path == null ? i : peers.Ef(n.path),
        projectLabel: n?.label ?? null,
        repositoryLabel: i,
      });
    });
    z0o = peers.Oa(peers.Q, (e, { get }) => {
      return e == null
        ? null
        : (peers.sp(get, peers.Fl.THREAD_WORKSPACE_ROOT_HINTS)?.[e] ?? null);
    });
    B0o = peers.Oa(peers.Q, (e, { get }) => {
      return e == null
        ? null
        : (peers.sp(get, peers.Fl.SIDEBAR_THREAD_METADATA)?.[e]?.labelColor ??
            null);
    });
  });
}
