// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oDo`) / export `lk`.

export type MergeAliasUrlGroupsPeers = {
  CDo: (...args: unknown[]) => unknown;
  SDo: (...args: unknown[]) => unknown;
  _Do: (...args: unknown[]) => unknown;
  gDo: (...args: unknown[]) => unknown;
  gSe: (...args: unknown[]) => unknown;
  hDo: (...args: unknown[]) => unknown;
  ig: (...args: unknown[]) => unknown;
  mDo: (...args: unknown[]) => unknown;
  pDo: (...args: unknown[]) => unknown;
  qEo: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  uDo: (...args: unknown[]) => unknown;
};

let peers: MergeAliasUrlGroupsPeers | null = null;

/** Wire mergeAliasUrlGroups peers once companions land. */
export function setMergeAliasUrlGroupsPeers(
  next: MergeAliasUrlGroupsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lk` / internal `oDo`.
 */
export function mergeAliasUrlGroups(e: unknown, t: unknown = []) {
  if (peers == null) {
    throw new Error("mergeAliasUrlGroups peers are not configured");
  }

  let n = [],
    r = (e, t) => {
      let r = n.filter((t) => e.aliases.some((e) => t.aliases.has(e))),
        i = r[0];
      if (i == null) {
        n.push({
          key: e.key,
          aliases: new Set(e.aliases),
          url: e.url,
          title: e.title,
          titlePriority: e.titlePriority,
          mimeType: e.mimeType,
          activities: new Set(e.activities),
          activitiesByTurn: new Map([[t, new Set(e.activities)]]),
          provider: e.provider,
          providerPriority: e.providerPriority,
          openInitiator: e.openInitiator,
          openInitiatorPriority: e.openInitiatorPriority,
        });
        return;
      }
      for (let e of r.slice(1)) {
        for (let t of e.aliases) i.aliases.add(t);
        for (let t of e.activities) i.activities.add(t);
        (peers.hDo(i, e), peers.pDo(i, e), n.splice(n.indexOf(e), 1));
      }
      for (let t of e.aliases) i.aliases.add(t);
      for (let t of e.activities) i.activities.add(t);
      (peers.mDo(i, t, e.activities), peers.pDo(i, e));
    };
  for (let n = e.length - 1; n >= 0; --n) {
    let i = e[n],
      a = (e) => {
        r(e, n);
      },
      o = peers.ig(i.items);
    for (let e = o.length - 1; e >= 0; --e) {
      let n = o[e];
      if (n.type === `userMessage`) peers.uDo(n.content, a);
      else if (n.type === `steeringUserMessage`) peers.uDo(n.input, a);
      else if (
        n.type === `webSearch` &&
        (n.action?.type === `openPage` || n.action?.type === `findInPage`) &&
        n.action.url != null
      ) {
        let e = peers._Do({
          activities: [`read`],
          url: n.action.url,
        });
        e != null && a(e);
      } else if (
        n.type === `mcpToolCall` &&
        n.status === `completed` &&
        n.error == null &&
        n.result != null
      ) {
        let e = peers.gSe(n.result._meta);
        if (e.status === `absent`) {
          let e = peers.qEo(n);
          if (e.length === 0) continue;
          let r = peers.SDo(n, t);
          for (let t of e) {
            let e = peers._Do({
              activities: [t.activity],
              mimeType: t.mimeType,
              provider: r,
              providerResourceId: t.providerResourceId,
              providerScope: n.pluginId ?? r.id,
              title: t.title,
              titlePriority: 2,
              url: t.url,
            });
            e != null && a(e);
          }
          continue;
        }
        if (e.status === `invalid` || e.resources.length === 0) continue;
        let r = peers.SDo(n, t);
        for (let t of e.resources) {
          let e = peers._Do({
            activities: t.activities,
            mimeType: t.mimeType,
            provider: r,
            providerResourceId: t.id,
            providerScope: n.pluginId ?? r.id,
            title: t.title,
            titlePriority: 2,
            url: t.url,
          });
          e != null && a(e);
        }
      }
    }
    peers.uDo(i.params.input, a);
  }
  return n.map((e) => ({
    key: e.key,
    url: e.url,
    title: e.title,
    mimeType: e.mimeType,
    activities: peers.CDo.filter((t) => e.activities.has(t)),
    isSource: peers.gDo(e),
    provider: e.provider,
    openInitiator: e.openInitiator,
  }));
}
