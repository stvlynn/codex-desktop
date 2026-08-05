// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 1/2 — output-artifact key/label/url helpers and the suggested-artifacts dropdown section.
/* split-lane-import-depth:1 */

import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import {
  ArtifactFilePreviewIcon,
  ensureArtifactFilePreviewIconInit as EnsureArtifactFilePreviewIconInit,
} from "../../artifact/artifact-file-preview-icon";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import {
  ensureComposerEsm_IB_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_Ytt_Init,
} from "../../composer/composer-esm-inits";
import { resolveThreadProjectSelection } from "../../conversation/resolve-thread-project-selection";
import { ensureDiffStatsAggregateInit } from "../../diff/ensure-diff-stats-aggregate-init";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { esmInit } from "../../runtime/rolldown-runtime";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { posixPathBasename } from "../../utils/posix-path-basename";
import {
  localConversationThreadUpperL as LocalConversationThreadUpperL,
  localConversationThreadUpperR,
} from "../local-conversation-thread";
import { AppInitialC } from "./part-1-g1-stubs";

function lemon(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.key;
    case "file":
    case "generated-image":
      return `file:${event.path}`;
    case "google-drive":
      return `google-drive:${event.url}`;
    case "appgen-app":
      return `appgen-app:${event.projectId}`;
    case "website":
      return `website:${event.target}`;
  }
}
function marble(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.title;
    case "file":
    case "generated-image":
      return posixPathBasename(event.path);
    case "google-drive":
      return event.title;
    case "appgen-app":
      return event.title ?? formatUrlHostPath(event.url) ?? event.url;
    case "website":
      return onyx(event.target);
  }
}
function nickel(event) {
  switch (event.type) {
    case "external-resource":
      return event.resource.url;
    case "file":
    case "generated-image":
      return event.path;
    case "google-drive":
      return event.url;
    case "appgen-app":
      return formatUrlHostPath(event.url) ?? event.url;
    case "website":
      return event.target;
  }
}
function onyx(vine) {
  try {
    let wind = new URL(vine);
    return `${wind.host}${wind.pathname === "/" ? "" : wind.pathname}${wind.search}`;
  } catch {
    return posixPathBasename(vine) || vine;
  }
}
var pearl = esmInit(() => {
  ensureChatgptSiteSuffixesInit();
  ensureComposerEsm_Wdt_Init();
});
function ThreadAppShellChromeHelper6(yarrow) {
  let { artifact, iconClassName, imageClassName } = yarrow;
  switch (artifact.type) {
    case "external-resource": {
      let azure;
      return (
        <LocalConversationThreadUpperL
          {...{
            className: iconClassName,
            resource: artifact.resource,
          }}
        />
      );
    }
    case "file":
    case "generated-image": {
      let birch;
      return (
        <EnsureArtifactFilePreviewIconInit
          {...{
            iconClassName,
            imageClassName,
            path: artifact.path,
          }}
        />
      );
    }
    case "google-drive": {
      let canyon;
      return (
        <AppInitialC
          className={iconClassName}
          resourceKind={artifact.resourceKind}
        />
      );
    }
    case "appgen-app": {
      let dew;
      return (
        <AppIconHG
          {...{
            className: iconClassName,
          }}
        />
      );
    }
    case "website": {
      let ever;
      return (
        <AppIconJtt
          {...{
            className: iconClassName,
          }}
        />
      );
    }
  }
}
var quartz,
  river,
  slate = esmInit(() => {
    quartz = reactCompilerRuntime();
    ArtifactFilePreviewIcon();
    ensureComposerEsm_Ytt_Init();
    ensureAppIconHGInit();
    ensureDiffStatsAggregateInit();
    localConversationThreadUpperR();
  });
function ThreadAppShellChromeHelper7(field) {
  let {
      actions,
      hasOutputArtifacts,
      onActionSelect,
      onOpenArtifact,
      outputArtifacts,
    } = field,
    grain =
      hasOutputArtifacts &&
      outputArtifacts != null &&
      outputArtifacts.length > 0;
  if (actions.length === 0 && !grain) {
    let jadeite;
    return (
      <DropdownMenu.Message
        {...{
          compact: true,
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "thread.sidePanel.newTab.empty",
                defaultMessage: "No tabs are available for this chat",
                description:
                  "Empty message on the side panel New tab page when the current chat has no available side panel tab actions.",
              }}
            />
          ),
        }}
      />
    );
  }
  let haven;
  {
    let kernel;
    kernel = (leaf) => (
      <DropdownMenu.Item
        key={leaf.id}
        {...{
          LeftIcon: leaf.mcpServerIcon == null ? leaf.Icon : undefined,
          keyboardShortcut: leaf.keyboardShortcut,
          onSelect: () => onActionSelect(leaf),
          children: [
            leaf.mcpServerIcon == null ? null : (
              <DropdownMenu.ItemIcon
                {...{
                  children: ensureComposerEsm_IB_Init(leaf.mcpServerIcon),
                }}
              />
            ),
            leaf.title,
          ],
        }}
      />
    );
    haven = actions.map(kernel);
  }
  let ink = grain ? (
    <>
      {actions.length > 0 ? <DropdownMenu.Separator {...{}} /> : null}
      {
        <DropdownMenu.SectionLabel
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "thread.sidePanel.newTab.suggested.heading",
                  defaultMessage: "Suggested",
                  description:
                    "Heading for suggested artifacts shown on the side panel New tab page",
                }}
              />
            ),
          }}
        />
      }
      {outputArtifacts.map((item) => (
        <DropdownMenu.Item
          key={lemon(item)}
          {...{
            onClickCapture: (event) => {
              installModalBrowserExtensionMessages(event) &&
                (event.preventDefault(),
                event.stopPropagation(),
                onOpenArtifact(item, event));
            },
            onSelect: () => onOpenArtifact(item),
            children: [
              <DropdownMenu.ItemIcon
                {...{
                  children: (
                    <ThreadAppShellChromeHelper6
                      {...{
                        artifact: item,
                        iconClassName: "icon-xs",
                        imageClassName: "size-[18px] rounded-sm",
                      }}
                    />
                  ),
                }}
              />,
              marble(item),
            ],
          }}
        />
      ))}
    </>
  ) : null;
  return (
    <>
      {haven}
      {ink}
    </>
  );
}
var timber,
  umbra,
  violet = esmInit(() => {
    timber = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Qtt_Init();
    resolveThreadProjectSelection();
    pearl();
    slate();
  });
