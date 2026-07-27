// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uge`) / export `fgt`.

export type BindBindActivitySlot0Peers = {
  Bge: (...args: unknown[]) => unknown;
  Hge: (...args: unknown[]) => unknown;
  Lge: (...args: unknown[]) => unknown;
  Nl: (...args: unknown[]) => unknown;
  Rge: (...args: unknown[]) => unknown;
  Vge: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  zge: (...args: unknown[]) => unknown;
};

let peers: BindBindActivitySlot0Peers | null = null;

/** Wire bindBindActivitySlot0 peers once companions land. */
export function setBindBindActivitySlot0Peers(next: BindBindActivitySlot0Peers): void {
  peers = next;
}

/**
 * Bundle export `fgt` / internal `Uge`.
 */
export function bindBindActivitySlot0() {
  if (peers == null) {
    throw new Error("bindBindActivitySlot0 peers are not configured");
  }

  return peers.e(() => {
    Nl = [`activity-slot-0`, `activity-slot-1`, `activity-slot-2`, `activity-slot-3`, `activity-slot-4`, `activity-slot-5`, `activity-slot-6`, `activity-slot-7`], Lge = `activity-slot-8`, Rge = [...peers.Nl, peers.Lge], zge = [{
      offsetY: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      offsetY: 23,
      scaleX: 0.918,
      scaleY: 0.78
    }, {
      offsetY: 30,
      scaleX: 268 / 310,
      scaleY: 44 / 56
    }], Bge = 8, Vge = 56, Hge = 4;
  });
}
