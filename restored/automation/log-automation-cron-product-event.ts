// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o3`) / export `Hu`.

export type LogAutomationCronProductEventPeers = {
  JXc: (...args: unknown[]) => unknown;
  gZc: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  xQn: (...args: unknown[]) => unknown;
};

let peers: LogAutomationCronProductEventPeers | null = null;

/** Wire logAutomationCronProductEvent peers once companions land. */
export function setLogAutomationCronProductEventPeers(next: LogAutomationCronProductEventPeers): void {
  peers = next;
}

/**
 * Bundle export `Hu` / internal `o3`.
 */
async function logAutomationCronProductEvent(e, t, n, r, i = n?.kind === `cron` && `pluginTemplateId` in n ? n : null) {
  if (peers == null) {
    throw new Error("logAutomationCronProductEvent peers are not configured");
  }

  let a = i?.kind === `cron` ? i.pluginTemplateId : null;
  e.logProductEvent(peers.xQn, {
    ...t,
    ...(n == null ? {} : peers.gZc(n)),
    ...(await peers.JXc(a, r))
  });
}
