// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Open a ChatGPT artifact into writing-blocks (temp file) or fall back to download.

import { resolveArtifactFileIcon } from "../../artifact/resolve-artifact-file-icon";
import { getArtifactViewerFromOpen } from "../../artifacts/get-artifact-viewer-from-open";
import {
  ensureComposerEsm_BI_Init as ensureComposerBiInit,
  ensureComposerEsm_BU_Init as ensureComposerBuInit,
  ensureComposerEsm_Hut_Init as chatgptHostWorkspaceApi,
  ensureComposerEsm_J0_Init as ensureComposerJ0Init,
  ensureComposerEsm_KM_Init as ensureComposerKmInit,
  ensureComposerEsm_kV_Init as ensureComposerKvInit,
  ensureComposerEsm_M0_Init as ensureComposerM0Init,
  ensureComposerEsm_PA_Init as ensureComposerPaInit,
  ensureComposerEsm_TI_Init as ensureComposerTiInit,
  ensureComposerEsm_xH_Init as ensureComposerXhInit,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { activatePanelTab } from "../../navigation/activate-panel-tab";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { findPanelSideForTab } from "../../navigation/find-panel-side-for-tab";
import { panelControllerForSide } from "../../navigation/panel-controller-for-side";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import { downloadBlobAsFile } from "../../utils/download-blob-as-file";
import { canCreateChatgptTemporaryWorkspaceFile } from "./can-create-chatgpt-temporary-workspace-file";
import {
  downloadArtifactBlob,
  downloadArtifactToDisk,
  type ArtifactDownloadTarget,
  type DownloadClient,
} from "./chatgpt-artifact-download-helpers";
import type { OpenChatgptArtifactInWritingBlocksOptions } from "./types";

type ReactRuntime = {
  createElement: (...args: unknown[]) => unknown;
};

type HostWorkspaceApi = {
  workspaceFiles?: {
    createTemporaryFile?: (args: {
      bytes: Uint8Array;
      fileName: string;
    }) => Promise<{ path: string } | null | undefined>;
    releaseTemporaryFile?: (args: { path: string }) => Promise<unknown>;
  };
};

type PanelController = {
  openTab: (
    scope: unknown,
    panel: unknown,
    options: Record<string, unknown>,
  ) => void;
  closeTab: (scope: unknown, tabId: string) => void;
};

const MAX_TEMP_FILE_BYTES = 268_435_456;

let reactRuntime: ReactRuntime | undefined;
let inflightArtifactOpens: Map<string, Promise<unknown>> | undefined;

function releaseTemporaryWorkspaceFile(path: string): void {
  (chatgptHostWorkspaceApi as HostWorkspaceApi | undefined)?.workspaceFiles
    ?.releaseTemporaryFile?.({ path })
    .catch(() => {});
}

function closeArtifactPreviewTab(scope: unknown, tabId: string): void {
  const side = findPanelSideForTab(scope, tabId);
  if (side != null) {
    (panelControllerForSide(side) as PanelController).closeTab(scope, tabId);
  }
}

function activateExistingArtifactTab(scope: unknown, tabId: string): boolean {
  const side = findPanelSideForTab(scope, tabId);
  if (side == null) return false;
  activatePanelTab(scope, side, tabId);
  return true;
}

function openArtifactPreviewTab(
  scope: unknown,
  tabId: string,
  fileName: string,
): boolean {
  const FileIcon = resolveArtifactFileIcon(fileName);
  (panelControllerForSide("right") as PanelController).openTab(
    scope,
    ensureComposerJ0Init,
    {
      icon: reactRuntime!.createElement(FileIcon, {
        className: "icon-xs shrink-0",
      }),
      id: tabId,
      props: {
        debugName: "ChatGptFilePreview",
        fillParent: true,
      },
      title: fileName,
      tooltip: fileName,
    },
  );
  return findPanelSideForTab(scope, tabId) != null;
}

async function openArtifactViaTemporaryWorkspaceFile(
  scope: unknown,
  client: DownloadClient,
  options: {
    conversationId?: string | null;
    fileName: string;
    tabId: string;
    target: ArtifactDownloadTarget;
  },
): Promise<void> {
  const { conversationId, fileName, tabId, target } = options;
  let blob: Blob;
  try {
    blob = await downloadArtifactBlob({ client, conversationId, target });
  } catch (error) {
    closeArtifactPreviewTab(scope, tabId);
    throw error;
  }
  if (findPanelSideForTab(scope, tabId) == null) return;
  if (blob.size > MAX_TEMP_FILE_BYTES) {
    closeArtifactPreviewTab(scope, tabId);
    downloadBlobAsFile(blob, fileName);
    return;
  }
  let tempPath: string | null = null;
  try {
    const created = await (
      chatgptHostWorkspaceApi as HostWorkspaceApi | undefined
    )?.workspaceFiles?.createTemporaryFile?.({
      bytes: new Uint8Array(await blob.arrayBuffer()),
      fileName,
    });
    if (created == null) {
      closeArtifactPreviewTab(scope, tabId);
      downloadBlobAsFile(blob, fileName);
      return;
    }
    tempPath = created.path;
    const panelSide = findPanelSideForTab(scope, tabId);
    if (panelSide == null) {
      releaseTemporaryWorkspaceFile(created.path);
      tempPath = null;
      return;
    }
    getArtifactViewerFromOpen(scope, created.path, {
      hostId: LOCAL_HOST_ID,
      onClose: () => releaseTemporaryWorkspaceFile(created.path),
      tabId,
      target: panelSide,
      title: fileName,
    });
    tempPath = null;
  } catch {
    closeArtifactPreviewTab(scope, tabId);
    if (tempPath != null) releaseTemporaryWorkspaceFile(tempPath);
    downloadBlobAsFile(blob, fileName);
  }
}

/** Ensure workspace-related composer ESM inits are materialized. */
export const ensureChatgptComposerControllerWorkspaceInit = rolldownRuntimeN(
  () => {
    ensureAppShellAtomsInit();
    ensureComposerKmInit();
    ensureComposerKvInit();
    ensureComposerTiInit();
    ensureComposerBiInit();
  },
);

/** Ensure artifact-open React + panel deps (and inflight map) are ready. */
export const ensureChatgptComposerControllerAuxInitM = rolldownRuntimeN(() => {
  ensureAppShellAtomsInit();
  reactCompilerRuntime();
  reactRuntime = rolldownRuntimeS(react(), 1) as ReactRuntime;
  ensureComposerXhInit();
  ensureComposerM0Init();
  ensureComposerPaInit();
  ensureDynamicScriptLoadInit();
  ensureAppShellAtomsInit();
  ensureComposerBuInit();
  ensureComposerKvInit();
  ensureChatgptComposerControllerWorkspaceInit();
  inflightArtifactOpens = new Map();
});

/** Open an artifact file into the writing-blocks controller (or download). */
export function openChatgptArtifactInWritingBlocks(
  scope: unknown,
  client: DownloadClient,
  options: OpenChatgptArtifactInWritingBlocksOptions,
): Promise<unknown> | void {
  const { conversationId, fileName, tabKey, target } = options;
  const artifactTarget = target as ArtifactDownloadTarget;
  if (!canCreateChatgptTemporaryWorkspaceFile()) {
    return downloadArtifactToDisk(client, {
      conversationId,
      fileName,
      target: artifactTarget,
    });
  }
  const tabId = `chatgpt-file:${conversationId ?? "unknown"}:${tabKey}`;
  const inflight = inflightArtifactOpens!.get(tabId);
  if (inflight != null) {
    activateExistingArtifactTab(scope, tabId);
    return inflight;
  }
  if (activateExistingArtifactTab(scope, tabId)) {
    return Promise.resolve();
  }
  if (!openArtifactPreviewTab(scope, tabId, fileName)) {
    return downloadArtifactToDisk(client, {
      conversationId,
      fileName,
      target: artifactTarget,
    });
  }
  const pending = openArtifactViaTemporaryWorkspaceFile(scope, client, {
    conversationId,
    fileName,
    tabId,
    target: artifactTarget,
  }).finally(() => {
    inflightArtifactOpens!.delete(tabId);
  });
  inflightArtifactOpens!.set(tabId, pending);
  return pending;
}

// Letter aliases for boundary / legacy consumers
export const useChatgptComposerControllerH = openChatgptArtifactInWritingBlocks;
export const useChatgptComposerControllerUnderscore =
  ensureChatgptComposerControllerWorkspaceInit;
export const _useChatgptComposerControllerM =
  ensureChatgptComposerControllerAuxInitM;

export { resolveChatgptArtifactTargetFromReference } from "./chatgpt-artifact-download-helpers";
