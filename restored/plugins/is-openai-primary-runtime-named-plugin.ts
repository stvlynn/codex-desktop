// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vta` / `gR` + `yta` / `_R`; companions `xta` / `Sta` / `Tta`.

const OPENAI_PRIMARY_RUNTIME = "openai-primary-runtime";

function isPrimaryRuntimeNamedPlugin(
  entry: {
    plugin: { name: string; id: string };
    marketplaceName?: string | null;
  },
  pluginName: string,
): boolean {
  return (
    entry.plugin.name === pluginName &&
    entry.marketplaceName === OPENAI_PRIMARY_RUNTIME &&
    entry.plugin.id === `${pluginName}@${OPENAI_PRIMARY_RUNTIME}`
  );
}

/** True for spreadsheets@openai-primary-runtime. */
export function isOpenaiPrimaryRuntimeSpreadsheetsPlugin(entry: {
  plugin: { name: string; id: string };
  marketplaceName?: string | null;
}): boolean {
  return isPrimaryRuntimeNamedPlugin(entry, "spreadsheets");
}

/** True for presentations@openai-primary-runtime. */
export function isOpenaiPrimaryRuntimePresentationsPlugin(entry: {
  plugin: { name: string; id: string };
  marketplaceName?: string | null;
}): boolean {
  return isPrimaryRuntimeNamedPlugin(entry, "presentations");
}
