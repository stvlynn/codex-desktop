// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ecu` / export `un`.

/** Build a boolean selection map from customize items + choice keys. */
export function customizeItemSelectionMap(args: {
  customizeItems: Array<{ id: string }>;
  projectChoiceKey?: string | null;
  chatChoiceKey?: string | null;
}): Record<string, true> {
  return {
    ...Object.fromEntries(
      args.customizeItems.map((item) => [item.id, true as const]),
    ),
    ...(args.projectChoiceKey == null
      ? {}
      : { [args.projectChoiceKey]: true as const }),
    ...(args.chatChoiceKey == null
      ? {}
      : { [args.chatChoiceKey]: true as const }),
  };
}
