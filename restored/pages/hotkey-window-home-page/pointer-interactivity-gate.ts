// Restored from ref/webview/assets/hotkey-window-home-page-SLdyPBTP.js
// Wave FY — full polished body from `hotkey-window-home-page-SLdyPBTP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 88/122).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, copyContinuousScale→CopyContinuousScale, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, renamedId→HotkeyWindowHomePageHelper1, renamedId→HotkeyWindowHomePageHelper4, renamedId→HotkeyWindowHomePageHelper7, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, toggleSortedIdList→ToggleSortedIdList, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 3/4
/* split-lane-import-depth:1 */

import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import {
  ensureUseFloatingWindowPointerInteractivityInit,
  useFloatingWindowPointerInteractivity,
} from "../../hooks/use-floating-window-pointer-interactivity";
import { esmInit } from "../../runtime/rolldown-runtime";

export function indigo(ridge: any) {
  let { activationNonce, interactiveRegionRef, onInteractiveChange } = ridge,
    storm;
  return (
    (storm = {
      activationNonce,
      floatingElementSelectors: kite,
      includeInteractiveRegion: true,
      interactiveRegionRef,
      onInteractiveChange,
    }),
    useFloatingWindowPointerInteractivity(storm)
  );
}
var jade, kite;
export var lemon = esmInit(() => {
  jade = reactCompilerRuntime();
  ensureUseFloatingWindowPointerInteractivityInit();
  kite = [
    "[data-composer-overlay-floating-ui]",
    "[data-above-composer-portal] > *",
    "[data-radix-popper-content-wrapper] > *",
  ];
});
