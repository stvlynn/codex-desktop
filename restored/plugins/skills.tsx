// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JT`) / export `Q3`.

export type BindBindSkillsPeers = {
  A2n: (...args: unknown[]) => unknown;
  C2n: (...args: unknown[]) => unknown;
  D2n: (...args: unknown[]) => unknown;
  E2n: (...args: unknown[]) => unknown;
  KT: (...args: unknown[]) => unknown;
  O2n: (...args: unknown[]) => unknown;
  S2n: (...args: unknown[]) => unknown;
  T2n: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  h2n: (...args: unknown[]) => unknown;
  k2n: (...args: unknown[]) => unknown;
  w2n: (...args: unknown[]) => unknown;
  x2n: (...args: unknown[]) => unknown;
};

let peers: BindBindSkillsPeers | null = null;

/** Wire bindBindSkills peers once companions land. */
export function setBindBindSkillsPeers(next: BindBindSkillsPeers): void {
  peers = next;
}

/**
 * Bundle export `Q3` / internal `JT`.
 */
export function bindBindSkills() {
  if (peers == null) {
    throw new Error("bindBindSkills peers are not configured");
  }

  return peers.e(() => {
    (peers.KT(),
      peers.h2n(),
      (x2n = `.codex`),
      (S2n = `.agents`),
      (C2n = `skills`),
      (w2n = `_import`),
      (T2n = `.system`),
      (E2n = `scripts`),
      (D2n = `plugins`),
      (O2n = `cache`),
      (k2n = `skill.md`),
      (A2n = `internal-knowledge`));
  });
}
