// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 1/3 — lane A (project-row helpers)
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Qa_Init as EnsureConversationPageEsm_Qa_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { sidebarProjectMessages } from "../../chatgpt/sidebar-project-messages";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { useQueryClient } from "../../hooks/use-query-client";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconQI } from "../../icons/app-icon-qi";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureMemoryScopeHelpersInit } from "../../settings/ensure-memory-scope-helpers-init";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";

// Cross-part stubs.
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialGa: any = undefined;
const AppInitialJm: any = undefined;
const AppInitialKa: any = undefined;
const deleteProjectAndMaybeNavigate: any = undefined;
const AppInitialQm: any = undefined;
const IntlProvider: any = undefined;

function ProjectsIndexPageHelper1(zephyr) {
  let { className, ...rest } = zephyr;
  let acorn = IntlProvider(indigo, className);
  return (
    <ReadLoginRouteQuerySnapshot
      {...{
        ...rest,
        className: acorn,
        color: "ghost",
        size: "icon",
      }}
    />
  );
}

function ProjectsIndexPageHelper2(bloom) {
  let { modifiedAt } = bloom;
  if (modifiedAt == null) {
    let drift;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "projectsIndex.modified.never",
          defaultMessage: "-",
          description: "Projects index modified value when there are no tasks",
        }}
      />
    );
  }
  let coral = new Date(alpha(modifiedAt)).toISOString();
  return (
    <INLINE_MENTION_GROUP_CLASS
      {...{
        dateString: coral,
      }}
    />
  );
}

function alpha(eagle) {
  return eagle < 0xe8d4a51000 ? eagle * 1e3 : eagle;
}
var bravo,
  copper,
  delta,
  echo,
  falcon,
  gamma,
  harbor,
  indigo,
  jade = esmInit(() => {
    bravo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureImportSettingsCLInit();
    delta =
      "grid grid-cols-[minmax(0,1fr)_4rem_8rem] gap-x-4 max-[680px]:grid-cols-[minmax(0,1fr)_8rem]";
    echo =
      "relative before:pointer-events-none before:absolute before:-inset-x-3 before:rounded-lg before:bg-token-list-hover-background before:opacity-0 hover:before:opacity-100";
    falcon =
      "after:pointer-events-none after:absolute after:-top-px after:-inset-x-3 after:h-px after:bg-token-main-surface-primary after:opacity-0 hover:after:opacity-100";
    gamma =
      "border-b border-token-border [&:has(+_[data-project-row-wrapper]:has(>_[data-project-row]:hover))]:border-b-transparent";
    harbor = "relative z-10";
    indigo =
      "h-8 w-8 shrink-0 rounded-lg !p-1 text-token-text-secondary hover:text-token-foreground focus-visible:text-token-foreground data-[state=open]:text-token-foreground";
  });

