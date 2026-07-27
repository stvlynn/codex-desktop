// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kVr` / export `pZ`.

type FocusedComposerApi = {
  getFocusedElement: () => Element | null;
  getComposerState: (
    el: Element,
  ) =>
    | { appendPromptText?: ((text: string) => void) | null }
    | null
    | undefined;
};

let api: FocusedComposerApi | null = null;

/** Bind focused-composer lookup used by `pZ`. */
export function bindAppendPromptTextToFocused(next: FocusedComposerApi): void {
  api = next;
}

/** Append text into the focused composer, if one is active. */
export function appendPromptTextToFocused(text: string): boolean {
  if (api == null) return false;
  const el = api.getFocusedElement();
  const append = el == null ? null : api.getComposerState(el)?.appendPromptText;
  if (append == null) return false;
  append(text);
  return true;
}
