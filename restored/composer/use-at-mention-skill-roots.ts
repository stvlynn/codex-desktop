// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `vqa`) / export `gM`.

export type UseAtMentionSkillRootsPeers = {
  run: (...args: unknown[]) => unknown;
};

let peers: UseAtMentionSkillRootsPeers | null = null;

/** Wire UseAtMentionSkillRoots peers once companions land. */
export function setUseAtMentionSkillRootsPeers(
  next: UseAtMentionSkillRootsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gM` / internal `vqa`.
 * Helper body restored from extractFn(internal); opaque deps via peers.
 */
export function UseAtMentionSkillRoots(...args: unknown[]): unknown {
  if (peers == null) {
    throw new Error("UseAtMentionSkillRoots peers are not configured");
  }
  return peers.run(...args);
}
