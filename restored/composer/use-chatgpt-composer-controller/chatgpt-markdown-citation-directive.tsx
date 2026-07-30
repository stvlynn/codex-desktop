// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// ChatGPT markdown citation directive (registry key CHATGPT_CITATION_ID / Helper24).

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { BrowserSidebarGate as AppInitialSL } from "../../conversation/browser-sidebar-gate";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { AppIconPZ as appInitialPZ } from "../../icons/app-icon-pz";
import { resolveAllowedMarkdownHref } from "../../markdown/resolve-allowed-markdown-href";
import { NavigationAllowContext as appInitialIL } from "../../navigation/navigation-allow-context";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import { dismissTooltips as appInitialUlt } from "../../ui/dismiss-tooltips";
import { OptionalTooltip as appInitialBlt } from "../../ui/optional-tooltip";
import { RemoteHrefIcon as AppInitialHL } from "../../ui/remote-href-icon";
import {
  $l,
  type ChatgptCitationSource,
  useChatgptComposerControllerHelper26,
  useChatgptComposerControllerHelper27,
  useChatgptComposerControllerHelper28,
  useChatgptComposerControllerHelper29,
  useChatgptComposerControllerHelper30,
} from "./chatgpt-citation-source-helpers";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useContext: (context: unknown) => unknown;
  useState: <T>(
    init: T,
  ) => [T, (v: T | ((prev: T) => T)) => void];
};

const AppInitialPZ = appInitialPZ;
const AppInitialGft = appInitialGft;
const AppInitialBlt = appInitialBlt;

type CitationDirectiveProps = {
  attributes: {
    label?: unknown;
    url?: unknown;
    title?: unknown;
    supporting_count?: unknown;
  };
  isTerminalInline?: boolean;
  sources?: ChatgptCitationSource[] | null;
};

export function useChatgptComposerControllerHelper25({
  currentSourceIndex,
  setCurrentSourceIndex,
  sources,
}: {
  currentSourceIndex: number;
  setCurrentSourceIndex: (
    value: number | ((prev: number) => number),
  ) => void;
  sources: Array<ChatgptCitationSource & { href: string }>;
}) {
  const intl = appInitialJft();
  const allow = React.useContext(appInitialIL);
  const current = sources[currentSourceIndex] ?? sources[0];
  if (current == null) return null;
  const multi = sources.length > 1;
  const onKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === "Escape") appInitialUlt();
    if (!multi) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setCurrentSourceIndex((prev) => $l(prev, sources.length, -1));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setCurrentSourceIndex((prev) => $l(prev, sources.length, 1));
    }
  };
  const nav = multi ? (
    <div className="bg-token-main-surface-secondary flex h-9 items-center justify-between gap-1.5">
      <div className="mx-1.5 flex gap-1 text-token-text-secondary">
        <button
          type="button"
          className="hover:bg-token-border-xlight h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
          aria-label={intl.formatMessage({
            id: "chatgpt.citation.hover.previousSource",
            defaultMessage: "Previous source",
            description:
              "Accessible label for a button that moves to the previous web citation source in a citation hover carousel",
          })}
          onClick={() => {
            setCurrentSourceIndex((prev) => $l(prev, sources.length, -1));
          }}
        >
          <AppInitialPZ className="icon-sm m-auto" />
        </button>
        <button
          type="button"
          className="hover:bg-token-border-xlight h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
          aria-label={intl.formatMessage({
            id: "chatgpt.citation.hover.nextSource",
            defaultMessage: "Next source",
            description:
              "Accessible label for a button that moves to the next web citation source in a citation hover carousel",
          })}
          onClick={() => {
            setCurrentSourceIndex((prev) => $l(prev, sources.length, 1));
          }}
        >
          <AppInitialPZ className="icon-sm m-auto rotate-180" />
        </button>
      </div>
      <span className="mx-3.5 text-token-text-tertiary">
        <AppInitialGft
          id="chatgpt.citation.hover.sourcePosition"
          defaultMessage="{currentSourceNumber}/{sourceCount}"
          description="Position label for the active source in a web citation hover carousel"
          values={{
            currentSourceNumber: currentSourceIndex + 1,
            sourceCount: sources.length,
          }}
        />
      </span>
    </div>
  ) : null;
  const linkClass = appInitialWft(
    "flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none",
    "text-token-foreground hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:ring-2 focus-visible:ring-token-focus-border",
  );
  const title = current.title ?? current.label;
  return (
    <div
      className="flex w-[20rem] max-w-[calc(100vw-16px)] flex-col overflow-hidden text-start text-xs font-normal"
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      {nav}
      <AppInitialSL
        className={linkClass}
        href={current.href}
        initiator="markdown_link_click"
        isBrowserSidebarEnabled={false}
        requiresConfirmation={allow === "restricted"}
        aria-label={useChatgptComposerControllerHelper30(current)}
      >
        <span className="flex min-w-0 items-center gap-1.5">
          <AppInitialHL
            href={current.href}
            className="h-4 w-4 shrink-0 text-current"
            loadRemote={allow !== "restricted"}
          />
          <span className="truncate text-token-text-primary">
            {current.label}
          </span>
        </span>
        <span className="line-clamp-2 text-sm leading-5 font-medium break-words text-token-text-primary">
          {title}
        </span>
        <span className="line-clamp-2 text-sm leading-5 break-all text-token-text-secondary">
          {current.url}
        </span>
      </AppInitialSL>
    </div>
  );
}

