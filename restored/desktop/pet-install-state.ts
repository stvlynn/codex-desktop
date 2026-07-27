// Restored from ref/webview/assets/pet-install-state-DIJx4Tfv.js
// Pet (custom avatar) install preview/install state machine + IPC invoke.
// Stage 3: Zut→invokeDesktopRpc; ivt→createScopedSignal; Fft→appScopeAtom; tdt init.

import {
  appScopeAtom,
  createScopedSignal,
} from "../boundaries/app-scope-runtime";
import { invokeDesktopRpc } from "../desktop/invoke-desktop-rpc";

export type PetInstallPreviewParams = {
  name: string;
  description?: string;
  imageUrl?: string;
  [key: string]: unknown;
};

export type PetInstallPreview = {
  spriteVersionNumber: number;
  [key: string]: unknown;
};

export type PetInstallState =
  | null
  | (PetInstallPreviewParams & { status: "loading" })
  | (PetInstallPreviewParams & {
      status: "ready";
      preview: PetInstallPreview;
    })
  | (PetInstallPreviewParams & { status: "previewError" })
  | (PetInstallPreviewParams & {
      status: "installing";
      preview: PetInstallPreview;
    })
  | (PetInstallPreviewParams & {
      status: "installError";
      preview: PetInstallPreview;
    })
  | (PetInstallPreviewParams & {
      status: "installed";
      preview: PetInstallPreview;
      installedAvatarId: string;
    });

type ScopeLike = {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
};

/** Bundle export `i` — scoped pet-install state signal. */
export const petInstallStateAtom = createScopedSignal<PetInstallState>(
  appScopeAtom,
  null,
);

/**
 * Bundle export `a` — load install preview via desktop RPC.
 */
export async function loadPetInstallPreview(
  scope: ScopeLike,
  params: PetInstallPreviewParams,
  invoke: (params: PetInstallPreviewParams) => Promise<PetInstallPreview> = (
    p,
  ) =>
    invokeDesktopRpc("pet-install-preview", {
      params: p,
    }) as Promise<PetInstallPreview>,
): Promise<void> {
  const current = scope.get(petInstallStateAtom) as PetInstallState;
  if (current?.status === "installing") return;
  const loading = { ...params, status: "loading" as const };
  scope.set(petInstallStateAtom, loading);
  try {
    const preview = await invoke(params);
    if (scope.get(petInstallStateAtom) !== loading) return;
    scope.set(petInstallStateAtom, { ...params, status: "ready", preview });
  } catch {
    if (scope.get(petInstallStateAtom) !== loading) return;
    scope.set(petInstallStateAtom, { ...params, status: "previewError" });
  }
}

/**
 * Bundle export `r` — commit install after a successful preview.
 */
export async function installPetFromPreview(
  scope: ScopeLike,
  refresh: () => Promise<unknown>,
  invoke: (params: Record<string, unknown>) => Promise<{ id: string }> = (p) =>
    invokeDesktopRpc("pet-install", { params: p }) as Promise<{ id: string }>,
): Promise<void> {
  const current = scope.get(petInstallStateAtom) as PetInstallState;
  if (current?.status !== "ready" && current?.status !== "installError") return;
  const installing = { ...current, status: "installing" as const };
  scope.set(petInstallStateAtom, installing);
  let installed: { id: string };
  try {
    installed = await invoke({
      name: current.name,
      description: current.description,
      imageUrl: current.imageUrl,
      spriteVersionNumber: current.preview.spriteVersionNumber,
    });
  } catch {
    if (scope.get(petInstallStateAtom) !== installing) return;
    scope.set(petInstallStateAtom, { ...current, status: "installError" });
    return;
  }
  if (scope.get(petInstallStateAtom) === installing) {
    scope.set(petInstallStateAtom, {
      ...current,
      status: "installed",
      installedAvatarId: installed.id,
    });
    await refresh().catch(() => undefined);
  }
}

/** Bundle export `t` — clear pet-install state. */
export function clearPetInstallState(scope: ScopeLike): void {
  scope.set(petInstallStateAtom, null);
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensurePetInstallStateInit(): void {}
