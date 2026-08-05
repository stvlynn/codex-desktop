// Restored from ref/webview/assets/hooks-settings-wtkEXqdK.js
// Wave5 stub-pass soft companions.
const launchSubagentFromSourceThread: any = undefined;

// Wave FZ — full polished body from `hooks-settings-wtkEXqdK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 81/112).
// Wave5d — FZ repair from fz-pascal L=2170 sus=35; JSX PascalCase + careful split.
// Wave5d careful split 3/4
/* split-lane-import-depth:1 */

import { NativeDesktopAppByBundleId } from "../../account/native-desktop-app-by-bundle-id";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { useResolvedAppByIdOrDisplayName } from "../../apps/use-resolved-app-by-id-or-display-name";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Cd_Init,
  ensureComposerEsm_Ed_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Td_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useLocation } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { applyActive as ApplyActive } from "../../conversation/apply-active";
import { classifyActivityItemGrouping } from "../../conversation/classify-activity-item-grouping";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { groupActivityItemsWithSourceIndex } from "../../conversation/group-activity-items-with-source-index";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL } from "../../docs/codex-doc-urls";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPd } from "../../icons/app-icon-pd";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredZft as DeferredZft } from "../../ui/deferred-zft";
import { ExpandableStatusSection } from "../../ui/expandable-status-section";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { resetStoreAtomValueSf as ResetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { identityCwd } from "../../utils/workspace-paths";
import {
  computeHookAttention,
  summarizeHooksByEvent,
} from "../hooks-event-helpers";
import { listHooksForHostQueryAtom } from "../hooks-query-atoms";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { useChronicleSettingsSection as UseChronicleSettingsSection } from "../use-chronicle-settings-section";

// Wave5d soft JSX companions.
function DeferredConversationWH3(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function SetAccountVoiceAndInvalidateCatalog(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialFd: any = undefined;
const AppInitialL: any = undefined;
const AppInitialVC: any = undefined;
const HooksSettingsHelper18: any = undefined;
const HooksSettingsHelper20: any = undefined;
const HooksSettingsHelper21: any = undefined;
const HooksSettingsHelper23: any = undefined;
const HooksSettingsHelper24: any = undefined;
const HooksSettingsHelper25: any = undefined;
const HooksSettingsHelper26: any = undefined;
const applyActive: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiU: any = undefined;
const deferredZft: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function eagle(apex) {
  return (
    <a
      key="learn-more"
      className="inline-flex text-token-text-link-foreground"
      href={DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {apex}
    </a>
  );
}
function frost() {
  return (
    <ParseUrlOrFallback
      {...{
        children: (
          <EnsurePersonalizationCInit
            {...{
              label: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.hooks.emptyHooks.label",
                    defaultMessage: "No hooks found",
                    description:
                      "Label when known projects do not have hooks or hook load issues",
                  }}
                />
              ),
              description: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.hooks.emptyHooks.description",
                    defaultMessage: "Configured hooks will appear here",
                    description: "Description when no hooks are configured",
                  }}
                />
              ),
              control: null,
            }}
          />
        ),
      }}
    />
  );
}
function glide(brook) {
  let { sections, title, onSelectSourceSection } = brook,
    cliff = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title,
        }}
      />
    );
  let dusk;
  {
    let fern;
    fern = (grove) => (
      <HooksSettingsHelper20
        key={grove.id}
        {...{
          section: grove,
          onSelectSourceSection,
        }}
      />
    );
    dusk = sections.map(fern);
  }
  let elm = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        children: (
          <ParseUrlOrFallback
            {...{
              children: dusk,
            }}
          />
        ),
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [cliff, elm],
      }}
    />
  );
}
function honey(hill) {
  let { section, onSelectSourceSection } = hill,
    isle = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.hooks.source.plugins",
                defaultMessage: "From Plugins",
                description: "Group heading for hooks installed by plugins",
              }}
            />
          ),
        }}
      />
    );
  let juniper;
  {
    let lagoon;
    lagoon = (meadow) => (
      <HooksSettingsHelper18
        key={meadow.pluginId ?? "unknown-plugin"}
        {...{
          pluginEntry: meadow,
          onSelectSourceSection,
        }}
      />
    );
    juniper = section.pluginEntries.map(lagoon);
  }
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          isle,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: juniper,
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
}
function iris(nest) {
  let { pluginEntry, onSelectSourceSection } = nest,
    oak = useIntl(),
    petal =
      AppInitialFd(pluginEntry.pluginId) ??
      oak.formatMessage({
        id: "settings.hooks.source.unknownPlugin",
        defaultMessage: "Unknown plugin",
        description: "Fallback label for plugin hooks without a plugin id",
      });
  let quiet = petal,
    rain = computeHookAttention(pluginEntry.entry);
  let seed = rain,
    trail = (
      <AppIconLV
        {...{
          className: "icon-sm text-token-text-secondary",
        }}
      />
    );
  let urn = <span className="block truncate">{quiet}</span>;
  let vine = (
    <HooksSettingsHelper24
      {...{
        count: pluginEntry.entry.hooks.length,
      }}
    />
  );
  let wind = (
    <HooksSettingsHelper25
      {...{
        summary: seed,
      }}
    />
  );
  let yarrow = () => {
    onSelectSourceSection({
      source: "plugin",
      pluginId: pluginEntry.pluginId,
    });
  };
  return (
    <SetAccountVoiceAndInvalidateCatalog
      {...{
        icon: trail,
        label: urn,
        description: vine,
        trailing: wind,
        onClick: yarrow,
      }}
    />
  );
}
function jewel(azure) {
  let { section, projectRootLabels, onSelectSourceSection } = azure,
    birch = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.hooks.source.projects",
                defaultMessage: "From Projects",
                description:
                  "Group heading for hooks from project config files",
              }}
            />
          ),
        }}
      />
    );
  let canyon;
  {
    let dew;
    dew = (ever) => (
      <HooksSettingsHelper23
        key={ever.cwd}
        {...{
          entry: ever,
          projectRootLabels,
          onSelectSourceSection,
        }}
      />
    );
    canyon = section.projectEntries.map(dew);
  }
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [
          birch,
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: canyon,
                  }}
                />
              ),
            }}
          />,
        ],
      }}
    />
  );
}
function knoll(field) {
  let { section, onSelectSourceSection } = field,
    grain = section.id,
    haven = section.entry,
    ink = computeHookAttention(haven);
  let jadeite = ink,
    kernel = moss(grain);
  let leaf = (
    <HooksSettingsHelper21
      {...{
        source: grain,
      }}
    />
  );
  let maple = (
    <HooksSettingsHelper24
      {...{
        count: haven.hooks.length,
      }}
    />
  );
  let nimbus = (
    <HooksSettingsHelper25
      {...{
        summary: jadeite,
      }}
    />
  );
  let opal = () => {
    onSelectSourceSection({
      source: grain,
    });
  };
  return (
    <SetAccountVoiceAndInvalidateCatalog
      {...{
        icon: kernel,
        label: leaf,
        description: maple,
        trailing: nimbus,
        onClick: opal,
      }}
    />
  );
}
function lunar(plume) {
  let { source } = plume;
  switch (source) {
    case "plugin": {
      let quillow;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.plugin",
            defaultMessage: "Plugin",
            description: "Source label for plugin hooks",
          }}
        />
      );
    }
    case "user": {
      let root;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.userConfig",
            defaultMessage: "User config",
            description: "Source label for user hooks",
          }}
        />
      );
    }
    case "admin": {
      let silk;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.adminConfig",
            defaultMessage: "Admin config",
            description: "Source label for admin-managed hooks",
          }}
        />
      );
    }
    case "project": {
      let thorn;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.projectConfig",
            defaultMessage: "Project config",
            description: "Source label for project hooks",
          }}
        />
      );
    }
    case "sessionFlags": {
      let upland;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.sessionFlags",
            defaultMessage: "Session flags",
            description: "Source label for session flag hooks",
          }}
        />
      );
    }
    case "unknown": {
      let vista;
      return (
        <MemoizedFormattedMessage
          {...{
            id: "settings.hooks.source.unknown",
            defaultMessage: "Unknown source",
            description: "Source label for hooks with unknown provenance",
          }}
        />
      );
    }
  }
}
function moss(wisp) {
  switch (wisp) {
    case "plugin":
      return (
        <AppIconLV
          {...{
            className: "icon-sm text-token-text-secondary",
          }}
        />
      );
    case "user":
      return (
        <DeferredConversationWH3
          {...{
            className: "icon-sm text-token-text-secondary",
          }}
        />
      );
    case "admin":
      return (
        <ResetStoreAtomValueSf
          {...{
            className: "icon-sm text-token-text-secondary",
          }}
        />
      );
    case "project":
      return (
        <UseChronicleSettingsSection
          {...{
            className: "icon-sm text-token-text-secondary",
          }}
        />
      );
    case "sessionFlags":
    case "unknown":
      return (
        <NativeDesktopAppByBundleId className="icon-sm text-token-text-secondary" />
      );
  }
}
function north(yonder) {
  let { entry, projectRootLabels, onSelectSourceSection } = yonder,
    zenith = computeHookAttention(entry);
  let anvil = zenith,
    beacon = (
      <UseChronicleSettingsSection
        {...{
          className: "icon-sm text-token-text-secondary",
        }}
      />
    );
  let crag = ridge(entry.cwd, projectRootLabels);
  let dome = <span className="block truncate">{crag}</span>;
  let eddy = (
    <HooksSettingsHelper24
      {...{
        count: entry.hooks.length,
      }}
    />
  );
  let fjord = (
    <HooksSettingsHelper25
      {...{
        summary: anvil,
      }}
    />
  );
  let glen = () => {
    onSelectSourceSection({
      source: "project",
      projectRoot: entry.cwd,
    });
  };
  return (
    <SetAccountVoiceAndInvalidateCatalog
      {...{
        icon: beacon,
        label: dome,
        description: eddy,
        trailing: fjord,
        onClick: glen,
      }}
    />
  );
}
function orbit(hearth) {
  let { count } = hearth;
  return (
    <MemoizedFormattedMessage
      {...{
        id: "settings.hooks.source.hookCount",
        defaultMessage: "{count, plural, one {# hook} other {# hooks}}",
        description: "Short hook count shown under a hook source row",
        values: {
          count,
        },
      }}
    />
  );
}
function pine(inlet) {
  let { summary } = inlet,
    jetty = (
      <HooksSettingsHelper26
        {...{
          summary,
        }}
      />
    );
  let knob = (
    <AppIconSft
      {...{
        className: "icon-2xs shrink-0 -rotate-90",
      }}
    />
  );
  return (
    <div className="flex items-center gap-3">
      {jetty}
      {knob}
    </div>
  );
}
function quest(ledge) {
  let { summary } = ledge,
    mire = useIntl();
  if (
    summary == null ||
    (summary.issueCount === 0 && summary.needsReview === 0)
  )
    return null;
  let nook = (
    <ApplyActive
      {...{
        className: "icon-2xs shrink-0 text-token-editor-warning-foreground",
      }}
    />
  );
  let oxbow = alpha(summary, mire);
  return (
    <div className="flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-token-text-primary">
      {nook}
      <span className="max-[30rem]:hidden">{oxbow}</span>
    </div>
  );
}
function ridge(pond, quarry) {
  return quarry?.[pond] ?? AppInitialL(pond) ?? pond;
}
function storm({ entry, projectRootLabels, selection }) {
  if (selection == null) return null;
  if (selection.source === "project")
    return ridge(selection.projectRoot, projectRootLabels);
  if (selection.source === "plugin") {
    let rapids =
      selection.pluginId === undefined
        ? null
        : AppInitialFd(selection.pluginId);
    if (
      (rapids == null && entry != null && (rapids = tide(entry.hooks)),
      rapids != null)
    )
      return rapids;
  }
  return (
    <HooksSettingsHelper21
      {...{
        source: selection.source,
      }}
    />
  );
}
function tide(spur) {
  let tor = null;
  for (let updraft of spur) {
    let verge = AppInitialFd(updraft.pluginId);
    if (verge == null || (tor != null && tor !== verge)) return null;
    tor = verge;
  }
  return tor;
}
var unity,
  $,
  vale,
  wave = esmInit(() => {
    unity = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Hlt_Init();
    findProcessManagerRow();
    ensureComposerEsm_RV_Init();
    declineAppshotTaskAndContinue();
    ensureAppIconSftInit();
    deferredConversationR();
    launchSubagentFromSourceThread();
    useEventCallback();
    ensureHooksFocusIconInit();
    buildCodexDesktopRequestHeaders();
    AppIconOi();
    codexCommandTheme();
    useGateEnabledWithAccountData();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    deferredUiU();
    AppIconPd();
    nova();
    groupActivityItemsWithSourceIndex();
    bravo();
    vale = "hooks-settings";
  });
