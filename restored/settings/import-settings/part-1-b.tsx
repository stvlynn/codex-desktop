// Restored from ref/webview/assets/import-settings-DUWst0h6.js
// Wave FX — full polished body from `import-settings-DUWst0h6/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 66/95).
// AST split 1/2 — split companion residue for import-settings part-1.
/* split-lane-import-depth:1 */

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import {
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive as ApplyActive } from "../../conversation/apply-active";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { LOCAL_ENVIRONMENT_CONFIG_PATH_KEY } from "../../env/codex-path-env-keys";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import {
  ensureImportSettingsDsInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsRowDisclosure,
  SettingsRowDisclosure,
} from "../settings-row-disclosure";

/** Wave FX unresolved companion (jsx-collision:ensureImportSettingsClInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialCl: any = undefined;
/** Wave FX unresolved companion (missing-export:desktop/mcpserverconfig.tsx) */
const AppInitialNs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:mcpServersNeedingLoginFromImport@onboarding/mcp-servers-needing-login-from-import.ts) */
const AppInitialOs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureHooksSettingsRouteInit@settings/hooks-format-helpers.ts) */
const AppInitialTl: any = undefined;
/** Wave FX unresolved companion (jsx-collision:summarizeImportItemTypes@onboarding/summarize-import-item-types.ts) */
const AppInitialTs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-js.ts) */
const deferredUiJs: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-ks.ts) */
const deferredUiKs: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function $e(bloom) {
  let { category, history } = bloom,
    coral = useNavigate(),
    drift,
    eagle;
  {
    let glide = (moss) => moss.itemType === category.itemType;
    let honey = history.successes.filter(glide),
      iris = (north) => north.itemType === category.itemType;
    let jewel = history.failures.filter(iris),
      knoll;
    knoll = (event, orbit) => (
      <ImportSettingsHelper5
        key={`success-${orbit}`}
        {...{
          itemType: category.itemType,
          label: event.source,
          status: "success",
          target: event.target,
        }}
      />
    );
    drift = honey.map(knoll);
    let lunar;
    lunar = (pine, quest) => (
      <ImportSettingsHelper5
        key={`failure-${quest}`}
        {...{
          itemType: category.itemType,
          failureMessage: pine.message,
          label: pine.source,
          status: "error",
        }}
      />
    );
    eagle = jewel.map(lunar);
  }
  let frost =
    category.itemType === "HOOKS" ? (
      <EnsurePersonalizationCInit
        {...{
          variant: "nested",
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.import.history.details.reviewHooks",
                defaultMessage: "Manage imported hooks",
                description:
                  "Label for the inline action to manage imported hooks",
              }}
            />
          ),
          control: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "ghost",
                onClick: () => {
                  coral(
                    AppInitialCl({
                      hostId: LOCAL_HOST_ID,
                    }),
                  );
                },
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.import.history.details.openHooks",
                      defaultMessage: "Open hooks settings",
                      description:
                        "Button label to open hooks settings from imported hooks",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    ) : null;
  return (
    <>
      {drift}
      {eagle}
      {frost}
    </>
  );
}
function ImportSettingsHelper5(event) {
  let ridge = useIntl(),
    storm = useNavigate(),
    tide = null;
  if (event.status === "error") tide = event.failureMessage;
  else if (event.target == null) {
    let dusk;
    dusk = (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.details.imported",
          defaultMessage: "Imported",
          description:
            "Fallback destination label for a successful import history detail item",
        }}
      />
    );
    tide = dusk;
  } else event.target !== event.label && (tide = event.target);
  let unity =
    event.status === "success" && event.label != null
      ? harbor(event.itemType, event.label, event.target)
      : null;
  let vale = unity,
    wave =
      event.label == null ? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.details.unknownItem",
            defaultMessage: "Imported item",
            description:
              "Fallback label for an import history detail item without a source name",
          }}
        />
      ) : (
        event.label
      );
  let apex = wave,
    brook =
      event.status === "error" ? (
        <ApplyActive
          {...{
            className: "icon-2xs shrink-0 text-token-editor-error-foreground",
          }}
        />
      ) : null;
  let cliff =
    vale == null ? null : (
      <ReadLoginRouteQuerySnapshot
        {...{
          "aria-label": ridge.formatMessage(
            {
              id: "settings.import.history.details.openItem",
              defaultMessage: "Open {item}",
              description: "Accessible label to open an imported item",
            },
            {
              item: event.label,
            },
          ),
          color: "ghost",
          onClick: () => {
            storm(vale, {
              state:
                event.itemType === "SKILLS" || event.itemType === "COMMANDS"
                  ? {
                      initialHostId: LOCAL_HOST_ID,
                      initialTab: "skills",
                    }
                  : undefined,
            });
          },
          children:
            event.itemType === "SKILLS" || event.itemType === "COMMANDS" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openInSkills",
                  defaultMessage: "Open in Skills",
                  description:
                    "Button label to open an imported skill or converted command in Skills",
                }}
              />
            ) : event.itemType === "MCP_SERVER_CONFIG" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openMcpSettings",
                  defaultMessage: "Open MCP settings",
                  description:
                    "Button label to open an imported MCP server in settings",
                }}
              />
            ) : event.itemType === "SESSIONS" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openChat",
                  defaultMessage: "Open chat",
                  description: "Button label to open an imported chat",
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.details.openPlugin",
                  defaultMessage: "Open plugin",
                  description: "Button label to open an imported plugin",
                }}
              />
            ),
        }}
      />
    );
  return (
    <EnsurePersonalizationCInit
      {...{
        variant: "nested",
        icon: brook,
        label: apex,
        description: tide,
        control: cliff,
      }}
    />
  );
}
function harbor(elm, fern, grove) {
  return elm === "SKILLS" || elm === "COMMANDS" || elm === "MCP_SERVER_CONFIG"
    ? `${elm === "MCP_SERVER_CONFIG" ? "/settings/mcp-settings" : "/skills"}?search=${encodeURIComponent(grove ?? fern)}`
    : elm === "SESSIONS" && grove != null
      ? AriaIconBadge(resolveScienceModelLabel(grove))
      : elm === "PLUGINS"
        ? LOCAL_ENVIRONMENT_CONFIG_PATH_KEY({
            hostId: LOCAL_HOST_ID,
            pluginId: grove ?? fern,
          })
        : null;
}
var indigo,
  jade,
  kite = esmInit(() => {
    indigo = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureSettingsQueryAtomsInit();
    buildCodexDesktopRequestHeaders();
    AppInitialTl();
    AppInitialVC();
    ensureAppShellAtomsInit();
  });
