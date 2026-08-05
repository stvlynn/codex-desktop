// Restored from ref/webview/assets/skills-page-CKRhwfuo.js
// Wave FZ — full polished body from `skills-page-CKRhwfuo/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 71/86).
// AST split 1/2
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  Navigate,
  useLocation,
} from "../../boundaries/react-router-navigation";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL } from "../../docs/codex-doc-urls";
import { useDvtBindable } from "../../hooks/use-dvt-bindable";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { ensureAppIconKhInit as EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import {
  ensurePluginDetailPageInit,
  ManagePluginDetailPage,
  pluginDetailF,
  pluginDetailG,
  pluginDetailH,
  pluginDetailI,
  pluginDetailL,
  pluginDetailM as PluginDetailM,
  pluginDetailP,
} from "../../plugins/plugin-detail-page";
import {
  ensurePluginsPageInit,
  PluginsPage,
  pluginsPageA,
  PluginsPageC,
  pluginsPageI,
  PluginsPageL,
  pluginsPageO,
  PluginsPageR,
  pluginsPageS,
  pluginsPageU,
} from "../../plugins/plugins-page";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureSettingsHostDropdownInit,
  SettingsHostDropdown,
} from "../../settings/settings-host-dropdown";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ClassNameStyleSurface } from "../../ui/class-name-style-surface";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import {
  ensureUseElementInViewInit,
  useElementInView,
} from "../../ui/use-element-in-view";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identityValue } from "../../utils/identity-value";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { formatSkillScopeLabel } from "../skill-scope-labels";
import {
  ensureSkillsPageHelpersInit,
  usePluginsFeatureEnabled,
} from "../skills-page-helpers";
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:filterConnectedRemoteConnections@hosts/use-selected-host.ts) */
const AppInitialBB: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveSkillRepoLabel@skills/skill-scope-labels.ts) */
const AppInitialHj: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/dismiss.ts) */
const Dismiss: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/browser3.tsx) */
const Browser3: any = undefined;
/** Wave FZ unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const remoteConnectionStatusAtom: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:skillsPageCompanionAtom@skills/skills-page-helpers.tsx) */
const AppInitialNtt: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceOhInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureSkillsPageHelpersInit@skills/skills-page-helpers.tsx) */
const AppInitialTm: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:resolveSelectedHostId@hosts/use-selected-host.ts) */
const AppInitialTO: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:skillScopeMessages@skills/skill-scope-messages.ts) */
const AppInitialWj: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-wm.tsx) */
const DeferredWm: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function skillsPageN() {
  let gamma = useLocation(),
    harbor = alpha(),
    indigo = ManagePluginDetailPage(gamma.search);
  let jade = indigo;
  if (harbor) {
    let kite;
    return <PluginsPage {...{}} />;
  }
  return (
    <SkillsPageHelper2
      {...{
        initialSearchQuery: jade,
      }}
    />
  );
}
export function skillsPageT() {
  let lemon = alpha();
  return lemon ? (
    <PluginsPage
      {...{
        mode: "manage",
      }}
    />
  ) : (
    <Navigate
      {...{
        replace: true,
        to: "/skills",
      }}
    />
  );
}
function alpha() {
  let marble = useLocation(),
    nickel = ManagePluginDetailPage(marble.state).initialHostId ?? "local";
  let onyx;
  return (
    (onyx = {
      hostId: nickel,
    }),
    usePluginsFeatureEnabled(onyx)
  );
}
function SkillsPageHelper2(pearl) {
  let { initialSearchQuery = "" } = pearl,
    quartz = CodexPluginActionType(appScopeAtom),
    river = useIntl(),
    { data } = reuseArrayIfShallowEqual(),
    slate = composerNavigation(),
    timber = AppInitialBB(CodexPluginActionResult(remoteConnectionStatusAtom)),
    [umbra, violet] = echo.useState(LOCAL_HOST_ID),
    willow = AppInitialTO(umbra, timber);
  let xenon = willow,
    [yellow, zinc] = echo.useState(null),
    [amber, basalt] = echo.useState(null),
    cedar = {
      container: yellow,
      target: amber,
    };
  let daisy = useElementInView(cedar),
    [ember, flint] = echo.useState(initialSearchQuery),
    [garnet, _e] = echo.useState(false),
    hazel = useDvtBindable(pluginsPageA),
    ivory = identityValue(pluginsPageA),
    {
      forceReloadSkills,
      installedSkillMatchKeys,
      isFetching,
      isLoading,
      markSkillsUpdated,
      standaloneInstalledSkills,
      workspaceRoots,
    } = pluginDetailF(xenon),
    {
      canInstallRecommendedSkills,
      defaultRecommendedRepoRoot,
      skillCreatorPath,
    } = pluginDetailL(xenon),
    {
      errorMessage,
      isLoading: _isLoading,
      refresh,
      repoRoot,
      skills,
    } = pluginDetailI(defaultRecommendedRepoRoot, xenon),
    jasper = () => {
      _e(true);
    };
  let kelp = {
    forceReloadSkills,
    hostId: xenon,
    onInstalled: jasper,
  };
  let { installRecommendedSkill, installingSkillId } = pluginDetailP(kelp),
    lotus = formatSkillScopeLabel({
      scope: "repo",
      intl: river,
    });
  let mint = lotus,
    nova = data?.name ?? undefined,
    olive = formatSkillScopeLabel({
      scope: "admin",
      intl: river,
      adminLabel: nova,
    });
  let prism = olive,
    quill = (unity) => {
      let { scope, skillPath } = unity;
      return formatSkillScopeLabel({
        scope,
        intl: river,
        repoLabel: AppInitialHj({
          skillPath,
          roots: workspaceRoots,
          fallbackLabel: mint,
        }),
        adminLabel: prism,
      });
    };
  let reef = quill,
    sage;
  {
    let vale = ember.trim().toLowerCase();
    sage = standaloneInstalledSkills.filter((item) => {
      let { skill } = item;
      if (vale.length === 0) return true;
      let wave = getPluginShortDescription(skill).toLowerCase(),
        apex = getPluginDisplayName(skill).toLowerCase();
      return (
        skill.name.toLowerCase().includes(vale) ||
        apex.includes(vale) ||
        wave.includes(vale)
      );
    });
  }
  let topaz = sage,
    _skillsPageN = async () => {
      markSkillsUpdated();
      await refresh();
      _e(false);
    };
  let _skillsPageT = _skillsPageN,
    ultra;
  ultra = [];
  echo.useEffect(bravo, ultra);
  let vapor = daisy ? null : (
    <MemoizedFormattedMessage
      {...{
        id: "skills.page.heading",
        defaultMessage: "Skills",
        description: "Header title for the skills page",
      }}
    />
  );
  let wheat =
    timber != null && timber.length > 0 ? (
      <SettingsHostDropdown
        {...{
          connectedRemoteConnections: timber,
          onSelectHost: violet,
          selectedHostId: xenon,
        }}
      />
    ) : null;
  let yarn = garnet ? "secondary" : "ghost",
    _skillsPageR = () => {
      _skillsPageT();
    };
  let at = isLoading || isFetching,
    zephyr = (
      <AppIconAlt
        {...{
          className: "icon-xs",
        }}
      />
    );
  let acorn = (
    <span className="hidden lg:inline">
      {garnet ? (
        <MemoizedFormattedMessage
          {...{
            id: "skills.page.refreshSkillsToUseNew",
            defaultMessage: "Refresh to use new skill(s)",
            description:
              "Button label shown when newly installed skills require a refresh before they can be used in the composer",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "skills.page.refreshSkills",
            defaultMessage: "Refresh",
            description: "Button label for reloading skills list",
          }}
        />
      )}
    </span>
  );
  let bloom = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: yarn,
        size: "toolbar",
        onClick: _skillsPageR,
        disabled: at,
        children: [zephyr, acorn],
      }}
    />
  );
  let coral = river.formatMessage({
    id: "skills.page.search.label",
    defaultMessage: "Search skills",
    description: "Label for the skills page search input",
  });
  let drift = river.formatMessage({
    id: "skills.page.search",
    defaultMessage: "Search skills",
    description: "Placeholder for the skills page search input",
  });
  let eagle = (
    <div className="hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none">
      {
        <DeferredWm
          {...{
            id: "skills-search",
            label: coral,
            placeholder: drift,
            searchQuery: ember,
            onSearchQueryChange: flint,
          }}
        />
      }
    </div>
  );
  let frost = () => {
    if (!skillCreatorPath) return;
    logProductEvent(quartz, AppInitialNtt, {});
    let brook = pluginsPageO({
      creatorPath: skillCreatorPath,
      isFirstOpen: !hazel,
      kind: "skill",
    });
    hazel || ivory(true);
    slate({
      prefillPrompt: brook,
      startInSidebar: true,
    });
  };
  let glide = !skillCreatorPath,
    honey,
    iris;
  honey = (
    <EnsureComposerEsm_Wlt_Init
      {...{
        className: "icon-xs",
      }}
    />
  );
  iris = (
    <MemoizedFormattedMessage
      {...{
        id: "skills.page.createSkill",
        defaultMessage: "New skill",
        description: "Button label for creating a new skill",
      }}
    />
  );
  let jewel = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "primary",
        size: "toolbar",
        onClick: frost,
        disabled: glide,
        children: [honey, iris],
      }}
    />
  );
  let knoll = (
    <div className="flex flex-nowrap items-center gap-1.5">
      {wheat}
      {bloom}
      {eagle}
      {jewel}
    </div>
  );
  let lunar = (
    <EnsureAppIconKhInit
      {...{
        start: vapor,
        trailing: knoll,
      }}
    />
  );
  let moss = (cliff) => {
    zinc(cliff);
  };
  let north = (dusk) => {
    basalt(dusk);
  };
  let orbit = (
    <div className="heading-xl font-normal text-token-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "skills.page.heading",
            defaultMessage: "Skills",
            description: "Header title for the skills page",
          }}
        />
      }
    </div>
  );
  let pine = (
    <div className="flex items-end justify-between gap-4">
      <div className="flex flex-col gap-1" ref={north}>
        {orbit}
        <div className="text-lg font-normal text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "skills.page.subheading",
                defaultMessage:
                  "Add reusable workflows with Skills. <link>Learn more</link>",
                description: "Subheading shown above the skills sections",
                values: {
                  link: $e,
                },
              }}
            />
          }
        </div>
      </div>
    </div>
  );
  let quest = (
    <MemoizedFormattedMessage
      {...{
        id: "skills.section.installed",
        defaultMessage: "Installed",
        description: "Heading for the installed skills section",
      }}
    />
  );
  let ridge = (
    <SkillsPageHelper5
      {...{
        title: quest,
        children: (
          <SkillsPageHelper6
            {...{
              hostId: xenon,
              isLoading,
              uniqueSkillCount: standaloneInstalledSkills.length,
              filteredSkills: topaz,
              getScopeBadgeLabel: reef,
              onSkillsUpdated: markSkillsUpdated,
            }}
          />
        ),
      }}
    />
  );
  let storm = (
    <MemoizedFormattedMessage
      {...{
        id: "skills.section.recommended",
        defaultMessage: "Recommended",
        description: "Heading for the recommended skills section",
      }}
    />
  );
  let tide = (
    <SkillsPageHelper5
      {...{
        title: storm,
        children: (
          <SkillsPageHelper8
            {...{
              hostId: xenon,
              isLoading: _isLoading,
              errorMessage,
              skills,
              searchQuery: ember,
              canInstall: canInstallRecommendedSkills,
              repoRoot,
              onInstall: installRecommendedSkill,
              installedSkillMatchKeys,
              installingSkillId,
            }}
          />
        ),
      }}
    />
  );
  let $ = (
    <div className="flex-1 overflow-y-auto p-panel" ref={moss}>
      {
        <PluginsPageC
          {...{
            className:
              "mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8",
            children: [
              pine,
              <div className="flex min-h-0 w-full flex-1">
                <div className="flex min-h-0 flex-1 flex-col gap-9 pb-10">
                  {ridge}
                  {tide}
                </div>
              </div>,
            ],
          }}
        />
      }
    </div>
  );
  return (
    <div className="mr-4 flex h-full flex-col text-base">
      {lunar}
      {$}
    </div>
  );
}
function $e(elm) {
  return (
    <a
      href={DEVELOPERS_OPENAI_COM_CODEX_SKILLS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-token-link"
    >
      {elm}
    </a>
  );
}
function bravo() {
  return (
    (document.documentElement.dataset.hideHeaderDivider = "true"),
    copper
  );
}
function copper() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function SkillsPageHelper5(fern) {
  let { title, children } = fern,
    grove = (
      <div className="pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75">
        {title}
      </div>
    );
  return (
    <section className="flex flex-col gap-4">
      {grove}
      {children}
    </section>
  );
}
function SkillsPageHelper6(hill) {
  let {
    hostId,
    isLoading,
    uniqueSkillCount,
    filteredSkills,
    getScopeBadgeLabel,
    onSkillsUpdated,
  } = hill;
  if (isLoading) {
    let juniper;
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        <AppInitialNi>
          {
            <MemoizedFormattedMessage
              {...{
                id: "skills.page.loading",
                defaultMessage: "Loading skills…",
                description: "Loading label on the skills page",
              }}
            />
          }
        </AppInitialNi>
      </div>
    );
  }
  if (uniqueSkillCount === 0) {
    let lagoon;
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {
          <Dismiss
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "skills.page.empty",
                    defaultMessage: "No skills found",
                    description: "Empty state on the skills page",
                  }}
                />
              ),
            }}
          />
        }
      </div>
    );
  }
  if (filteredSkills.length === 0) {
    let meadow;
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {
          <Dismiss
            {...{
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "skills.page.filteredEmpty",
                    defaultMessage: "No skills match your filters",
                    description: "Empty state when filters hide all skills",
                  }}
                />
              ),
              description: (
                <MemoizedFormattedMessage
                  {...{
                    id: "skills.page.filteredEmptyDescription",
                    defaultMessage:
                      "Try adjusting your search or scope filters",
                    description: "Description for filtered skills empty state",
                  }}
                />
              ),
            }}
          />
        }
      </div>
    );
  }
  let isle;
  {
    let nest;
    nest = (oak) => {
      let { skill } = oak,
        petal =
          skill.scope === "repo"
            ? [
                <SkillsPageHelper7
                  key={`${skill.path}-repo`}
                  {...{
                    label: getScopeBadgeLabel({
                      scope: "repo",
                      skillPath: skill.path,
                    }),
                  }}
                />,
              ]
            : [];
      return (
        <PluginDetailM
          key={skill.path}
          {...{
            skill,
            displayName: getPluginDisplayName(skill),
            hostId,
            scopeBadges: petal,
            onSkillsUpdated,
          }}
        />
      );
    };
    isle = filteredSkills.map(nest);
  }
  return (
    <PluginsPageL
      {...{
        children: isle,
      }}
    />
  );
}
function SkillsPageHelper7(quiet) {
  let { label } = quiet;
  return <span className="text-token-description-foreground">{label}</span>;
}
function SkillsPageHelper8(rain) {
  let {
      hostId,
      isLoading,
      errorMessage,
      skills,
      searchQuery,
      canInstall,
      repoRoot,
      onInstall,
      installedSkillMatchKeys,
      installingSkillId,
    } = rain,
    seed,
    trail,
    urn;
  urn = Symbol.for("react.early_return_sentinel");
  bb0: {
    let vine = (canyon) =>
      !pluginDetailG({
        installedSkillMatchKeys,
        skill: canyon,
      });
    let wind = skills.filter(vine),
      yarrow = searchQuery.trim().toLowerCase(),
      azure = wind.filter((item) =>
        yarrow.length === 0
          ? true
          : [item.name, item.description, item.shortDescription ?? ""]
              .join(" ")
              .toLowerCase()
              .includes(yarrow),
      );
    if (isLoading) {
      let dew;
      dew = (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <AppInitialNi>
            {
              <MemoizedFormattedMessage
                {...{
                  id: "skills.page.loading",
                  defaultMessage: "Loading skills…",
                  description: "Loading label on the skills page",
                }}
              />
            }
          </AppInitialNi>
        </div>
      );
      urn = dew;
      break bb0;
    }
    if (errorMessage) {
      let ever = (
        <MemoizedFormattedMessage
          {...{
            id: "skills.recommended.error",
            defaultMessage: "Unable to load recommended skills",
            description: "Error title when recommended skills fail to load",
          }}
        />
      );
      let field;
      field = (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          {
            <Dismiss
              {...{
                title: ever,
                description: errorMessage,
              }}
            />
          }
        </div>
      );
      urn = field;
      break bb0;
    }
    if (wind.length === 0) {
      let grain;
      grain = (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          {
            <Dismiss
              {...{
                title: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "skills.page.empty",
                      defaultMessage: "No skills found",
                      description: "Empty state on the skills page",
                    }}
                  />
                ),
              }}
            />
          }
        </div>
      );
      urn = grain;
      break bb0;
    }
    if (azure.length === 0) {
      let haven;
      haven = (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          {
            <Dismiss
              {...{
                title: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "skills.page.filteredEmpty",
                      defaultMessage: "No skills match your filters",
                      description: "Empty state when filters hide all skills",
                    }}
                  />
                ),
                description: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "skills.page.filteredEmptyDescription",
                      defaultMessage:
                        "Try adjusting your search or scope filters",
                      description:
                        "Description for filtered skills empty state",
                    }}
                  />
                ),
              }}
            />
          }
        </div>
      );
      urn = haven;
      break bb0;
    }
    seed = PluginsPageL;
    let birch;
    birch = (ink) => {
      let jadeite = pluginDetailG({
          installedSkillMatchKeys,
          skill: ink,
        }),
        kernel = installingSkillId === ink.id;
      return (
        <PluginsPageR
          key={ink.id}
          {...{
            skill: ink,
            canInstall,
            hostId,
            isInstalled: jadeite,
            isInstalling: kernel,
            repoRoot,
            onInstall,
          }}
        />
      );
    };
    trail = azure.map(birch);
  }
  if (urn !== Symbol.for("react.early_return_sentinel")) return urn;
  return (
    <PluginsPageL
      {...{
        children: trail,
      }}
    />
  );
}
var delta, echo, falcon;
