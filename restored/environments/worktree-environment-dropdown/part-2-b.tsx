// Restored from ref/webview/assets/worktree-environment-dropdown-NXDrzJV-.js
// Wave FY — full polished body from `worktree-environment-dropdown-NXDrzJV-/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 55/73).
// AST split 2/2
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Hlt_Init } from "../../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { esmInit } from "../../runtime/rolldown-runtime";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import {
  environmentLabelsI,
  environmentLabelsR as EnvironmentLabelsR,
} from "../environment-labels";

/** app-initial companion (stub only; never promote) */
const AppInitialRS: any = undefined;
/** split companion stub */
const indigo: any = undefined;
/** split companion stub */
const jade: any = undefined;

export function worktreeEnvironmentDropdownR(field: unknown) {
  return (
    <EnvironmentLabelsR
      {...{
        ...field,
        renderStaticBranch: jade,
        renderControl: indigo,
      }}
    />
  );
}
export const worktreeEnvironmentDropdownI = esmInit(() => {
  kite = reactCompilerRuntime();
  ensureComposerEsm_Hlt_Init();
  usePluginsFeatureEnabled();
  environmentLabelsI();
  AppInitialRS();
});
