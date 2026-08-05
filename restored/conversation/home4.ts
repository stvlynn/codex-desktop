// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jI`) / export `mW`.

export type BindHome4Peers = {
  $8n: (...args: unknown[]) => unknown;
  $T: (...args: unknown[]) => unknown;
  AI: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CE: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  EE: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J8n: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  PDe: (...args: unknown[]) => unknown;
  RM: (...args: unknown[]) => unknown;
  codexHome: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eE: (...args: unknown[]) => unknown;
  fFi: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  gYr: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  ku: (...args: unknown[]) => unknown;
  mFi: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  pFi: (...args: unknown[]) => unknown;
  r5n: (...args: unknown[]) => unknown;
  rD: (...args: unknown[]) => unknown;
  t5n: (...args: unknown[]) => unknown;
  tYn: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
};

let peers: BindHome4Peers | null = null;

/** Wire bindHome4 peers once companions land. */
export function setBindHome4Peers(next: BindHome4Peers): void {
  peers = next;
}

/**
 * Bundle export `mW` / internal `jI`.
 */
export function bindHome4() {
  if (peers == null) {
    throw new Error("bindHome4 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.DD(),
      peers.eE(),
      peers.RM(),
      peers.oT(),
      peers.gT(),
      peers.OE(),
      (pFi = peers.Ma(peers.hT, ({ get: e, scope: t }) => {
        switch (t.value.routeKind) {
          case `home`:
          case `new-thread-panel`: {
            let n =
                t.value.routeKind !== `home` || t.value.projectContext == null
                  ? null
                  : peers.fFi({
                      defaultHostId: peers.e(peers.wD, null),
                      hostId: t.value.projectContext.hostId,
                      localProjects: peers.e(peers.t5n),
                      projectId: t.value.projectContext.projectId,
                      remoteProjects: peers.e(peers.$8n),
                    }),
              r = peers.e(peers.wD, null),
              { cwd: i, hostId: a } = peers.gYr({
                activeLocalProjectCwd: peers.e(peers.CE),
                conversationCwd: null,
                conversationHostId: null,
                selectedRemoteProject: peers.e(peers.r5n),
              });
            return {
              cwd: n?.cwd ?? i,
              hostId: n?.hostId ?? (a || r),
            };
          }
          case `client-local-thread`:
            return {
              cwd: peers.e(peers.tYn) ?? peers.e(peers.CE) ?? null,
              hostId: peers.e(peers.wD, null),
            };
          case `local-thread`: {
            let n = peers.e(peers.EE)?.[t.value.conversationId],
              r =
                t.value.projectContext == null
                  ? null
                  : peers.fFi({
                      defaultHostId: peers.e(peers.wD, null),
                      hostId: t.value.projectContext.hostId,
                      localProjects: peers.e(peers.t5n),
                      projectId: t.value.projectContext.projectId,
                      remoteProjects: peers.e(peers.$8n),
                    });
            return {
              cwd:
                r?.cwd ??
                peers.ku({
                  assignment: n,
                  cwd: peers.e(peers.oD, t.value.conversationId),
                }) ??
                peers.e(peers.CE),
              hostId:
                r?.hostId ??
                (n == null ? null : peers.PDe(n)) ??
                peers.e(peers.rD, t.value.conversationId) ??
                peers.e(peers.wD, t.value.conversationId),
            };
          }
          case `remote-thread`:
          case `chatgpt-thread`:
            return {
              cwd: null,
              hostId: peers.e(peers.wD, null),
            };
          case `other`:
            throw Error(`Thread context is unavailable for non-thread routes`);
        }
      })),
      (mFi = peers.Ma(peers.hT, ({ get: e, scope: t }) => {
        switch (t.value.routeKind) {
          case `home`:
          case `new-thread-panel`:
          case `client-local-thread`:
          case `local-thread`:
          case `remote-thread`:
          case `chatgpt-thread`:
            return peers.e(peers.J8n).data?.codexHome ?? null;
          case `other`:
            throw Error(`Thread context is unavailable for non-thread routes`);
        }
      })),
      (DI = peers.Ma(peers.hT, ({ get: e }) => peers.e(peers.pFi).cwd)),
      (OI = peers.Ma(peers.hT, ({ get: e }) => peers.e(peers.pFi).hostId)),
      (kI = peers.Ma(peers.hT, ({ get: e }) =>
        peers.e(peers.DE, peers.e(peers.OI)),
      )),
      (AI = peers.Ma(peers.hT, ({ get: e }) => peers.$T(peers.e(peers.kI)))));
  });
}
