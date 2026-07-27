// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HGt` / export `Qnt`.

const COMPAT_UNICODE_RE =
  /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
const LONG_S_T_MAP = new Map([["ﬅ", "ſt"]]);

/** NFKC-normalize compatibility unicode runs (URL / hostname hygiene). */
export function normalizeCompatibilityUnicode(value: string): string {
  return value.replaceAll(COMPAT_UNICODE_RE, (_match, run, longST) =>
    run ? run.normalize("NFKC") : (LONG_S_T_MAP.get(longST) ?? longST),
  );
}
