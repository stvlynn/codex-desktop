// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `E$r`) / export `RJ`.

export type BindRemoteThreadPeers = {
  C$r: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  S$r: (...args: unknown[]) => unknown;
  T$r: (...args: unknown[]) => unknown;
  _$r: (...args: unknown[]) => unknown;
  aN: (...args: unknown[]) => unknown;
  b$r: (...args: unknown[]) => unknown;
  c$r: (...args: unknown[]) => unknown;
  current_assistant_turn: (...args: unknown[]) => unknown;
  current_user_turn: (...args: unknown[]) => unknown;
  d$r: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  f$r: (...args: unknown[]) => unknown;
  fQr: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  h$r: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  l$r: (...args: unknown[]) => unknown;
  pQr: (...args: unknown[]) => unknown;
  u$r: (...args: unknown[]) => unknown;
  w$r: (...args: unknown[]) => unknown;
  x$r: (...args: unknown[]) => unknown;
};

let peers: BindRemoteThreadPeers | null = null;

/** Wire bindRemoteThread peers once companions land. */
export function setBindRemoteThreadPeers(next: BindRemoteThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `RJ` / internal `E$r`.
 */
export function bindRemoteThread() {
  if (peers == null) {
    throw new Error("bindRemoteThread peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.aN(),
      peers.ed(),
      peers.gT(),
      peers._$r(),
      (b$r = peers.Ia(peers.hT, ({ scope: e }) =>
        peers.fQr(
          peers.e.value.routeKind === `remote-thread`
            ? peers.e.value.taskId
            : null,
        ),
      )),
      (x$r = peers.Ia(peers.hT, ({ scope: e }) =>
        peers.pQr(
          peers.e.value.routeKind === `remote-thread`
            ? peers.e.value.taskId
            : null,
        ),
      )),
      (S$r = peers.Da(peers.Q, (e) => !1)),
      (C$r = peers.Ma(peers.hT, ({ get: e }) => {
        let { data: t } = peers.e(peers.b$r);
        return peers.l$r({
          taskTurns: peers.e(peers.x$r).data,
          fallbackUserTurn: t?.current_user_turn ?? null,
          fallbackAssistantTurn: t?.current_assistant_turn ?? null,
        });
      })),
      (w$r = peers.Ma(peers.hT, ({ get: e }) => {
        let { data: t } = peers.e(peers.b$r),
          n = t?.current_assistant_turn;
        if (n && !n.discarded) return n;
        let r = peers.e(peers.C$r);
        if (!n) {
          let e = peers.h$r(peers.u$r(r), peers.d$r(r)).at(-1);
          return peers.e
            ? peers.f$r(peers.e.node.assistantTurns, peers.e.activeId)
            : null;
        }
        return (
          peers.f$r(
            r.filter(
              (e) =>
                !peers.c$r(peers.e) &&
                peers.e.previous_turn_id === n.previous_turn_id,
            ),
            n.id,
          ) ?? n
        );
      })),
      (T$r = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.w$r);
        return t == null ? !1 : peers.e(peers.S$r, t.id);
      })));
  });
}
