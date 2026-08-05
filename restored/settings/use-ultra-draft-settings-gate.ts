// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zM`) / export `qY`.

export type UseUltraDraftSettingsGatePeers = {
  Bf: (...args: unknown[]) => unknown;
  DYr: (...args: unknown[]) => unknown;
  EYr: (...args: unknown[]) => unknown;
  OJr: (...args: unknown[]) => unknown;
  TYr: (...args: unknown[]) => unknown;
  reasoningEffort: (...args: unknown[]) => unknown;
};

let peers: UseUltraDraftSettingsGatePeers | null = null;

/** Wire useUltraDraftSettingsGate peers once companions land. */
export function setUseUltraDraftSettingsGatePeers(
  next: UseUltraDraftSettingsGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `qY` / internal `zM`.
 */
export function useUltraDraftSettingsGate(e: unknown) {
  if (peers == null) {
    throw new Error("useUltraDraftSettingsGate peers are not configured");
  }

  let t = (0, peers.DYr.c)(14),
    n = e === void 0 ? null : e,
    {
      draftSettings: r,
      isNewThreadDraft: i,
      updateDraftSettings: a,
    } = peers.OJr(),
    o = peers.TYr(n, i),
    s = n == null && i,
    c = s && o.hasManagedNewThreadSettings,
    l =
      s &&
      r.modelSettings != null &&
      (c || r.modelSettings.reasoningEffort === `ultra`),
    u;
  (t[0] !== r.modelSettings?.reasoningEffort ||
  t[1] !== c ||
  t[2] !== s ||
  t[3] !== o ||
  t[4] !== a
    ? ((u = async (e, t) => {
        c || (s && t === `ultra`)
          ? a((n) => ({
              ...n,
              isManuallyChanged: !0,
              modelSettings: {
                model: e,
                profile: o.modelSettings.profile,
                reasoningEffort: t,
              },
            }))
          : s && r.modelSettings?.reasoningEffort === `ultra` && a(peers.EYr);
        let n = o.setModelAndReasoningEffort(e, t);
        (c &&
          (await peers.Bf(`clear-prewarmed-threads-for-host`, {
            hostId: o.hostId,
          })),
          await n);
      }),
      (t[0] = r.modelSettings?.reasoningEffort),
      (t[1] = c),
      (t[2] = s),
      (t[3] = o),
      (t[4] = a),
      (t[5] = u))
    : (u = t[5]),
    r.modelSettings?.reasoningEffort);
  let d = u,
    f;
  t[6] !== r.modelSettings || t[7] !== l || t[8] !== o.modelSettings
    ? ((f = l
        ? {
            ...o.modelSettings,
            ...r.modelSettings,
          }
        : o.modelSettings),
      (t[6] = r.modelSettings),
      (t[7] = l),
      (t[8] = o.modelSettings),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== d || t[11] !== o || t[12] !== f
      ? ((p = {
          ...o,
          modelSettings: f,
          setModelAndReasoningEffort: d,
        }),
        (t[10] = d),
        (t[11] = o),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