export function useChatgptComposerControllerHelper24(
  props: CitationDirectiveProps,
) {
  const Helper25 = useChatgptComposerControllerHelper25;
  const { attributes, isTerminalInline, sources } = props;
  const intl = appInitialJft();
  const allow = React.useContext(appInitialIL);
  const [currentSourceIndex, setCurrentSourceIndex] = React.useState(0);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const label =
    typeof attributes.label == "string" && attributes.label.trim().length > 0
      ? attributes.label.trim()
      : null;
  const url =
    typeof attributes.url == "string" && attributes.url.trim().length > 0
      ? attributes.url.trim()
      : null;
  const title =
    typeof attributes.title == "string" && attributes.title.trim().length > 0
      ? attributes.title.trim()
      : label;
  const supportingCount = useChatgptComposerControllerHelper26(
    attributes.supporting_count,
  );
  if (label == null || url == null) return null;
  const href = resolveAllowedMarkdownHref(url);
  if (href == null) return null;

  const resolvedSources = useChatgptComposerControllerHelper29(
    sources == null || sources.length === 0
      ? [{ kind: "primary", label, title, url }]
      : sources,
    { kind: "primary", label, title, url, href },
  );
  const active =
    (tooltipOpen
      ? resolvedSources[currentSourceIndex]
      : resolvedSources[0]) ?? resolvedSources[0];
  if (active == null) return null;

  const supportingLabel =
    supportingCount > 0
      ? intl.formatMessage(
          {
            id: "chatgpt.citation.aria.additionalSources",
            defaultMessage:
              "{supportingCount, plural, one {# additional source} other {# additional sources}}",
            description:
              "Accessible label segment that reports how many additional web sources support a citation",
          },
          { supportingCount },
        )
      : null;
  const ariaLabel = useChatgptComposerControllerHelper28({
    label: active.label,
    supportingSourcesLabel: supportingLabel,
    title: active.title,
    url: active.url,
  });
  const wrapClass = appInitialWft(
    "ms-1 inline-flex max-w-full items-center select-none",
    isTerminalInline
      ? "align-middle"
      : "relative top-[-0.094rem] translate-y-0.5",
  );
  const chipClass = appInitialWft(
    "group flex max-w-[15rem] cursor-interaction overflow-hidden text-[9px] font-medium leading-none no-underline! select-none",
    isTerminalInline
      ? "h-[22px] rounded-full pe-[7px] ps-[5px]"
      : "h-[18px] rounded-xl pe-2 ps-1",
    "bg-token-main-surface-secondary text-token-text-secondary! hover:bg-token-list-hover-background",
  );
  const iconClass = appInitialWft(
    "text-current",
    isTerminalInline
      ? "size-3 overflow-hidden rounded-full [&>img]:rounded-full [&>img]:ring-[0.5px] [&>img]:ring-inset [&>img]:ring-token-border-light"
      : "size-3.5",
  );

  return (
    <AppInitialBlt
      interactive={true}
      onOpenChange={(open: boolean) => {
        setTooltipOpen(open);
        if (!open) setCurrentSourceIndex(0);
      }}
      sideOffset={6}
      tooltipBodyClassName="w-full"
      tooltipContent={
        <Helper25
          currentSourceIndex={currentSourceIndex}
          setCurrentSourceIndex={setCurrentSourceIndex}
          sources={resolvedSources}
        />
      }
      tooltipMaxWidth="min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
      align="start"
      side="bottom"
      variant="rich"
    >
      <span className={wrapClass}>
        <AppInitialSL
          className={chipClass}
          href={active.href}
          initiator="markdown_link_click"
          isBrowserSidebarEnabled={false}
          data-testid="chatgpt-citation"
          requiresConfirmation={allow === "restricted"}
          aria-label={ariaLabel}
        >
          <span className="relative start-0 bottom-0 flex h-full w-full items-center">
            <span className="flex min-w-0 flex-1 items-center gap-1">
              <AppInitialHL
                href={active.href}
                className={iconClass}
                loadRemote={allow !== "restricted"}
              />
              <span className="max-w-[15ch] min-w-0 grow truncate overflow-hidden text-center">
                {active.label}
              </span>
              {supportingCount > 0 ? (
                <span
                  className={appInitialWft(
                    "ms-0.5 inline-flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full px-1 text-[8px] font-semibold leading-none",
                    "bg-token-text-tertiary/15 text-token-text-tertiary group-hover:bg-token-text-tertiary/20",
                  )}
                  aria-hidden="true"
                >
                  {useChatgptComposerControllerHelper27(supportingCount)}
                </span>
              ) : null}
            </span>
          </span>
        </AppInitialSL>
      </span>
    </AppInitialBlt>
  );
}
