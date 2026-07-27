// Restored from ref/webview/assets/pet-install-state-C5s6gJdL.js
// Alternate public surface for pet-install state (session-named exports).

import {
  clearPetInstallState,
  ensurePetInstallStateInit,
  installPetFromPreview,
  loadPetInstallPreview,
  petInstallStateAtom,
} from "./pet-install-state";

ensurePetInstallStateInit();

/** Bundle export `startPetInstallSession` ← DIJx `a` (loadPetInstallPreview). */
export const startPetInstallSession = loadPetInstallPreview;

/** Bundle export `installPet` ← DIJx `r` (installPetFromPreview). */
export const installPet = installPetFromPreview;

/** Bundle export `petInstallSession$` ← DIJx `i` (petInstallStateAtom). */
export const petInstallSession$ = petInstallStateAtom;

/** Bundle export `closePetInstallSession` ← DIJx `t` (clearPetInstallState). */
export const closePetInstallSession = clearPetInstallState;
