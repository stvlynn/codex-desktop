// Restored from ref/webview/assets/settings-page-CXDiYo2f.js
// Settings page shell: sidebar nav, fuzzy search, host filter, and section routing.

import { createElement, Suspense, useEffect, type ReactElement } from "react";
import { CODEX_PROFILE_PAGE_ENTRYPOINT_CLICKED_TYPE } from "../../analytics/codex-profile-page-entrypoint-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../boundaries/app-scope-runtime";
import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Utt_Init,
} from "../../boundaries/composer-esm-inits";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { positiveBoundingClientRect } from "../../dom/positive-bounding-client-rect";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import {
  ensureUseVisibleSettingsSectionsInit,
  useVisibleSettingsSections,
} from "../../hooks/use-visible-settings-sections";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { resolveHostById } from "../../hosts/resolve-host-by-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { useIntl } from "../../i18n/use-intl";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { codexMicroDeviceNameMessages } from "../../devices/codex-micro-device-name-messages";
import { AppIconZa } from "../../icons/app-icon-za";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { SidebarLegacyContentLayout } from "../../shell/sidebar-legacy-content-layout";
import { deferredT } from "../../ui/deferred-t";
import { deferredUiZZ } from "../../ui/deferred-ui-zz";
import {
  ensureSettingsHostDropdownInit,
  SettingsHostDropdown,
} from "../settings-host-dropdown";
import { SettingsSectionScrollProvider } from "../settings-section-layout";
import {
  ensureSettingsLocationStateSchema as settingsRouteStateTState,
  parseSettingsWorkspaceRootState as settingsRouteStateRState,
} from "../settings-route-state";
import { RenderSettingsSidebarTrailing } from "./settings-sidebar-nav";
import {
  DeferredBw,
  DeferredUiIw,
  deferredUiBa,
  deferredUiBZ,
  deferredUiE,
  ensureLayoutJ1Init,
  ensureSelectedHostInit,
  ensureSettingsSectionChromeInit,
  settings2,
  SettingsSectionChrome,
} from "./runtime-bridges";

export type SettingsPageProps = Record<string, never>;