function ImportSettingsHelper7(hill) {
  let { defaultExpanded = false, entry, mcpServerStatuses } = hill;
  if (entry.kind === "running") {
    let isle;
    return (
      <At
        {...{
          runningImport: entry.runningImport,
        }}
      />
    );
  }
  return (
    <ImportSettingsHelper8
      {...{
        defaultExpanded: defaultExpanded,
        history: entry.history,
        mcpServerStatuses,
      }}
    />
  );
}
function At(juniper) {
  let { runningImport } = juniper,
    lagoon = useIntl(),
    meadow;
  {
    let nest = ensureImportSettingsDsInit(runningImport.items),
      oak = (
        <EnsurePersonalizationCInit
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.running",
                  defaultMessage: "Importing now",
                  description:
                    "Header for an import history entry while its results are pending",
                }}
              />
            ),
            control: (
              <VSCODE_EDITOR_ID
                {...{
                  className: "icon-xs shrink-0 text-token-text-secondary",
                }}
              />
            ),
          }}
        />
      );
    let petal;
    petal = (quiet) => (
      <EnsurePersonalizationCInit
        key={quiet}
        {...{
          variant: "nested",
          label: deferredUiJs(lagoon, quiet),
          control: (
            <span className="text-xs text-token-text-secondary">
              {
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.import.history.runningBadge",
                    defaultMessage: "Importing",
                    description:
                      "Status for an import history category while its results are pending",
                  }}
                />
              }
            </span>
          ),
        }}
      />
    );
    meadow = (
      <ParseUrlOrFallback
        {...{
          children: [oak, nest.map(petal)],
        }}
      />
    );
  }
  return meadow;
}
function ImportSettingsHelper8(rain) {
  let { defaultExpanded, history, mcpServerStatuses } = rain,
    seed = AppInitialTs(history),
    trail = seed.reduce(onyx, 0),
    urn = seed.reduce(nickel, 0),
    vine = AppInitialOs({
      histories: [history],
      mcpServerStatuses,
    });
  let wind = vine.length,
    yarrow = history.successes.filter(marble);
  let azure = wind + yarrow.length,
    [birch, canyon] = quartz.useState(defaultExpanded),
    [dew, ever] = quartz.useState(null),
    field = `import-history-${history.importId}`,
    grain = ParseUrlOrFallback,
    haven = SettingsRowDisclosure,
    ink =
      seed.length === 0 ? (
        <EnsurePersonalizationCInit
          {...{
            variant: "nested",
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.import.history.noResults",
                  defaultMessage: "No results recorded",
                  description:
                    "Label shown when an import history entry has no category results",
                }}
              />
            ),
            control: null,
          }}
        />
      ) : (
        seed.map((item) => {
          let silk = `${field}-${item.itemType}`,
            thorn = dew === item.itemType;
          return (
            <SettingsRowDisclosure
              key={item.itemType}
              {...{
                content: (
                  <$e
                    {...{
                      category: item,
                      history,
                    }}
                  />
                ),
                contentId: silk,
                expanded: thorn,
                children: (
                  <ImportSettingsHelper13
                    {...{
                      category: item,
                      contentId: silk,
                      expanded: thorn,
                      history,
                      mcpServerStatuses,
                      onToggleExpanded: () => {
                        ever(thorn ? null : item.itemType);
                      },
                    }}
                  />
                ),
              }}
            />
          );
        })
      ),
    jadeite = Number(history.completedAtMs),
    kernel = (
      <FormattedDate
        {...{
          value: jadeite,
          dateStyle: "medium",
          timeStyle: "short",
        }}
      />
    );
  let leaf =
    urn > 0 && azure > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithFailuresAndWarnings",
          defaultMessage:
            "{importedCount} imported · {failedCount} did not import · {warningCount} need review",
          description:
            "Summary of imported, failed, and review-required items for a completed import",
          values: {
            importedCount: trail,
            failedCount: urn,
            warningCount: azure,
          },
        }}
      />
    ) : urn > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithFailures",
          defaultMessage:
            "{importedCount} imported · {failedCount} did not import",
          description:
            "Summary of imported and failed items for a completed import",
          values: {
            importedCount: trail,
            failedCount: urn,
          },
        }}
      />
    ) : azure > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summaryWithWarnings",
          defaultMessage:
            "{importedCount} imported · {warningCount} need review",
          description:
            "Summary of imported and review-required items for a completed import",
          values: {
            importedCount: trail,
            warningCount: azure,
          },
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.summary",
          defaultMessage: "{importedCount} imported",
          description: "Summary of imported items for a completed import",
          values: {
            importedCount: trail,
          },
        }}
      />
    );
  let maple = birch && "rotate-180",
    nimbus = IntlProvider(
      "icon-2xs text-token-input-placeholder-foreground transition-transform",
      maple,
    );
  let opal = (
    <AppIconSft
      {...{
        "aria-hidden": true,
        className: nimbus,
      }}
    />
  );
  let plume = () => {
    canyon(lemon);
  };
  let quillow = (
    <ImportSettingsHelper14
      {...{
        contentId: field,
        expanded: birch,
        label: kernel,
        description: leaf,
        control: opal,
        onClick: plume,
      }}
    />
  );
  let root = (
    <SettingsRowDisclosure
      {...{
        contentId: field,
        expanded: birch,
        content: ink,
        children: quillow,
      }}
    />
  );
  return (
    <ParseUrlOrFallback
      {...{
        children: root,
      }}
    />
  );
}
function lemon(upland) {
  return !upland;
}
function marble(vista) {
  return vista.itemType === "HOOKS";
}
function nickel(wisp, yonder) {
  return wisp + yonder.failedCount;
}
function onyx(zenith, anvil) {
  return zenith + anvil.importedCount;
}
function ImportSettingsHelper13(beacon) {
  let {
      category,
      contentId,
      expanded,
      history,
      mcpServerStatuses,
      onToggleExpanded,
    } = beacon,
    crag = useIntl(),
    dome =
      category.itemType === "MCP_SERVER_CONFIG"
        ? AppInitialOs({
            histories: [history],
            mcpServerStatuses,
          }).length
        : 0;
  let eddy = dome,
    fjord = deferredUiJs(crag, category.itemType);
  let glen =
    category.itemType === "COMMANDS" ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.destination.commands",
          defaultMessage: "Converted into Codex skills",
          description: "Destination label for imported commands",
        }}
      />
    ) : category.itemType === "HOOKS" && category.importedCount > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.manageHooks",
          defaultMessage: "Manage imported hooks in Hooks settings",
          description:
            "Description for opening imported hooks in Hooks settings",
        }}
      />
    ) : eddy > 0 ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.import.history.authRequiredCount.v2",
          defaultMessage:
            "{count, plural, one {# server needs authentication} other {# servers need authentication}}",
          description:
            "Imported MCP server count that still requires authentication",
          values: {
            count: eddy,
          },
        }}
      />
    ) : null;
  let hearth =
    category.failedCount > 0 || eddy > 0 ? (
      <ApplyActive
        {...{
          className: IntlProvider(
            "icon-2xs shrink-0",
            category.failedCount > 0
              ? "text-token-editor-error-foreground"
              : "text-token-editor-warning-foreground",
          ),
        }}
      />
    ) : null;
  let inlet = (
    <span>
      {category.failedCount > 0 ? (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.categorySummaryWithFailures",
            defaultMessage:
              "{importedCount} imported · {failedCount} did not import",
            description:
              "Summary of imported and failed items for an import history category",
            values: {
              importedCount: category.importedCount,
              failedCount: category.failedCount,
            },
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.import.history.categorySummary",
            defaultMessage: "{importedCount} imported",
            description:
              "Summary of imported items for an import history category",
            values: {
              importedCount: category.importedCount,
            },
          }}
        />
      )}
    </span>
  );
  let jetty = expanded && "rotate-90",
    knob = IntlProvider(
      "icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform",
      jetty,
    );
  let ledge = (
    <AppIconYlt
      {...{
        className: knob,
      }}
    />
  );
  let mire = (
    <div className="flex shrink-0 items-center gap-3 text-xs whitespace-nowrap text-token-text-secondary">
      {hearth}
      {inlet}
      {ledge}
    </div>
  );
  return (
    <ImportSettingsHelper14
      {...{
        contentId,
        expanded,
        variant: "nested",
        label: fjord,
        description: glen,
        control: mire,
        onClick: onToggleExpanded,
      }}
    />
  );
}
function ImportSettingsHelper14(nook) {
  let { contentId, control, description, expanded, label, onClick, variant } =
      nook,
    oxbow = (
      <EnsurePersonalizationCInit
        {...{
          variant,
          label,
          description,
          control,
        }}
      />
    );
  return (
    <button
      aria-controls={contentId}
      aria-expanded={expanded}
      className="focus-visible:outline-token-focus w-full cursor-interaction text-left hover:bg-token-list-hover-background"
      onClick={onClick}
      type="button"
    >
      {oxbow}
    </button>
  );
}
var pearl,
  quartz,
  river,
  slate = esmInit(() => {
    pearl = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quartz = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_Sut_Init();
    deferredUiKs();
    AppInitialNs();
    AppIconYlt();
    ensureAppIconSftInit();
    buildCodexDesktopRequestHeaders();
    AppInitialVC();
    initSettingsRowDisclosure();
    AppInitialFC();
    kite();
  });
