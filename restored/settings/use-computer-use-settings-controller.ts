// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MIs`) / export `D_`.

export type UseComputerUseSettingsControllerPeers = {
  $N: (...args: unknown[]) => unknown;
  AE: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  IIs: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  NE: (...args: unknown[]) => unknown;
  NIs: (...args: unknown[]) => unknown;
  PIs: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  Zti: (...args: unknown[]) => unknown;
  appId: (...args: unknown[]) => unknown;
  configWriteTarget: (...args: unknown[]) => unknown;
  expectedVersion: (...args: unknown[]) => unknown;
  filePath: (...args: unknown[]) => unknown;
  find: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
  previousApps: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};
let peers: UseComputerUseSettingsControllerPeers | null = null;

/** Wire useComputerUseSettingsController peers once companions land. */
export function setUseComputerUseSettingsControllerPeers(
  next: UseComputerUseSettingsControllerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `D_` / internal `MIs`.
 */
export function useComputerUseSettingsController(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useComputerUseSettingsController peers are not configured",
    );
  }
  let n = e?.hostId ?? "local",
    r = peers.Io(peers.Q),
    { data } = peers.Fo(peers.NE, n),
    a = peers.rt(),
    o = peers.vE(),
    s = peers.Ju(),
    c = peers.$N(n);
  let l = c,
    u = async () => {
      await Promise.all([
        o(peers.Zti(n)),
        o(l),
        o(peers.AE),
        o(["user-saved-config"]),
      ]);
    };
  let d = u,
    f = async (e) => {
      let { appId, enabled } = e;
      await peers.Bf("batch-write-config-value", {
        hostId: n,
        edits: peers.NIs({
          appId,
          enabled,
        }),
        filePath: data?.configWriteTarget?.filePath ?? null,
        expectedVersion: data?.configWriteTarget?.expectedVersion ?? null,
        reloadUserConfig: true,
      });
    };
  let p = async (e) => {
    let { appId, enabled } = e;
    await a.cancelQueries({
      queryKey: l,
    });
    let r = a.getQueryData(l);
    return (
      r &&
        a.setQueryData(
          l,
          r.map((item) => {
            return item.id !== appId || item.isEnabled === enabled
              ? item
              : {
                  ...item,
                  isEnabled: enabled,
                };
          }),
        ),
      {
        previousApps: r,
      }
    );
  };
  let m, h;
  m = (e, t) => {
    let { appId, appName, enabled } = t,
      c =
        appName ??
        a.getQueryData(l)?.find((e) => {
          return e.id === appId;
        })?.name ??
        appId;
    r.get(peers.rh).success(
      s.formatMessage(
        enabled ? peers.IIs.enableSuccess : peers.IIs.disableSuccess,
        {
          appName: c,
        },
      ),
    );
  };
  h = (e, t, n) => {
    peers.Wf.error("Failed to update app enablement", {
      safe: {},
      sensitive: {
        error: e,
      },
    });
    r.get(peers.rh).danger(s.formatMessage(peers.IIs.updateError));
    n?.previousApps && a.setQueryData(l, n.previousApps);
  };
  let g = {
    mutationFn: f,
    onMutate: p,
    onSuccess: m,
    onError: h,
    onSettled: d,
  };
  let _ = peers.qt(g),
    v = _.isPending ? (_.variables?.appId ?? null) : null;
  return {
    setAppEnabled: _.mutateAsync,
    isUpdating: _.isPending,
    updatingAppId: v,
  };
}
