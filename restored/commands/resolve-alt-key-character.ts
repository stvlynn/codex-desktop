// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iHr` / export `dZ`; companion `oHr` / `sHr`.

const CODE_TO_CHARACTER = new Map<string, string>([
  ["Backquote", "`"],
  ["Minus", "-"],
  ["Equal", "="],
  ["BracketLeft", "["],
  ["BracketRight", "]"],
  ["Backslash", "\\"],
  ["Semicolon", ";"],
  ["Quote", "'"],
  ["Comma", ","],
  ["Period", "."],
  ["Slash", "/"],
  ["Space", " "],
  ["NumpadMultiply", "*"],
  ["NumpadAdd", "+"],
  ["NumpadSubtract", "-"],
  ["NumpadDecimal", "."],
  ["NumpadDivide", "/"],
]);

/** Map a KeyboardEvent.code to a printable character. */
export function characterFromKeyboardCode(code: string): string | null {
  if (/^Key[A-Z]$/u.test(code)) return code.slice(3).toLowerCase();
  if (/^Digit[0-9]$/u.test(code)) return code.slice(5);
  return CODE_TO_CHARACTER.get(code) ?? null;
}

/** When Alt is held, prefer an override map / code mapping over `key`. */
export function resolveAltKeyCharacter(
  input: {
    altKey: boolean;
    code?: string | null;
    key: string;
  },
  codeOverrides?: Record<string, string> | null,
): string {
  if (!input.altKey || input.code == null) return input.key;
  return (
    codeOverrides?.[input.code] ??
    characterFromKeyboardCode(input.code) ??
    input.key
  );
}
