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
  const Alpha = peers.PD;
  const Bravo = peers.Oz;
  const Copper = peers.jp;
  const FormattedMessage = peers.Z;
  const Echo = peers.ID;
  const Falcon = peers.Mz;
  const Gamma = peers._P;
  const Harbor = peers.Zk;
  const Indigo = peers.Az;
  const C3i = peers.$3i;
  const T6i = peers.t6i;
  const V3i = peers.V3i;
  const Jade = peers.Np;
  const Kite = peers.nA;
  const Lemon = peers.Xk;
  const LogoMark = peers.Pz;
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
    value = peers.Io(peers.Q),
    marble = peers.Ju(),
    b = peers.rt(),
    nickel = app != null,
    onyx = app?.id ?? "",
    pearl = (wind) => {
      onOpenChange(wind);
    };
  let quartz = pearl,
    river = ["mcp-settings", "app-connect", onyx];
  let slate = nickel && app != null,
    timber = async () => {
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
  let umbra = {
    queryKey: river,
    enabled: slate,
    staleTime: peers.Hf.FIVE_MINUTES,
    queryFn: timber,
  };
  let violet = peers.jt(umbra),
    willow = violet.data,
    xenon = ["mcp-settings", "app-connect", "tos", onyx];
  let yellow = nickel && app != null,
    zinc = async () => {
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
  let amber = {
    queryKey: xenon,
    enabled: yellow,
    staleTime: peers.Hf.FIVE_MINUTES,
    queryFn: zinc,
  };
  let basalt = peers.jt(amber),
    cedar = violet.isPending,
    daisy = willow == null ? "UNSUPPORTED" : peers.X3i(willow);
  let ember = daisy,
    flint = willow == null ? false : peers.Y3i(willow.link_params_schema);
  let garnet = flint,
    hazel =
      connectApp == null &&
      !cedar &&
      (violet.isError || willow == null || garnet || ember === "UNSUPPORTED"),
    ivory = (yarrow) => {
      let azure = app?.installUrl?.trim();
      return azure
        ? (peers.lb({
            event: yarrow,
            href: azure,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          }),
          quartz(false),
          true)
        : (value.get(peers.rh).danger(peers.q5r(marble)), false);
    };
  let jasper = ivory,
    kelp = (birch) => {
      if (app == null) return;
      let canyon = peers.V5r(app);
      if (!canyon) {
        value.get(peers.rh).danger(peers.q5r(marble));
        return;
      }
      peers.lb({
        event: birch,
        href: canyon,
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser",
      });
      onOpenChange(false);
    };
  let lotus = kelp,
    mint = async () => {
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
              connector: willow,
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
  let q = (dew) => {
    switch (dew.kind) {
      case "connected-directly":
        showResultToasts &&
          value.get(peers.rh).success(
            peers.G5r({
              appName:
                app?.name ??
                marble.formatMessage({
                  id: "settings.mcp.appConnectModal.fallbackAppName",
                  defaultMessage: "App",
                  description:
                    "Fallback app name used in app connect success toasts",
                }),
              intl: marble,
            }),
          );
        onConnected && Promise.resolve(onConnected());
        quartz(false);
        return;
      case "oauth-started":
        app != null &&
          onOAuthStarted?.({
            app: {
              id: app.id,
              name: app.name,
            },
            redirectUrl: dew.redirectUrl,
          });
        value.get(peers.rh).info(
          peers.W5r({
            intl: marble,
          }),
        );
        closeOnOAuthStarted && quartz(false);
        return;
      case "browser-fallback":
        onExternalConnectStarted?.();
        quartz(false);
        return;
      case "failed":
        onConnectFailed?.("connect_failed");
        showResultToasts &&
          value
            .get(peers.rh)
            .danger(
              app?.installUrl?.trim() ? peers.K5r(marble) : peers.q5r(marble),
            );
        closeOnFailedConnect && quartz(false);
        return;
    }
  };
  let Nova = (ever) => {
    onConnectFailed?.("request_failed");
    peers.Wf.error("Failed to connect app {}", {
      safe: {
        templateArgs: [app?.id ?? "unknown"],
      },
      sensitive: {
        error: ever,
      },
    });
    value.get(peers.rh).danger(peers.K5r(marble));
  };
  let Olive = {
    mutationFn: mint,
    onSuccess: q,
    onError: Nova,
  };
  let Prism = peers.qt(Olive),
    Quill = Prism.isPending || isCompletingConnection;
  if (app == null) return null;
  let Reef = willow?.status === peers.o6i,
    Sage = willow != null && !Reef,
    Topaz = app.isAccessible && !isCompletingConnection,
    Ultra = app.installUrl?.trim() || null;
  let Vapor = Ultra,
    Wheat = peers.V5r(app);
  let Yarn = Wheat,
    Zephyr = null;
  Topaz ? (Zephyr = Yarn) : hazel && (Zephyr = Vapor);
  let Acorn = willow?.name ?? app.name,
    Bloom = peers.Z3i(willow);
  let Coral = Bloom,
    Drift = marble.formatMessage({
      id: "settings.mcp.appConnectModal.permissionsTitle",
      defaultMessage: "Permissions always respected",
      description: "Fallback permissions blurb title",
    });
  let Eagle = marble.formatMessage({
    id: "settings.mcp.appConnectModal.permissionsDescription",
    defaultMessage:
      "ChatGPT is strictly limited to permissions you've explicitly set. Disable access anytime to revoke permissions.",
    description: "Fallback permissions blurb description",
  });
  let _e = {
    title: Drift,
    description: Eagle,
  };
  let Frost = marble.formatMessage({
    id: "settings.mcp.appConnectModal.dataTitle",
    defaultMessage: "How ChatGPT uses data",
    description: "Fallback data usage blurb title",
  });
  let Glide = marble.formatMessage({
    id: "settings.mcp.appConnectModal.dataDescription",
    defaultMessage:
      "By default, we do not train on your data. Data from this connector may be used to provide you relevant and useful information.",
    description: "Fallback data usage blurb description",
  });
  let be = {
    title: Frost,
    description: Glide,
  };
  let Honey = marble.formatMessage({
    id: "settings.mcp.appConnectModal.riskTitle",
    defaultMessage: "Connectors may introduce risk",
    description: "Fallback risk blurb title",
  });
  let Iris = marble.formatMessage({
    id: "settings.mcp.appConnectModal.riskDescription",
    defaultMessage:
      "Connectors are designed to respect your privacy, but sites may attempt to steal your data.",
    description: "Fallback risk blurb description",
  });
  let Jewel = {
    title: Honey,
    description: Iris,
  };
  let Knoll = [_e, be, Jewel];
  let Lunar = Knoll,
    Moss = basalt.data?.blurbs ?? [];
  let North = Moss,
    Orbit = North.length > 0 ? North : Lunar,
    Pine = (field) => {
      if (!(cedar || Quill) && !Reef) {
        if (Topaz) {
          lotus(field);
          return;
        }
        if (hazel) {
          jasper(field) && onExternalConnectStarted?.();
          return;
        }
        Prism.mutate();
      }
    };
  let Quest = Pine,
    Ridge =
      !Reef && !Topaz && !isCompletingConnection && !hazel && ember === "OAUTH",
    Storm = null;
  if (Zephyr != null) {
    let grain = Topaz ? undefined : "external-browser",
      haven;
    haven = <Alpha className="icon-xs" href={Zephyr} openTarget={grain} />;
    Storm = haven;
  } else if (Ridge) {
    let ink;
    ink = <Bravo className="icon-xs" />;
    Storm = ink;
  }
  let Tide = cedar ? (
    <span className="flex items-center justify-center gap-2">
      {<Copper className="icon-xs" />}
      {
        <FormattedMessage
          id="settings.mcp.appConnectModal.loading"
          defaultMessage="Loading connection details..."
          description="Message shown while app connector details are loading in the app connect modal"
        />
      }
    </span>
  ) : violet.isError && connectApp == null ? (
    <FormattedMessage
      id="settings.mcp.appConnectModal.loadError"
      defaultMessage="Could not load this app's connection details. Continue in browser."
      description="Message shown when app connector details fail to load in app connect modal"
    />
  ) : garnet && connectApp == null ? (
    <FormattedMessage
      id="settings.mcp.appConnectModal.browserRequiredLinkParams"
      defaultMessage="This app needs extra setup fields, so connection continues in browser."
      description="Message shown when app requires link params and must connect in browser"
    />
  ) : ember === "UNSUPPORTED" && connectApp == null ? (
    <FormattedMessage
      id="settings.mcp.appConnectModal.browserRequiredAuth"
      defaultMessage="This app uses an auth method that currently opens in browser."
      description="Message shown when app auth type is not supported in modal flow"
    />
  ) : null;
  let Unity = Tide,
    Vale = isCompletingConnection ? (
      <FormattedMessage
        id="settings.mcp.appConnectModal.completingConnectionButton"
        defaultMessage="Finishing connection…"
        description="Primary button label shown while an app connection OAuth callback is still completing in the background"
      />
    ) : Reef ? (
      <FormattedMessage
        id="settings.mcp.appConnectModal.disabledByAdminButton"
        defaultMessage="Disabled by admin"
        description="Primary button label shown when the app is unavailable because it is disabled by admin"
      />
    ) : Topaz ? (
      <FormattedMessage
        id="settings.mcp.appConnectModal.manageOnChatGpt"
        defaultMessage="Manage on ChatGPT"
        description="Primary button label shown when an app is already connected and can be managed on ChatGPT"
      />
    ) : hazel ? (
      <FormattedMessage
        id="settings.mcp.appConnectModal.openInBrowser"
        defaultMessage="Open in browser"
        description="Primary button label when app connect needs to continue in browser"
      />
    ) : ember === "OAUTH" ? (
      <FormattedMessage
        id="settings.mcp.appConnectModal.continueToApp"
        defaultMessage={"Continue to {appName}"}
        description="Primary button label for OAuth connectors in app connect modal"
        values={{
          appName: Acorn,
        }}
      />
    ) : (
      <FormattedMessage
        id="settings.mcp.appConnectModal.connectToApp"
        defaultMessage={"Connect {appName}"}
        description="Primary button label for no-auth connectors in app connect modal"
        values={{
          appName: Acorn,
        }}
      />
    );
  let Wave = Vale,
    Apex = {
      "aria-describedby": undefined,
      style: {
        maxHeight: peers.d6i,
        width: peers.u6i,
      },
    };
  let Brook = {
    maxHeight: peers.d6i,
  };
  let Cliff = (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm">
      {<Echo className="size-12" />}
    </span>
  );
  let Dusk = (
    <span className="flex items-center gap-1">
      <span className="size-1.5 rounded-full bg-token-border-default" />
      <span className="size-1.5 rounded-full bg-token-border-default" />
      <span className="size-1.5 rounded-full bg-token-border-default" />
    </span>
  );
  let Elm = marble.formatMessage(
    {
      id: "settings.mcp.appConnectModal.logoAlt",
      defaultMessage: "{appName} logo",
      description: "Alt text for connector logo in app connect modal",
    },
    {
      appName: app.name,
    },
  );
  let Fern = app.logoUrl ?? willow?.logo_url ?? null,
    Grove = app.logoUrlDark ?? willow?.logo_url_dark ?? null,
    Hill = <Falcon className="icon-sm text-token-text-secondary" />;
  let Isle = (
    <div className="flex items-center gap-3">
      {Cliff}
      {Dusk}
      <span className="bg-token-surface-tertiary flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-token-border-default shadow-sm">
        {
          <LogoMark
            alt={Elm}
            className="size-full object-contain"
            logoUrl={Fern}
            logoDarkUrl={Grove}
            fallback={Hill}
          />
        }
      </span>
    </div>
  );
  let Juniper = (
    <Harbor className="heading-dialog font-semibold">
      <FormattedMessage
        id="settings.mcp.appConnectModal.title"
        defaultMessage={"Connect {appName}"}
        description="Title for the modal that connects an app from MCP settings"
        values={{
          appName: Acorn,
        }}
      />
    </Harbor>
  );
  let Lagoon = Coral ? (
    <div className="text-sm text-token-text-secondary">
      {
        <FormattedMessage
          id="settings.mcp.appConnectModal.developedBy"
          defaultMessage={"Developed by {developer}"}
          description="Developer subtitle shown in app connect modal"
          values={{
            developer: Coral,
          }}
        />
      }
    </div>
  ) : null;
  let Meadow = (
    <div className="flex flex-col items-center gap-1 text-center">
      {Juniper}
      {Lagoon}
    </div>
  );
  let Nest = Sage ? (
    <div className="flex items-center gap-2 text-base text-token-charts-green">
      {<Indigo className="icon-sm shrink-0" />}
      {
        <FormattedMessage
          id="settings.mcp.appConnectModal.adminApproved"
          defaultMessage="Approved by your admin"
          description="Admin approval stamp text shown in app connect modal"
        />
      }
    </div>
  ) : null;
  let Oak = (
    <div className="flex flex-col items-center gap-4">
      {Isle}
      {Meadow}
      {Nest}
    </div>
  );
  let Petal = cedar || basalt.isPending ? <C3i /> : <T6i blurbs={Orbit} />;
  let Quiet = Unity ? (
    <div className="text-center text-sm text-token-description-foreground">
      {Unity}
    </div>
  ) : null;
  let $e = (
    <V3i
      className="relative grid min-h-0 flex-1 overflow-hidden"
      fadeClassName="inset-x-0"
      scrollClassName="min-h-0 overflow-y-auto group-data-[can-scroll-down=true]:pb-3"
    >
      <div className="flex flex-col gap-4">
        {Petal}
        {Quiet}
      </div>
    </V3i>
  );
  let rain = cedar || isCompletingConnection || Reef,
    Seed = (
      <span className="flex items-center gap-1">
        {Wave}
        {Storm}
      </span>
    );
  let Trail = (
    <div className="flex flex-col gap-2">
      {
        <Jade
          color="primary"
          size="large"
          className="w-full justify-center"
          loading={Quill}
          disabled={rain}
          onClick={Quest}
        >
          {Seed}
        </Jade>
      }
    </div>
  );
  let Urn =
    hazel && !cedar ? (
      <div className="text-center text-xs text-token-description-foreground">
        {
          <FormattedMessage
            id="settings.mcp.appConnectModal.browserFallbackDescription"
            defaultMessage="This connector needs setup in your browser."
            description="Helper text shown when app connect falls back to browser flow"
          />
        }
      </div>
    ) : null;
  let Vine = (
    <Kite className="gap-6 overflow-hidden px-6 pt-8 pb-6" style={Brook}>
      {Oak}
      {$e}
      {Trail}
      {Urn}
    </Kite>
  );
  return (
    <Lemon
      open={nickel}
      onOpenChange={quartz}
      size="default"
      contentClassName="h-fit max-w-[calc(100vw-2rem)] overflow-hidden"
      contentProps={Apex}
    >
      {Vine}
    </Lemon>
  );
}
