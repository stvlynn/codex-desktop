// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ONl` / export `Ms`.

export type FormatMessageIntl = {
  formatMessage: (descriptor: {
    id: string;
    defaultMessage: string;
    description: string;
  }) => string;
};

/** Localized label for an external-agent import provider id. */
export function formatExternalAgentImportProviderLabel(intl: FormatMessageIntl, provider: string): string | undefined {
  switch (provider) {
    case "claude-code":
      return intl.formatMessage({
        id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCode",
        defaultMessage: "Claude Code",
        description: "Claude Code provider name in external agent import",
      });
    case "claude-cowork":
      return intl.formatMessage({
        id: "electron.onboarding.welcomeV2.externalAgentImport.provider.claudeCowork",
        defaultMessage: "Claude Cowork",
        description: "Claude Cowork provider name in external agent import",
      });
    case "cursor":
      return intl.formatMessage({
        id: "electron.onboarding.welcomeV2.externalAgentImport.provider.cursor",
        defaultMessage: "Cursor",
        description: "Cursor provider name in external agent import",
      });
  }
}
