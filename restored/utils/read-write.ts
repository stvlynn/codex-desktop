// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TEe`) / export `Bpt`.

export type BindReadWritePeers = {
  Fl: (...args: unknown[]) => unknown;
  Gme: (...args: unknown[]) => unknown;
  SEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Su: (...args: unknown[]) => unknown;
  Wme: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  mu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  s_e: (...args: unknown[]) => unknown;
  vEe: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yEe: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: BindReadWritePeers | null = null;

/** Wire bindReadWrite peers once companions land. */
export function setBindReadWritePeers(next: BindReadWritePeers): void {
  peers = next;
}

/**
 * Bundle export `Bpt` / internal `TEe`.
 */
export function bindReadWrite() {
  if (peers == null) {
    throw new Error("bindReadWrite peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.Gme(),
      peers.s_e(),
      peers.vEe(),
      peers._u(),
      peers.xu(),
      (Su = {
        theme: peers.vu({
          agentAccess: `read-write`,
          default: `system`,
          description: `Preferred app appearance mode`,
          key: `appearanceTheme`,
          schema: peers.pl([`system`, `light`, `dark`]),
        }),
        lightChromeTheme: peers.vu({
          agentAccess: `read-write`,
          default: void 0,
          description: `Chrome theme used in light mode`,
          key: `appearanceLightChromeTheme`,
          schema: peers.SEe,
        }),
        darkChromeTheme: peers.vu({
          agentAccess: `read-write`,
          default: void 0,
          description: `Chrome theme used in dark mode`,
          key: `appearanceDarkChromeTheme`,
          schema: peers.SEe,
        }),
        lightCodeThemeId: peers.vu({
          agentAccess: `read-write`,
          default: peers.mu.CODEX,
          description: `Code theme used in light mode`,
          key: `appearanceLightCodeThemeId`,
          schema: peers.yEe,
        }),
        darkCodeThemeId: peers.vu({
          agentAccess: `read-write`,
          default: peers.mu.CODEX,
          description: `Code theme used in dark mode`,
          key: `appearanceDarkCodeThemeId`,
          schema: peers.yEe,
        }),
        diffMarkerStyle: peers.vu({
          agentAccess: `read-write`,
          default: `color`,
          description: `Diff marker style used in code review surfaces`,
          key: `appearanceDiffMarkerStyle`,
          schema: peers.pl([`color`, `symbols`]),
        }),
        sansFontSize: peers.vu({
          agentAccess: `read-write`,
          default: 14,
          description: `Base UI font size`,
          key: `sansFontSize`,
          schema: peers.rl(),
        }),
        codeFontSize: peers.vu({
          agentAccess: `read-write`,
          default: 12,
          description: `Code font size`,
          key: `codeFontSize`,
          schema: peers.rl(),
        }),
        useFontSmoothing: peers.vu({
          agentAccess: `read-write`,
          default: !0,
          description: `Whether font smoothing is enabled`,
          key: `useFontSmoothing`,
          schema: peers.hu,
        }),
        usePointerCursors: peers.vu({
          agentAccess: `read-write`,
          default: !1,
          description: `Whether interactive controls use pointer cursors`,
          key: `usePointerCursors`,
          schema: peers.hu,
        }),
        dockIconPreference: peers.yu({
          agentAccess: `read-write`,
          default: `app-default`,
          description: `Preferred macOS Dock icon`,
          key: peers.Fl.DOCK_ICON_PREFERENCE,
          schema: peers.Wme,
        }),
        reducedMotionPreference: peers.yu({
          agentAccess: `read-write`,
          default: `system`,
          description: `Whether Codex reduces interface motion`,
          key: `reduced-motion-preference`,
          schema: peers.pl([`system`, `on`, `off`]),
        }),
      }));
  });
}
