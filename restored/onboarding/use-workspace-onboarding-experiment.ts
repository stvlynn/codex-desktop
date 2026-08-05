// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `F4s`) / export `wh`.

export type UseWorkspaceOnboardingExperimentPeers = {
  A4s: (...args: unknown[]) => unknown;
  L4s: (...args: unknown[]) => unknown;
  P4s: (...args: unknown[]) => unknown;
  RZ: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Y4r: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  rr: (...args: unknown[]) => unknown;
  wE: (...args: unknown[]) => unknown;
};

let peers: UseWorkspaceOnboardingExperimentPeers | null = null;

/** Wire useWorkspaceOnboardingExperiment peers once companions land. */
export function setUseWorkspaceOnboardingExperimentPeers(
  next: UseWorkspaceOnboardingExperimentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `wh` / internal `F4s`.
 */
export function useWorkspaceOnboardingExperiment() {
  if (peers == null) {
    throw new Error(
      "useWorkspaceOnboardingExperiment peers are not configured",
    );
  }

  let e = (0, peers.L4s.c)(15),
    { workspaceOnboardingExperimentArm: t } = peers.A4s(),
    n = peers.RZ(),
    [r, i] = peers.rr(peers.Y4r),
    { data: a, isLoading: o } = peers.Y(peers.wE),
    s = (a?.roots?.length ?? 0) > 0,
    c;
  e[0] !== s || e[1] !== o || e[2] !== n || e[3] !== r || e[4] !== t
    ? ((c = peers.P4s({
        arm: t,
        isRemoteHost: n,
        isLoadingRoots: o,
        hasPersistedRoots: s,
        autoLaunchApplied: r,
      })),
      (e[0] = s),
      (e[1] = o),
      (e[2] = n),
      (e[3] = r),
      (e[4] = t),
      (e[5] = c))
    : (c = e[5]);
  let l = c,
    u;
  return (
    e[6] !== l ||
    e[7] !== s ||
    e[8] !== o ||
    e[9] !== n ||
    e[10] !== i ||
    e[11] !== r ||
    e[12] !== t ||
    e[13] !== a
      ? ((u = {
          workspaceOnboardingExperimentArm: t,
          isRemoteHost: n,
          workspaceOnboardingAutoLaunchApplied: r,
          setWorkspaceOnboardingAutoLaunchApplied: i,
          workspaceRootOptions: a,
          isLoadingWorkspaceRootOptions: o,
          hasPersistedRoots: s,
          autoLaunchAction: l,
        }),
        (e[6] = l),
        (e[7] = s),
        (e[8] = o),
        (e[9] = n),
        (e[10] = i),
        (e[11] = r),
        (e[12] = t),
        (e[13] = a),
        (e[14] = u))
      : (u = e[14]),
    u
  );
}
