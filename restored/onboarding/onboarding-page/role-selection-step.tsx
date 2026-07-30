// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Role selection step (Helpers 70–71 + personalized-suggestions toggle).

import { useState, type ReactElement } from "react";

import { codingRoleCategory } from "../../account/coding-role-category";
import { AppSurfaceId } from "../../app/app-surface-ids";
import { codexAppGaLogoUrl } from "../../assets/codex-app-ga-logo-url";
import { cx } from "../../ui/cx";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS, type OnboardingRole } from "./constants";
import {
  ROLE_SELECTION_OPTIONS,
  labelForOnboardingRole,
} from "./role-option-labels";

function RoleChip({
  role,
  selected,
  onClick,
}: {
  role: OnboardingRole;
  selected: boolean;
  onClick: () => void;
}): ReactElement {
  return (
    <button
      type="button"
      className={cx(
        "relative flex h-10 min-w-0 items-center justify-center overflow-hidden rounded-xl border px-3 py-2 text-center text-[14px] leading-5 font-normal text-token-foreground",
        selected
          ? "border-token-foreground/20 bg-token-foreground/[0.06]"
          : "border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]",
      )}
      aria-pressed={selected}
      onClick={onClick}
    >
      {selected ? (
        <span
          className="absolute left-2 size-4 rounded-full bg-token-foreground"
          aria-hidden="true"
        />
      ) : null}
      <span className="min-w-0 truncate">{labelForOnboardingRole(role)}</span>
    </button>
  );
}

function PersonalizedSuggestionsToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
}): ReactElement {
  return (
    <div className="relative mt-7 flex items-center justify-center gap-2">
      <button
        type="button"
        className="cursor-interaction text-lg leading-6 font-normal text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
        aria-pressed={checked}
        onClick={() => onChange(!checked)}
      >
        Suggest personalized tasks
      </button>
    </div>
  );
}

export type RoleSelectionPanelProps = {
  roles: readonly OnboardingRole[];
  personalizedSuggestionsEnabled: boolean;
  allowMultiSelect?: boolean;
  allowSkip?: boolean;
  isAdvancePending?: boolean;
  onToggleRole: (role: OnboardingRole) => void;
  onPersonalizedSuggestionsChange: (enabled: boolean) => void;
  onContinue: () => void;
  onSkip: () => void;
};

/** Bundle Helper70 body — role grid without WebGL / experiment peers. */
export function RoleSelectionPanel({
  roles,
  personalizedSuggestionsEnabled,
  allowSkip = true,
  isAdvancePending = false,
  onToggleRole,
  onPersonalizedSuggestionsChange,
  onContinue,
  onSkip,
}: RoleSelectionPanelProps): ReactElement {
  const canContinue = roles.length > 0 && !isAdvancePending;
  const canSkip = !isAdvancePending;
  const subtitle =
    AppSurfaceId.ChatGPT === "chatgpt"
      ? "Customize ChatGPT to fit the way you work"
      : "Customize Codex to fit the way you work";

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
      <div className="relative flex w-full max-w-3xl flex-col items-center justify-start">
        <div className="flex w-full max-w-[560px] flex-col items-center overflow-hidden rounded-2xl p-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={codexAppGaLogoUrl}
              className="size-12 shrink-0"
              draggable={false}
              alt=""
              aria-hidden="true"
            />
            <h1 className="mt-4 text-[28px] leading-[34px] font-normal whitespace-nowrap text-token-foreground max-[540px]:whitespace-normal">
              What type of work do you do?
            </h1>
            <p className="mt-2 text-[16px] leading-6 text-token-description-foreground">
              {subtitle}
            </p>
          </div>
          <div className="mt-8 grid w-full grid-cols-2 gap-2 min-[540px]:grid-cols-3">
            {ROLE_SELECTION_OPTIONS.map((role) => (
              <RoleChip
                key={role}
                role={role}
                selected={roles.includes(role)}
                onClick={() => onToggleRole(role)}
              />
            ))}
          </div>
          <PersonalizedSuggestionsToggle
            checked={personalizedSuggestionsEnabled}
            onChange={onPersonalizedSuggestionsChange}
          />
          <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-3">
            <button
              className={cx(
                "flex w-full items-center justify-center rounded-full border border-transparent px-4 py-3 text-[14px] leading-5 font-medium text-token-dropdown-background",
                canContinue
                  ? "cursor-interaction bg-token-foreground hover:bg-token-foreground/80"
                  : "cursor-not-allowed bg-token-foreground/30",
              )}
              type="button"
              disabled={!canContinue}
              onClick={onContinue}
            >
              Continue
            </button>
            {allowSkip ? (
              <button
                type="button"
                className={cx(
                  "inline-flex items-center justify-center px-2 py-2 text-[14px] font-medium text-token-description-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border",
                  canSkip
                    ? "cursor-interaction hover:text-token-foreground"
                    : "cursor-not-allowed opacity-50",
                )}
                disabled={!canSkip}
                onClick={onSkip}
              >
                Skip
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Bundle Helper70 — stateful role selection step. */
export function RoleSelectionStep({
  isAdvancePending = false,
  onContinue,
}: {
  isAdvancePending?: boolean;
  onContinue: (result?: unknown) => void;
}): ReactElement {
  const [roles, setRoles] = useState<OnboardingRole[]>([]);
  const [personalizedSuggestionsEnabled, setPersonalizedSuggestionsEnabled] =
    useState(true);
  const allowMultiSelect = true;

  const toggleRole = (role: OnboardingRole) => {
    setRoles((prev) => {
      if (!allowMultiSelect) return [role];
      return prev.includes(role)
        ? prev.filter((entry) => entry !== role)
        : [...prev, role];
    });
  };

  return (
    <CompleteOnboardingStep
      name="role_selection"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => (
        <RoleSelectionPanel
          roles={roles}
          personalizedSuggestionsEnabled={personalizedSuggestionsEnabled}
          isAdvancePending={isAdvancePending}
          onToggleRole={toggleRole}
          onPersonalizedSuggestionsChange={setPersonalizedSuggestionsEnabled}
          onContinue={() =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.RoleSelection,
                roles,
                personalizedSuggestionsEnabled,
                workMode: codingRoleCategory(roles),
              },
            })
          }
          onSkip={() =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.RoleSelection,
                roles: ["something_else"],
                personalizedSuggestionsEnabled: false,
                workMode: "non_coding",
                skipped: true,
              },
              skipped: true,
            })
          }
        />
      )}
    </CompleteOnboardingStep>
  );
}
