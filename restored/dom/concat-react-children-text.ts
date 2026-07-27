// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `it` / export `Ovt`.

type ReactChildrenLike = {
  forEach: (children: unknown, fn: (child: unknown) => void) => void;
};

let childrenApi: ReactChildrenLike | null = null;

/** Bind `React.Children` (or compatible) for `Ovt`. */
export function bindReactChildrenApi(next: ReactChildrenLike): void {
  childrenApi = next;
}

/** Concatenate non-null child values into a string (bundle `Ovt`). */
export function concatReactChildrenText(children: unknown): string {
  let out = "";
  const api = childrenApi;
  if (api == null) {
    if (Array.isArray(children)) {
      for (const child of children) if (child != null) out += String(child);
      return out;
    }
    if (children != null && typeof children !== "object")
      return String(children);
    return out;
  }
  api.forEach(children, (child) => {
    if (child != null) out += String(child);
  });
  return out;
}
