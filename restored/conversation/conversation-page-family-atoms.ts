// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Simple `Da` family atoms used by chatgpt-conversation-page (NOT stock jotai).
// Derived families (`Hk`/`kOa`/`az`/`ij`) live in conversation-page-derived-atoms.ts.

import {
  appScopeAtom,
  createAppScopeFamilySignal,
  type AppScopeFamilySignal,
} from "../boundaries/app-scope-runtime";

/** Bundle `gH` / export `fP` — per-conversation busy / in-flight flag. */
export const conversationComposerBusyAtom: AppScopeFamilySignal<boolean> =
  createAppScopeFamilySignal(
    appScopeAtom,
    false,
    "conversationComposerBusyAtom",
  );

/** Bundle `zka` / export `hP` — per-conversation hydration scratch list. */
export const conversationHydrationAtom: AppScopeFamilySignal<unknown[]> =
  createAppScopeFamilySignal(
    appScopeAtom,
    () => [],
    "conversationHydrationAtom",
  );

/** Bundle `Lka` / export `mP` — per-conversation messages cursor / anchor. */
export const conversationMessagesAtom: AppScopeFamilySignal<unknown> =
  createAppScopeFamilySignal(appScopeAtom, null, "conversationMessagesAtom");

/** Bundle `Rka` / export `pP` — per-conversation presence list. */
export const conversationPresenceAtom: AppScopeFamilySignal<unknown[]> =
  createAppScopeFamilySignal(
    appScopeAtom,
    () => [],
    "conversationPresenceAtom",
  );

/** Bundle `Hka` / export `vP` — per-conversation viewport scratch. */
export const conversationViewportAtom: AppScopeFamilySignal<unknown> =
  createAppScopeFamilySignal(appScopeAtom, null, "conversationViewportAtom");

/**
 * Bundle `NEa` / export `vF` — per-conversation scroll/activity anchor
 * (co-located with FEa/LEa key helpers; atom itself stores null|number).
 */
export const conversationScrollOffsetAtom: AppScopeFamilySignal<number | null> =
  createAppScopeFamilySignal(
    appScopeAtom,
    null,
    "conversationScrollOffsetAtom",
  );

/**
 * Bundle `LMa` / export `MN` — archive-in-flight gate (true while Qja runs).
 * Nearby pinned-list query cluster; this atom is the in-flight lock.
 */
export const conversationArchiveInFlightAtom: AppScopeFamilySignal<boolean> =
  createAppScopeFamilySignal(
    appScopeAtom,
    false,
    "conversationArchiveInFlightAtom",
  );

/** Bundle `PEa` / export `yF` — esm init that only constructs `NEa`. */
export function ensureConversationScrollOffsetAtomInit(): void {}
