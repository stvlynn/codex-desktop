// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EJ`) / export `ED`.

export type BindBindLocalConversationGitActions2Peers = {
  AWo: (...args: unknown[]) => unknown;
  BUo: (...args: unknown[]) => unknown;
  CJ: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  DWo: (...args: unknown[]) => unknown;
  EWo: (...args: unknown[]) => unknown;
  FWo: (...args: unknown[]) => unknown;
  HFi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IWo: (...args: unknown[]) => unknown;
  LWo: (...args: unknown[]) => unknown;
  MWo: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NWo: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  OWo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PWo: (...args: unknown[]) => unknown;
  RWo: (...args: unknown[]) => unknown;
  SJ: (...args: unknown[]) => unknown;
  SWo: (...args: unknown[]) => unknown;
  TJ: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  VFi: (...args: unknown[]) => unknown;
  XHo: (...args: unknown[]) => unknown;
  YHo: (...args: unknown[]) => unknown;
  _J: (...args: unknown[]) => unknown;
  aJ: (...args: unknown[]) => unknown;
  bWo: (...args: unknown[]) => unknown;
  branch: (...args: unknown[]) => unknown;
  cD: (...args: unknown[]) => unknown;
  cWo: (...args: unknown[]) => unknown;
  commitsAhead: (...args: unknown[]) => unknown;
  dJ: (...args: unknown[]) => unknown;
  dWo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fJ: (...args: unknown[]) => unknown;
  fWo: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kWo: (...args: unknown[]) => unknown;
  lWo: (...args: unknown[]) => unknown;
  oJ: (...args: unknown[]) => unknown;
  pJ: (...args: unknown[]) => unknown;
  uWo: (...args: unknown[]) => unknown;
  vJ: (...args: unknown[]) => unknown;
  xWo: (...args: unknown[]) => unknown;
  yJ: (...args: unknown[]) => unknown;
};
let peers: BindBindLocalConversationGitActions2Peers | null = null;

