// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$L`) / export `qV`.

export type OpenArtifactPreviewPeers = {
  AHi: (...args: unknown[]) => unknown;
  BD: (...args: unknown[]) => unknown;
  BWi: (...args: unknown[]) => unknown;
  EWi: (...args: unknown[]) => unknown;
  Ef: (...args: unknown[]) => unknown;
  Gqr: (...args: unknown[]) => unknown;
  JWi: (...args: unknown[]) => unknown;
  LWi: (...args: unknown[]) => unknown;
  RWi: (...args: unknown[]) => unknown;
  UWi: (...args: unknown[]) => unknown;
  VD: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  YL: (...args: unknown[]) => unknown;
  ZI: (...args: unknown[]) => unknown;
  aWi: (...args: unknown[]) => unknown;
  bWi: (...args: unknown[]) => unknown;
  kHi: (...args: unknown[]) => unknown;
  tGi: (...args: unknown[]) => unknown;
  tabId: (...args: unknown[]) => unknown;
};

let peers: OpenArtifactPreviewPeers | null = null;

/** Wire openArtifactPreview peers once companions land. */
export function setOpenArtifactPreviewPeers(
  next: OpenArtifactPreviewPeers,
): void {
  peers = next;
}

/**
 * Bundle export `qV` / internal `$L`.
 */
export function openArtifactPreview(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("openArtifactPreview peers are not configured");
  }

  let {
      activate: r = !0,
      artifactNavigationTarget: i,
      artifactTemplateSkill: a,
      hostId: o,
      icon: s,
      isPreview: c,
      onClose: l,
      syncOpenTabs: u = !0,
      target: d = `right`,
      tabId: f,
      title: p,
    } = n,
    m = peers.Gqr(t);
  if (m == null) return !1;
  let h = peers.YL(t),
    g = p ?? peers.Ef(t),
    _ = f ?? `artifact:${o}:${t}`,
    v = peers.XI(peers.ZI(e, _) ?? d),
    y = peers.RWi(e),
    b = {
      ...m,
      artifactTemplateSkill: a,
      hostId: o,
      path: t,
      tabId: _,
      title: g,
    };
  return (
    peers.AHi(e, {
      cwd: y,
      hostId: o,
      path: t,
    }),
    v.openTab(e, peers.JWi, {
      activate: r,
      contextMenuItems: (e) =>
        peers.kHi(e, {
          cwd: y,
          hostId: o,
          path: t,
        }),
      icon:
        s ??
        (0, peers.tGi.createElement)(h, {
          className: `icon-xs shrink-0`,
        }),
      isPreview: c,
      kind: `${peers.EWi}${o}`,
      props: b,
      onClose: (e, t) => {
        (peers.aWi(_, `tab_closed`),
          peers.UWi(_),
          t === `right` &&
            e.get(peers.XI(t).activeTab$)?.tabId === _ &&
            e.get(peers.VD) &&
            (e.set(peers.VD, !1), peers.BD(e, `main`)),
          peers.LWi(e, {
            excludeTab: {
              panelId: t,
              tabId: _,
            },
          }),
          l?.());
      },
      id: _,
      title: g,
      tooltip: peers.bWi({
        cwd: y,
        path: t,
      }),
    }),
    i != null && peers.BWi(_).navigateTo(i),
    u && peers.LWi(e),
    !0
  );
}

/** Bundle path ESM init retained as no-op. */
export function ensureHomePrefillArtifactPreviewDepsInit(): void {}
