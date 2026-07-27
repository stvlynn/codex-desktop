// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Phu`) / export `At`.

export type AppCardAdminDisabledBadgePeers = {
  $: (...args: unknown[]) => unknown;
  Bhu: (...args: unknown[]) => unknown;
  Bm: (...args: unknown[]) => unknown;
  Chu: (...args: unknown[]) => unknown;
  Cis: (...args: unknown[]) => unknown;
  Dhu: (...args: unknown[]) => unknown;
  Fhu: (...args: unknown[]) => unknown;
  Ihu: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  Lhu: (...args: unknown[]) => unknown;
  Mhu: (...args: unknown[]) => unknown;
  Mz: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Rhu: (...args: unknown[]) => unknown;
  T9: (...args: unknown[]) => unknown;
  V5r: (...args: unknown[]) => unknown;
  VR: (...args: unknown[]) => unknown;
  Xm: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _P: (...args: unknown[]) => unknown;
  cd: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  qL: (...args: unknown[]) => unknown;
  qh: (...args: unknown[]) => unknown;
  rO: (...args: unknown[]) => unknown;
  sh: (...args: unknown[]) => unknown;
  w9: (...args: unknown[]) => unknown;
  zhu: (...args: unknown[]) => unknown;
};
let peers: AppCardAdminDisabledBadgePeers | null = null;

