// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tqo`) / export `lD`.

export type BindTextTokenDescriptionForegroundPeers = {
  $Ko: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Cqo: (...args: unknown[]) => unknown;
  DKo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  OKo: (...args: unknown[]) => unknown;
  QKo: (...args: unknown[]) => unknown;
  Sqo: (...args: unknown[]) => unknown;
  XKo: (...args: unknown[]) => unknown;
  YKo: (...args: unknown[]) => unknown;
  _qo: (...args: unknown[]) => unknown;
  aqo: (...args: unknown[]) => unknown;
  bqo: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cqo: (...args: unknown[]) => unknown;
  dqo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iqo: (...args: unknown[]) => unknown;
  nqo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  sqo: (...args: unknown[]) => unknown;
  tqo: (...args: unknown[]) => unknown;
  uqo: (...args: unknown[]) => unknown;
  vqo: (...args: unknown[]) => unknown;
  wqo: (...args: unknown[]) => unknown;
  xqo: (...args: unknown[]) => unknown;
  yqo: (...args: unknown[]) => unknown;
};

let peers: BindTextTokenDescriptionForegroundPeers | null = null;

/** Wire bindTextTokenDescriptionForeground peers once companions land. */
export function setBindTextTokenDescriptionForegroundPeers(
  next: BindTextTokenDescriptionForegroundPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lD` / internal `Tqo`.
 */
export function bindTextTokenDescriptionForeground() {
  if (peers == null) {
    throw new Error(
      "bindTextTokenDescriptionForeground peers are not configured",
    );
  }

  return peers.e(() => {
    ((_qo = peers.c()),
      peers.sd(),
      peers.$u(),
      peers.XKo(),
      peers.OKo(),
      peers.$Ko(),
      peers.nqo(),
      peers.aqo(),
      peers.cqo(),
      peers.dqo(),
      (vqo = peers.J()),
      (yqo = {
        draft: peers.DKo,
        open: peers.iqo,
        merged: peers.tqo,
        closed: peers.YKo,
      }),
      (bqo = {
        draft: `text-token-description-foreground`,
        open: `text-token-description-foreground`,
        merged: `text-token-charts-purple`,
        closed: `text-token-charts-red`,
      }),
      (xqo = {
        draft: peers.DKo,
        failing: peers.QKo,
        in_progress: peers.sqo,
        merged: peers.tqo,
        ready: peers.uqo,
        successful: peers.uqo,
      }),
      (Sqo = {
        draft: `text-token-description-foreground`,
        failing: `text-token-description-foreground [--pr-status-dot-color:var(--color-token-charts-red)]`,
        in_progress: `text-token-description-foreground [--pr-status-dot-color:var(--color-token-charts-yellow)]`,
        merged: `text-token-charts-purple`,
        ready: `text-token-description-foreground [--pr-status-dot-color:var(--color-token-charts-green)]`,
        successful: `text-token-description-foreground [--pr-status-dot-color:var(--color-token-charts-green)]`,
      }),
      (Cqo = {
        failing: `[--pr-status-dot-color:var(--color-token-charts-red)]`,
        in_progress: `[--pr-status-dot-color:var(--color-token-charts-yellow)]`,
        ready: `[--pr-status-dot-color:var(--color-token-charts-green)]`,
        successful: `[--pr-status-dot-color:var(--color-token-charts-green)]`,
      }),
      (wqo = `text-token-description-foreground`));
  });
}
