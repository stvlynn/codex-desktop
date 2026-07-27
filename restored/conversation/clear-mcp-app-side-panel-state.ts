// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `C$i` / export `yB` — drop MCP app side-panel frame state for an id.

type ScopeLike = {
  set: (
    atom: unknown,
    updater: (
      prev: Map<string, Record<string, unknown>>,
    ) => Map<string, Record<string, unknown>>,
  ) => void;
};

let sidePanelAtom: unknown = null;

export function setClearMcpAppSidePanelStateAtom(atom: unknown): void {
  sidePanelAtom = atom;
}

export function clearMcpAppSidePanelState(
  scope: ScopeLike,
  mcpAppId: string,
): void {
  scope.set(sidePanelAtom, (prev) => {
    let next = prev;
    if (prev.has(mcpAppId)) {
      next = new Map(prev);
      next.delete(mcpAppId);
    }
    for (const [key, value] of prev) {
      if (key === mcpAppId) continue;
      if (value.sidePanelSourceMcpAppId !== mcpAppId) continue;
      if (next === prev) next = new Map(prev);
      next.set(key, { ...value, sidePanelFrameContent: null });
    }
    return next;
  });
}
