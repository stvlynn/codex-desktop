// Restored from ref/webview/assets/page-D9xkFXMg.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `page-D9xkFXMg/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 10 (verified 71/81).
// JSX calls converted: 116; mechanical renames: 324.

// Wave5d careful split 4/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { AppShellLayout } from "../../app-shell/app-shell-layout";
import { ensureChatgptSiteSuffixesInit } from "../../appgen/chatgpt-site-suffixes";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../boundaries/app-scope-runtime";
import {
  _chartWidgetStoresC,
  _chartWidgetStoresS,
  chartWidgetStoresA,
  chartWidgetStoresI as ChartWidgetStoresI,
  chartWidgetStoresN,
  chartWidgetStoresO,
  chartWidgetStoresR,
  chartWidgetStoresW,
} from "../../boundaries/chart-widget-stores/index";
import {
  createAppScopeSelectAtom,
  useAppScopeAtomValue,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm__U_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_pdt_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_tlt_Init,
} from "../../boundaries/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
} from "../../boundaries/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { QueryStaleTimes } from "../../config/query-stale-times";
import { useFeatureGateEnabled } from "../../feature-gates/use-feature-gate-enabled";
import { usePreferredColorScheme } from "../../hooks/use-preferred-color-scheme";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconeL } from "../../icons/app-icon-el";
import { AppIconsz } from "../../icons/app-icon-sz";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { CloseIcon } from "../../icons/close-icon";
import { handleAnchorOpenHref } from "../../navigation/handle-anchor-open-href";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { getAppearanceThemeMode } from "../../settings/get-appearance-theme-mode";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { deferredUicz } from "../../ui/deferred-uicz";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { ExternalLinkIconButton } from "../../ui/external-link-icon-button";
import { Spinner } from "../../ui/spinner";
import {
  initToolbarBreadcrumb,
  ToolbarBreadcrumb,
} from "../../ui/toolbar-breadcrumb";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import {
  ensureZodRuntime,
  zodArray,
  zodEnum,
  zodLiteral,
  zodNumber,
  zodObject,
  zodUnknown,
} from "../../vendor/zod";

import type { AppgenAnalyticsPageProps } from "./part-1";

// Cross-part soft stubs (defined in sibling parts).
const AppInitialET: any = undefined;
const AppInitialST: any = undefined;
const AppInitialU5: any = undefined;
const einstein: any = undefined;
const lotus: any = undefined;
const silver: any = undefined;
const AppInitialCT: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialT5: any = undefined;
const AppInitialTT: any = undefined;
const AppgenAnalyticsHelper1: any = undefined;
const AppgenAnalyticsHelper23: any = undefined;
const AppgenAnalyticsHelper29: any = undefined;
const sitesGetSiteQueryAtom: any = undefined;

