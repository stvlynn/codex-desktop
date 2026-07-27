// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r6i`) / export `tz`.

export type BindMcpAppConnectDialogPeers = {
  $3i: (...args: unknown[]) => unknown;
  Az: (...args: unknown[]) => unknown;
  G5r: (...args: unknown[]) => unknown;
  H5r: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  ID: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  K5r: (...args: unknown[]) => unknown;
  Mz: (...args: unknown[]) => unknown;
  Np: (...args: unknown[]) => unknown;
  Oz: (...args: unknown[]) => unknown;
  PD: (...args: unknown[]) => unknown;
  Pz: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  V3i: (...args: unknown[]) => unknown;
  V5r: (...args: unknown[]) => unknown;
  W5r: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  X3i: (...args: unknown[]) => unknown;
  Xk: (...args: unknown[]) => unknown;
  Y3i: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  Z3i: (...args: unknown[]) => unknown;
  Zk: (...args: unknown[]) => unknown;
  _P: (...args: unknown[]) => unknown;
  a6i: (...args: unknown[]) => unknown;
  blurbs: (...args: unknown[]) => unknown;
  c6i: (...args: unknown[]) => unknown;
  d6i: (...args: unknown[]) => unknown;
  i6i: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  installUrl: (...args: unknown[]) => unknown;
  jp: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  lb: (...args: unknown[]) => unknown;
  logo_url: (...args: unknown[]) => unknown;
  logo_url_dark: (...args: unknown[]) => unknown;
  nA: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
  o6i: (...args: unknown[]) => unknown;
  q5r: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  s6i: (...args: unknown[]) => unknown;
  t6i: (...args: unknown[]) => unknown;
  u6i: (...args: unknown[]) => unknown;
};
let peers: BindMcpAppConnectDialogPeers | null = null;

