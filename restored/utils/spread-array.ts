// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Pu` / export `npt` (TypeScript __spreadArray helper).

/** Concatenate `tail` onto `head`, optionally packing sparse holes. */
export function spreadArray<T>(
  head: T[],
  tail: ArrayLike<T>,
  packSparse?: boolean,
): T[] {
  if (packSparse || arguments.length === 2) {
    let packed: T[] | undefined;
    for (let i = 0, len = tail.length; i < len; i += 1) {
      if (packed || !(i in tail)) {
        packed ||= Array.prototype.slice.call(tail, 0, i);
        packed[i] = tail[i] as T;
      }
    }
    return head.concat(packed || Array.prototype.slice.call(tail));
  }
  return head.concat(Array.prototype.slice.call(tail));
}
