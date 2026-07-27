// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lsc`) / export `np`.

export type BindEnableNotificationsPeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Esc: (...args: unknown[]) => unknown;
  Fsc: (...args: unknown[]) => unknown;
  IN: (...args: unknown[]) => unknown;
  Isc: (...args: unknown[]) => unknown;
  KT: (...args: unknown[]) => unknown;
  Zu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fN: (...args: unknown[]) => unknown;
  i_: (...args: unknown[]) => unknown;
  osc: (...args: unknown[]) => unknown;
};

let peers: BindEnableNotificationsPeers | null = null;

/** Wire bindEnableNotifications peers once companions land. */
export function setBindEnableNotificationsPeers(next: BindEnableNotificationsPeers): void {
  peers = next;
}

/**
 * Bundle export `np` / internal `Lsc`.
 */
export function bindEnableNotifications() {
  if (peers == null) {
    throw new Error("bindEnableNotifications peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.$u(), peers.fN(), peers.i_(), peers.IN(), peers.KT(), peers.osc(), peers.Esc(), Fsc = {
      id: `enable_notifications`,
      action: `enable_notifications`,
      message: peers.Zu({
        id: `sidebarOnboardingChecklist.enableNotifications`,
        defaultMessage: `Enable notifications`,
        description: `Onboarding checklist item in the sidebar`
      })
    }, Isc = {
      id: `claude_import`,
      action: `import_claude`,
      message: peers.Zu({
        id: `sidebarOnboardingChecklist.importFromClaude`,
        defaultMessage: `Import from Claude`,
        description: `Claude import item in the sidebar onboarding checklist`
      })
    };
  });
}
