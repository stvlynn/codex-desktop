// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yer`) / export `f4`.

export type DispatchThreadProjectAssignmentMessagePeers = {
  $6n: (...args: unknown[]) => unknown;
  C8n: (...args: unknown[]) => unknown;
  D6n: (...args: unknown[]) => unknown;
  Fer: (...args: unknown[]) => unknown;
  Ger: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  J6n: (...args: unknown[]) => unknown;
  JHn: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  MYn: (...args: unknown[]) => unknown;
  NJn: (...args: unknown[]) => unknown;
  O7n: (...args: unknown[]) => unknown;
  PUn: (...args: unknown[]) => unknown;
  Per: (...args: unknown[]) => unknown;
  RZe: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  Xer: (...args: unknown[]) => unknown;
  YZe: (...args: unknown[]) => unknown;
  azn: (...args: unknown[]) => unknown;
  c8n: (...args: unknown[]) => unknown;
  dQt: (...args: unknown[]) => unknown;
  dtn: (...args: unknown[]) => unknown;
  dzn: (...args: unknown[]) => unknown;
  fYn: (...args: unknown[]) => unknown;
  g8n: (...args: unknown[]) => unknown;
  get: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  includes: (...args: unknown[]) => unknown;
  lzn: (...args: unknown[]) => unknown;
  m6n: (...args: unknown[]) => unknown;
  mzn: (...args: unknown[]) => unknown;
  nu: (...args: unknown[]) => unknown;
  rUn: (...args: unknown[]) => unknown;
  rXn: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  rzn: (...args: unknown[]) => unknown;
  t8n: (...args: unknown[]) => unknown;
  tXn: (...args: unknown[]) => unknown;
  u3n: (...args: unknown[]) => unknown;
  up: (...args: unknown[]) => unknown;
  w6n: (...args: unknown[]) => unknown;
  wh: (...args: unknown[]) => unknown;
  y8n: (...args: unknown[]) => unknown;
  z6n: (...args: unknown[]) => unknown;
  z8n: (...args: unknown[]) => unknown;
};
let peers: DispatchThreadProjectAssignmentMessagePeers | null = null;

/** Wire dispatchThreadProjectAssignmentMessage peers once companions land. */
export function setDispatchThreadProjectAssignmentMessagePeers(
  next: DispatchThreadProjectAssignmentMessagePeers,
): void {
  peers = next;
}

/**
 * Bundle export `f4` / internal `Yer`.
 */
export function dispatchThreadProjectAssignmentMessage(
  e: unknown,
  t: unknown,
  n: unknown,
  {
    dispatchMessageFromView = (e, t) => {
      peers.Jf.dispatchMessage(e, t);
    },
    dispatchMessageToView = (e) => {
      window.dispatchEvent(
        new MessageEvent("message", {
          data: e,
          origin: window.location.origin,
          source: window,
        }),
      );
    },
    hostFetch = peers.rp,
    ipcBridge = {
      registerBroadcastHandler: peers.up,
      request: peers.YZe,
      threadArchived: (e) => {
        return (
          peers.gp.clientCoordination?.threadArchived(e) ?? Promise.resolve()
        );
      },
      threadReadStateChanged: (e) => {
        return (
          peers.gp.clientCoordination?.threadReadStateChanged(e) ??
          Promise.resolve()
        );
      },
      threadStreamFollowingChanged: ({ targetClientIds, ...rest }) => {
        return (
          peers.gp.clientCoordination?.threadStreamFollowingChanged({
            params: rest,
            targetClientIds,
          }) ?? Promise.resolve()
        );
      },
      threadStreamFollowingStatusRequested: (e) => {
        return (
          peers.gp.clientCoordination?.threadStreamFollowingStatusRequested(
            e,
          ) ?? Promise.resolve()
        );
      },
      threadStreamStateChanged: ({ targetClientIds, ...rest }) => {
        return (
          peers.gp.clientCoordination?.threadStreamStateChanged({
            params: rest,
            targetClientIds,
          }) ?? Promise.resolve()
        );
      },
      threadUnarchived: (e) => {
        return (
          peers.gp.clientCoordination?.threadUnarchived(e) ?? Promise.resolve()
        );
      },
    },
    useTailHydration = () => {
      return true;
    },
    suppressResumeHistoryDrain = () => {
      return e == null ? false : peers.wh(e, "3446105535");
    },
    supportsPaginatedThreadHistory,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error(
      "dispatchThreadProjectAssignmentMessage peers are not configured",
    );
  }
  let u = t === peers.H_,
    d = !peers.nu(t) && true,
    f = new peers.rzn(
      t,
      n,
      dispatchMessageFromView,
      dispatchMessageToView,
      hostFetch,
      ipcBridge,
      useTailHydration,
      e,
      {
        canonicalTurnHistory: true,
        suppressResumeHistoryDrain,
        supportsPaginatedThreadHistory,
        getRecentConversationDiscoveryLimit: () => {
          let t = peers.Ger(e?.get(peers.Th) ?? null);
          return peers.Xer(
            d,
            t === "consume" && peers.gp.localThreadCatalog != null,
          );
        },
        isOpenAIFormElicitationsEnabled: () => {
          return e?.get(peers.azn) ?? true;
        },
        onExpandedThreadHistoryLoaded: (t) => {
          e != null && u && peers.Ub(e, peers.dQt, t);
        },
        saveThreadProjectAssignment: async (t) => {
          let n = peers.gp.threadProjectAssignments;
          if (n == null)
            throw Error("Thread project assignment service is unavailable");
          await n.setAssignment(t);
          e != null && (await peers.RZe(e, t));
        },
        getThreadHasUnreadTurn: ({ hostId, threadId }) => {
          return (
            (e == null ? {} : peers.dzn(e))[hostId]?.includes(threadId) === true
          );
        },
        setThreadHasUnreadTurn: ({ hostId, threadId, hasUnreadTurn }) => {
          if (e == null) return;
          let i = peers.dzn(e),
            a = i[hostId] ?? [];
          a.includes(threadId) !== hasUnreadTurn &&
            e.set(peers.mzn, {
              ...i,
              [hostId]: hasUnreadTurn
                ? [...a, threadId]
                : a.filter((item) => {
                    return item !== threadId;
                  }),
            });
        },
        setThreadDescription:
          e == null
            ? undefined
            : ({ threadId, description }) => {
                peers.y8n(e, threadId, description);
              },
      },
    );
  return (
    peers.z8n(f),
    e != null &&
      (peers.JHn(f, e),
      t.startsWith("remote-control:") && peers.lzn(f),
      peers.rUn(f, e),
      peers.MYn(e, f),
      peers.tXn(f),
      u && peers.fYn(f),
      peers.PUn(e, f),
      peers.NJn(e, f),
      peers.dtn(e, f),
      peers.rXn(f),
      peers.Per(e, f),
      peers.Fer(e, f),
      peers.O7n(f),
      peers.u3n(e, f),
      peers.c8n(e, f),
      peers.g8n(f),
      peers.w6n(e, f),
      peers.m6n(e, f),
      peers.z6n(e),
      peers.J6n(e, f),
      peers.$6n(e, f),
      peers.t8n(e, f),
      peers.C8n(e, f),
      peers.D6n(e, f),
      f.cleanupPendingPastedTextAttachments().catch(() => {
        return undefined;
      })),
    f
  );
}
