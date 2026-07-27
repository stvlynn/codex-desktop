// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u8i`) / export `BR`.

export type BindNotebookPreviewOpenActionsPeers = {
  B6i: (...args: unknown[]) => unknown;
  Ef: (...args: unknown[]) => unknown;
  G2i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Iqr: (...args: unknown[]) => unknown;
  Iz: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  KR: (...args: unknown[]) => unknown;
  Lz: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RL: (...args: unknown[]) => unknown;
  V6i: (...args: unknown[]) => unknown;
  X2i: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  _6i: (...args: unknown[]) => unknown;
  _Hi: (...args: unknown[]) => unknown;
  bZt: (...args: unknown[]) => unknown;
  d8i: (...args: unknown[]) => unknown;
  f8i: (...args: unknown[]) => unknown;
  g6i: (...args: unknown[]) => unknown;
  p8i: (...args: unknown[]) => unknown;
  v6i: (...args: unknown[]) => unknown;
  v8i: (...args: unknown[]) => unknown;
  vHi: (...args: unknown[]) => unknown;
  y8i: (...args: unknown[]) => unknown;
  z2i: (...args: unknown[]) => unknown;
};
let peers: BindNotebookPreviewOpenActionsPeers | null = null;

/** Wire bindNotebookPreviewOpenActions peers once companions land. */
export function setBindNotebookPreviewOpenActionsPeers(
  next: BindNotebookPreviewOpenActionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BR` / internal `u8i`.
 */
export function bindNotebookPreviewOpenActions(props: unknown) {
  const V6i = peers.V6i;
  const V6i2 = peers.v6i;
  const G2i = peers.G2i;
  const Message = peers.KR.Message;
  const Z = peers.Z;
  const G6i = peers.g6i;
  const Separator = peers.KR.Separator;
  const Item = peers.KR.Item;
  const F8i = peers.f8i;
  const C6i = peers._6i;
  if (peers == null) {
    throw new Error("bindNotebookPreviewOpenActions peers are not configured");
  }
  let {
      analyticsContext,
      cwd = null,
      hostId,
      onDownload,
      onBeforeOpen,
      path,
      persistPreferredTarget = false,
      showLabel = false,
    } = props,
    p = peers.Io(peers.Q),
    m = peers.Ju(),
    [h, g] = peers.v8i.useState(false),
    [_, v] = peers.v8i.useState(false),
    [y, b] = peers.v8i.useState(false),
    x = {
      hostId,
    };
  let {
      clearConnectingApp,
      connectingApp,
      handleAppConnectOAuthStarted,
      handleConnectApp,
    } = peers.z2i(x),
    E = {
      cwd,
      hostId,
      openPath: path,
    };
  let {
      canLoadTargets,
      preferredTarget,
      targets,
      availableTargets,
      mode,
      hasLoadedTargets,
      isLoadingTargets,
      open,
    } = peers.B6i(E),
    F = peers.Ef(path);
  let I = F,
    L = cwd ?? peers.p8i(path);
  let R = L,
    z,
    B,
    V;
  {
    let e = peers.RL({
        targets,
        availableTargets,
        includeHiddenTargets: true,
        mode,
      }),
      r = peers._Hi({
        preferredTarget,
        targets,
        availableTargets,
        mode,
      }),
      c = e.filter(peers.d8i),
      l;
    l = peers.X2i(path);
    z = l != null;
    let x = m.formatMessage({
      id: "artifactTab.preview.open",
      defaultMessage: "Open",
      description: "Button label that opens an artifact",
    });
    let S = x,
      C = (e) => {
        let t = onBeforeOpen?.();
        if (t == null) {
          e();
          return;
        }
        Promise.resolve(t).then(e, e);
      };
    let w = C,
      E = () => {
        w(() => {
          p.get(peers.Iqr).mutate({
            cwd: null,
            hostId,
            path,
            target: "fileManager",
          });
        });
      };
    let F = E,
      L = (event, t) => {
        w(() => {
          open(event.target, {
            appPath: event.appPath,
            path,
            persistPreferred: t && peers.vHi(event),
          });
        });
      };
    let H = L,
      U = () => {
        g(true);
      };
    let W = U,
      G =
        canLoadTargets && (h || !hasLoadedTargets || isLoadingTargets) ? (
          <V6i
            cwd={cwd}
            delayMs={h ? 0 : peers.y8i}
            hostId={hostId}
            openPath={path}
          />
        ) : null;
    let K = G,
      q = canLoadTargets && h && isLoadingTargets,
      ee = q || c.length > 0 || z,
      te =
        r == null
          ? S
          : m.formatMessage(
              {
                id: "artifactTab.preview.openPrimaryTarget.tooltip",
                defaultMessage: "Open in {target}",
                description:
                  "Tooltip for opening an artifact in the primary app",
              },
              {
                target: r.label,
              },
            ),
      ne = m.formatMessage({
        id: "artifactTab.preview.openOptions",
        defaultMessage: "Open options",
        description:
          "Tooltip and accessible label for opening the artifact open options menu",
      });
    let re = ne;
    B = K;
    V = y ? (
      <V6i2 />
    ) : (
      <G2i
        color="outline"
        size="toolbar"
        className="shrink-0"
        dropdownOpen={_}
        dropdownAlign="end"
        dropdownContentClassName="pt-2"
        primaryAriaLabel={r == null ? S : te}
        secondaryAriaLabel={re}
        secondaryTooltipContent={re}
        tooltipContent={te}
        dropdownContent={
          <>
            {c.map((item) => {
              return (
                <peers.KR.Item
                  key={item.id}
                  onSelect={() => {
                    H(item, persistPreferredTarget);
                  }}
                >
                  <peers.KR.ItemIcon>
                    <img alt="" src={item.icon} className="icon-sm" />
                  </peers.KR.ItemIcon>
                  {item.label}
                </peers.KR.Item>
              );
            })}
            {q ? (
              <Message compact={true}>
                <Z
                  id="artifactTab.preview.loadingAvailableApps"
                  defaultMessage="Loading available apps…"
                  description="Dropdown item shown while loading apps that can open an artifact"
                />
              </Message>
            ) : null}
            {z ? (
              <G6i
                analyticsClickSource={
                  peers.bZt
                    .CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU
                }
                analyticsContext={analyticsContext}
                handleConnectApp={handleConnectApp}
                hostId={hostId}
                isOpening={y}
                onCloseDropdown={() => {
                  v(false);
                }}
                onOpeningChange={b}
                path={path}
                title={I}
              />
            ) : null}
            {ee ? <Separator /> : null}
            {
              <Item onSelect={F}>
                <Z
                  id="artifactTab.preview.openInFolder"
                  defaultMessage="Open in folder"
                  description="Dropdown item for revealing an artifact in the system file manager"
                />
              </Item>
            }
            {h && R != null ? (
              <F8i cwd={R} hostId={hostId} path={path} />
            ) : null}
            {onDownload == null ? null : (
              <Item onSelect={onDownload}>
                <Z
                  id="artifactTab.preview.downloadCopy"
                  defaultMessage="Download a copy"
                  description="Dropdown item for saving a separate copy of an artifact"
                />
              </Item>
            )}
          </>
        }
        onFocus={W}
        onMouseEnter={W}
        onDropdownOpenChange={(e) => {
          v(e);
          e && W();
        }}
        onClick={() => {
          if (r == null) {
            F();
            return;
          }
          H(r, false);
        }}
      >
        <span className="flex items-center gap-1.5">
          {r == null ? null : <img alt="" src={r.icon} className="icon-sm" />}
          {r == null || showLabel ? (
            <span className="whitespace-nowrap">
              {
                <Z
                  id="artifactTab.preview.open"
                  defaultMessage="Open"
                  description="Button label that opens an artifact"
                />
              }
            </span>
          ) : null}
        </span>
      </G2i>
    );
  }
  let H =
    z && connectingApp != null ? (
      <C6i
        app={connectingApp}
        hostId={hostId}
        onClose={clearConnectingApp}
        onOAuthStarted={handleAppConnectOAuthStarted}
      />
    ) : null;
  return (
    <>
      {B}
      {V}
      {H}
    </>
  );
}
