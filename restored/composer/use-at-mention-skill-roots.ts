// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vqa`) / export `gM`.

export type UseAtMentionSkillRootsPeers = {
  GKa: (...args: unknown[]) => unknown;
  IGa: (...args: unknown[]) => unknown;
  wqa: (...args: unknown[]) => unknown;
  xqa: (...args: unknown[]) => unknown;
  yqa: (...args: unknown[]) => unknown;
};

let peers: UseAtMentionSkillRootsPeers | null = null;

/** Wire UseAtMentionSkillRoots peers once companions land. */
export function setUseAtMentionSkillRootsPeers(
  next: UseAtMentionSkillRootsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gM` / internal `vqa`.
 */
export function UseAtMentionSkillRoots(e: unknown) {
  if (peers == null) {
    throw new Error("UseAtMentionSkillRoots peers are not configured");
  }

  let t = (0, peers.wqa.c)(10),
    n = e.skillRoots ?? e.roots,
    r;
  t[0] !== e.hostId || t[1] !== e.query || t[2] !== n
    ? ((r = {
        hostId: e.hostId,
        query: e.query,
        roots: n,
      }),
      (t[0] = e.hostId),
      (t[1] = e.query),
      (t[2] = n),
      (t[3] = r))
    : (r = t[3]);
  let i = peers.GKa(r),
    a;
  t[4] !== i.arePluginsLoading || t[5] !== i.mentionablePlugins
    ? ((a = i.arePluginsLoading ? null : peers.xqa(i.mentionablePlugins)),
      (t[4] = i.arePluginsLoading),
      (t[5] = i.mentionablePlugins),
      (t[6] = a))
    : (a = t[6]);
  let o;
  return (
    t[7] !== e.query || t[8] !== a
      ? ((o = {
          chromePluginId: a,
          query: e.query,
        }),
        (t[7] = e.query),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    peers.yqa(e, i, peers.IGa(o))
  );
}
