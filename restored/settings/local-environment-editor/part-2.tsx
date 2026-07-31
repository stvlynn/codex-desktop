// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { X_CODEX_BINARY_RESPONSE_HEADER } from "../../config/x-codex-binary-response-header";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { appServices } from "../../desktop/desktop-services";
import { CODEX_WORKTREE_PATH_ENV_KEY, LOCAL_ENVIRONMENT_CONFIG_PATH_KEY } from "../../env/codex-path-env-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconMA } from "../../icons/app-icon-ma";
import { ensureFlaskIconInit, FlaskIcon } from "../../icons/flask-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensurePlayOutlineIconInit, PlayOutlineIcon } from "../../icons/play-outline-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { scrollMatchIntoView } from "../../thread/thread-find-scroll";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureLocalEnvironmentWorkflowMessagesInit, localEnvironmentWorkflowMessages } from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Cross-part stubs.
const AppInitialF3: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialL: any = undefined;
const AppInitialP3: any = undefined;
const LocalEnvironmentEditorHelper10: any = undefined;
const LocalEnvironmentEditorHelper9: any = undefined;
const LocalEnvironmentEditorR: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _t: any = undefined;
const deferredUiU: any = undefined;
const echo: any = undefined;
const ensureSelectWorkspaceIXInit: any = undefined;
const ensureSelectWorkspacePXInit: any = undefined;
const ensureUseGitRepoLiveQueryInit: any = undefined;
const localEnvironmentEditorC: any = undefined;
const localEnvironmentEditorF: any = undefined;
const localEnvironmentEditorI: any = undefined;
const localEnvironmentEditorL: any = undefined;
const localEnvironmentEditorP: any = undefined;
const localEnvironmentEditorS: any = undefined;
const localEnvironmentEditorU: any = undefined;
const pearl: any = undefined;
const useLocalEnvironmentEditorState: any = undefined;
const useLocalEnvironmentEditorStateStub: any = undefined;
const violet: any = undefined;

