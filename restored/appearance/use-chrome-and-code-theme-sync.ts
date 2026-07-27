// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Liu`) / export `Rn`.

export type UseChromeAndCodeThemeSyncPeers = {
  $7: (...args: unknown[]) => unknown;
  Biu: (...args: unknown[]) => unknown;
  Cp: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  MQe: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Riu: (...args: unknown[]) => unknown;
  Uiu: (...args: unknown[]) => unknown;
  Viu: (...args: unknown[]) => unknown;
  Xni: (...args: unknown[]) => unknown;
  Zni: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  eri: (...args: unknown[]) => unknown;
  wP: (...args: unknown[]) => unknown;
  ziu: (...args: unknown[]) => unknown;
};

let peers: UseChromeAndCodeThemeSyncPeers | null = null;

/** Wire useChromeAndCodeThemeSync peers once companions land. */
export function setUseChromeAndCodeThemeSyncPeers(next: UseChromeAndCodeThemeSyncPeers): void {
  peers = next;
}

/**
 * Bundle export `Rn` / internal `Liu`.
 */
export function useChromeAndCodeThemeSync(e: unknown) {
  if (peers == null) {
    throw new Error("useChromeAndCodeThemeSync peers are not configured");
  }

  let t = peers.Io(peers.Q),
    { chromeThemeSetting: n, codeThemeSetting: r } = peers.ziu(e),
    i = peers.bp(n),
    a = peers.bp(r),
    o = peers.wP(i, e),
    s = peers.Zni(e),
    c = {
      codeThemeId: peers.Xni(a, e).id,
      theme: o,
    },
    l = (0, peers.$7.useRef)(c),
    u = (0, peers.$7.useRef)(c),
    d = (0, peers.$7.useRef)(0),
    f = (0, peers.$7.useRef)(Promise.resolve());
  d.current === 0 && ((l.current = c), (u.current = c));
  let p = (0, peers.$7.useCallback)(
      (e) => {
        ((l.current = e),
          peers.MQe(t, n, e.theme),
          peers.MQe(t, r, e.codeThemeId));
      },
      [n, r, t],
    ),
    m = (0, peers.$7.useCallback)(
      async (e, t) => {
        ((d.current += 1), p(e));
        let n = async () => {
            try {
              await t();
            } catch (t) {
              throw (peers.Viu(l.current, e) && p(u.current), t);
            } finally {
              --d.current;
            }
          },
          r = f.current.then(n, n);
        ((f.current = r.catch(() => void 0)), await r);
      },
      [p],
    ),
    h = (0, peers.$7.useCallback)(
      async (e) => {
        await m(e, async () => {
          let t = u.current;
          await peers.Cp(n, e.theme);
          try {
            await peers.Cp(r, e.codeThemeId);
          } catch (e) {
            throw (await peers.Cp(n, t.theme).catch(() => void 0), e);
          }
          u.current = e;
        });
      },
      [n, r, m],
    ),
    g = (0, peers.$7.useCallback)(
      async (e) => {
        let t = {
          ...l.current,
          theme: e,
        };
        await m(t, async () => {
          let i = u.current;
          if (i.codeThemeId !== t.codeThemeId) {
            await peers.Cp(r, t.codeThemeId);
            try {
              await peers.Cp(n, e);
            } catch (e) {
              throw (await peers.Cp(r, i.codeThemeId).catch(() => void 0), e);
            }
            u.current = t;
            return;
          }
          (await peers.Cp(n, e), (u.current = t));
        });
      },
      [n, r, m],
    ),
    _ = (0, peers.$7.useCallback)(
      (e) => {
        g(peers.Biu(l.current.theme, e)).catch(() => void 0);
      },
      [g],
    ),
    v = (0, peers.$7.useCallback)(
      (e) => {
        g(
          peers.Biu(l.current.theme, {
            fonts: e,
          }),
        ).catch(() => void 0);
      },
      [g],
    ),
    y = (0, peers.$7.useCallback)(
      async (t) => {
        let n = await peers.eri(t, e);
        await h({
          codeThemeId: t,
          theme: peers.Biu(l.current.theme, n),
        });
      },
      [h, e],
    ),
    b = (0, peers.$7.useCallback)(
      () =>
        peers.Uiu({
          codeThemeId: l.current.codeThemeId,
          theme: l.current.theme,
          variant: e,
        }),
      [e],
    ),
    x = (0, peers.$7.useCallback)(
      (t) => {
        try {
          return (peers.Riu(t, e, s), !0);
        } catch {
          return !1;
        }
      },
      [s, e],
    ),
    S = (0, peers.$7.useCallback)(
      async (t) => {
        await h(peers.Riu(t, e, s));
      },
      [s, h, e],
    ),
    C = l.current;
  return {
    canImportThemeString: x,
    codeThemes: s,
    exportThemeString: b,
    fonts: C.theme.fonts,
    importThemeString: S,
    selectedCodeTheme: peers.Xni(C.codeThemeId, e),
    setCodeThemeId: y,
    setFontsPatch: v,
    setThemePatch: _,
    theme: C.theme,
  };
}
