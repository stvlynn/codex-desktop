// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dsc`) / export `tp`.

export type BuildMailPlanTaskItemsPeers = {
  Fsc: (...args: unknown[]) => unknown;
  Isc: (...args: unknown[]) => unknown;
  Msc: (...args: unknown[]) => unknown;
  Nsc: (...args: unknown[]) => unknown;
  Xoc: (...args: unknown[]) => unknown;
  m3r: (...args: unknown[]) => unknown;
  p3r: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  vsc: (...args: unknown[]) => unknown;
};

let peers: BuildMailPlanTaskItemsPeers | null = null;

/** Wire buildMailPlanTaskItems peers once companions land. */
export function setBuildMailPlanTaskItemsPeers(
  next: BuildMailPlanTaskItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tp` / internal `Dsc`.
 */
export function buildMailPlanTaskItems({
  items: e,
  locale: t,
  mailProvider: n,
  plan: r = null,
  representativeRole: i = null,
  taskDefinitions: a,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("buildMailPlanTaskItems peers are not configured");
  }
  let o = [],
    s = peers.p3r(n, r);
  for (let n of e) {
    let { id: e } = n;
    if (e === `claude_import`) {
      o.push({
        ...peers.Isc,
        message:
          n.snapshot?.type === `sidebar_claude_import`
            ? n.snapshot.label
            : peers.Isc.message,
      });
      continue;
    }
    if (e === `enable_notifications`) {
      o.push({
        ...peers.Fsc,
        message:
          n.snapshot?.type === `sidebar_notification`
            ? n.snapshot.label
            : peers.Fsc.message,
      });
      continue;
    }
    let r =
        e === `review_latest_plans` || n.snapshot?.type !== `sidebar`
          ? null
          : n.snapshot,
      c,
      l,
      u = !1,
      d;
    if (r != null)
      ((c = r.label),
        (l = r.pluginSlots),
        (u = r.prependPluginMentions === !0),
        (d = r.prompt));
    else {
      let n = a[e === `review_latest_plans` ? peers.Xoc(i) : e];
      if (n == null) continue;
      ((c = peers.vsc(n, `label`, t)),
        (l = n.pluginSlots),
        (u = n.origin === `checked_in` && n.prependPluginMentions === !0),
        (d = peers.vsc(n, `prompt`, t)));
    }
    let f = {
      action: `start_prompt`,
      id: e,
      message: c,
      pluginSlots: l,
      prependPluginMentions: u,
      prompt: d,
    };
    if (l == null) {
      o.push(f);
      continue;
    }
    let p = {},
      m = [];
    for (let [e, t] of Object.entries(l)) {
      let n = peers.Msc(peers.m3r(t, s));
      ((p[e] = peers.Nsc(n)), m.push(n));
    }
    o.push({
      ...f,
      pluginMentions: m,
      promptValues: p,
    });
  }
  return o;
}
