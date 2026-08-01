// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Host capability check for temporary workspace files used by writing-blocks.

import { ensureComposerEsm_Hut_Init as chatgptHostWorkspaceApi } from "../../composer/composer-esm-inits";

type TemporaryWorkspaceFilesApi = {
  createTemporaryFile?: unknown;
  releaseTemporaryFile?: unknown;
};

type ChatgptHostWorkspaceSurface = {
  workspaceFiles?: TemporaryWorkspaceFilesApi;
};

/** Whether the host can create temporary workspace files for ChatGPT. */
export function canCreateChatgptTemporaryWorkspaceFile(): boolean {
  const workspaceFiles = (
    chatgptHostWorkspaceApi as unknown as
      | ChatgptHostWorkspaceSurface
      | undefined
  )?.workspaceFiles;
  return (
    workspaceFiles?.createTemporaryFile != null &&
    workspaceFiles.releaseTemporaryFile != null
  );
}

// Letter alias for boundary / legacy consumers
export const _useChatgptComposerControllerP =
  canCreateChatgptTemporaryWorkspaceFile;
