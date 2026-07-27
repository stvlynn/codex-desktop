// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vnu` / export `cr`.

import {
  getCommandTitle,
  type CommandTitleSource,
  type IntlLike,
} from "./codex-command-title";

type CaptureAppshotResolver = (intl: IntlLike) => {
  title: string;
  description: string;
};

type DescriptionCatalog = Record<string, unknown>;

let captureAppshotResolver: CaptureAppshotResolver | null = null;
let isAppshotCommand: ((command: { id: string }) => boolean) | null = null;
let descriptionCatalog: DescriptionCatalog | null = null;
let hasDescription:
  | ((catalog: DescriptionCatalog, id?: string) => boolean)
  | null = null;
let fallbackDescription:
  | ((intl: IntlLike, commandId: string) => string)
  | null = null;
let appName = "ChatGPT";

/** Bind optional catalogs used by command palette copy resolution. */
export function bindResolveCommandPaletteItem(options: {
  captureAppshotResolver?: CaptureAppshotResolver;
  isAppshotCommand?: (command: { id: string }) => boolean;
  descriptionCatalog?: DescriptionCatalog;
  hasDescription?: (catalog: DescriptionCatalog, id?: string) => boolean;
  fallbackDescription?: (intl: IntlLike, commandId: string) => string;
  appName?: string;
}): void {
  if (options.captureAppshotResolver)
    captureAppshotResolver = options.captureAppshotResolver;
  if (options.isAppshotCommand) isAppshotCommand = options.isAppshotCommand;
  if (options.descriptionCatalog)
    descriptionCatalog = options.descriptionCatalog;
  if (options.hasDescription) hasDescription = options.hasDescription;
  if (options.fallbackDescription)
    fallbackDescription = options.fallbackDescription;
  if (options.appName) appName = options.appName;
}

export type CommandPaletteCommand = CommandTitleSource & {
  descriptionIntlId?: string;
};

/** Resolve title/description for a command palette row. */
export function resolveCommandPaletteItem(
  command: CommandPaletteCommand,
  intl: IntlLike,
  overrides?: { title?: string; description?: string },
): { title: string; description: string } {
  if (command.id === "composer.captureAppshot" && captureAppshotResolver) {
    return captureAppshotResolver(intl);
  }
  let description = "";
  if (isAppshotCommand?.(command)) {
    const id = command.descriptionIntlId;
    description =
      descriptionCatalog && hasDescription?.(descriptionCatalog, id)
        ? intl.formatMessage(
            descriptionCatalog[id!] as never,
            {
              appName,
            } as never,
          )
        : (fallbackDescription?.(intl, command.id) ?? "");
  }
  return {
    title: overrides?.title ?? getCommandTitle(command, intl),
    description: overrides?.description ?? description,
  };
}
