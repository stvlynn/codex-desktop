// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/17
/* split-lane-import-depth:1 */
// AST split 4/4

import {
  AppInitialBb,
  AppInitialF,
  AppInitialHb,
  AppInitialPp,
  AppInitialXb,
  IntlProvider,
  meadow3,
  nest3,
  newChatSuggestionSourceDebugStateLState,
  oak3,
  petal3,
} from "./part-13-a";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Sp_Init } from "../../composer/composer-esm-inits";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";

function Dusk3(ridge23) {
  AppInitialF(ridge23);
  AppInitialBb(ridge23);
}

function Fern3(storm23) {
  let { source, onSourceChange, roles } = storm23,
    tide23 = CodexPluginActionType(appScopeAtom),
    unity23 = CodexPluginActionResult(AppInitialXb),
    vale23 = unity23?.mode ?? "auto",
    wave23 = unity23?.mode === "enabled" ? unity23.accountState : null,
    apex23;
  {
    let brook23 = Isle3(wave23),
      cliff23 = petal3.find((item) => item.value === brook23) ?? petal3[0],
      dusk23 = wave23?.items.some(Grove3);
    let elm23 = dusk23 === true,
      fern23 = (
        <span className="text-xs text-token-description-foreground">
          {"New Chat suggestion source:"}
        </span>
      );
    let grove23 = meadow3.map((item) => (
      <button
        key={item.label}
        type="button"
        aria-pressed={source === item.value}
        className={IntlProvider(
          "cursor-interaction rounded border px-3 py-1 text-xs",
          source === item.value
            ? "border-token-focus-border text-token-foreground"
            : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
        )}
        onClick={() => {
          onSourceChange(item.value);
        }}
      >
        {item.label}
      </button>
    ));
    let hill23 = (
      <span
        aria-hidden={true}
        className="text-xs text-token-description-foreground"
      >
        {"|"}
      </span>
    );
    let isle23 = (
      <button
        type="button"
        className="cursor-interaction rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5"
        onClick={() => {
          newChatSuggestionSourceDebugStateLState(tide23);
        }}
      >
        {"Reset"}
      </button>
    );
    let juniper23 = (
      <div
        aria-label="New Chat suggestion source"
        className="flex flex-wrap items-center gap-2"
        role="group"
      >
        {fern23}
        {grove23}
        {hill23}
        {isle23}
      </div>
    );
    let lagoon23 = (
      <span className="text-xs text-token-description-foreground">
        {"Onboarding checklist:"}
      </span>
    );
    let meadow23 = nest3.map((item) => (
      <button
        key={item.value}
        type="button"
        aria-pressed={vale23 === item.value}
        className={IntlProvider(
          "cursor-interaction rounded border px-3 py-1 text-xs",
          vale23 === item.value
            ? "border-token-focus-border text-token-foreground"
            : "border-token-border text-token-description-foreground hover:bg-token-foreground/5",
        )}
        onClick={() => {
          let quiet23;
          bb54: switch (item.value) {
            case "auto":
              quiet23 = null;
              break bb54;
            case "disabled":
              quiet23 = {
                mode: "disabled",
              };
              break bb54;
            case "enabled":
              quiet23 = Hill3({
                completedConversationalOnboardingTaskId: null,
                hasCompletedClaudeImport: false,
                roles,
              });
          }
          tide23.set(AppInitialXb, quiet23);
        }}
      >
        {item.label}
      </button>
    ));
    let nest23 = (
      <span
        aria-hidden={true}
        className="text-xs text-token-description-foreground"
      >
        {"|"}
      </span>
    );
    let oak23 = (
      <button
        type="button"
        className="cursor-interaction rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5"
        onClick={() => {
          Dusk3(tide23);
          unity23?.mode === "enabled" &&
            tide23.set(
              AppInitialXb,
              Hill3({
                completedConversationalOnboardingTaskId: null,
                hasCompletedClaudeImport: false,
                roles,
              }),
            );
        }}
      >
        {"Reset"}
      </button>
    );
    let petal23;
    petal23 = (
      <div
        aria-label="Onboarding checklist"
        className="flex flex-wrap items-center gap-2"
        role="group"
      >
        {lagoon23}
        {meadow23}
        {nest23}
        {oak23}
      </div>
    );
    apex23 = (
      <div className="flex flex-col items-start gap-2">
        {juniper23}
        {petal23}
        {wave23 == null ? null : (
          <div className="flex items-center gap-4">
            <div
              aria-label="Conversational Task"
              className="flex items-center gap-2"
              role="group"
            >
              <span className="text-xs text-token-description-foreground">
                {"Conversational Task:"}
              </span>
              {
                <DropdownMenuPopover
                  {...{
                    contentWidth: "sm",
                    triggerButton: (
                      <button
                        type="button"
                        className="inline-flex cursor-interaction items-center gap-1 rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5"
                      >
                        {cliff23.label}
                        {
                          <AppIconSft
                            {...{
                              className: "icon-2xs opacity-70",
                            }}
                          />
                        }
                      </button>
                    ),
                    children: petal3.map((item) => (
                      <DropdownMenu.Item
                        key={item.label}
                        {...{
                          "aria-checked": brook23 === item.value,
                          role: "menuitemradio",
                          RightIcon:
                            brook23 === item.value ? AppIconZlt : undefined,
                          onSelect: () => {
                            tide23.set(
                              AppInitialXb,
                              Hill3({
                                completedConversationalOnboardingTaskId:
                                  item.value,
                                hasCompletedClaudeImport: elm23,
                                roles,
                              }),
                            );
                          },
                          children: item.label,
                        }}
                      />
                    )),
                  }}
                />
              }
            </div>
            <div
              aria-label="Import Claude"
              className="flex items-center gap-2"
              role="group"
            >
              <span className="text-xs text-token-description-foreground">
                {"Import Claude:"}
              </span>
              {
                <DropdownMenuPopover
                  {...{
                    contentWidth: "xs",
                    triggerButton: (
                      <button
                        type="button"
                        className="inline-flex cursor-interaction items-center gap-1 rounded border border-token-border px-3 py-1 text-xs text-token-description-foreground hover:bg-token-foreground/5"
                      >
                        {elm23 ? "Completed" : "Skipped"}
                        {
                          <AppIconSft
                            {...{
                              className: "icon-2xs opacity-70",
                            }}
                          />
                        }
                      </button>
                    ),
                    children: oak3.map((item) => (
                      <DropdownMenu.Item
                        key={item.label}
                        {...{
                          "aria-checked": elm23 === item.value,
                          role: "menuitemradio",
                          RightIcon:
                            elm23 === item.value ? AppIconZlt : undefined,
                          onSelect: () => {
                            tide23.set(
                              AppInitialXb,
                              Hill3({
                                completedConversationalOnboardingTaskId:
                                  brook23,
                                hasCompletedClaudeImport: item.value,
                                roles,
                              }),
                            );
                          },
                          children: item.label,
                        }}
                      />
                    )),
                  }}
                />
              }
            </div>
          </div>
        )}
      </div>
    );
  }
  return apex23;
}

