// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `c5l`) / export `Nr`.

export type Codex2Peers = {
  YQe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  s5l: (...args: unknown[]) => unknown;
};

let peers: Codex2Peers | null = null;

/** Wire codex2 peers once companions land. */
export function setCodex2Peers(next: Codex2Peers): void {
  peers = next;
}

/**
 * Bundle export `Nr` / internal `c5l`.
 */
export function codex2() {
  if (peers == null) {
    throw new Error("codex2 peers are not configured");
  }

  return peers.e(() => {
    (peers.YQe(),
      (s5l = [
        {
          assetRef: `codex`,
          description: `The original Codex companion.`,
          displayName: `Codex`,
          id: `codex`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `dewey`,
          description: `A calm companion for focused workspace days`,
          displayName: `Dewey`,
          id: `dewey`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `fireball`,
          description: `Hot path energy for fast iteration.`,
          displayName: `Fireball`,
          id: `fireball`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `hoots`,
          description: `A sharp-eyed owl for polished work in a blink.`,
          displayName: `Hoots`,
          id: `hoots`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `rocky`,
          description: `A steady rock when the diff gets large.`,
          displayName: `Rocky`,
          id: `rocky`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `seedy`,
          description: `Small green shoots for new ideas.`,
          displayName: `Seedy`,
          id: `seedy`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `stacky`,
          description: `A balanced stack for deep work.`,
          displayName: `Stacky`,
          id: `stacky`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `bsod`,
          description: `A tiny blue-screen gremlin.`,
          displayName: `BSOD`,
          id: `bsod`,
          spriteVersionNumber: 2,
        },
        {
          assetRef: `null-signal`,
          description: `Quiet signal from the void.`,
          displayName: `Null Signal`,
          id: `null-signal`,
          spriteVersionNumber: 2,
        },
      ]));
  });
}
