// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WSu`) / export `_`.

export type CodexMicroPermissionRevealCardPeers = {
  GSu: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  U9: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  qSu: (...args: unknown[]) => unknown;
};
let peers: CodexMicroPermissionRevealCardPeers | null = null;

/** Wire CodexMicroPermissionRevealCard peers once companions land. */
export function setCodexMicroPermissionRevealCardPeers(
  next: CodexMicroPermissionRevealCardPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_` / internal `WSu`.
 */
export function CodexMicroPermissionRevealCard(props: unknown) {
  const Z = peers.Z;
  const Np = peers.Np;
  if (peers == null) {
    throw new Error("CodexMicroPermissionRevealCard peers are not configured");
  }
  let { appIconMedium, appName, permissionSettingsName } = props,
    a =
      appIconMedium == null ? null : (
        <img
          alt=""
          aria-hidden={true}
          className="size-12 object-contain"
          src={appIconMedium}
        />
      );
  let o = (
    <div className="flex size-14 shrink-0 items-center justify-center">{a}</div>
  );
  let s = (
    <p className="text-sm text-token-description-foreground">
      {
        <Z
          id="permissions.revealApp"
          defaultMessage={
            "If {appName} doesn't appear in {permissionSettingsName}, reveal it in Finder, then drag the app into the open System Settings panel"
          }
          values={{
            appName,
            permissionSettingsName,
          }}
          description="Instructions for dragging the app from Finder into a macOS permission settings page when it is missing"
        />
      }
    </p>
  );
  let c = (
    <Np color="secondary" onClick={peers.GSu}>
      <Z
        id="permissions.showAppInFinder"
        defaultMessage={"Show {appName} in Finder"}
        values={{
          appName,
        }}
        description="Button that reveals the current app bundle in Finder"
      />
    </Np>
  );
  let l = (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
      {s}
      {c}
    </div>
  );
  return (
    <div className="flex items-center gap-3 rounded-lg border border-token-border bg-token-bg-fog p-2.5 text-left">
      {o}
      {l}
    </div>
  );
}
