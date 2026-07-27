// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OM`) / export `fX`.

export type OpenPathPeers = {
  Aqr: (...args: unknown[]) => unknown;
  Df: (...args: unknown[]) => unknown;
  Gl: (...args: unknown[]) => unknown;
  Iqr: (...args: unknown[]) => unknown;
  LKr: (...args: unknown[]) => unknown;
  Oqr: (...args: unknown[]) => unknown;
  Pqr: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  Vl: (...args: unknown[]) => unknown;
  aJr: (...args: unknown[]) => unknown;
  exe: (...args: unknown[]) => unknown;
  l0t: (...args: unknown[]) => unknown;
  lJr: (...args: unknown[]) => unknown;
  rJr: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  ru: (...args: unknown[]) => unknown;
  wqr: (...args: unknown[]) => unknown;
};

let peers: OpenPathPeers | null = null;

/** Wire openPath peers once companions land. */
export function setOpenPathPeers(next: OpenPathPeers): void {
  peers = next;
}

/**
 * Bundle export `fX` / internal `OM`.
 */
export function openPath(e: unknown) {
  if (peers == null) {
    throw new Error("openPath peers are not configured");
  }

  let {
      scope: t,
      appPath: n,
      artifactNavigationTarget: r,
      browserSidebarEnabled: i = !1,
      column: a,
      conversationId: o,
      cwd: s,
      endLine: c,
      hostConfig: l,
      hostId: u,
      icon: d,
      isPreview: f,
      line: p,
      modifiedClick: m = !1,
      onBeforeOpenSidePanelTab: h,
      onOpenTargetResolved: g,
      openInSidePanel: _ = !1,
      openMode: v,
      path: y,
      persistPreferredTargetPath: b,
      target: x,
      title: S
    } = e,
    C = t == null ? peers.Pqr : t.get(peers.Iqr).mutate,
    w = {
      path: y,
      cwd: s,
      target: x,
      appPath: n,
      line: p,
      column: a,
      openMode: v,
      persistPreferredTargetPath: b,
      hostId: u
    };
  if (x != null || v === `workspace` || b != null) {
    g?.(x ?? void 0), C(w);
    return;
  }
  let T = peers.lJr({
    browserSidebarEnabled: i,
    hostConfig: l,
    path: y
  });
  if (!m && T) {
    g?.(null), C({
      path: y,
      cwd: s,
      hostId: u,
      conversationId: o
    });
    return;
  }
  if (t != null && _) {
    let e = peers.Aqr();
    if (e == null) {
      g?.(void 0), C(w);
      return;
    }
    let n = s == null ? y : peers.Df(s, y),
      i = l != null && !peers.ru(l) ? l : null,
      o = p == null && c == null && peers.LKr(n, t.get(peers.wqr, u ?? `local`)) != null,
      _ = () => (h?.(t), e(t, n, {
        artifactNavigationTarget: r,
        hostId: u ?? void 0,
        line: p,
        endLine: c,
        icon: d,
        isPreview: f,
        title: S
      })),
      v = e => {
        if (peers.aJr({
          contentKind: e,
          hasMcpCapabilityFileViewer: o,
          hostConfig: l,
          modifiedClick: m,
          path: y
        })) {
          let n = peers.rJr({
            contentKind: e,
            hasMcpCapabilityFileViewer: o,
            hostConfig: l,
            modifiedClick: m,
            path: y,
            windowType: `electron`
          });
          peers.Ub(t, peers.l0t, n), g?.(`fileManager`), C({
            ...w,
            target: `fileManager`
          });
          return;
        }
        let n = _(),
          r = peers.rJr({
            contentKind: e,
            hasMcpCapabilityFileViewer: o,
            hostConfig: l,
            modifiedClick: m,
            openedSidePanelTarget: n,
            path: y,
            windowType: `electron`
          });
        peers.Ub(t, peers.l0t, r), g?.(null);
      };
    if (i != null && p == null && a == null && c == null && !peers.Gl(y) && peers.Vl(n)) {
      peers.rp(`read-file-metadata`, {
        params: {
          contentSampleByteLimit: peers.exe,
          contentSampleMaxFileBytes: peers.Oqr,
          hostId: u ?? i.id,
          path: n
        }
      }).then(e => {
        if (e.isFile) {
          v(e.contentKind);
          return;
        }
        g?.(`fileManager`), C({
          ...w,
          target: `fileManager`
        });
      }).catch(() => {
        v();
      });
      return;
    }
    v();
    return;
  }
  g?.(void 0), C(w);
}
