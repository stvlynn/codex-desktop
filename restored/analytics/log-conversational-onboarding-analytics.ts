// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wf/qf/Kf/Bf/Gf/Vf/Hf/zf` / export `Wf/qf/Kf/Bf/Gf/Vf/Hf/zf` — extractFn cluster; enum+$type companions; Ub→logProductEvent.

import { CodexConversationalOnboardingExecutionAction } from "./codex-conversational-onboarding-execution-action";
import { CodexConversationalOnboardingAccessAction } from "./codex-conversational-onboarding-access-action";
import { CodexConversationalOnboardingAccessType } from "./codex-conversational-onboarding-access-type";
import { CodexConversationalOnboardingFailureKind } from "./codex-conversational-onboarding-failure-kind";
import { CodexConversationalOnboardingLifecycleAction } from "./codex-conversational-onboarding-lifecycle-action";
import { CodexConversationalOnboardingRoleAction } from "./codex-conversational-onboarding-role-action";
import { CodexConversationalOnboardingTaskAction } from "./codex-conversational-onboarding-task-action";
import { CodexConversationalOnboardingTaskType } from "./codex-conversational-onboarding-task-type";
import { CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_EVENT_TYPE } from "./codex-conversational-onboarding-access-event-type";
import { CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_EVENT_TYPE } from "./codex-conversational-onboarding-execution-event-type";
import { CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_EVENT_TYPE } from "./codex-conversational-onboarding-lifecycle-event-type";
import { CODEX_CONVERSATIONAL_ONBOARDING_ROLE_EVENT_TYPE } from "./codex-conversational-onboarding-role-event-type";
import { CODEX_CONVERSATIONAL_ONBOARDING_TASK_EVENT_TYPE } from "./codex-conversational-onboarding-task-event-type";
import { logProductEvent } from "./log-product-event";

type StoreLike = {
  get: (token: unknown) => {
    logProductEvent: (eventType: unknown, payload: unknown) => void;
  };
};

/** Bundle `rlc`. */
function conversationalOnboardingTaskType(
  task: string,
): (typeof CodexConversationalOnboardingTaskType)[keyof typeof CodexConversationalOnboardingTaskType] {
  switch (task) {
    case "desktop_note":
      return CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_DESKTOP_NOTE;
    case "csv_chart":
      return CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_CSV_CHART;
    case "hold_next_free_hour":
      return CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_HOLD_NEXT_FREE_HOUR;
    case "send_message_to_self":
      return CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_SEND_MESSAGE_TO_SELF;
    default:
      return CodexConversationalOnboardingTaskType.CODEX_CONVERSATIONAL_ONBOARDING_TASK_TYPE_UNSPECIFIED;
  }
}

/** Bundle `nlc`. */
function conversationalOnboardingAccessType(
  task: string,
): (typeof CodexConversationalOnboardingAccessType)[keyof typeof CodexConversationalOnboardingAccessType] {
  switch (task) {
    case "desktop_note":
      return CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_DESKTOP;
    case "csv_chart":
      return CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CSV_PICKER;
    case "hold_next_free_hour":
      return CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_CALENDAR_APP;
    case "send_message_to_self":
      return CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_MESSAGING_APP;
    default:
      return CodexConversationalOnboardingAccessType.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_TYPE_UNSPECIFIED;
  }
}

/** Bundle `Qcc` / `Wf`. */
export function logConversationalOnboardingRoleSelected(
  store: StoreLike,
  roleType: unknown,
): void {
  logProductEvent(store, CODEX_CONVERSATIONAL_ONBOARDING_ROLE_EVENT_TYPE, {
    action:
      CodexConversationalOnboardingRoleAction.CODEX_CONVERSATIONAL_ONBOARDING_ROLE_ACTION_SELECTED,
    roleType,
  });
}

/** Bundle `$cc` / `qf`. */
export function logConversationalOnboardingTaskSelected(
  store: StoreLike,
  task: string,
): void {
  logProductEvent(store, CODEX_CONVERSATIONAL_ONBOARDING_TASK_EVENT_TYPE, {
    action:
      CodexConversationalOnboardingTaskAction.CODEX_CONVERSATIONAL_ONBOARDING_TASK_ACTION_SELECTED,
    taskType: conversationalOnboardingTaskType(task),
  });
}

function logLifecycle(
  store: StoreLike,
  action: string,
  selectedTask?: string,
  failureKind?: string,
): void {
  logProductEvent(store, CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_EVENT_TYPE, {
    action,
    failureKind,
    taskType:
      selectedTask == null
        ? undefined
        : conversationalOnboardingTaskType(selectedTask),
  });
}

/** Bundle `Ncc` / `Kf`. */
export function logConversationalOnboardingLifecycleStarted(
  store: StoreLike,
): void {
  logLifecycle(
    store,
    CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_STARTED,
  );
}
/** Bundle `Pcc` / `Bf`. */
export function logConversationalOnboardingLifecycleCompleted(
  store: StoreLike,
  selectedTask: string,
): void {
  logLifecycle(
    store,
    CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_COMPLETED,
    selectedTask,
  );
}
/** Bundle `Fcc` / `Gf`. */
export function logConversationalOnboardingLifecycleSkipped(
  store: StoreLike,
  selectedTask: string,
): void {
  logLifecycle(
    store,
    CodexConversationalOnboardingLifecycleAction.CODEX_CONVERSATIONAL_ONBOARDING_LIFECYCLE_ACTION_SKIPPED,
    selectedTask,
  );
}

function logExecution(
  store: StoreLike,
  action: string,
  task: string,
  failureKind?: string,
): void {
  logProductEvent(store, CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_EVENT_TYPE, {
    action,
    failureKind,
    taskType: conversationalOnboardingTaskType(task),
  });
}

/** Bundle `Ycc` / `Vf`. */
export function logConversationalOnboardingExecutionCancelled(
  store: StoreLike,
  task: string,
): void {
  logExecution(
    store,
    CodexConversationalOnboardingExecutionAction.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_CANCELLED,
    task,
  );
}
/** Bundle `Jcc` / `Hf`. */
export function logConversationalOnboardingExecutionCompletionMissing(
  store: StoreLike,
  task: string,
): void {
  logExecution(
    store,
    CodexConversationalOnboardingExecutionAction.CODEX_CONVERSATIONAL_ONBOARDING_EXECUTION_ACTION_FAILED,
    task,
    CodexConversationalOnboardingFailureKind.CODEX_CONVERSATIONAL_ONBOARDING_FAILURE_KIND_COMPLETION_MISSING,
  );
}

/** Bundle `Bcc` / `zf`. */
export function logConversationalOnboardingAccessDenied(
  store: StoreLike,
  task: string,
): void {
  logProductEvent(store, CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_EVENT_TYPE, {
    accessType: conversationalOnboardingAccessType(task),
    action:
      CodexConversationalOnboardingAccessAction.CODEX_CONVERSATIONAL_ONBOARDING_ACCESS_ACTION_DENIED,
    taskType: conversationalOnboardingTaskType(task),
  });
}
