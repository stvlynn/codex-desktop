// Restored from ref/webview/assets/mermaid-diagram-BzeSLuAD.js
// Typed props for the Codex markdown Mermaid diagram host.

import type { RefObject } from "react";

export type MermaidDiagramProps = {
  blockRef: RefObject<HTMLElement | null>;
  code: string;
  isCodeFenceOpen?: boolean;
  isDark?: boolean;
  isVisible?: boolean;
  onError?: (renderKey: string | number) => void;
  onRendered?: (renderKey: string | number, height: number) => void;
  renderKey: string | number;
};

export type MermaidPreviewState = {
  renderKey: string | number;
  src: string;
};
