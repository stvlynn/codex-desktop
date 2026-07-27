// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oCo`) / export `$k`.

export type UseArchiveConversationActionsPeers = {
  $So: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  DK: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  aCo: (...args: unknown[]) => unknown;
  cCo: (...args: unknown[]) => unknown;
  commit: (...args: unknown[]) => unknown;
  discard: (...args: unknown[]) => unknown;
  iCo: (...args: unknown[]) => unknown;
  lCo: (...args: unknown[]) => unknown;
  nCo: (...args: unknown[]) => unknown;
  rCo: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  sCo: (...args: unknown[]) => unknown;
};

let peers: UseArchiveConversationActionsPeers | null = null;

/** Wire useArchiveConversationActions peers once companions land. */
export function setUseArchiveConversationActionsPeers(next: UseArchiveConversationActionsPeers): void {
  peers = next;
}

/**
 * Bundle export `$k` / internal `oCo`.
 */
export function useArchiveConversationActions() {
  if (peers == null) {
    throw new Error("useArchiveConversationActions peers are not configured");
  }

  let e = (0, peers.lCo.c)(17),
    t = peers.Io(peers.Q),
    n = peers.Ju(),
    r,
    i;
  e[0] !== n || e[1] !== t
    ? ((r = (e) => {
        let {
          conversationId: r,
          hostId: i,
          source: a,
          onArchiveStart: o,
          onArchiveSuccess: s,
          onArchiveError: c,
          appHistory: l,
        } = e;
        o?.();
        let u =
          l == null
            ? null
            : peers.$So(t, {
                archiveSource: a,
                conversationId: r,
                hostId: i ?? `local`,
                onRedoError: l.onRedoError,
                onRedoStart: l.onRedoStart,
                onRedoSuccess: l.onRedoSuccess,
                onUndoSuccess: l.onUndoSuccess,
              });
        peers
          .Bf(`archive-conversation`, {
            conversationId: r,
            hostId: i,
            source: a,
          })
          .then(() => {
            (u?.commit(), s?.());
          })
          .catch(() => {
            (u?.discard(),
              c?.(),
              t
                .get(peers.rh)
                .danger(n.formatMessage(peers.DK.archiveThreadError)));
          });
      }),
      (i = (e) => {
        let { conversationId: r } = e;
        peers
          .Bf(`interrupt-conversation`, {
            conversationId: r,
            initiatedBy: `user`,
          })
          .catch(() => {
            t.get(peers.rh).danger(
              n.formatMessage(peers.DK.interruptThreadError),
            );
          });
      }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r),
      (e[3] = i))
    : ((r = e[2]), (i = e[3]));
  let a, o;
  e[4] !== n || e[5] !== t
    ? ((a = (e) => {
        let { conversationId: r, hostId: i, title: a } = e;
        peers
          .Bf(`set-thread-title`, {
            conversationId: r,
            hostId: i,
            title: a,
            updateDescription: !0,
          })
          .catch(() => {
            t.get(peers.rh).danger(n.formatMessage(peers.DK.renameThreadError));
          });
      }),
      (o = (e) => {
        peers.nCo({
          scope: t,
          cwd: e,
          intl: n,
        });
      }),
      (e[4] = n),
      (e[5] = t),
      (e[6] = a),
      (e[7] = o))
    : ((a = e[6]), (o = e[7]));
  let s;
  e[8] !== n || e[9] !== t
    ? ((s = (e) => {
        peers.aCo({
          ...e,
          scope: t,
          intl: n,
        });
      }),
      (e[8] = n),
      (e[9] = t),
      (e[10] = s))
    : (s = e[10]);
  let c;
  return (
    e[11] !== r || e[12] !== i || e[13] !== a || e[14] !== o || e[15] !== s
      ? ((c = {
          archiveThread: r,
          interruptThread: i,
          markThreadAsUnread: peers.cCo,
          markThreadAsRead: peers.sCo,
          renameThread: a,
          copyWorkingDirectory: o,
          copySessionId: peers.rCo,
          copyAppLink: peers.iCo,
          copyConversationMarkdown: s,
        }),
        (e[11] = r),
        (e[12] = i),
        (e[13] = a),
        (e[14] = o),
        (e[15] = s),
        (e[16] = c))
      : (c = e[16]),
    c
  );
}
