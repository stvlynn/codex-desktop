// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BL` / export `PH`.
// Failure path originally toasted via `yHi`; restored as `false`.

export type ClipboardContents = string | Record<string, string | Blob>;

export async function writeClipboardContents(
  contents: ClipboardContents,
  event?: { target?: EventTarget | null } | null,
): Promise<boolean> {
  const view =
    (event?.target as Node | null | undefined)?.ownerDocument?.defaultView ??
    window;
  const { navigator } = view;
  if (!navigator?.clipboard) return false;
  try {
    if (
      typeof contents !== "string" &&
      "write" in navigator.clipboard &&
      typeof ClipboardItem !== "undefined"
    ) {
      await navigator.clipboard.write([
        new ClipboardItem(
          Object.fromEntries(
            Object.entries(contents).map(([type, value]) => [
              type,
              typeof value === "string" ? new Blob([value], { type }) : value,
            ]),
          ),
        ),
      ]);
    } else {
      await navigator.clipboard.writeText(
        typeof contents === "string"
          ? contents
          : String(
              (contents as Record<string, string | Blob>)["text/plain"] ?? "",
            ),
      );
    }
    return true;
  } catch {
    return false;
  }
}
