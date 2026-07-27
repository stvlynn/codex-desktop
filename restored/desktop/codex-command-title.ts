// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Command menu title formatter (`_nu` / export `lr`; init `Cnu` / export `ur`).

export type CommandTitleSource = {
  id: string;
  titleIntlId?: string;
  electron?: { menuTitleIntlId?: string };
  [key: string]: unknown;
};

export type IntlLike = {
  formatMessage: (descriptor: {
    id?: string;
    defaultMessage?: string;
    description?: string;
  }) => string;
};

let getCommandTitleImpl:
  | ((command: CommandTitleSource, intl: IntlLike) => string)
  | null = null;

/** Wire the full command-title catalog once app-initial drains. */
export function bindGetCommandTitle(next: (command: CommandTitleSource, intl: IntlLike) => string,
): void {
  getCommandTitleImpl = next;
}

/**
 * Bundle export `lr` — resolve a command's localized menu/analog title.
 */
export function getCommandTitle(command: CommandTitleSource, intl: IntlLike): string {
  if (getCommandTitleImpl == null) {
    return command.id;
  }
  return getCommandTitleImpl(command, intl);
}

/** Bundle export `ur` — message-catalog ESM init retained as no-op. */
export function ensureCodexCommandTitleInit(): void {}