/** Wire bindBindLocalConversationGitActions2 peers once companions land. */
export function setBindBindLocalConversationGitActions2Peers(
  next: BindBindLocalConversationGitActions2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `ED` / internal `EJ`.
 */
export function bindBindLocalConversationGitActions2() {
  if (peers == null) {
    throw new Error(
      "bindBindLocalConversationGitActions2 peers are not configured",
    );
  }
  return peers.e(() => {
    peers.Ho();
    peers.DD();
    peers.HFi();
    peers.XHo();
    peers.oJ();
    peers.BUo();
    peers.gT();
    peers.OE();
    peers.fWo();
    peers.xWo();
    peers.vJ();
    peers.SWo();
    xJ = peers.Ta(peers.yJ, null);
    DWo = peers.Ta(peers.yJ, null);
    OWo = peers.Oa(peers.hT, (e, { get }) => {
      return get(peers.VFi, {
        enabled: true,
        operationSource: "local_conversation_git_actions",
        lookup: {
          cwd: peers.e.cwd,
          hostConfig: peers.e.hostConfig,
        },
      });
    });
    kWo = peers.Oa(peers.hT, (e, { get }) => {
      return get(peers.YHo, {
        enabled: true,
        operationSource: "local_conversation_git_actions",
        lookup: {
          cwd: peers.e.cwd,
          hostConfig: peers.e.hostConfig,
        },
      });
    });
    SJ = peers.Oa(peers.hT, (e, { get }) => {
      let n = get(peers.OWo, peers.e),
        r = get(peers.aJ, {
          cwd: peers.e.cwd,
          hostConfig: peers.e.hostConfig,
          operationSource: "local_conversation_git_actions",
        });
      return peers.bWo({
        currentBranch:
          n.data ?? (r.type === "success" ? (r.data.branch ?? null) : null),
        storedThreadBranch: get(peers.cD, peers.e.conversationId),
      }).currentBranchName;
    });
    AWo = peers.Oa(peers.hT, (e, { get }) => {
      return (
        get(peers.dJ, peers.EWo(peers.e, get(peers.SJ, peers.e))).data?.url ??
        null
      );
    });
    jWo = peers.Oa(peers.hT, (e, { get }) => {
      return (
        get(peers.dJ, peers.EWo(peers.e, get(peers.SJ, peers.e))).data
          ?.hasOpenPr === true
      );
    });
    MWo = peers.Oa(peers.hT, (e, { get }) => {
      return peers.bWo({
        currentBranch: get(peers.SJ, peers.e),
        storedThreadBranch: get(peers.cD, peers.e.conversationId),
      }).hasThreadBranchMismatch;
    });
    NWo = peers.Oa(peers.hT, (e, { get }) => {
      let n = get(peers.OWo, peers.e);
      return n.isSuccess && n.data == null;
    });
    CJ = peers.Ma(peers.yJ, ({ get, scope }) => {
      return {
        ...scope.value.target,
        codexWorktree: scope.value.codexWorktree,
        conversationId: scope.value.conversationId,
        hostConfig: peers.e(peers.DE, scope.value.target.hostId),
      };
    });
    wJ = peers.Ma(peers.yJ, ({ get, scope }) => {
      return peers.e(peers.pJ, peers.fJ(scope.value.target));
    });
    PWo = peers.Ma(peers.yJ, ({ get }) => {
      return peers.e(peers.cWo, {
        ...peers.e(peers.CJ),
        includeUnstaged: true,
      });
    });
    FWo = peers.Oa(peers.hT, (e, { get }) => {
      let n = get(peers.OWo, peers.e);
      if (!n.isSuccess) return "hidden";
      let r = n.data?.trim() ?? "",
        i = r.length === 0;
      if (i) {
        let n = get(peers.aJ, {
            cwd: peers.e.cwd,
            hostConfig: peers.e.hostConfig,
            operationSource: "local_conversation_git_actions",
          }),
          r = n.type === "success" ? n.data : null;
        if (
          get(peers.cWo, {
            ...peers.e,
            includeUnstaged: true,
          }) != null &&
          (r?.commitsAhead ?? 0) === 0
        )
          return "hidden";
      } else {
        let n = get(peers.kWo, peers.e).data;
        if (n == null || r === n) return "hidden";
      }
      return get(peers.dWo, {
        conversationId: peers.e.conversationId,
        cwd: peers.e.cwd,
        hostConfig: peers.e.hostConfig,
        createsBranch: i,
        includeLocalChanges: get(peers._J, peers.fJ(peers.e)),
      }).blockedStep == null
        ? "enabled"
        : "disabled";
    });
    IWo = peers.Ma(peers.yJ, ({ get }) => {
      return peers.e(peers.FWo, peers.e(peers.CJ));
    });
    TJ = peers.Ma(peers.yJ, ({ get }) => {
      let t = peers.e(peers.CJ),
        n = peers.e(peers.aJ, {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: "local_conversation_git_actions",
        }),
        r = n.type === "success" ? n.data : undefined,
        i = peers.e(peers.OWo, t),
        a = i.isSuccess ? i.data : r?.branch;
      return t.codexWorktree && r != null && (!a || a === r.defaultBranch);
    });
    LWo = peers.Ma(peers.yJ, ({ get }) => {
      return peers.e(peers.TJ) && !peers.e(peers.NWo, peers.e(peers.CJ));
    });
    RWo = peers.Ma(peers.yJ, ({ get }) => {
      let t = peers.e(peers.CJ),
        n = peers.e(peers.PWo),
        r = peers.e(peers.lWo, t),
        i = peers.e(peers.uWo, t);
      return r == null ||
        (n == null && i == null) ||
        (peers.e(peers.TJ) && n == null)
        ? null
        : r;
    });
    zWo = peers.Ma(peers.yJ, ({ get, scope }) => {
      let n = peers.e(peers.CJ);
      return peers.e(peers.dWo, {
        conversationId: n.conversationId,
        cwd: n.cwd,
        hostConfig: n.hostConfig,
        createsBranch: peers.e(peers.TJ) || peers.e(peers.NWo, n),
        includeLocalChanges: peers.e(peers._J, peers.fJ(scope.value.target)),
      }).blockedStep;
    });
  });
}