/** Wire bindMcpAppConnectDialog peers once companions land. */
export function setBindMcpAppConnectDialogPeers(
  next: BindMcpAppConnectDialogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tz` / internal `r6i`.
 */
export function bindMcpAppConnectDialog(props: unknown) {
  const PD = peers.PD;
  const Oz = peers.Oz;
  const Jp = peers.jp;
  const Z = peers.Z;
  const ID = peers.ID;
  const Mz = peers.Mz;
  const P2 = peers._P;
  const Zk = peers.Zk;
  const Az = peers.Az;
  const C3i = peers.$3i;
  const T6i = peers.t6i;
  const V3i = peers.V3i;
  const Np = peers.Np;
  const NA = peers.nA;
  const Xk = peers.Xk;
  if (peers == null) {
    throw new Error("bindMcpAppConnectDialog peers are not configured");
  }
  let {
      app,
      closeOnOAuthStarted = true,
      connectApp,
      closeOnFailedConnect = false,
      isCompletingConnection = false,
      onOpenChange,
      onConnectFailed,
      onConnectStarted,
      onConnected,
      onExternalConnectStarted,
      onOAuthStarted,
      showResultToasts = true,
    } = props,
    v = peers.Io(peers.Q),
    y = peers.Ju(),
    b = peers.rt(),
    x = app != null,
    S = app?.id ?? "",
    C = (e) => {
      onOpenChange(e);
    };
  let w = C,
    T = ["mcp-settings", "app-connect", S];
  let E = x && app != null,
    D = async () => {
      if (app == null) throw Error("Expected app metadata to be present.");
      return peers.Uh.safeGet("/aip/connectors/{connector_id}", {
        parameters: {
          path: {
            connector_id: app.id,
          },
          query: {
            include_logo: false,
            include_actions: false,
          },
        },
        additionalHeaders: {
          [peers.s6i]: peers.c6i,
        },
      });
    };
  let O = {
    queryKey: T,
    enabled: E,
    staleTime: peers.Hf.FIVE_MINUTES,
    queryFn: D,
  };
  let k = peers.jt(O),
    A = k.data,
    j = ["mcp-settings", "app-connect", "tos", S];
  let M = x && app != null,
    N = async () => {
      if (app == null) throw Error("Expected app metadata to be present.");
      return peers.Uh.safeGet("/aip/connectors/{connector_id}/tos", {
        parameters: {
          path: {
            connector_id: app.id,
          },
        },
        additionalHeaders: {
          [peers.s6i]: peers.c6i,
        },
      });
    };
  let P = {
    queryKey: j,
    enabled: M,
    staleTime: peers.Hf.FIVE_MINUTES,
    queryFn: N,
  };
  let F = peers.jt(P),
    I = k.isPending,
    L = A == null ? "UNSUPPORTED" : peers.X3i(A);
  let R = L,
    z = A == null ? false : peers.Y3i(A.link_params_schema);
  let B = z,
    V =
      connectApp == null &&
      !I &&
      (k.isError || A == null || B || R === "UNSUPPORTED"),
    H = (e) => {
      let t = app?.installUrl?.trim();
      return t
        ? (peers.lb({
            event: e,
            href: t,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          }),
          w(false),
          true)
        : (v.get(peers.rh).danger(peers.q5r(y)), false);
    };
  let U = H,
    W = (e) => {
      if (app == null) return;
      let t = peers.V5r(app);
      if (!t) {
        v.get(peers.rh).danger(peers.q5r(y));
        return;
      }
      peers.lb({
        event: e,
        href: t,
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser",
      });
      onOpenChange(false);
    };
  let G = W,
    K = async () => {
      if (app == null) throw Error("Expected app metadata to be present.");
      return (
        onConnectStarted?.(),
        connectApp == null
          ? peers.H5r({
              app: {
                id: app.id,
                installUrl: app.installUrl,
                name: app.name,
              },
              connector: A,
              openInBrowser: peers.i6i,
              queryClient: b,
            })
          : (await connectApp({
                app,
              }))
            ? {
                kind: "connected-directly",
              }
            : {
                kind: "failed",
              }
      );
    };
  let q = (e) => {
    switch (e.kind) {
      case "connected-directly":
        showResultToasts &&
          v.get(peers.rh).success(
            peers.G5r({
              appName:
                app?.name ??
                y.formatMessage({
                  id: "settings.mcp.appConnectModal.fallbackAppName",
                  defaultMessage: "App",
                  description:
                    "Fallback app name used in app connect success toasts",
                }),
              intl: y,
            }),
          );
        onConnected && Promise.resolve(onConnected());
        w(false);
        return;
      case "oauth-started":
        app != null &&
          onOAuthStarted?.({
            app: {
              id: app.id,
              name: app.name,
            },
            redirectUrl: e.redirectUrl,
          });
        v.get(peers.rh).info(
          peers.W5r({
            intl: y,
          }),
        );
        closeOnOAuthStarted && w(false);
        return;
      case "browser-fallback":
        onExternalConnectStarted?.();
        w(false);
        return;
      case "failed":
        onConnectFailed?.("connect_failed");
        showResultToasts &&
          v
            .get(peers.rh)
            .danger(app?.installUrl?.trim() ? peers.K5r(y) : peers.q5r(y));
        closeOnFailedConnect && w(false);
        return;
    }
  };
  let ee = (e) => {
    onConnectFailed?.("request_failed");
    peers.Wf.error("Failed to connect app {}", {
      safe: {
        templateArgs: [app?.id ?? "unknown"],
      },
      sensitive: {
        error: e,
      },
    });
    v.get(peers.rh).danger(peers.K5r(y));
  };
  let te = {
    mutationFn: K,
    onSuccess: q,
    onError: ee,
  };
  let ne = peers.qt(te),
    re = ne.isPending || isCompletingConnection;
  if (app == null) return null;
  let ie = A?.status === peers.o6i,
    ae = A != null && !ie,
    oe = app.isAccessible && !isCompletingConnection,
    se = app.installUrl?.trim() || null;
  let ce = se,
    le = peers.V5r(app);
  let ue = le,
    de = null;
  oe ? (de = ue) : V && (de = ce);
  let fe = A?.name ?? app.name,
    pe = peers.Z3i(A);
  let me = pe,
    he = y.formatMessage({
      id: "settings.mcp.appConnectModal.permissionsTitle",
      defaultMessage: "Permissions always respected",
      description: "Fallback permissions blurb title",
    });
  let ge = y.formatMessage({
    id: "settings.mcp.appConnectModal.permissionsDescription",
    defaultMessage:
      "ChatGPT is strictly limited to permissions you've explicitly set. Disable access anytime to revoke permissions.",
    description: "Fallback permissions blurb description",
  });
  let _e = {
    title: he,
    description: ge,
  };
  let ve = y.formatMessage({
    id: "settings.mcp.appConnectModal.dataTitle",
    defaultMessage: "How ChatGPT uses data",
    description: "Fallback data usage blurb title",
  });
  let ye = y.formatMessage({
    id: "settings.mcp.appConnectModal.dataDescription",
    defaultMessage:
      "By default, we do not train on your data. Data from this connector may be used to provide you relevant and useful information.",
    description: "Fallback data usage blurb description",
  });
  let be = {
    title: ve,
    description: ye,
  };
  let xe = y.formatMessage({
    id: "settings.mcp.appConnectModal.riskTitle",
    defaultMessage: "Connectors may introduce risk",
    description: "Fallback risk blurb title",
  });
  let Se = y.formatMessage({
    id: "settings.mcp.appConnectModal.riskDescription",
    defaultMessage:
      "Connectors are designed to respect your privacy, but sites may attempt to steal your data.",
    description: "Fallback risk blurb description",
  });
  let Ce = {
    title: xe,
    description: Se,
  };
  let we = [_e, be, Ce];
  let Te = we,
    Ee = F.data?.blurbs ?? [];
  let De = Ee,
    Oe = De.length > 0 ? De : Te,
    ke = (e) => {
      if (!(I || re) && !ie) {
        if (oe) {
          G(e);
          return;
        }
        if (V) {
          U(e) && onExternalConnectStarted?.();
          return;
        }
        ne.mutate();
      }
    };
  let Ae = ke,
    je = !ie && !oe && !isCompletingConnection && !V && R === "OAUTH",
    Me = null;
  if (de != null) {
    let e = oe ? undefined : "external-browser",
      n;
    n = <PD className="icon-xs" href={de} openTarget={e} />;
    Me = n;
  } else if (je) {
    let e;
    e = <Oz className="icon-xs" />;
    Me = e;
  }
  let Ne = I ? (
    <span className="flex items-center justify-center gap-2">
      {<Jp className="icon-xs" />}
      {
        <Z
          id="settings.mcp.appConnectModal.loading"
          defaultMessage="Loading connection details..."
          description="Message shown while app connector details are loading in the app connect modal"
        />
      }
    </span>
  ) : k.isError && connectApp == null ? (
    <Z
      id="settings.mcp.appConnectModal.loadError"
      defaultMessage="Could not load this app's connection details. Continue in browser."
      description="Message shown when app connector details fail to load in app connect modal"
    />
  ) : B && connectApp == null ? (
    <Z
      id="settings.mcp.appConnectModal.browserRequiredLinkParams"
      defaultMessage="This app needs extra setup fields, so connection continues in browser."
      description="Message shown when app requires link params and must connect in browser"
    />
  ) : R === "UNSUPPORTED" && connectApp == null ? (
    <Z
      id="settings.mcp.appConnectModal.browserRequiredAuth"
      defaultMessage="This app uses an auth method that currently opens in browser."
      description="Message shown when app auth type is not supported in modal flow"
    />
  ) : null;
  let Pe = Ne,
    Fe = isCompletingConnection ? (
      <Z
        id="settings.mcp.appConnectModal.completingConnectionButton"
        defaultMessage="Finishing connection…"
        description="Primary button label shown while an app connection OAuth callback is still completing in the background"
      />
    ) : ie ? (
      <Z
        id="settings.mcp.appConnectModal.disabledByAdminButton"
        defaultMessage="Disabled by admin"
        description="Primary button label shown when the app is unavailable because it is disabled by admin"
      />
    ) : oe ? (
      <Z
        id="settings.mcp.appConnectModal.manageOnChatGpt"
        defaultMessage="Manage on ChatGPT"
        description="Primary button label shown when an app is already connected and can be managed on ChatGPT"
      />
    ) : V ? (
      <Z
        id="settings.mcp.appConnectModal.openInBrowser"
        defaultMessage="Open in browser"
        description="Primary button label when app connect needs to continue in browser"
      />
    ) : R === "OAUTH" ? (
      <Z
        id="settings.mcp.appConnectModal.continueToApp"
        defaultMessage={"Continue to {appName}"}
        description="Primary button label for OAuth connectors in app connect modal"
        values={{
          appName: fe,
        }}
      />
    ) : (
      <Z
        id="settings.mcp.appConnectModal.connectToApp"
        defaultMessage={"Connect {appName}"}
        description="Primary button label for no-auth connectors in app connect modal"
        values={{
          appName: fe,
        }}
      />
    );
  let Ie = Fe,
    Le = {
      "aria-describedby": undefined,
      style: {
        maxHeight: peers.d6i,
        width: peers.u6i,
      },
    };
  let Re = {
    maxHeight: peers.d6i,
  };
  let ze = (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm">
      {<ID className="size-12" />}
    </span>
  );
  let Be = (
    <span className="flex items-center gap-1">
      <span className="size-1.5 rounded-full bg-token-border-default" />
      <span className="size-1.5 rounded-full bg-token-border-default" />
      <span className="size-1.5 rounded-full bg-token-border-default" />
    </span>
  );
  let Ve = y.formatMessage(
    {
      id: "settings.mcp.appConnectModal.logoAlt",
      defaultMessage: "{appName} logo",
      description: "Alt text for connector logo in app connect modal",
    },
    {
      appName: app.name,
    },
  );
  let He = app.logoUrl ?? A?.logo_url ?? null,
    Ue = app.logoUrlDark ?? A?.logo_url_dark ?? null,
    We = <Mz className="icon-sm text-token-text-secondary" />;
  let Ge = (
    <div className="flex items-center gap-3">
      {ze}
      {Be}
      <span className="bg-token-surface-tertiary flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-token-border-default shadow-sm">
        {
          <P2
            alt={Ve}
            className="size-full object-contain"
            logoUrl={He}
            logoDarkUrl={Ue}
            fallback={We}
          />
        }
      </span>
    </div>
  );
  let Ke = (
    <Zk className="heading-dialog font-semibold">
      <Z
        id="settings.mcp.appConnectModal.title"
        defaultMessage={"Connect {appName}"}
        description="Title for the modal that connects an app from MCP settings"
        values={{
          appName: fe,
        }}
      />
    </Zk>
  );
  let qe = me ? (
    <div className="text-sm text-token-text-secondary">
      {
        <Z
          id="settings.mcp.appConnectModal.developedBy"
          defaultMessage={"Developed by {developer}"}
          description="Developer subtitle shown in app connect modal"
          values={{
            developer: me,
          }}
        />
      }
    </div>
  ) : null;
  let Je = (
    <div className="flex flex-col items-center gap-1 text-center">
      {Ke}
      {qe}
    </div>
  );
  let Ye = ae ? (
    <div className="flex items-center gap-2 text-base text-token-charts-green">
      {<Az className="icon-sm shrink-0" />}
      {
        <Z
          id="settings.mcp.appConnectModal.adminApproved"
          defaultMessage="Approved by your admin"
          description="Admin approval stamp text shown in app connect modal"
        />
      }
    </div>
  ) : null;
  let Xe = (
    <div className="flex flex-col items-center gap-4">
      {Ge}
      {Je}
      {Ye}
    </div>
  );
  let Ze = I || F.isPending ? <C3i /> : <T6i blurbs={Oe} />;
  let Qe = Pe ? (
    <div className="text-center text-sm text-token-description-foreground">
      {Pe}
    </div>
  ) : null;
  let $e = (
    <V3i
      className="relative grid min-h-0 flex-1 overflow-hidden"
      fadeClassName="inset-x-0"
      scrollClassName="min-h-0 overflow-y-auto group-data-[can-scroll-down=true]:pb-3"
    >
      <div className="flex flex-col gap-4">
        {Ze}
        {Qe}
      </div>
    </V3i>
  );
  let J = I || isCompletingConnection || ie,
    et = (
      <span className="flex items-center gap-1">
        {Ie}
        {Me}
      </span>
    );
  let tt = (
    <div className="flex flex-col gap-2">
      {
        <Np
          color="primary"
          size="large"
          className="w-full justify-center"
          loading={re}
          disabled={J}
          onClick={Ae}
        >
          {et}
        </Np>
      }
    </div>
  );
  let nt =
    V && !I ? (
      <div className="text-center text-xs text-token-description-foreground">
        {
          <Z
            id="settings.mcp.appConnectModal.browserFallbackDescription"
            defaultMessage="This connector needs setup in your browser."
            description="Helper text shown when app connect falls back to browser flow"
          />
        }
      </div>
    ) : null;
  let it = (
    <NA className="gap-6 overflow-hidden px-6 pt-8 pb-6" style={Re}>
      {Xe}
      {$e}
      {tt}
      {nt}
    </NA>
  );
  return (
    <Xk
      open={x}
      onOpenChange={w}
      size="default"
      contentClassName="h-fit max-w-[calc(100vw-2rem)] overflow-hidden"
      contentProps={Le}
    >
      {it}
    </Xk>
  );
}
