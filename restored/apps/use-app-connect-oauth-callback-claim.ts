// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `T2i`) / export `tB`.

export type UseAppConnectOAuthCallbackClaimPeers = {
  A_: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  D2i: (...args: unknown[]) => unknown;
  F2i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  M2i: (...args: unknown[]) => unknown;
  O2i: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rit: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  X1t: (...args: unknown[]) => unknown;
  appName: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  message: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
  oauthState: (...args: unknown[]) => unknown;
  resumeTarget: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
  w2i: (...args: unknown[]) => unknown;
};

let peers: UseAppConnectOAuthCallbackClaimPeers | null = null;

/** Wire useAppConnectOAuthCallbackClaim peers once companions land. */
export function setUseAppConnectOAuthCallbackClaimPeers(
  next: UseAppConnectOAuthCallbackClaimPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tB` / internal `T2i`.
 */
export function useAppConnectOAuthCallbackClaim() {
  if (peers == null) {
    throw new Error("useAppConnectOAuthCallbackClaim peers are not configured");
  }

  let e = (0, peers.M2i.c)(9),
    t = peers.Io(peers.Q),
    n = peers.rt(),
    r = peers.vE(),
    {
      claimAppConnectOAuthCallback: i,
      clearPendingAppConnect: a,
      getPendingAppConnectForCallbackUrl: o,
      markAppConnectOAuthCallbackCompleted: s,
      releaseAppConnectOAuthCallbackClaim: c,
    } = peers.w2i(),
    l;
  return (
    e[0] !== i ||
    e[1] !== a ||
    e[2] !== o ||
    e[3] !== r ||
    e[4] !== s ||
    e[5] !== n ||
    e[6] !== c ||
    e[7] !== t
      ? ((l = async (e) => {
          let {
              callbackReceivedAtMs: l,
              fullRedirectUrl: u,
              hasCallbackClaim: d,
            } = e,
            f = l ?? performance.timeOrigin + performance.now(),
            p = u.trim(),
            m = p.length === 0 ? null : o(p),
            h = m?.hostId ?? `local`,
            g = m?.oauthState ?? peers.D2i(p) ?? void 0;
          if (p.length === 0)
            return (
              a({
                oauthState: g,
              }),
              {
                kind: `missing-callback-data`,
              }
            );
          let _ =
            (d || i(p)) &&
            m?.resumeTarget.kind === `connector-auth-elicitation` &&
            !peers.F2i.has(m.oauthState)
              ? m.oauthState
              : null;
          _ != null && peers.F2i.add(_);
          let v;
          try {
            let e = await peers.Uh.safePost(
              `/aip/connectors/links/oauth/callback`,
              {
                requestBody: {
                  full_redirect_url: p,
                },
              },
            );
            g != null && s(g);
            let t = e.link?.name?.trim() || m?.appName || `App`;
            (peers.O2i({
              appId: e.link.connector_id,
              hostId: h,
              queryClient: n,
            }),
              (v = {
                kind: `success`,
                appId: e.link.connector_id,
                appName: t,
              }));
          } catch (e) {
            let t = e;
            peers.Wf.error(`Failed to finish app OAuth callback`, {
              safe: {},
              sensitive: {
                error: t,
              },
            });
            let n = (t instanceof Error ? peers.Rit(t) : null)?.message.trim();
            v = n
              ? {
                  kind: `request-failed`,
                  message: n,
                }
              : {
                  kind: `request-failed`,
                };
          }
          if (
            (v.kind === `success` &&
              r([`mcp-settings`, `app-connect`, v.appId]).catch((e) => {
                peers.Wf.error(
                  `Failed to refresh app connect state after OAuth callback`,
                  {
                    safe: {
                      appId: v.appId,
                    },
                    sensitive: {
                      error: e,
                    },
                  },
                );
              }),
            v.kind === `success` &&
              m != null &&
              (m.resumeTarget.kind === `connector-auth-elicitation` ||
                m.resumeTarget.kind === `tool-suggestion-elicitation`))
          ) {
            let e = m.resumeTarget,
              n = Math.round(performance.timeOrigin + performance.now() - f);
            try {
              await peers.Bf(`reply-with-mcp-server-elicitation-response`, {
                conversationId: e.conversationId,
                requestId: e.requestId,
                response:
                  e.kind === `tool-suggestion-elicitation`
                    ? e.response
                    : peers.A_(`accept`),
              });
            } catch (t) {
              let n = t;
              return (
                peers.Wf.error(`Failed to resume app connect elicitation`, {
                  safe: {
                    connectorId: m.appId,
                    elicitationKind: e.kind,
                  },
                  sensitive: {
                    error: n,
                  },
                }),
                _ != null && peers.F2i.delete(_),
                c(m.oauthState),
                v
              );
            }
            _ != null &&
              peers.Ub(t, peers.X1t, {
                connectorId: m.appId,
                oauthCallbackToResumeRequestDurationMs: n,
              });
          }
          return (
            a({
              oauthState: g,
            }),
            _ != null && peers.F2i.delete(_),
            v
          );
        }),
        (e[0] = i),
        (e[1] = a),
        (e[2] = o),
        (e[3] = r),
        (e[4] = s),
        (e[5] = n),
        (e[6] = c),
        (e[7] = t),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
