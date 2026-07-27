// Restored from ref/webview/assets/open-source-licenses-page-BGQWixF9.js
// Settings page: third-party notices / open source licenses text.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// edt→createAppScopeQueryAtom (ep wrapper).

import type { ReactNode } from "react";
import { appScopeAtom } from "../boundaries/app-scope-runtime";
import {
  createAppScopeQueryAtom,
  useAppScopeValue,
} from "../boundaries/composer-appscope-atoms";
import {
  useLocation,
  useNavigate,
} from "../boundaries/react-router-navigation";
import { QueryStaleTimes } from "../config/query-stale-times";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { AppIconPZ } from "../icons/app-icon-pz";
import { Button } from "../ui/button";
import { SettingsGroup } from "./settings-group";
import { SettingsPanel } from "./settings-panel";
import { SettingsPanelLoading } from "./settings-panel-loading";
import { SettingsSectionLayout } from "./settings-section-layout";
type LicensesQueryData = {
  text?: string;
};
type LicensesBackState = {
  licensesBackPath?: unknown;
};
const thirdPartyNoticesQueryAtom = createAppScopeQueryAtom(
  appScopeAtom,
  "third-party-notices",
  {
    enabled: true,
    staleTime: QueryStaleTimes.ONE_MINUTE,
  },
);
function licensesBackPathFromState(state: unknown): string {
  if (
    typeof state == "object" &&
    state &&
    !Array.isArray(state) &&
    "licensesBackPath" in state
  ) {
    const path = (state as LicensesBackState).licensesBackPath;
    if (typeof path == "string" && path.startsWith("/settings/")) return path;
  }
  return "/settings/general";
}

/**
 * Bundle export `OpenSourceLicensesPage` — settings licenses / notices page.
 */
export function OpenSourceLicensesPage(): ReactNode {
  const navigate = useNavigate();
  const location = useLocation();
  const backPath = licensesBackPathFromState(location.state);
  const backState =
    location.state != null &&
    typeof location.state == "object" &&
    !Array.isArray(location.state)
      ? location.state
      : null;
  const { data, isLoading } = useAppScopeValue(thirdPartyNoticesQueryAtom) as {
    data?: LicensesQueryData;
    isLoading?: boolean;
  };
  const backButton = (
    <Button
      color="ghost"
      size="toolbar"
      onClick={() => {
        navigate(backPath, {
          replace: true,
          state: backState,
        });
      }}
    >
      <AppIconPZ className="icon-xs" />
      <MemoizedFormattedMessage
        id="settings.openSourceLicenses.back"
        defaultMessage="Back"
        description="Button label to go back to the main settings page"
      />
    </Button>
  );
  const title = (
    <MemoizedFormattedMessage
      id="settings.openSourceLicenses.title"
      defaultMessage="Open source licenses"
      description="Title for the open source licenses settings page"
    />
  );
  const subtitle = (
    <MemoizedFormattedMessage
      id="settings.openSourceLicenses.subtitle"
      defaultMessage="Third-party notices for dependencies included in this app"
      description="Subtitle for the open source licenses settings page"
    />
  );
  const body = isLoading ? (
    <SettingsPanelLoading>
      <MemoizedFormattedMessage
        id="settings.openSourceLicenses.loading"
        defaultMessage="Loading…"
        description="Loading label while fetching third-party notices"
      />
    </SettingsPanelLoading>
  ) : (
    <SettingsGroup>
      <SettingsGroup.Content>
        <SettingsPanel>
          {data?.text ? (
            <pre className="bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary">
              {data.text}
            </pre>
          ) : (
            <div className="text-sm text-token-text-secondary">
              <MemoizedFormattedMessage
                id="settings.openSourceLicenses.missing"
                defaultMessage="No third-party notices were found."
                description="Message shown when the third-party notices file is missing"
              />
            </div>
          )}
        </SettingsPanel>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
  return (
    <SettingsSectionLayout
      backSlot={backButton}
      title={title}
      subtitle={subtitle}
    >
      {body}
    </SettingsSectionLayout>
  );
}
