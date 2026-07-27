// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `npo`) / export `Oj`.

import type { ReactElement, ReactNode, Ref } from "react";

export type FileTreeSearchFieldPeers = {
  useTranslations: () => (key: string) => string;
  Root: (props: Record<string, unknown>) => ReactNode;
  SearchInput: (props: Record<string, unknown>) => ReactNode;
  Label: (props: Record<string, unknown>) => ReactNode;
};

let peers: FileTreeSearchFieldPeers | null = null;

/** Wire FileTreeSearchField peers once companions land. */
export function setFileTreeSearchFieldPeers(
  next: FileTreeSearchFieldPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Oj` / internal `npo`.
 * Labeled search field for the file tree panel.
 */
export type FileTreeSearchFieldProps = {
  autoFocus?: boolean;
  inputId?: string;
  inputRef?: Ref<HTMLInputElement>;
  onQueryChange?: (query: string) => void;
  searchQuery?: string;
};

export function FileTreeSearchField(
  props: FileTreeSearchFieldProps,
): ReactElement {
  if (peers == null) {
    throw new Error("FileTreeSearchField peers are not configured");
  }
  const inputId = props.inputId ?? "file-tree-search";
  const t = peers.useTranslations();
  return peers.Root({
    children: [
      peers.Label({
        key: "label",
        id: "codex.fileTreeSearch.label",
        htmlFor: inputId,
        children: t("codex.fileTreeSearch.label"),
      }),
      peers.SearchInput({
        key: "input",
        id: inputId,
        ref: props.inputRef,
        autoFocus: props.autoFocus,
        value: props.searchQuery ?? "",
        onChange: (event: { target: { value: string } }) =>
          props.onQueryChange?.(event.target.value),
      }),
    ],
  }) as ReactElement;
}
