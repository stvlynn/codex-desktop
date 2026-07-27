// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sIa` / export `pN` (`oIa`).

export type OpenWorkspaceRootMessage = {
  id: string;
  defaultMessage: string;
  description: string;
};

export const OPEN_WORKSPACE_ROOT_MESSAGES = {
  finder: {
    id: "sidebarElectron.openWorkspaceRootInFinder",
    defaultMessage: "Reveal in Finder",
    description: "Menu item to reveal a folder in Finder",
  },
  explorer: {
    id: "sidebarElectron.openWorkspaceRootInExplorer",
    defaultMessage: "Open in Explorer",
    description: "Menu item to open a folder in File Explorer",
  },
  fileManager: {
    id: "sidebarElectron.openWorkspaceRootInFileManager",
    defaultMessage: "Open in File Manager",
    description: "Menu item to open a folder in the system file manager",
  },
} as const satisfies Record<string, OpenWorkspaceRootMessage>;

/** Platform-specific "reveal workspace root" menu message. */
export function openWorkspaceRootMessage(platform: "macOS" | "windows" | "linux" | string): OpenWorkspaceRootMessage | undefined {
  switch (platform) {
    case "macOS":
      return OPEN_WORKSPACE_ROOT_MESSAGES.finder;
    case "windows":
      return OPEN_WORKSPACE_ROOT_MESSAGES.explorer;
    case "linux":
      return OPEN_WORKSPACE_ROOT_MESSAGES.fileManager;
  }
}
