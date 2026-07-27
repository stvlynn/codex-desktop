// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `sxu`) / export `z`.

export type ForceSetRemoteControlEnabledPeers = {
  applyEnabled: (
    store: unknown,
    enabled: boolean,
    options: { shouldApplyStatus: () => boolean },
  ) => Promise<unknown>;
  getInFlight: () => { enabled: boolean; promise: Promise<unknown> } | null;
  setInFlight: (
    next: { enabled: boolean; promise: Promise<unknown> } | null,
  ) => void;
  getDesired: () => boolean | null | undefined;
  setDesired: (enabled: boolean | null | undefined) => void;
  getApplied: () => boolean | undefined;
  setApplied: (enabled: boolean | undefined) => void;
  bumpGeneration: () => number;
  getGeneration: () => number;
};

let peers: ForceSetRemoteControlEnabledPeers | null = null;

/** Wire forceSetRemoteControlEnabled peers once companions land. */
export function setForceSetRemoteControlEnabledPeers(
  next: ForceSetRemoteControlEnabledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `z` / internal `sxu`.
 * Force-set remote-control enabled with in-flight dedupe/cancellation.
 */
export async function forceSetRemoteControlEnabled(
  store: unknown,
  enabled: boolean,
  options: { force?: boolean } = {},
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ForceSetRemoteControlEnabled peers are not configured");
  }
  const force = options.force === true;
  peers.setDesired(enabled);
  const inFlight = peers.getInFlight();
  if (inFlight?.enabled === enabled) return inFlight.promise;
  if (!force && peers.getApplied() === enabled) return null;
  const generation = peers.bumpGeneration();
  const promise = peers.applyEnabled(store, enabled, {
    shouldApplyStatus: () => generation === peers!.getGeneration(),
  });
  peers.setInFlight({ enabled, promise });
  try {
    const result = await promise;
    if (generation === peers.getGeneration()) {
      peers.setApplied(enabled);
      return result;
    }
    const desired = peers.getDesired();
    if (desired != null && desired !== enabled) {
      await forceSetRemoteControlEnabled(store, desired, { force: true });
    }
    return result;
  } catch (error) {
    if (
      generation === peers.getGeneration() &&
      peers.getApplied() === enabled
    ) {
      peers.setApplied(undefined);
    }
    throw error;
  } finally {
    if (peers.getInFlight()?.promise === promise) peers.setInFlight(null);
  }
}
