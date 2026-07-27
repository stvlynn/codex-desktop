// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kEe`) / export `Ipt`.

export type BindReadWrite2Peers = {
  Fl: (...args: unknown[]) => unknown;
  OEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  a_e: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  s_e: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: BindReadWrite2Peers | null = null;

/** Wire bindReadWrite2 peers once companions land. */
export function setBindReadWrite2Peers(next: BindReadWrite2Peers): void {
  peers = next;
}

/**
 * Bundle export `Ipt` / internal `kEe`.
 */
export function bindReadWrite2() {
  if (peers == null) {
    throw new Error("bindReadWrite2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.s_e(),
      peers.xu(),
      (OEe = {
        annotationScreenshotsMode: peers.yu({
          agentAccess: `read-write`,
          default: peers.a_e,
          description: `When browser annotation screenshots are included`,
          key: `browser-annotation-screenshots-mode`,
          schema: peers.pl([`always`, `necessary`]),
        }),
        downloadDirectory: peers.yu({
          agentAccess: `hidden`,
          default: null,
          description: `Folder where files downloaded by the in-app browser are saved`,
          key: peers.Fl.BROWSER_DOWNLOAD_DIRECTORY,
          schema: peers.X().nullable(),
        }),
        promptForDownloadLocation: peers.yu({
          agentAccess: `hidden`,
          default: !1,
          description: `Whether manual browser downloads ask where to save each file`,
          key: peers.Fl.BROWSER_DOWNLOAD_PROMPT_ENABLED,
          schema: peers.il(),
        }),
      }));
  });
}
