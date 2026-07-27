// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `AN`) / export `Mq`.

export type BuildConversationComposerControllerArgsPeers = {
  $2r: (...args: unknown[]) => unknown;
  $n: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  CE: (...args: unknown[]) => unknown;
  E4r: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  Fpe: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  J2r: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rpe: (...args: unknown[]) => unknown;
  SE: (...args: unknown[]) => unknown;
  T4r: (...args: unknown[]) => unknown;
  W2r: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  _4r: (...args: unknown[]) => unknown;
  a4r: (...args: unknown[]) => unknown;
  allowedPermissionProfiles: (...args: unknown[]) => unknown;
  b4r: (...args: unknown[]) => unknown;
  catch: (...args: unknown[]) => unknown;
  defaultProfileId: (...args: unknown[]) => unknown;
  default_permissions: (...args: unknown[]) => unknown;
  e4r: (...args: unknown[]) => unknown;
  h4r: (...args: unknown[]) => unknown;
  jpe: (...args: unknown[]) => unknown;
  o4r: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  p4r: (...args: unknown[]) => unknown;
  rr: (...args: unknown[]) => unknown;
  s4r: (...args: unknown[]) => unknown;
  t4r: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  v4r: (...args: unknown[]) => unknown;
  wl: (...args: unknown[]) => unknown;
  x4r: (...args: unknown[]) => unknown;
  y4r: (...args: unknown[]) => unknown;
  z2r: (...args: unknown[]) => unknown;
};
let peers: BuildConversationComposerControllerArgsPeers | null = null;