/** Wire AppCardAdminDisabledBadge peers once companions land. */
export function setAppCardAdminDisabledBadgePeers(
  next: AppCardAdminDisabledBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `At` / internal `Phu`.
 */
export function AppCardAdminDisabledBadge(props: unknown) {
  const Xm = peers.Xm;
  const RO = peers.rO;
  const P2 = peers._P;
  const Mz = peers.Mz;
  const Z = peers.Z;
  const VR = peers.VR;
  const Np = peers.Np;
  const Cd = peers.cd;
  const Item = peers.KR.Item;
  const QL = peers.qL;
  const Cis = peers.Cis;
  const Chu = peers.Chu;
  const Bm = peers.Bm;
  const Mhu = peers.Mhu;
  const Jp = peers.jp;
  const Dhu = peers.Dhu;
  if (peers == null) {
    throw new Error("AppCardAdminDisabledBadge peers are not configured");
  }
  let {
      app,
      cardIcon,
      cardIconContainer = true,
      cardIconContainerVariant,
      cardIconPlacement,
      cardDescriptionPlacement,
      badges,
      blockedStatusLabel,
      className,
      connectedAccountEmail = null,
      installBlockedReason = null,
      installedStateAction = "check",
      installActionDisabled = false,
      installActionLabel,
      manageAction = "button",
      presentation: _,
      isConnectingApp,
      showInstallAction = true,
      updatingAppId,
      onInstallApp,
      onOpenAppTools,
      onOpenAppUrl,
      onSetAppEnabled,
    } = props,
    M = peers.Ju(),
    N = installActionLabel ?? M.formatMessage(peers.T9.connectApp);
  let P = N,
    F = app.isEnabled,
    I = installBlockedReason === "disabled-by-admin" && !app.isAccessible,
    L = updatingAppId === app.id,
    R =
      connectedAccountEmail == null
        ? null
        : M.formatMessage(peers.T9.connectedTo, {
            email: connectedAccountEmail,
          });
  let z = R,
    B =
      z == null
        ? badges
        : [
            <span
              key="connected-account-badge"
              className="inline-flex items-center gap-1"
            >
              {badges}
              {
                <Xm tooltipContent={z}>
                  <button
                    type="button"
                    className="inline-flex shrink-0 cursor-interaction items-center justify-center text-token-description-foreground hover:text-token-foreground"
                    aria-label={z}
                    onClick={peers.zhu}
                  >
                    {<RO className="icon-2xs" />}
                  </button>
                </Xm>
              }
            </span>,
          ];
  let V = B,
    H = peers.$("group justify-center border-none", className);
  let U = cardIcon ?? (
    <P2
      alt={app.name}
      appInfo={app}
      className="icon-md"
      fallback={<Mz className="icon-sm text-token-text-secondary" />}
    />
  );
  let W = app.description ?? <Z {...peers.T9.noDescription} />;
  let G =
    onOpenAppTools == null
      ? undefined
      : () => {
          onOpenAppTools(app);
        };
  let K =
    I && blockedStatusLabel != null ? (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-token-text-secondary">
        {blockedStatusLabel}
      </span>
    ) : app.isAccessible && installedStateAction === "toggle" ? (
      <div className="flex items-center gap-2">
        {manageAction === "menu" ? (
          <div onClick={peers.Rhu} onKeyDown={peers.Lhu}>
            {F ? (
              <VR
                align="end"
                contentWidth="xs"
                triggerButton={
                  <Np
                    className="gap-1.5 text-sm"
                    color="outline"
                    size="toolbar"
                    disabled={isConnectingApp || L}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 shrink-0 rounded-full bg-token-charts-green" />
                      {
                        <Z
                          id="skills.appsPage.apps.connected"
                          defaultMessage="Connected"
                          description="Button label shown for an app that is connected"
                        />
                      }
                    </span>
                    <Cd className="icon-2xs shrink-0 text-token-description-foreground" />
                  </Np>
                }
              >
                <Item
                  LeftIcon={peers.sh}
                  onSelect={() => {
                    onInstallApp(app);
                  }}
                >
                  <Z
                    id="skills.appsPage.apps.reconnect"
                    defaultMessage="Reconnect"
                    description="Menu item label for reconnecting an app"
                  />
                </Item>
                <Item
                  LeftIcon={peers.qh}
                  className="!text-token-charts-red"
                  leftIconClassName="icon-xs text-token-charts-red"
                  onSelect={() => {
                    onOpenAppUrl?.(peers.V5r(app));
                  }}
                >
                  <Z
                    id="skills.appsPage.apps.disconnect"
                    defaultMessage="Disconnect"
                    description="Menu item label for disconnecting an app"
                  />
                </Item>
              </VR>
            ) : (
              <Np
                className="shrink-0"
                color="outline"
                size="toolbar"
                loading={L}
                onClick={() => {
                  onSetAppEnabled?.({
                    appId: app.id,
                    enabled: true,
                  });
                }}
              >
                {P}
              </Np>
            )}
          </div>
        ) : (
          <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
            {
              <Xm tooltipContent={<Z {...peers.T9.manageOnChatGpt} />}>
                <Np
                  color="ghost"
                  size="icon"
                  aria-label={M.formatMessage(peers.T9.manageOnChatGpt)}
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpenAppUrl?.(peers.V5r(app));
                  }}
                >
                  <QL className="icon-sm" />
                </Np>
              </Xm>
            }
          </div>
        )}
        {manageAction === "menu" ? null : (
          <Xm
            tooltipContent={
              F ? (
                <Z {...peers.T9.disableToggleTooltip} />
              ) : (
                <Z {...peers.T9.enableToggleTooltip} />
              )
            }
          >
            <div onClick={peers.Ihu} onKeyDown={peers.Fhu}>
              {
                <Cis
                  checked={F}
                  disabled={L}
                  onChange={(e) => {
                    onSetAppEnabled?.({
                      appId: app.id,
                      enabled: e,
                    });
                  }}
                  ariaLabel={M.formatMessage(peers.T9.enableToggleAria)}
                />
              }
            </div>
          </Xm>
        )}
      </div>
    ) : showInstallAction ? (
      app.isAccessible ? (
        <Chu
          ariaLabel={M.formatMessage(
            F ? peers.T9.enabledStatus : peers.T9.disabledStatus,
          )}
          icon={F ? <Bm className="icon-sm" /> : <Mhu className="icon-sm" />}
        />
      ) : (
        <Xm
          disabled={!I && !isConnectingApp}
          tooltipContent={
            I ? (
              <Z
                id="plugins.install.disabledByAdmin"
                defaultMessage="Disabled by admin"
                description="Tooltip shown when plugin install is unavailable because all included connectors are disabled by admin"
              />
            ) : isConnectingApp ? (
              <Z {...peers.T9.connectingApp} />
            ) : (
              P
            )
          }
        >
          <div>
            {
              <Np
                className="shrink-0"
                color="outline"
                size="toolbar"
                disabled={I || installActionDisabled}
                aria-label={
                  isConnectingApp ? M.formatMessage(peers.T9.connectingApp) : P
                }
                onClick={(event) => {
                  event.stopPropagation();
                  !I && onInstallApp(app);
                }}
              >
                {isConnectingApp ? <Jp className="icon-xxs" /> : P}
              </Np>
            }
          </div>
        </Xm>
      )
    ) : null;
  return (
    <Dhu
      className={H}
      actionsPlacement="center"
      iconContainer={cardIconContainer}
      iconContainerVariant={cardIconContainerVariant}
      iconPlacement={cardIconPlacement}
      icon={U}
      title={app.name}
      badges={V}
      description={W}
      descriptionClassName="line-clamp-1"
      descriptionPlacement={cardDescriptionPlacement}
      presentation={_}
      onClick={G}
      actions={K}
    />
  );
}
