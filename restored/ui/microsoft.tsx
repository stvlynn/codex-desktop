// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IN`) / export `oq`.

export type BindMicrosoftPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  g3r: (...args: unknown[]) => unknown;
  h3r: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  tp: (...args: unknown[]) => unknown;
};

let peers: BindMicrosoftPeers | null = null;

/** Wire bindMicrosoft peers once companions land. */
export function setBindMicrosoftPeers(next: BindMicrosoftPeers): void {
  peers = next;
}

/**
 * Bundle export `oq` / internal `IN`.
 */
export function bindMicrosoft() {
  if (peers == null) {
    throw new Error("bindMicrosoft peers are not configured");
  }

  return peers.e(() => {
    (peers.ed(),
      peers.Uf(),
      peers.qx(),
      peers.ap(),
      (h3r = {
        gmail: `outlook-email`,
        "google-calendar": `outlook-calendar`,
        "google-drive": `sharepoint`,
        slack: `teams`,
      }),
      (g3r = peers.tp(peers.Q, `email-domain-mail-provider`, (e) => ({
        enabled: peers.e != null,
        params:
          peers.e == null
            ? void 0
            : {
                domain: peers.e,
              },
        retry: 2,
        staleTime: peers.Hf.FIVE_MINUTES,
      }))));
  });
}