export function SettingsPage(_props: SettingsPageProps = {}): ReactElement {
  let appScope = useAppScope(appScopeAtom),
    codexMicroDeviceModel = useAppScopeValue(DeferredUiIw),
    intl = useIntl(),
    navigate = useNavigate(),
    location = useLocation(),
    routeSection = useMatch("/settings/:section/*")?.params.section ?? null,
    { connectedRemoteConnections, selectedHostId, setSelectedHostId } =
      useSelectedHost(),
    isLocalHost = resolveHostById(selectedHostId).kind === "local",
    {
      activeSettingsSection,
      settingsNavigationSections,
      shouldRedirectToVisibleSettingsSection,
      shouldRenderRouteContent,
    } = useVisibleSettingsSections(routeSection, isLocalHost, selectedHostId),
    settingsBackPath = useAppScopeValue(deferredUiE),
    parsedLocationState = settingsRouteStateTState(location.state);
  let hasHistoryBackState = parsedLocationState,
    handleNavigateBack = () =>
      navigateSettingsFallback(navigate, settingsBackPath, hasHistoryBackState);
  let onBack = handleNavigateBack,
    hostDropdown =
      connectedRemoteConnections != null &&
      connectedRemoteConnections.length > 0 ? (
        <SettingsHostDropdown
          align="start"
          connectedRemoteConnections={connectedRemoteConnections}
          contentWidth="sidebar"
          localIcon={AppIconZa}
          localLabel={intl.formatMessage({
            id: "settings.hostDropdown.allSettings",
            defaultMessage: "All settings",
            description:
              "Label for showing all settings in the settings sidebar host filter",
          })}
          onSelectHost={setSelectedHostId}
          selectedHostId={selectedHostId}
          showConnectedIndicator={true}
          triggerClassName="h-7 w-auto max-w-full shrink-0 px-2"
          triggerColor="ghost"
        />
      ) : null;
  let sidebarHostSelector = hostDropdown,
    clearHostFilter = isLocalHost
      ? undefined
      : () => {
          setSelectedHostId(LOCAL_HOST_ID);
        };
  let onClearHostFilter = clearHostFilter,
    sectionChromeFallback = (
      <SettingsSectionChrome section={activeSettingsSection} />
    );
  let routeFallback = sectionChromeFallback,
    routeContent = shouldRenderRouteContent ? (
      <Suspense fallback={routeFallback}>
        {createElement(getRouteContextValue, { key: selectedHostId })}
      </Suspense>
    ) : (
      routeFallback
    );
  let settingsRouteContent = routeContent,
    handleSelectSection = (sectionSlug: string) => {
      sectionSlug === "profile" &&
        logProductEvent(appScope, CODEX_PROFILE_PAGE_ENTRYPOINT_CLICKED_TYPE, {
          source: "settings_page",
        });
      navigate(`/settings/${sectionSlug}`, {
        replace: true,
        state: location.state,
      });
    };
  let onSelectSection = handleSelectSection,
    handleSidebarResize = (
      _entries: ResizeObserverEntry[],
      entry: ResizeObserverEntry,
    ) => {
      appScope.set(deferredUiZZ, positiveBoundingClientRect(entry));
    };
  let observeSidebarResize = useResizeObserver(handleSidebarResize),
    setLegacyContentRef = (element: HTMLElement | null) => {
      observeSidebarResize(element);
      element ?? appScope.set(deferredUiZZ, null);
    };
  let legacyContentRef = setLegacyContentRef,
    escapeEffectDeps,
    escapeKeyEffect;
  if (
    ((escapeKeyEffect = () => {
      let handleEscapeKeyDown = (event: KeyboardEvent) => {
        event.key === "Escape" &&
          (event.defaultPrevented ||
            (event.target instanceof HTMLElement &&
              (isHtmlInputOrTextarea(event.target) ||
                event.target.closest('[role="dialog"][data-state="open"]') !=
                  null)) ||
            navigateSettingsFallback(
              navigate,
              settingsBackPath,
              hasHistoryBackState,
            ));
      };
      return (
        window.addEventListener("keydown", handleEscapeKeyDown),
        () => {
          window.removeEventListener("keydown", handleEscapeKeyDown);
        }
      );
    }),
    (escapeEffectDeps = [settingsBackPath, navigate, hasHistoryBackState]),
    useEffect(escapeKeyEffect, escapeEffectDeps),
    shouldRedirectToVisibleSettingsSection)
  ) {
    let redirectTo = `/settings/${activeSettingsSection}`,
      _redirectUnused;
    return <Navigate to={redirectTo} replace={true} />;
  }
  let sidebarOnBack = onBack,
    sidebar = (
      <>
        <RenderSettingsSidebarTrailing
          canCollapse={false}
          codexMicroDeviceModel={codexMicroDeviceModel}
          settingsSections={settingsNavigationSections}
          activeSection={activeSettingsSection}
          onClearHostFilter={onClearHostFilter}
          searchHostId={selectedHostId}
          sidebarHostSelector={sidebarHostSelector}
          onSelect={onSelectSection}
          onBack={sidebarOnBack}
          groupSettingsSections={true}
        />
      </>
    );
  let scrollTargetId = location.hash.slice(1) || null;
  let scrollProviderChildren = (
    <SettingsSectionScrollProvider
      navigationKey={location.key}
      targetId={scrollTargetId}
    >
      {settingsRouteContent}
    </SettingsSectionScrollProvider>
  );
  return (
    <SidebarLegacyContentLayout
      legacyContentRef={legacyContentRef}
      sidebar={sidebar}
    >
      {scrollProviderChildren}
    </SidebarLegacyContentLayout>
  );
}
function isHtmlInputOrTextarea(element: HTMLElement): boolean {
  let tagName = element.tagName.toLowerCase();
  return tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    element.isContentEditable
    ? true
    : element.closest("[contenteditable='true']") != null;
}

type SettingsNavigate = ReturnType<typeof useNavigate>;

function navigateSettingsFallback(
  navigate: SettingsNavigate,
  fallbackPath: string | null | undefined,
  locationState: unknown,
): void {
  if (locationState) {
    navigate(-1);
    return;
  }
  if (fallbackPath != null) {
    navigate(fallbackPath);
    return;
  }
  navigate("/", {
    replace: true,
  });
}

export function ensureSettingsPageInit(): void {
  ensureComposerEsm_Utt_Init();
  ensureAppScopeHostInit();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  DeferredBw();
  deferredUiBa();
  deferredUiBZ();
  ensureComposerEsm_K9_Init();
  ensureLayoutJ1Init();
  ensureAppScopeInit();
  codexMicroDeviceNameMessages();
  ensureAppShellAtomsInit();
  deferredT();
  ensureSelectedHostInit();
  ensureSettingsHostDropdownInit();
  settings2();
  ensureSettingsSectionChromeInit();
  settingsRouteStateRState();
  ensureUseVisibleSettingsSectionsInit();
}
