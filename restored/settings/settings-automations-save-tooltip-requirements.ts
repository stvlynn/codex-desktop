// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `w1c`) / export `nu`.

export type BindSettingsAutomationsSaveTooltipRequirementsPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  C1c: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  JQc: (...args: unknown[]) => unknown;
  Lis: (...args: unknown[]) => unknown;
  Mis: (...args: unknown[]) => unknown;
  WXi: (...args: unknown[]) => unknown;
  b1c: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  d1c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g$c: (...args: unknown[]) => unknown;
  h1c: (...args: unknown[]) => unknown;
  r1c: (...args: unknown[]) => unknown;
  rz: (...args: unknown[]) => unknown;
  w$c: (...args: unknown[]) => unknown;
  x3: (...args: unknown[]) => unknown;
};

let peers: BindSettingsAutomationsSaveTooltipRequirementsPeers | null = null;

/** Wire bindSettingsAutomationsSaveTooltipRequirements peers once companions land. */
export function setBindSettingsAutomationsSaveTooltipRequirementsPeers(next: BindSettingsAutomationsSaveTooltipRequirementsPeers): void {
  peers = next;
}

/**
 * Bundle export `nu` / internal `w1c`.
 */
export function bindSettingsAutomationsSaveTooltipRequirements() {
  if (peers == null) {
    throw new Error("bindSettingsAutomationsSaveTooltipRequirements peers are not configured");
  }

  return peers.e(() => {
    C1c = peers.c(), peers.Ho(), peers.Au(), peers.$u(), peers.DD(), peers.WXi(), peers.IE(), peers.g$c(), peers.Mis(), peers.Lis(), peers.rz(), peers.Fh(), peers.w$c(), peers.d1c(), peers.h1c(), peers.JQc(), peers.r1c(), peers.b1c(), x3 = peers.J();
  });
}