export function AppgenAnalyticsPage(
  fermium: AppgenAnalyticsPageProps,
): ReactNode {
  let { section } = fermium,
    { projectId } = AppInitialU5();
  if (projectId == null) {
    let mendelev;
    return (
      <Navigate
        {...{
          replace: true,
          to: "/sites",
        }}
      />
    );
  }
  return (
    <AnalyticsOnWrapper
      {...{
        projectId,
        section,
      }}
    />
  );
}
function AnalyticsOnWrapper(nobel) {
  let { projectId, section } = nobel,
    { data, isError, isLoading } = useAppScopeAtomValue(
      sitesGetSiteQueryAtom,
      projectId,
    ),
    lawrenc = useNavigate(),
    ruther = useIntl(),
    dubnium = useFeatureGateEnabled("663642302"),
    seaborg = data?.current_live_url,
    bohrium = data?.title,
    hassium = (
      <AppgenAnalyticsHelper36
        {...{
          liveUrl: seaborg,
          siteTitle: bohrium,
        }}
      />
    );
  let meitner = hassium,
    darmstadt = (
      <ElectronOnly
        {...{
          extension: true,
          children: meitner,
        }}
      />
    );
  let roent = (
    <ElectronOnly
      {...{
        browser: true,
        chromeExtension: true,
        electron: true,
        children: (
          <AppShellLayout.Header
            {...{
              children: meitner,
            }}
          />
        ),
      }}
    />
  );
  let copernic = (
    <div className="scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 pb-8">
        {isLoading ? (
          <AppgenAnalyticsHelper37 {...{}} />
        ) : isError || data == null ? (
          <AppgenAnalyticsHelper38 {...{}} />
        ) : (
          <>
            <div className="flex min-w-0 flex-col gap-1">
              <h1 className="truncate text-[22px] leading-7 font-medium text-token-text-primary">
                {
                  <MemoizedFormattedMessage
                    {...{
                      id: "appgenAnalytics.title",
                      defaultMessage: "Analytics",
                      description: "Page title for site analytics",
                    }}
                  />
                }
              </h1>
              <div className="truncate text-xs text-token-text-tertiary">
                {formatUrlHostPath(seaborg) ?? data.slug}
              </div>
            </div>
            {dubnium ? (
              <AppgenAnalyticsHelper1
                {...{
                  ariaLabel: ruther.formatMessage({
                    id: "appgenAnalytics.navigation.label",
                    defaultMessage: "Analytics sections",
                    description:
                      "Accessible label for navigation between site analytics sections",
                  }),
                  selectedKey: section,
                  tabs: [
                    {
                      key: "overview",
                      name: (
                        <MemoizedFormattedMessage
                          {...{
                            id: "appgenAnalytics.navigation.overview",
                            defaultMessage: "Overview",
                            description:
                              "Tab label for the site analytics overview",
                          }}
                        />
                      ),
                      panelId: "appgen-analytics-overview",
                    },
                    {
                      key: "events",
                      name: (
                        <MemoizedFormattedMessage
                          {...{
                            id: "appgenAnalytics.navigation.events",
                            defaultMessage: "Events",
                            description: "Tab label for custom event analytics",
                          }}
                        />
                      ),
                      panelId: "appgen-analytics-events",
                    },
                  ],
                  variant: "underline",
                  onSelect: (nihon) => {
                    lawrenc(
                      nihon === "overview"
                        ? AppInitialET(projectId)
                        : AppInitialTT(projectId),
                    );
                  },
                }}
              />
            ) : null}
            {section === "overview" ? (
              <AppgenAnalyticsHelper29
                {...{
                  projectId,
                }}
              />
            ) : (
              <AppgenAnalyticsHelper23
                {...{
                  projectId,
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      {darmstadt}
      {roent}
      {copernic}
    </div>
  );
}
function AppgenAnalyticsHelper36(flerov) {
  let { liveUrl, siteTitle } = flerov,
    moscov = useFeatureGateEnabled("3765605143"),
    livermor = useFeatureGateEnabled("1404955983"),
    tenness = AppInitialCT(moscov, livermor);
  let oganesson = tenness,
    quark = useNavigate(),
    photon = oganesson ? "library" : "sites",
    gluon = oganesson ? (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.header.library",
          defaultMessage: "Library",
          description: "Breadcrumb link from analytics back to Library",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAnalytics.header.sites",
          defaultMessage: "Sites",
          description: "Breadcrumb link from analytics back to Sites",
        }}
      />
    );
  let boson = () => {
    quark(oganesson ? "/library" : "/sites");
  };
  let fermion = [
    {
      id: photon,
      label: gluon,
      onClick: boson,
    },
  ];
  let hadron = (
    <ToolbarBreadcrumb
      {...{
        ancestors: fermion,
        current: siteTitle,
      }}
    />
  );
  let lepton =
    liveUrl == null ? null : (
      <Button
        {...{
          color: "outline",
          size: "toolbar",
          onClick: (neutrino) => {
            handleAnchorOpenHref({
              event: neutrino,
              href: liveUrl,
              initiator: "mcp_app_resource",
            });
          },
          children: [
            <ExternalLinkIconButton
              {...{
                className: "icon-xs",
                ExternalIcon: AppIconsz,
                href: liveUrl,
              }}
            />,
            <MemoizedFormattedMessage
              {...{
                id: "appgenAnalytics.visit",
                defaultMessage: "Visit",
                description:
                  "Button label for opening the analyzed site externally",
              }}
            />,
          ],
        }}
      />
    );
  return (
    <div className="draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y">
      {hadron}
      {lepton}
    </div>
  );
}
function AppgenAnalyticsHelper37() {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      {<Spinner {...{}} />}
    </div>
  );
}
function AppgenAnalyticsHelper38() {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      <div className="text-sm font-medium text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenAnalytics.error.title",
              defaultMessage: "Unable to load site analytics",
              description: "Error state title for the site analytics page",
            }}
          />
        }
      </div>
    </div>
  );
}
var muon, $;
esmInit(() => {
  muon = reactCompilerRuntime();
  ensureAppScopeHostInit();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialOZ();
  Button();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  ensureComposerEsm_Sut_Init();
  lotus();
  initToolbarBreadcrumb();
  ensureComposerEsm_K1_Init();
  deferredUicz();
  ensureComposerEsm_tlt_Init();
  AppInitialT5();
  CodexAutomationCapabilityOrigin();
  ensureChatgptSiteSuffixesInit();
  AppInitialST();
  silver();
  einstein();
})();
