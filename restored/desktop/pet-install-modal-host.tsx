// Restored from ref/webview/assets/pet-install-modal-host-B_NIodo4.js
// Wave FX — full polished body from `pet-install-modal-host-B_NIodo4/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 9 (verified 24/33).

import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { ensureComposerEsm_MT_Init } from "../composer/composer-esm-inits";
import { ensureGitRepoWatchAtomsInit } from "../hooks/git-method-query-atoms";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import { esmInit } from "../runtime/rolldown-runtime";
import {
  customAvatarsQueryKey,
  ensureCustomAvatarsQueryInit,
} from "./custom-avatars-query";
import { copper, PetInstallModalHostHelper1 } from "./pet-install-modal-dialog";

/** Wave FX unresolved companion (missing-export:hosts/deferred-hosts-s3.ts) */
const deferredHostsS3: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateIState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateNState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateRState: any = undefined;
/** Wave FX unresolved companion (sib-missing:desktop/pet-install-state.ts) */
const petInstallStateTState: any = undefined;
export function PetInstallModalHost(slate: unknown) {
  let { onClose } = slate,
    timber = CodexPluginActionType(appScopeAtom),
    umbra = CodexPluginActionResult(petInstallStateIState),
    violet = ensureGitRepoWatchAtomsInit();
  if (umbra == null) return null;
  let willow = () => {
    petInstallStateTState(timber);
    onClose();
  };
  let xenon = () =>
    petInstallStateRState(timber, () => violet(ensureCustomAvatarsQueryInit));
  return (
    <PetInstallModalHostHelper1
      {...{
        session: umbra,
        onClose: willow,
        onInstall: xenon,
      }}
    />
  );
}
var delta, echo;
esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  customAvatarsQueryKey();
  deferredHostsS3();
  ensureAppScopeInit();
  copper();
  petInstallStateNState();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindPetInstallModalHost(_next: unknown): void {}
export function ensurePetInstallModalHostInit(): void {}
