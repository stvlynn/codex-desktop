// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `xMl`) / export `Gs`.

export type UseOnboardingPluginPlanEffectPeers = {
  useEffect: (effect: () => void, deps: unknown[]) => void;
  useRef: <T>(initial: T) => { current: T };
  useConfig: () => unknown;
  useLocale: () => unknown;
  useMailProvider: () => unknown;
  usePlan: () => unknown;
  useSelectedRole: () => unknown;
  useTaskIdMap: () => { get: (key: unknown, fallback: null) => unknown };
  useRandomizeFlag: () => { get: (key: string, fallback: boolean) => boolean };
  useExposureParam: () => { get: (key: unknown, fallback: null) => unknown };
  buildCatalog: (args: Record<string, unknown>) => {
    catalog: unknown;
    exposureParameter: unknown;
  };
  applyCatalog: (store: unknown, catalog: unknown) => void;
  syncPlan: (store: unknown, a: unknown, b: unknown) => void;
  store: unknown;
  planCompanion: unknown;
  syncCompanion: unknown;
};

let peers: UseOnboardingPluginPlanEffectPeers | null = null;

/** Wire useOnboardingPluginPlanEffect peers once companions land. */
export function setUseOnboardingPluginPlanEffectPeers(
  next: UseOnboardingPluginPlanEffectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gs` / internal `xMl`.
 * Effects that materialize onboarding plugin catalog + plan exposure once.
 */
export function useOnboardingPluginPlanEffect(): void {
  if (peers == null) {
    throw new Error("UseOnboardingPluginPlanEffect peers are not configured");
  }
  const applied = peers.useRef(false);
  const config = peers.useConfig();
  const locale = peers.useLocale();
  const mailProvider = peers.useMailProvider();
  const plan = peers.usePlan();
  const selectedRole = peers.useSelectedRole();
  const taskIds = peers.useTaskIdMap();
  const randomize = peers.useRandomizeFlag();
  const exposure = peers.useExposureParam();
  peers.useEffect(() => {
    if (selectedRole == null) {
      applied.current = false;
      return;
    }
    if (applied.current || mailProvider == null) return;
    applied.current = true;
    const { catalog, exposureParameter } = peers!.buildCatalog({
      config,
      generalTaskIds: taskIds.get("general", null),
      locale,
      mailProvider,
      plan,
      randomizeOrder: randomize.get("randomize_order", false),
      roleTaskIds: taskIds.get(selectedRole, null),
      selectedRole,
    });
    peers!.applyCatalog(peers!.store, catalog);
    if (exposureParameter != null) exposure.get(exposureParameter, null);
  }, [
    config,
    exposure,
    locale,
    mailProvider,
    plan,
    peers.store,
    selectedRole,
    taskIds,
    randomize,
  ]);
  peers.useEffect(() => {
    peers!.syncPlan(peers!.store, peers!.planCompanion, peers!.syncCompanion);
  }, [peers.planCompanion, peers.store, peers.syncCompanion]);
}