function Grove3(rain23) {
  return rain23.id === "claude_import" && rain23.completed;
}

function Hill3({
  completedConversationalOnboardingTaskId,
  hasCompletedClaudeImport,
  roles,
}) {
  let { itemIds } = AppInitialPp({
    canEnableNotifications: true,
    generalAssignment: null,
    hideGoogleWorkspaceItems: false,
    mailProvider: "google",
    plan: null,
    representativeRole: collectUniqueMappedPresenceEntries({
      roleSelectionSkipped: false,
      roles,
    }),
    roleAssignment: null,
    roles,
    taskDefinitions: ensureComposerEsm_Sp_Init,
  });
  return {
    mode: "enabled",
    accountState: AppInitialHb({
      completedConversationalOnboardingTask:
        completedConversationalOnboardingTaskId == null
          ? null
          : {
              id: completedConversationalOnboardingTaskId,
            },
      hasCompletedClaudeImport,
      sidebarItems: itemIds.map((item) => ({
        id: item,
      })),
    }),
  };
}

function Isle3(seed23) {
  if (seed23 == null) return null;
  for (let trail23 of seed23.items)
    if (
      trail23.completed &&
      resolveOnboardingItemSource(trail23) === "conversational_onboarding"
    )
      return trail23.id;
  return null;
}
