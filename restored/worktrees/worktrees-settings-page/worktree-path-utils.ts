// Restored from ref/webview/assets/worktrees-settings-page-D8I58eIb.js
// Wave FY — full polished body from `worktrees-settings-page-D8I58eIb/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 67/88).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePersonalizationCInit→EnsurePersonalizationCInit, openInBrowser→OpenInBrowser, parseUrlOrFallback→ParseUrlOrFallback, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, setRemoteControlEnabledForHost→SetRemoteControlEnabledForHost, useChromeAndCodeThemeSync→UseChromeAndCodeThemeSync, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, renamedId→WorktreesSettingsPageHelper1, renamedId→WorktreesSettingsPageHelper2.
// AST split — worktree path grouping/filtering helpers.

import { toComparableUnixPath } from "../../utils/workspace-path-keys";

/** Wave FY unresolved companion (app-initial-unresolved-short) */
const AppInitialValue: any = undefined;
export function lemon(knob: any[]) {
  let ledge = new Map();
  for (let mire of knob) {
    let nook = AppInitialValue(mire.gitDir),
      oxbow = pearl(nook ?? mire.dir),
      pond = ledge.get(oxbow);
    if (pond) {
      pond.worktrees.push(mire);
      continue;
    }
    ledge.set(oxbow, {
      key: oxbow,
      repoRoot: nook,
      worktrees: [mire],
    });
  }
  return Array.from(ledge.values());
}
export function marble(quarry: any[], rapids: any[]) {
  return rapids.length === 0
    ? quarry
    : quarry.filter((item) => !rapids.some((_item) => at(_item, item.dir)));
}
export function nickel(spur: string, tor: any[]) {
  if (tor.length === 0) return [];
  let updraft = pearl(spur);
  return tor.filter((item) => {
    let verge = item.cwd;
    if (!verge) return false;
    let weir = pearl(verge);
    return weir === updraft ? true : weir.startsWith(`${updraft}/`);
  });
}
export function onyx(yard: any[], anchor: any[]) {
  if (anchor.length === 0) return yard;
  let bolt = yard.map((item, index) => ({
    worktree: item,
    index,
    conversationCount: nickel(item.dir, anchor).length,
  }));
  return (
    bolt.sort((cog, disc) => {
      let edge = disc.conversationCount - cog.conversationCount;
      return edge === 0 ? cog.index - disc.index : edge;
    }),
    bolt.map((item) => item.worktree)
  );
}
function pearl(forge) {
  return toComparableUnixPath(forge).replace(/\/+$/, "");
}
export function quartz(gear: any) {
  return gear.hostId ?? "local";
}
function at(hinge, iron) {
  let joint = pearl(hinge),
    keystone = pearl(iron);
  return joint === keystone || joint.startsWith(`${keystone}/`);
}