/** Wire buildConversationComposerControllerArgs peers once companions land. */
export function setBuildConversationComposerControllerArgsPeers(
  next: BuildConversationComposerControllerArgsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mq` / internal `AN`.
 */
export function buildConversationComposerControllerArgs({
  conversationId,
  cwdOverride,
  hostId,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "buildConversationComposerControllerArgs peers are not configured",
    );
  }
  let r = peers.Io(peers.Q),
    i = peers.$n(),
    a = peers.Fo(peers.oD, conversationId),
    o = peers.Y(peers.CE),
    s = peers.Y(peers.SE),
    c = cwdOverride !== undefined,
    l = c ? (cwdOverride ?? null) : (a ?? o),
    u = c && l == null,
    d = !c && a == null && s,
    f = peers.x4r({
      conversationId,
      cwdOverride,
      hostId,
    }),
    p = peers.Fo(
      peers.J2r,
      {
        hostId,
        cwd: l,
      },
      {
        enabled: !u && !d,
      },
    ),
    m = u || d || p.isPending,
    h = m || p.isError,
    g =
      u || d || p.data == null
        ? null
        : peers.W2r(
            p.data,
            f.requirements,
            typeof f.resolvedConfig?.default_permissions == "string"
              ? f.resolvedConfig.default_permissions
              : null,
          ),
    _ = peers._4r(f),
    v = peers.h4r(f),
    y = peers.s4r(g?.defaultProfileId, v),
    b = y == null ? (g?.defaultProfileId ?? null) : null,
    x = peers.Fpe(f.requirements, f.resolvedConfig),
    S =
      g != null &&
      g.profiles.length > 1 &&
      f.requirements?.allowedPermissionProfiles != null &&
      peers.Rpe(f.requirements).length === 0 &&
      b == null,
    C = !f.isConfigDataPending && !S && b == null && x.length === 0,
    w = conversationId == null,
    [T, E] = peers.rr(peers.e4r),
    D = peers.Y(peers.E4r),
    O = JSON.stringify([hostId, l]),
    k = D[O] ?? peers.T4r,
    A = k.isSet ? k.value : b,
    j = (e) => {
      r.set(peers.E4r, (t) => {
        return {
          ...t,
          [O]: {
            isSet: true,
            value: e,
          },
        };
      });
    },
    { threadPermissionProfileId, threadMode, threadSandboxPolicy } =
      peers.b4r(conversationId),
    { availableAgentModes, configNonFullAccessMode, isGuardianModeAvailable } =
      peers.a4r({
        ...f,
        defaultWorkspaceWriteMode: v,
        hasAuthoritativeGuardianApprovalDefault:
          threadMode === "guardian-approvals" &&
          peers.z2r(hostId) === "guardian-approvals",
      }),
    R = () => {
      if (f.isConfigDataPending) return null;
      let { validPreferredNonFullAccessMode } = peers.p4r({
          availableAgentModes,
          preferredNonFullAccessMode: peers.$2r(hostId, i.get(peers.t4r)),
          isGuardianModeAvailable,
          isConfigDataPending: f.isConfigDataPending,
          configNonFullAccessMode,
        }),
        t =
          validPreferredNonFullAccessMode ??
          (isGuardianModeAvailable
            ? "guardian-approvals"
            : configNonFullAccessMode);
      return availableAgentModes.includes(t) ? t : null;
    },
    z = peers.y4r(hostId, T, isGuardianModeAvailable, null),
    B = z != null,
    V = peers.v4r(z, _),
    H =
      y != null && (!w || !k.isSet) && (z == null || !peers.o4r(z, x)) ? y : V,
    U = f.isConfigDataPending || x.includes(H),
    W =
      (u || f.isConfigDataPending) &&
      (z == null || z === "auto" || z === "granular"),
    G =
      conversationId != null &&
      threadMode != null &&
      (threadPermissionProfileId == null ||
        threadPermissionProfileId.startsWith(":")) &&
      (y != null || (z != null && peers.o4r(z, x))) &&
      threadMode !== H,
    K = (e) => {
      let t = peers.wl(
        e,
        threadSandboxPolicy?.type === "workspaceWrite"
          ? threadSandboxPolicy.writableRoots
          : l == null
            ? []
            : [l],
        f.resolvedConfig,
      );
      return {
        approvalPolicy: t.approvalPolicy,
        approvalsReviewer: t.approvalsReviewer,
        ...peers.jpe(t),
      };
    },
    q = (e, t, n) => {
      return n
        ? t == null
          ? K(e)
          : {
              permissions: t,
            }
        : null;
    },
    ee = (t) => {
      return conversationId == null
        ? null
        : peers.Bf("update-thread-settings-for-next-turn", {
            conversationId,
            threadSettings: K(t),
          });
    },
    te = (t) => {
      peers.Wf.error("Failed to set thread permissions mode", {
        safe: {
          conversationId,
        },
        sensitive: {
          error: t,
        },
      });
    },
    ne = (e) => {
      w && j(null);
      T[hostId] !== e &&
        E({
          ...T,
          [hostId]: e,
        });
      ee(e)?.catch(te);
    },
    re = (e) => {
      e &&
        E({
          ...T,
          [hostId]: V,
        });
    },
    ie = (t) => {
      if (w) {
        j(t);
        return;
      }
      conversationId != null &&
        peers
          .Bf("update-thread-settings-for-next-turn", {
            conversationId,
            threadSettings: {
              permissions: t,
            },
          })
          .catch(te);
    };
  if (conversationId != null && threadMode != null && !U)
    return {
      agentMode: threadMode,
      hasSetInitialAgentMode: true,
      isAgentModeLoading: false,
      isAgentModePending: false,
      getNonFullAccessFallbackMode: R,
      permissionOverrideThreadSettings: null,
      permissionProfileId: threadPermissionProfileId,
      shouldSendPermissionOverrides: false,
      shouldUseAppServerPermissionDefault: C,
      setAgentMode: ne,
      setHasSetInitialAgentMode: re,
      setPermissionProfileId: ie,
    };
  let ae = w ? A : G ? null : threadPermissionProfileId,
    oe =
      G ||
      (!C &&
        (w || (threadPermissionProfileId == null && threadMode !== "custom")));
  return {
    agentMode: H,
    hasSetInitialAgentMode: B || (w && (k.isSet || b != null)),
    isAgentModeLoading: W || (w && !k.isSet && m),
    isAgentModePending:
      W || (w && !k.isSet && h) || (w && !C && A == null && S),
    getNonFullAccessFallbackMode: R,
    permissionOverrideThreadSettings: q(H, ae, oe),
    permissionProfileId: ae,
    shouldSendPermissionOverrides: oe,
    shouldUseAppServerPermissionDefault: C,
    setAgentMode: ne,
    setHasSetInitialAgentMode: re,
    setPermissionProfileId: ie,
  };
}
