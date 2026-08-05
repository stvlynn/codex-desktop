// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nAa` / export `uP`. Gate / account atoms left injectable.

type StoreLike = {
  get: (atom: unknown, id?: unknown) => unknown;
};

type FeatureGateFn = (store: StoreLike, gateId: string) => boolean;
type CombineFn = (args: {
  accountEnabled: unknown;
  gateEnabled: boolean;
  lockdownDisabled: unknown;
}) => boolean;

let featureGate: FeatureGateFn | null = null;
let combine: CombineFn | null = null;
let accountAtom: unknown = null;
let lockdownDisabledAtom: unknown = null;
const GATE_ID = "3950887224";

export function setConsumerLockdownActiveDeps(args: {
  featureGate: FeatureGateFn;
  combine: CombineFn;
  accountAtom: unknown;
  lockdownDisabledAtom: unknown;
}): void {
  featureGate = args.featureGate;
  combine = args.combine;
  accountAtom = args.accountAtom;
  lockdownDisabledAtom = args.lockdownDisabledAtom;
}

export function isConsumerLockdownActive(
  store: StoreLike,
  conversationId: string,
): boolean {
  if (featureGate == null || combine == null) {
    throw new Error("isConsumerLockdownActive deps have not been configured");
  }
  const gateEnabled = featureGate(store, GATE_ID);
  if (!gateEnabled) return false;
  const account = store.get(accountAtom) as
    | { data?: { lockdownModeEnabled?: boolean } }
    | undefined;
  return combine({
    accountEnabled: account?.data?.lockdownModeEnabled,
    gateEnabled,
    lockdownDisabled: store.get(lockdownDisabledAtom, conversationId),
  });
}