export function localEnvironmentEditorT(eddy: unknown) {
  let {
      hostId,
      workspaceRoot,
      workspaceGroup,
      configPath,
      expectedRevision,
      initialEnvironment,
      hasParseError,
      hasReadError,
      onDirtyChange,
      onDiscardConflict: fjord,
      onRetryRead,
      onSavingChange,
      onSaved
    } = eddy,
    glen = CodexPluginActionType(appScopeAtom),
    hearth = useIntl(),
    inlet = () => ({
      configPath,
      draft: localEnvironmentEditorF(initialEnvironment == null ? {
        defaultName: AppInitialL(workspaceRoot) ?? hearth.formatMessage(localEnvironmentEditorU.defaultEnvironmentName)
      } : {
        environment: initialEnvironment
      }),
      hasParseError,
      revision: expectedRevision,
      version: initialEnvironment?.version ?? 1
    });
  let [jetty] = hazel.useState(inlet),
    {
      data,
      error,
      refetch
    } = ensureSelectWorkspaceIXInit(hostId),
    knob = data?.codexHome,
    ledge = workspaceGroup?.isCodexWorktree === true || knob != null && pathContainsWorktreesDir(workspaceRoot, knob);
  let mire = ledge,
    nook = ensureSteeringUserMessageClusterInit(hostId),
    oxbow = CodexPluginActionResult(getHostConfigId),
    pond = {
      cwd: workspaceRoot,
      hostConfig: nook
    };
  let quarry = {
    retainRepoWatch: oxbow
  };
  let {
      data: _data,
      error: _error,
      refetch: _refetch
    } = AppInitialF3(pond, "local_environment_editor", quarry),
    rapids = {
      hostId,
      workspaceRoot
    };
  let {
      updateSelection
    } = dataFileBlameAuthor(rapids),
    spur = {
      onSuccess: (iron, joint) => {
        !iron.success || !_data || scrollMatchIntoView(glen, _data, nook, joint.value, "local_environment_editor");
      }
    };
  let _e = useLocalEnvironmentEditorStateStub("set-config-value", nook, spur),
    [tor, updraft] = hazel.useState(jetty.revision == null),
    verge = tor && (workspaceGroup == null && error != null || mire && _error != null),
    weir = !tor || (workspaceGroup != null || knob != null) && (!mire || _data?.root != null),
    yard = keystone => localEnvironmentEditorC({
      configPath: jetty.configPath,
      draft: keystone,
      expectedRevision: jetty.revision,
      hostId,
      queryClient: glen.queryClient,
      selectEnvironment: tor ? latch => pearl({
        codexWorktree: mire,
        configPath: latch,
        gitRoot: _data?.root ?? null,
        selectForWorkspace: updateSelection,
        selectForWorktree: async (motor, nut) => (await _e.mutateAsync({
          root: motor,
          key: LOCAL_ENVIRONMENT_CONFIG_PATH_KEY,
          operationSource: "local_environment_editor",
          value: nut,
          scope: "worktree"
        }).catch(cedar))?.success === true
      }) : undefined,
      version: jetty.version,
      workspaceRoot
    });
  let anchor, bolt;
  anchor = () => {
    onSavingChange?.(true);
  };
  bolt = () => {
    onSavingChange?.(false);
  };
  let cog = {
    mutationFn: yard,
    networkMode: "always",
    onMutate: anchor,
    onSettled: bolt
  };
  let disc = noop(cog),
    Edge = useTanstackForm({
      defaultValues: jetty.draft,
      onSubmit: piston => {
        let {
          value
        } = piston;
        if (disc.data?.type === "conflict") {
          fjord();
          return;
        }
        daisy({
          isDirty: Edge.state.isDirty || jetty.revision == null || jetty.hasParseError,
          isSelectionReady: weir,
          readError: hasReadError,
          selectionError: verge,
          isSaving: disc.isPending,
          validation: echo(value.name, value.actions)
        }) ?? disc.mutate(value, {
          onSuccess: rivet => {
            if (rivet.type !== "invalid") {
              if (rivet.type === "conflict") {
                glen.get(toastAtom).danger(hearth.formatMessage({
                  id: "settings.localEnvironments.save.conflict",
                  defaultMessage: "This environment changed on disk. Discard your edits before saving again",
                  description: "Error toast shown when an environment changed after the editor loaded it"
                }));
                return;
              }
              tor && updraft(false);
              rivet.type === "selection-failed" ? glen.get(toastAtom).danger(hearth.formatMessage({
                id: "settings.localEnvironments.save.selectionError",
                defaultMessage: "Saved the environment file, but could not select it",
                description: "Error toast shown when a new local environment cannot be selected after saving"
              })) : glen.get(toastAtom).success(hearth.formatMessage({
                id: "settings.localEnvironments.save.success",
                defaultMessage: "Saved local environment",
                description: "Toast shown when local environment is saved"
              }));
              onSaved(rivet.configPath);
            }
          }
        });
      }
    }),
    forge = event => {
      event.preventDefault();
      Edge.handleSubmit();
    };
  let gear = screw => {
    let {
        values,
        isDirty
      } = screw,
      torque = engine => {
        onDirtyChange?.(!garnet.default(engine, jetty.draft));
      },
      valve = echo(values.name, values.actions),
      axle = daisy({
        isDirty: isDirty || jetty.revision == null || jetty.hasParseError,
        isSelectionReady: weir,
        readError: hasReadError,
        selectionError: verge,
        isSaving: disc.isPending,
        validation: valve
      }),
      bracket = disc.data?.type === "conflict",
      clamp = bracket ? null : ember(axle),
      drill = (frame, gasket, handle) => {
        if (gasket === "default") {
          let lever = frame === "setup" ? "setupScript" : "cleanupScript",
            mount = {
              ...values,
              [lever]: handle
            };
          Edge.setFieldValue(lever, handle);
          torque(mount);
          return;
        }
        let insert = frame === "setup" ? "setupPlatformScripts" : "cleanupPlatformScripts",
          jacket = {
            ...values[insert],
            [gasket]: handle
          },
          knurl = {
            ...values,
            [insert]: jacket
          };
        Edge.setFieldValue(insert, jacket);
        torque(knurl);
      };
    return <fieldset className="contents" aria-busy={disc.isPending || undefined} disabled={disc.isPending}>
        {<UseChromeAndCodeThemeSync {...{
        children: <UseChromeAndCodeThemeSync.Content {...{
          className: "gap-[var(--padding-panel)]",
          children: [jetty.hasParseError ? <div className="text-sm text-token-error-foreground" role="alert">
                          {<MemoizedFormattedMessage {...{
              ...localEnvironmentWorkflowMessages.parseError
            }} />}
                        </div> : null, hasReadError ? <div className="flex items-center justify-between gap-3 text-sm text-token-error-foreground" role="alert">
                          <span>
                            {<MemoizedFormattedMessage {...{
                ...localEnvironmentWorkflowMessages.readError
              }} />}
                          </span>
                          {<ReadLoginRouteQuerySnapshot {...{
              color: "secondary",
              size: "toolbar",
              type: "button",
              onClick: onRetryRead,
              children: <MemoizedFormattedMessage {...{
                ...localEnvironmentWorkflowMessages.retry
              }} />
            }} />}
                        </div> : null, verge ? <ParseUrlOrFallback {...{
            children: <div className="flex items-center justify-between gap-3 p-3">
                                <div className="text-sm text-token-error-foreground">
                                  {<MemoizedFormattedMessage {...{
                  id: "settings.localEnvironments.projectInfo.error",
                  defaultMessage: "Could not load project information",
                  description: "Error shown when project information required to save an environment cannot be loaded"
                }} />}
                                </div>
                                {<ReadLoginRouteQuerySnapshot {...{
                color: "secondary",
                size: "toolbar",
                type: "button",
                onClick: () => {
                  Promise.all([refetch(), _refetch()]);
                },
                children: <MemoizedFormattedMessage {...{
                  id: "settings.localEnvironments.projectInfo.retry",
                  defaultMessage: "Retry",
                  description: "Button label to retry loading project information"
                }} />
              }} />}
                              </div>
          }} /> : null, <div className="flex flex-col gap-1">
                        <label htmlFor="local-environment-name" className="text-sm font-medium text-token-text-primary">
                          {<MemoizedFormattedMessage {...{
                ...localEnvironmentEditorU.environmentName
              }} />}
                        </label>
                        <input id="local-environment-name" className="focus-visible:ring-token-focus w-full max-w-72 rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2" value={values.name} aria-describedby={valve.missingName ? ivory : undefined} aria-invalid={valve.missingName} onChange={event => {
              let nozzle = event.target.value;
              Edge.setFieldValue("name", nozzle);
              torque({
                ...values,
                name: nozzle
              });
            }} />
                        {valve.missingName ? <div id={ivory} className="text-xs text-token-error-foreground">
                            {<MemoizedFormattedMessage {...{
                id: "settings.localEnvironments.editor.nameRequired",
                defaultMessage: "Enter an environment name",
                description: "Inline validation for a missing local environment name"
              }} />}
                          </div> : null}
                      </div>]
        }} />
      }} />}
        {<LocalEnvironmentEditorHelper10 {...{
        actions: <LocalEnvironmentEditorR {...{}} />,
        draft: values,
        scriptType: "setup",
        onScriptChange: drill
      }} />}
        {<LocalEnvironmentEditorHelper10 {...{
        draft: values,
        scriptType: "cleanup",
        onScriptChange: drill
      }} />}
        {<LocalEnvironmentEditorHelper9 {...{
        actions: values.actions,
        dropdownDisabled: disc.isPending,
        incompleteActionIds: valve.incompleteActionIds,
        onChange: platen => {
          Edge.setFieldValue("actions", platen);
          torque({
            ...values,
            actions: platen
          });
        }
      }} />}
        {null}
        {bracket && <div className="text-sm text-token-error-foreground" role="alert">
            {<MemoizedFormattedMessage {...{
          id: "settings.localEnvironments.preview.saveConflict",
          defaultMessage: "This environment changed on disk. Continuing will discard your unsaved edits",
          description: "Warning shown when resolving an environment save conflict will discard the current draft"
        }} />}
          </div>}
        {!bracket && disc.error != null && <div className="text-sm text-token-error-foreground" role="alert">
              {<MemoizedFormattedMessage {...{
          id: "settings.localEnvironments.preview.saveFailure",
          defaultMessage: "Could not save the environment. Try again",
          description: "Error message when saving a local environment file fails with guidance to retry"
        }} />}
            </div>}
        <div className="flex justify-end">
          {<OptionalTooltip {...{
          disabled: clamp == null,
          tooltipContent: clamp,
          children: <span className="inline-flex">
                    {<ReadLoginRouteQuerySnapshot {...{
              "aria-busy": disc.isPending || undefined,
              color: "primary",
              size: "toolbar",
              type: bracket ? "button" : "submit",
              disabled: !bracket && axle != null,
              loading: disc.isPending,
              onClick: bracket ? () => {
                fjord();
              } : undefined,
              children: [bracket && <MemoizedFormattedMessage {...{
                id: "settings.localEnvironments.preview.discardAndReload",
                defaultMessage: "Discard edits",
                description: "Button label to discard unsaved environment edits after a save conflict"
              }} />, !bracket && disc.error != null && <MemoizedFormattedMessage {...{
                id: "settings.localEnvironments.preview.retrySave",
                defaultMessage: "Retry save",
                description: "Button label to retry saving a local environment file"
              }} />, !bracket && disc.error == null && <MemoizedFormattedMessage {...{
                id: "settings.localEnvironments.preview.save",
                defaultMessage: "Save",
                description: "Save button label for local environment file"
              }} />]
            }} />}
                  </span>
        }} />}
        </div>
      </fieldset>;
  };
  let hinge = <Edge.Subscribe {...{
    selector: basalt,
    children: gear
  }} />;
  return <form className="flex flex-col gap-[var(--padding-panel)]" onSubmit={forge}>
      {hinge}
    </form>;
}
function basalt(ratchet) {
  return {
    values: ratchet.values,
    isDirty: ratchet.isDirty
  };
}
function cedar() {
  return null;
}
function daisy({
  isDirty,
  isSelectionReady,
  readError,
  selectionError,
  isSaving,
  validation
}) {
  return isSaving ? "saving" : isSelectionReady ? readError ? "read-error" : validation.missingName ? "missing-name" : validation.incompleteActionIds.length > 0 ? "incomplete-action" : isDirty ? null : "no-changes" : selectionError ? "project-error" : "loading-project";
}
function ember(shim) {
  if (shim == null) return null;
  switch (shim) {
    case "incomplete-action":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.incompleteAction",
        defaultMessage: "Add both a name and command for each action",
        description: "Tooltip shown when save is disabled because an action is incomplete"
      }} />;
    case "loading-project":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.loadingProject",
        defaultMessage: "Loading project information",
        description: "Tooltip shown when save is disabled while project information loads"
      }} />;
    case "missing-name":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.name",
        defaultMessage: "Add an environment name to save",
        description: "Tooltip shown when save is disabled because the name is missing"
      }} />;
    case "no-changes":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.noChanges",
        defaultMessage: "No changes to save",
        description: "Tooltip shown when save is disabled because there are no changes"
      }} />;
    case "project-error":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.projectError",
        defaultMessage: "Retry loading project information to save",
        description: "Tooltip shown when save is disabled because project information failed to load"
      }} />;
    case "read-error":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.readError",
        defaultMessage: "Retry loading the environment before saving",
        description: "Tooltip shown when save is disabled because the environment could not be read"
      }} />;
    case "saving":
      return <MemoizedFormattedMessage {...{
        id: "settings.localEnvironments.save.disabled.saving",
        defaultMessage: "Saving…",
        description: "Tooltip shown when save is disabled because a save is already in progress"
      }} />;
  }
}
var flint, garnet, hazel, $, ivory;
export const localEnvironmentEditorN = esmInit(() => {
  flint = reactCompilerRuntime();
  ensureTanstackReactFormApiInit();
  serializeCharacterReferenceNode();
  garnet = commonJsInit(clearActiveOverlayAfterNavigate(), 1);
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  hazel = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  clampZoomPercent();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  ensureUseGitRepoLiveQueryInit();
  AppInitialP3();
  ensureSelectWorkspacePXInit();
  AppIconMA();
  violet();
  localEnvironmentEditorP();
  localEnvironmentEditorL();
  localEnvironmentEditorS();
  ensureLocalEnvironmentWorkflowMessagesInit();
  useLocalEnvironmentEditorState();
  ensureAppScopeInit();
  codexCommandTheme();
  AppInitialFC();
  ensureAppShellAtomsInit();
  deferredUiU();
  _t();
  localEnvironmentEditorI();
  ivory = "local-environment-name-error";
});
