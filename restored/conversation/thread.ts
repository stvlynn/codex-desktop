// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XTr`) / export `h1`.

export type BindThreadPeers = {
  GTr: (...args: unknown[]) => unknown;
  JTr: (...args: unknown[]) => unknown;
  KTr: (...args: unknown[]) => unknown;
  Lk: (...args: unknown[]) => unknown;
  UTr: (...args: unknown[]) => unknown;
  YTr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kTr: (...args: unknown[]) => unknown;
  menuTitle: (...args: unknown[]) => unknown;
  qTr: (...args: unknown[]) => unknown;
};

let peers: BindThreadPeers | null = null;

/** Wire bindThread peers once companions land. */
export function setBindThreadPeers(next: BindThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `h1` / internal `XTr`.
 */
export function bindThread() {
  if (peers == null) {
    throw new Error("bindThread peers are not configured");
  }

  return peers.e(() => {
    (peers.kTr(),
      (GTr = [
        `thread`,
        `navigation`,
        `panels`,
        `workspace`,
        `skills`,
        `configure`,
        `app`,
      ]),
      (KTr = [
        [`closeTab`, `closeWindow`],
        [`nextTab`, `nextThread`],
        [`nextTab`, `nextRecentThread`],
        [`previousTab`, `previousThread`],
        [`previousTab`, `previousRecentThread`],
      ]),
      (qTr = new Map()));
    for (let e of peers.Lk) {
      if (peers.qTr.has(peers.e.id))
        throw Error(`Duplicate Codex command id: ${peers.e.id}`);
      peers.qTr.set(peers.e.id, peers.e);
    }
    ((JTr = peers.Lk.filter(
      (e) => peers.e.kind === `webview` && /^thread[1-9]$/.test(peers.e.id),
    ).map((e) => peers.e.id)),
      (YTr = peers.Lk.filter(
        (e) =>
          peers.e.kind === `webview` &&
          /^environmentAction[1-9]$/.test(peers.e.id),
      ).map((e) => peers.e.id)),
      peers.Lk.flatMap((e) => {
        let t = peers.UTr(peers.e);
        return t?.menuTitle == null || t.menuTitleIntlId == null
          ? []
          : [t.menuTitleIntlId];
      }),
      peers.Lk.flatMap((e) => {
        if (!(`vscodeCommand` in peers.e) || peers.e.vscodeCommand == null)
          return [];
        let { commandId: t = `chatgpt.${peers.e.id}`, ...n } =
          peers.e.vscodeCommand;
        return [
          {
            commandId: t,
            ...n,
          },
        ];
      }));
  });
}