function ProjectsIndexPageHelper4(frost) {
  let {
      isPinned,
      onNewLocalTask,
      onPinnedChange,
      project,
      projectCrudStatus,
      projectName,
    } = frost,
    glide = CodexPluginActionType(appScopeAtom),
    honey = useNavigate(),
    iris = useQueryClient(),
    [jewel, knoll] = $n.useState(false),
    [lunar, moss] = $n.useState(false),
    [north, orbit] = $n.useState(false),
    [pine, quest] = $n.useState(false),
    ridge = project.gizmo.current_user_permission?.can_delete,
    storm = isBareAllowedPermission(
      ridge,
      project.gizmo.gizmo_snorlax_type,
      projectCrudStatus,
    );
  let tide = storm,
    unity = tide
      ? undefined
      : AppInitialQm({
          action: "delete",
          projectCrudStatus,
        });
  let vale = unity,
    wave = () => {
      tide &&
        (quest(true),
        deleteProjectAndMaybeNavigate({
          scope: glide,
          activeProjectId: null,
          navigate: honey,
          projectId: project.gizmo.id,
          queryClient: iris,
        })
          .then(() => {
            moss(false);
          })
          .catch(kite)
          .finally(() => {
            quest(false);
          }));
    };
  let apex = wave,
    brook,
    cliff;
  brook = (
    <ProjectsIndexPageHelper1
      {...{
        children: (
          <AppIconQI
            {...{
              className: "icon-xs",
            }}
          />
        ),
      }}
    />
  );
  cliff = () => moss(true);
  let dusk = () => orbit(true);
  let elm = (
    <ProjectPinnedActionsMenu
      {...{
        align: "end",
        canDeleteProject: tide,
        deleteDisabledMessage: vale,
        isPinned,
        open: jewel,
        projectTitle: projectName,
        triggerButton: brook,
        onDelete: cliff,
        onNewLocalTask,
        onOpenChange: knoll,
        onPinnedChange,
        onSettings: dusk,
      }}
    />
  );
  let fern = (
    <EnsureConversationPageEsm_Qa_Init
      {...{
        isDeleting: pine,
        open: lunar,
        projectTitle: projectName,
        onConfirm: apex,
        onOpenChange: moss,
      }}
    />
  );
  let grove = north ? (
    <AppInitialGa
      project={project}
      projectCrudStatus={projectCrudStatus}
      onOpenChange={orbit}
    />
  ) : null;
  return (
    <>
      {elm}
      {fern}
      {grove}
    </>
  );
}

function kite() {}
var lemon,
  $n,
  marble,
  nickel = esmInit(() => {
    lemon = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    $n = commonJsInit(react(), 1);
    ensureComposerEsm_P5_Init();
    sidebarProjectMessages();
    sidebarProjectMessages();
    ensureMemoryScopeHelpersInit();
    AppInitialKa();
    ensureMemoryScopeHelpersInit();
    isRemoteControlConnectionFailedError();
    jade();
    ensureAppScopeInit();
    AppInitialJm();
  });

function xenon(leaf) {
  return (
    leaf instanceof Element &&
    leaf.closest("button,a,input,textarea,select,[role='button']") != null
  );
}
var yellow = esmInit(() => {});

function ProjectsIndexPageHelper27(helix) {
  let {
      actions,
      expandedContent,
      isExpanded = false,
      leading,
      name,
      nameTrailing,
      updated,
      onClick,
      onDoubleClick,
    } = helix,
    impeller = expandedContent !== undefined,
    journal = onClick != null || onDoubleClick != null,
    kingpin =
      impeller &&
      !isExpanded &&
      "[&:has(>_[data-project-row]:hover)]:border-b-transparent",
    land = IntlProvider(gamma, kingpin);
  let mesh = journal && "group/project-row cursor-interaction",
    neck = IntlProvider(
      delta,
      echo,
      falcon,
      "before:inset-y-0 min-h-[70px] items-center px-0 py-2 text-base",
      mesh,
    );
  let pad = IntlProvider(harbor, "flex min-w-0 items-center gap-3");
  let quillshaft = (
    <div className="flex size-7 shrink-0 items-center justify-center">
      {leading}
    </div>
  );
  let roller = (
    <span className="block min-w-0 truncate text-token-foreground">{name}</span>
  );
  let spindle = (
    <div className="flex min-w-0 items-center gap-3">
      {roller}
      {nameTrailing}
    </div>
  );
  let thrust = (
    <div className={pad}>
      {quillshaft}
      {spindle}
    </div>
  );
  let yoke = IntlProvider(
    harbor,
    "text-token-text-secondary max-[680px]:hidden",
  );
  let baffle = <div className={yoke}>{updated}</div>;
  let capstan = IntlProvider(harbor, "flex min-w-0 justify-end gap-1");
  let diaphragm = <div className={capstan}>{actions}</div>;
  let elbow = (
    <div
      data-project-row={true}
      className={neck}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {thrust}
      {baffle}
      {diaphragm}
    </div>
  );
  return (
    <div data-project-row-wrapper={true} className={land}>
      {elbow}
      {expandedContent}
    </div>
  );
}
