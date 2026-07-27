// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `AQs`) / export `rg`.

export type DeferredRgPeers = {
  $Zs: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  CD: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DQs: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  EQs: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  OQs: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TQs: (...args: unknown[]) => unknown;
  Tx: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  addThreadRuntimeStatusEvidenceCallback: (...args: unknown[]) => unknown;
  descendantThreads: (...args: unknown[]) => unknown;
  dg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gnr: (...args: unknown[]) => unknown;
  isComplete: (...args: unknown[]) => unknown;
  kQs: (...args: unknown[]) => unknown;
  sg: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  wQs: (...args: unknown[]) => unknown;
  wx: (...args: unknown[]) => unknown;
};
let peers: DeferredRgPeers | null = null;

/** Wire deferredRg peers once companions land. */
export function setDeferredRgPeers(next: DeferredRgPeers): void {
  peers = next;
}

/**
 * Bundle export `rg` / internal `AQs`.
 */
export function deferredRg() {
  if (peers == null) {
    throw new Error("deferredRg peers are not configured");
  }
  return peers.e(() => {
    peers.Ho();
    peers.DD();
    peers.Vf();
    peers.Tx();
    peers.dg();
    peers.ed();
    peers.Dh();
    peers.wQs();
    peers.Gf();
    TQs = peers.Da(
      peers.Q,
      (e) => {
        return 0;
      },
      {
        onMount: (e, event) => {
          return event.watch(({ get }) => {
            return get(
              peers.eD,
              event.key,
            )?.addThreadRuntimeStatusEvidenceCallback(() => {
              return peers.e((e) => {
                return peers.e + 1;
              });
            });
          });
        },
      },
    );
    EQs = peers.Da(
      peers.Q,
      (e) => {
        return 0;
      },
      {
        onMount: (e, event) => {
          return event.watch(({ get }) => {
            let r = get(peers.eD, event.key);
            if (r == null) return;
            let i = () => {
                peers.e((e) => {
                  return peers.e + 1;
                });
              },
              a = r.addConversationStateCallback(i),
              o = r.addAnyConversationCallback(i);
            return () => {
              a();
              o();
            };
          });
        },
      },
    );
    DQs = peers.Da(
      peers.Q,
      (e) => {
        return null;
      },
      {
        onMount: (e, t) => {
          let { key } = t;
          if (key == null) return;
          let r = false,
            i = 0,
            a = false,
            o = null,
            s = null,
            c = null,
            l = new Set(),
            u = new Set(),
            d = new Set(),
            f = new Map(),
            p = async () => {
              if (!r) {
                for (r = true; s != null; ) {
                  let t = s,
                    r = i;
                  s = null;
                  try {
                    let o = await t();
                    if (i !== r) continue;
                    let s = o.descendantThreads;
                    l.clear();
                    for (let e of s) l.add(peers.e.id);
                    for (let e of f.keys()) l.has(peers.e) || f.delete(peers.e);
                    let p =
                      Array.from(d).some((item) => {
                        return peers.e === key || l.has(peers.e);
                      }) ||
                      Array.from(u).some((item) => {
                        return l.has(peers.e);
                      });
                    d.clear();
                    u.clear();
                    peers.e(
                      a
                        ? o
                        : {
                            ...o,
                            descendantThreads: s.map((item) => {
                              return {
                                ...peers.e,
                                status: f.get(peers.e.id) ?? peers.e.status,
                              };
                            }),
                          },
                    );
                    p && c?.();
                  } catch (e) {
                    peers.Wf.debug("Failed to load subagent threads", {
                      safe: {},
                      sensitive: {
                        error: peers.e,
                        parentConversationId: key,
                      },
                    });
                  }
                }
                r = false;
              }
            };
          return t.watch(({ get }) => {
            let m = get(peers.CD, key);
            if (m == null) {
              i += 1;
              s = null;
              c = null;
              peers.e(null);
              return;
            }
            let h = get(peers.Eh, "1221508807"),
              g = m.getHostId();
            h && (!a || o !== g) && peers.e(null);
            a = h;
            o = g;
            a && f.clear();
            c = () => {
              i += 1;
              s = async () => {
                return peers.Bf("discover-subagent-descendant-snapshot", {
                  conversationId: key,
                  reconcile: a,
                });
              };
              p();
            };
            c();
            let _ = m.addNotificationCallback(
                "thread/status/changed",
                ({ params: { status, threadId } }) => {
                  status != null &&
                    (!a && (r || l.has(threadId)) && f.set(threadId, status),
                    peers.e((e) => {
                      return peers.e?.descendantThreads.some((e) => {
                        return peers.e.id === threadId;
                      })
                        ? {
                            ...peers.e,
                            descendantThreads: peers.e.descendantThreads.map(
                              (item) => {
                                return peers.e.id === threadId
                                  ? {
                                      ...peers.e,
                                      status,
                                    }
                                  : peers.e;
                              },
                            ),
                          }
                        : peers.e;
                    }));
                },
              ),
              v = a
                ? undefined
                : m.addNotificationCallback(
                    "thread/started",
                    ({ params: { thread } }) => {
                      let t = peers.wx(peers.e);
                      t === key || (t != null && l.has(t))
                        ? c?.()
                        : r && t != null && d.add(t);
                    },
                  ),
              y = m.addNotificationCallback(
                ["thread/archived", "thread/deleted"],
                ({ params: { threadId } }) => {
                  l.has(peers.e) ? c?.() : r && u.add(peers.e);
                },
              ),
              b = m.addNotificationCallback("thread/unarchived", c);
            return () => {
              i += 1;
              s = null;
              c = null;
              l.clear();
              u.clear();
              d.clear();
              f.clear();
              peers.e(null);
              _();
              v?.();
              y();
              b();
            };
          });
        },
      },
    );
    OQs = peers.Oa(peers.Q, (e, { get }) => {
      return get(peers.DQs, peers.e)?.descendantThreads ?? null;
    });
    kQs = peers.Oa(peers.Q, (e, { get }) => {
      if (peers.e == null) return [];
      let n = get(peers.CD, peers.e);
      if (n == null) return [];
      let r = get(peers.Eh, "1221508807");
      r && get(peers.TQs, n.getHostId());
      let i = n.getHostId();
      get(peers.EQs, i);
      let a = n.getConversation(peers.e);
      if (a == null) return [];
      let o = peers.sg(a),
        s = n.getCachedConversations(),
        c = get(peers.DQs, peers.e);
      return peers
        .$Zs({
          cachedConversations: s,
          conversationTurns: o,
          getThreadRuntimeStatusEvidence: r
            ? (e) => {
                return n.getThreadRuntimeStatusEvidence(peers.e);
              }
            : undefined,
          parentConversationId: peers.e,
          sourceLinkedThreads: c?.descendantThreads ?? null,
          sourceLinkedThreadsDiscoveryComplete: c?.isComplete ?? false,
          threadSummaries: r ? get(peers.gnr, n.getHostId()) : [],
          useRevisableLifecycleProjection: r,
        })
        .filter(({ conversationId }) => {
          return !n.isConversationSuppressedAfterArchive(peers.e);
        });
    });
  });
}
