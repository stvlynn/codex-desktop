// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Turn-sources footnote popover for ChatGPT browser conversation rows.

import { AppLogoFromHref as AppInitialBL } from "../../apps/app-logo-from-href";
import { useAppScopeAtomValue as appInitialIT } from "../../boundaries/composer-appscope-atoms";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { turnSourcesModelO } from "../../conversation/turn-sources-model";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { handleAnchorOpenHref as appInitialEnt } from "../../navigation/handle-anchor-open-href";
import { resolveLinkOpenBehavior as appInitialXtt } from "../../navigation/resolve-link-open-behavior";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import { DialogWithTrigger as _appInitialK } from "../../ui/dialog-with-trigger";
import { PopoverContent as appInitialA } from "../../ui/popover-content";
import { PopoverMenu as appInitialXE } from "../../ui/popover-menu";
import { PopoverTitle as AppInitialJ } from "../../ui/popover-title";
import { PopoverTrigger as AppInitialM } from "../../ui/popover-trigger";
import { StoreSetterChildren as AppInitialML } from "../../ui/store-setter-children";
import { normalizeLooseHref as appInitialNnt } from "../../utils/normalize-loose-href";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useState: (
    init: boolean,
  ) => [boolean, (v: boolean | ((p: boolean) => boolean)) => void];
};
const MAX_FOOTNOTE_ICONS = 5;

export function useChatgptComposerControllerHelper23(item: { url: string }) {
  return new URL(item.url).hostname;
}

export function useChatgptComposerControllerHelper22(
  sources: Array<{ url: string }>,
) {
  const seen = new Set<string>();
  return sources.filter((item) => {
    const key = useChatgptComposerControllerHelper23(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function useChatgptComposerControllerHelper21(
  {
    loadRemoteFavicon,
    onClose,
    requiresConfirmation,
    source,
  }: {
    loadRemoteFavicon?: boolean;
    onClose: () => void;
    requiresConfirmation?: boolean;
    source: { url: string; label?: string; title?: string };
  },
  title: string | null | undefined,
  confirm?: (opts: any) => void,
) {
  const ItemButton = appInitialXE.ItemButton;
  const ItemLeading = appInitialXE.ItemLeading;
  const ItemLabel = appInitialXE.ItemLabel;
  const label = title ?? source.label;
  return (
    <li>
      <ItemButton
        aria-label={label}
        title={source.url}
        onClick={(event: any) => {
          if (requiresConfirmation) {
            event.preventDefault();
            confirm?.({
              ...appInitialXtt({
                defaultDisposition: undefined,
                event,
                href: source.url,
              }),
              href: appInitialNnt(source.url),
              initiator: "markdown_link_click",
            });
            onClose();
            return;
          }
          appInitialEnt({
            event,
            href: source.url,
            initiator: "markdown_link_click",
            source: "manual",
          });
          onClose();
        }}
      >
        <ItemLeading variant="custom">
          <AppInitialBL
            className="size-4"
            href={source.url}
            loadRemote={loadRemoteFavicon}
          />
        </ItemLeading>
        <ItemLabel truncate={false}>
          <span className="flex min-w-0 flex-col py-0.5">
            <span className="truncate">{label}</span>
            {title == null ? null : (
              <span className="truncate text-xs text-token-text-secondary">
                {source.label}
              </span>
            )}
          </span>
        </ItemLabel>
      </ItemButton>
    </li>
  );
}

export function useChatgptComposerControllerHelper20(props: {
  hostId?: string;
  loadRemoteFavicon?: boolean;
  requiresConfirmation?: boolean;
  source: { url: string; title?: string; label?: string };
  onClose: () => void;
}) {
  const query = { hostId: props.hostId, url: props.source.url };
  const { data } = appInitialIT(turnSourcesModelO, query, {
    enabled: !props.requiresConfirmation,
  });
  const title = data ?? props.source.title;
  if (props.requiresConfirmation) {
    return (
      <AppInitialML>
        {(confirm: any) =>
          useChatgptComposerControllerHelper21(props, title, confirm)
        }
      </AppInitialML>
    );
  }
  return useChatgptComposerControllerHelper21(props, title);
}

export function useChatgptComposerControllerHelper19(request400: any) {
  const AppInitialGft = appInitialGft;
  const AppInitialA = appInitialA;
  const {
    className,
    hostId,
    loadRemoteFavicons = true,
    requiresConfirmation = false,
    sources,
  } = request400;
  const [open, setOpen] = React.useState(false);
  const intl = appInitialJft();
  const sourcesLabel = intl.formatMessage({
    id: "codex.turnSources.title",
    defaultMessage: "Sources",
    description: "Label for the sources used by one assistant response",
  });
  if (sources.length === 0) return null;
  const iconSources = useChatgptComposerControllerHelper22(sources).slice(
    0,
    MAX_FOOTNOTE_ICONS,
  );
  const triggerClass = appInitialWft(
    "group/footnote mt-3 mb-2 flex h-[38px] w-fit cursor-interaction items-center gap-1.5 rounded-3xl border border-token-border-default bg-token-bg-primary px-3 py-2 text-token-text-secondary hover:bg-token-main-surface-secondary",
    className,
  );
  const Helper20 = useChatgptComposerControllerHelper20;
  return (
    <_appInitialK open={open} onOpenChange={setOpen}>
      <AppInitialM asChild={true}>
        <button
          aria-label={sourcesLabel}
          className={triggerClass}
          type="button"
        >
          <span aria-hidden={true} className="flex flex-row-reverse">
            {iconSources.map((item: any) => (
              <span
                key={useChatgptComposerControllerHelper23(item)}
                className="group-hover/footnote:border-token-main-surface-secondary group-hover/footnote:bg-token-main-surface-secondary -ms-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-token-bg-primary bg-token-bg-primary first:me-0"
                data-turn-source-provider-icon=""
              >
                <AppInitialBL
                  className="size-4"
                  href={item.url}
                  loadRemote={loadRemoteFavicons}
                />
              </span>
            ))}
          </span>
          <span className="text-xs font-semibold">
            <AppInitialGft
              id="codex.turnSources.title"
              defaultMessage="Sources"
              description="Label for the sources used by one assistant response"
            />
          </span>
        </button>
      </AppInitialM>
      <AppInitialA
        aria-label={sourcesLabel}
        className="w-80 p-2"
        side="top"
        sideOffset={6}
      >
        <AppInitialJ
          aria-level={2}
          className="px-2 pt-1 pb-1.5 text-sm"
          role="heading"
        >
          <AppInitialGft
            id="codex.turnSources.title"
            defaultMessage="Sources"
            description="Label for the sources used by one assistant response"
          />
        </AppInitialJ>
        <ul className="flex flex-col px-2 pb-1">
          {sources.map((source: any) => (
            <Helper20
              key={source.url}
              hostId={hostId}
              loadRemoteFavicon={loadRemoteFavicons}
              requiresConfirmation={requiresConfirmation}
              source={source}
              onClose={() => setOpen(false)}
            />
          ))}
        </ul>
      </AppInitialA>
    </_appInitialK>
  );
}
