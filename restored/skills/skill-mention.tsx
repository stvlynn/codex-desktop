// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cJa`) / export `lM`.

export type BindBindSkillMentionPeers = {
  $u: (...args: unknown[]) => unknown;
  DM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  MBa: (...args: unknown[]) => unknown;
  Tqa: (...args: unknown[]) => unknown;
  Xqa: (...args: unknown[]) => unknown;
  _Ua: (...args: unknown[]) => unknown;
  bVa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lUa: (...args: unknown[]) => unknown;
  rU: (...args: unknown[]) => unknown;
  sJa: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindBindSkillMentionPeers | null = null;

/** Wire bindBindSkillMention peers once companions land. */
export function setBindBindSkillMentionPeers(next: BindBindSkillMentionPeers): void {
  peers = next;
}

/**
 * Bundle export `lM` / internal `cJa`.
 */
export function bindBindSkillMention() {
  if (peers == null) {
    throw new Error("bindBindSkillMention peers are not configured");
  }

  return peers.e(() => {
    sJa = peers.c(), peers.sd(), peers.Ho(), peers.$u(), peers.MBa(), peers.bVa(), peers.DM(), peers.lUa(), peers._Ua(), peers.Tqa(), peers.Xqa(), rU = peers.J();
  });
}
