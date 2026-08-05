// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mmo`) / export `_j`.

export type UsePullRequestCommentsForConversationPeers = {
  Fo: (...args: unknown[]) => unknown;
  Rpo: (...args: unknown[]) => unknown;
  cD: (...args: unknown[]) => unknown;
  hmo: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  smo: (...args: unknown[]) => unknown;
};

let peers: UsePullRequestCommentsForConversationPeers | null = null;

/** Wire usePullRequestCommentsForConversation peers once companions land. */
export function setUsePullRequestCommentsForConversationPeers(
  next: UsePullRequestCommentsForConversationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_j` / internal `mmo`.
 */
export function usePullRequestCommentsForConversation(e: unknown) {
  if (peers == null) {
    throw new Error(
      "usePullRequestCommentsForConversation peers are not configured",
    );
  }

  let t = (0, peers.hmo.c)(11),
    {
      conversationId: n,
      enablePullRequestComments: r,
      localConversationId: i,
    } = e,
    a = r === void 0 ? !0 : r,
    { comments: o, modelComments: s, setComments: c } = peers.smo(n, i),
    l = String(n),
    u;
  t[0] === l ? (u = t[1]) : ((u = peers.kl(l)), (t[0] = l), (t[1] = u));
  let d = u,
    f = peers.Fo(peers.cD, d) ?? ``,
    p = peers.Fo(peers.oD, d),
    m = peers.Fo(peers.rD, d) ?? void 0,
    h;
  t[2] !== f || t[3] !== p || t[4] !== m
    ? ((h = {
        cwd: p,
        headBranch: f,
        hostId: m,
        operationSource: `diff_comment_sources`,
      }),
      (t[2] = f),
      (t[3] = p),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let g = peers.Fo(peers.Rpo, h),
    _ = a && g.type === `success` ? g.data.commentAttachments : void 0,
    v;
  return (
    t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== _
      ? ((v = {
          commentProps: {
            enableComments: !0,
            comments: o,
            modelComments: s,
            onCommentsChange: c,
            readonlyComments: _,
          },
        }),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = _),
        (t[10] = v))
      : (v = t[10]),
    v
  );
}
