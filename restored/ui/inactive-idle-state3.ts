// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `irs`) / export `NC`.

export type InactiveIdleState3Peers = {
  $ns: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CX: (...args: unknown[]) => unknown;
  Cts: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  EX: (...args: unknown[]) => unknown;
  Ets: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Gns: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Its: (...args: unknown[]) => unknown;
  Jns: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Kns: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Mts: (...args: unknown[]) => unknown;
  Nts: (...args: unknown[]) => unknown;
  O1t: (...args: unknown[]) => unknown;
  Ots: (...args: unknown[]) => unknown;
  PZt: (...args: unknown[]) => unknown;
  Pb: (...args: unknown[]) => unknown;
  Pts: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qns: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  SX: (...args: unknown[]) => unknown;
  TX: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  Vns: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  X7n: (...args: unknown[]) => unknown;
  Xl: (...args: unknown[]) => unknown;
  Xns: (...args: unknown[]) => unknown;
  Yns: (...args: unknown[]) => unknown;
  Z7n: (...args: unknown[]) => unknown;
  Zns: (...args: unknown[]) => unknown;
  Zts: (...args: unknown[]) => unknown;
  _: (...args: unknown[]) => unknown;
  _at: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  a: (...args: unknown[]) => unknown;
  der: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fns: (...args: unknown[]) => unknown;
  gat: (...args: unknown[]) => unknown;
  gns: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  hx: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  k1t: (...args: unknown[]) => unknown;
  mns: (...args: unknown[]) => unknown;
  mx: (...args: unknown[]) => unknown;
  nat: (...args: unknown[]) => unknown;
  nrs: (...args: unknown[]) => unknown;
  pns: (...args: unknown[]) => unknown;
  qts: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rrs: (...args: unknown[]) => unknown;
  trs: (...args: unknown[]) => unknown;
  wX: (...args: unknown[]) => unknown;
  wts: (...args: unknown[]) => unknown;
  x9n: (...args: unknown[]) => unknown;
};
let peers: InactiveIdleState3Peers | null = null;

/** Wire inactiveIdleState3 peers once companions land. */
export function setInactiveIdleState3Peers(
  next: InactiveIdleState3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `NC` / internal `irs`.
 */
export function inactiveIdleState3() {
  if (peers == null) {
    throw new Error("inactiveIdleState3 peers are not configured");
  }
  return peers.e(() => {
    peers.Hb();
    peers.Ho();
    peers.Au();
    peers.DD();
    peers.hx();
    peers.ih();
    peers.RE();
    peers.Kb();
    peers._p();
    peers.ed();
    peers.Gf();
    peers.wts();
    peers.Nts();
    peers.x9n();
    peers.Its();
    peers.pns();
    peers.Zts();
    peers.der();
    peers.gns();
    peers._at();
    peers.Gns();
    Jns = 0.08;
    Yns = 0.04;
    Xns = 300;
    Zns = 8192;
    Qns = 4;
    $ns = "\n…earlier continuity truncated…\n";
    ers = "\n…memory summary truncated…\n";
    trs = peers.Ta(peers.Q, null);
    SX = peers.Ta(peers.Q, "inactive");
    CX = peers.Ta(peers.Q, false);
    wX = peers.Ta(peers.Q, false);
    nrs = peers.Ta(peers.Q, 0);
    TX = peers.Ta(peers.Q, "idle");
    rrs = class {
      codexVoiceBridge = null;
      conversationId = null;
      lastAutoEndActivityAtMs = null;
      manager = null;
      pendingStart = null;
      shouldPlayEndSound = false;
      requestedStop = false;
      realtimeAutoEndTimeout = null;
      realtimeVoiceHostClaim = new peers.mns();
      realtimeVoiceOrbAudioAnalyser = null;
      realtimeVoiceOutputLevel = 0;
      realtimeVoiceOutputSilenceTimeout = null;
      realtimeSessionAnalytics = null;
      realtimeSessionEndReason = null;
      realtimeSessionStartSource = null;
      realtimeSessionStartedAtMs = null;
      microphonePreference = null;
      preparingRuntime = null;
      runtime = null;
      startRequestId = 0;
      async start(
        e,
        {
          analyticsSessionId,
          codexResponseHandoffPrefix = "",
          codexResponseItemPrefix = null,
          codexResponsesAsItems = false,
          conversationId,
          hostId,
          initiallyMicrophoneMuted = false,
          initiallyMuted = false,
          microphone,
          outputModality,
          preferredPresentationSurface,
          prompt,
          realtimeContinuity,
          realtimeContinuityPrompt,
          realtimeMemorySummaryEnabled = false,
          realtimeMemorySummaryPrompt,
          realtimeSessionOverrides: _,
          source,
          userName,
        },
      ) {
        let b = e.get(peers.eD, hostId);
        if (b == null)
          throw (
            microphone?.stop(),
            Error(`App server manager for host ${hostId} not found`)
          );
        if (this.conversationId === peers.a && e.get(peers.SX) !== "inactive")
          return (
            microphone?.stop(),
            e.get(peers.SX) === "active"
              ? "active"
              : (this.pendingStart?.promise ?? "cancelled")
          );
        if (
          this.conversationId != null ||
          this.realtimeVoiceHostClaim.hasAttempt()
        )
          return (microphone?.stop(), "busy");
        let x = [],
          S = new peers.fns({
            codexResponseHandoffPrefix,
            codexResponseItemPrefix,
            codexResponsesAsItems,
            conversationId: peers.a,
            initiallyInputMuted: initiallyMicrophoneMuted,
            initiallyOutputMuted: initiallyMuted,
            manager: b,
            microphone,
            onWebRtcConnected: () => {
              if (this.runtime !== S) return;
              let t = this.pendingStart;
              t?.conversationId === peers.a &&
                ((t.webRtcConnected = true), this.activateRealtimeSession(e));
            },
            onConnectionFailed: () => {
              this.runtime === S && this.handleWebRtcConnectionFailed(e);
            },
            onMediaChanged: () => {
              this.runtime === S &&
                (this.bumpSessionGeneration(e),
                this.updateRealtimeVoiceOrbAudioStream());
            },
            onNotification: (t) => {
              this.runtime === S && this.handleRealtimeNotification(e, t);
            },
            onSdpError: (t) => {
              this.runtime === S && this.handleSdpError(e, t);
            },
            onSessionInitialized: () => {
              if (this.runtime === S) {
                x.length > 0 &&
                  x
                    .reduce((accumulator, current) => {
                      return accumulator.then(() => {
                        return S.appendText(current.role, current.text);
                      });
                    }, Promise.resolve())
                    .catch((error) => {
                      peers.Wf.warning(
                        "[Composer] failed to send realtime initial context",
                        {
                          safe: {},
                          sensitive: {
                            error,
                          },
                        },
                      );
                    });
                this.codexVoiceBridge?.initializeSession();
                let t = this.pendingStart;
                t?.conversationId === peers.a &&
                  ((t.sessionInitialized = true),
                  this.activateRealtimeSession(e));
              }
            },
            onUsageLimitApproaching: () => {
              this.runtime === S &&
                this.handleRealtimeUsageLimitApproaching(e, S);
            },
            outputModality,
            realtimeSessionId: analyticsSessionId,
            realtimeSessionOverrides: peers._,
          });
        this.preparingRuntime = S;
        this.microphonePreference != null &&
          S.refreshMicrophoneInput(this.microphonePreference).catch((error) => {
            peers.Wf.warning(
              "Failed to apply realtime voice microphone preference during startup",
              {
                safe: {},
                sensitive: {
                  error,
                },
              },
            );
          });
        let C;
        try {
          let e = this.realtimeVoiceHostClaim.claim(
            {
              hostId: b.getHostId(),
              conversationId: peers.a,
            },
            initiallyMicrophoneMuted,
            initiallyMuted,
            preferredPresentationSurface,
          );
          S.prepareWebRtcSession().catch(() => {});
          C = await e;
        } catch (e) {
          throw ((this.preparingRuntime = null), S.dispose(), e);
        }
        if (C.status !== "claimed")
          return (
            (this.preparingRuntime = null),
            S.dispose(),
            C.status === "busy" &&
              e.get(peers.rh).info(
                e.get(peers.LE).formatMessage({
                  id: "composer.realtime.alreadyActiveInAnotherWindow",
                  defaultMessage:
                    "Voice chat is already active in another window",
                  description:
                    "Toast shown when another app window already owns the realtime voice session",
                }),
              ),
            C.status
          );
        let w = [],
          T;
        try {
          let [t, , n, r] = await Promise.all([
            e.queryClient.fetchQuery(peers.Vns(e, hostId)),
            S.prepareWebRtcSession(),
            realtimeContinuity.enabled && peers.gp.realtimeContinuity != null
              ? peers.gp.realtimeContinuity
                  .read({
                    threadId: peers.a,
                    maxItems: realtimeContinuity.maxItems,
                  })
                  .catch((error) => {
                    return (
                      peers.Wf.warning(
                        "[Composer] failed to read realtime continuity",
                        {
                          safe: {},
                          sensitive: {
                            error,
                          },
                        },
                      ),
                      []
                    );
                  })
              : [],
            realtimeMemorySummaryEnabled && peers.gp.realtimeMemory != null
              ? peers.gp.realtimeMemory.readSummary().catch((error) => {
                  return (
                    peers.Wf.warning(
                      "[Composer] failed to read realtime memory summary",
                      {
                        safe: {},
                        sensitive: {
                          error,
                        },
                      },
                    ),
                    null
                  );
                })
              : null,
          ]);
          T = t.effectiveVoiceSlug;
          peers.Wf.info("[Composer] resolved realtime continuity", {
            safe: {
              enabled: realtimeContinuity.enabled,
              itemCount: n.length,
              serviceAvailable: peers.gp.realtimeContinuity != null,
            },
          });
          peers.Wf.info("[Composer] resolved realtime memory summary", {
            safe: {
              enabled: realtimeMemorySummaryEnabled,
              present: r != null,
              serviceAvailable: peers.gp.realtimeMemory != null,
            },
          });
          r != null && w.push(peers.Z7n(r, realtimeMemorySummaryPrompt));
          n.length > 0 &&
            w.push({
              role: "user",
              text: peers.X7n(n, realtimeContinuityPrompt),
            });
        } catch (e) {
          throw (
            this.realtimeVoiceHostClaim.release(),
            (this.preparingRuntime = null),
            S.dispose(),
            e
          );
        }
        if (
          !this.realtimeVoiceHostClaim.setControlHandler((t) => {
            this.handleRealtimeVoiceHostControl(e, peers.a, t);
          })
        )
          return ((this.preparingRuntime = null), S.dispose(), "cancelled");
        let E = this.startRequestId + 1;
        this.startRequestId = E;
        let D = {
          ...peers.Xl(),
          webRtcConnected: false,
          conversationId: peers.a,
          requestAccepted: false,
          requestId: E,
          sessionInitialized: false,
          started: false,
        };
        this.pendingStart = D;
        this.conversationId = peers.a;
        this.manager = b;
        this.requestedStop = false;
        this.resetRealtimeAutoEndState();
        this.realtimeSessionAnalytics = {
          completedRealDelegationIds: new Set(),
          realDelegationCount: 0,
          sessionId: analyticsSessionId,
          startSource: peers.Pts(source),
        };
        this.realtimeSessionEndReason = null;
        this.realtimeSessionStartSource = source;
        this.preparingRuntime = null;
        this.runtime = S;
        let O = new peers.gat((t) => {
          this.runtime === S &&
            this.realtimeVoiceOrbAudioAnalyser === O &&
            (peers.nat(t), this.handleRealtimeVoiceOrbAudioLevels(e, t));
        });
        this.realtimeVoiceOrbAudioAnalyser = O;
        S.setInputMuted(C.microphoneMuted);
        S.setOutputMuted(C.outputMuted);
        S.hasWebRtcSession() && this.bumpSessionGeneration(e);
        let k =
          w.length > 0 && peers._?.version === "v3" ? peers.Kns(w) : undefined;
        return (
          (x = k == null ? w : []),
          (this.codexVoiceBridge = new peers.Cts({
            appendText: (e, t) => {
              return S.appendText(e, t);
            },
            continuityConfig: realtimeContinuity,
            continuityService: peers.gp.realtimeContinuity,
            locator: {
              hostId: b.getHostId(),
              conversationId: peers.a,
            },
            userName: w.length > 0 ? null : userName,
          })),
          e.set(peers.trs, peers.a),
          e.set(peers.CX, C.outputMuted),
          e.set(peers.wX, C.microphoneMuted),
          e.set(peers.SX, "starting"),
          this.setRealtimeVoiceActivity(e, "idle"),
          S.start(T, prompt, k).then(
            (value) => {
              if (this.pendingStart === D) {
                if (!value) {
                  this.cancelPendingStart();
                  return;
                }
                D.requestAccepted = true;
                this.activateRealtimeSession(e);
              }
            },
            (t) => {
              if (this.pendingStart !== D) return;
              let n = this.requestedStop;
              this.failPendingStart(t);
              n &&
                this.conversationId === peers.a &&
                ((this.startRequestId += 1),
                this.stopLocalSession(),
                this.resetRealtimeState(
                  e,
                  this.realtimeSessionEndReason ??
                    peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
                ));
            },
          ),
          D.promise.catch((error) => {
            throw (
              this.startRequestId === E &&
                this.conversationId === peers.a &&
                ((this.startRequestId += 1),
                this.stopLocalSession(),
                this.resetRealtimeState(
                  e,
                  peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
                ),
                this.realtimeVoiceHostClaim.release()),
              error
            );
          })
        );
      }
      async stop(
        e,
        t,
        n = peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
      ) {
        let r = e.get(peers.SX);
        if (this.conversationId !== t || r === "inactive" || r === "stopping")
          return;
        let i = this.runtime,
          a = this.startRequestId,
          o = this.realtimeVoiceHostClaim.getClaimId();
        if (
          ((this.requestedStop = true),
          (this.realtimeSessionEndReason = n),
          this.clearRealtimeAutoEndTimeout(),
          e.set(peers.SX, "stopping"),
          this.publishRealtimeVoiceHostState(e),
          r === "starting" && !i?.hasWebRtcSession())
        ) {
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(e, n);
          this.realtimeVoiceHostClaim.release(o);
          return;
        }
        if (i == null) {
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(e, n);
          this.realtimeVoiceHostClaim.release(o);
          return;
        }
        try {
          if (
            (await i.stop(this.shouldPlayEndSound),
            this.realtimeVoiceHostClaim.release(o),
            this.startRequestId !== peers.a || this.conversationId !== t)
          )
            return;
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(e, n);
        } catch (n) {
          if (this.startRequestId !== peers.a || this.conversationId !== t) {
            this.realtimeVoiceHostClaim.release(o);
            return;
          }
          this.requestedStop &&
            this.conversationId === t &&
            (e.set(peers.SX, r),
            (this.requestedStop = false),
            (this.realtimeSessionEndReason = null),
            r === "active"
              ? this.scheduleRealtimeAutoEnd(e)
              : this.pendingStart?.started &&
                this.pendingStart.requestAccepted &&
                this.activateRealtimeSession(e),
            this.publishRealtimeVoiceHostState(e));
          this.showRealtimeError(
            e,
            e.get(peers.LE).formatMessage({
              id: "composer.realtime.stopError",
              defaultMessage: "Unable to stop voice chat",
              description:
                "Toast shown when the desktop app could not stop a realtime voice session",
            }),
          );
          peers.Wf.error("[Composer] failed to stop realtime voice", {
            safe: {},
            sensitive: {
              error: n,
            },
          });
        }
      }
      refreshMicrophoneInput(e) {
        return (
          (this.microphonePreference = e),
          (this.runtime ?? this.preparingRuntime)?.refreshMicrophoneInput(e) ??
            Promise.resolve()
        );
      }
      cancelStart(e) {
        if ((this.cancelPreparingRuntime(), this.conversationId == null))
          return;
        e.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(e);
        let t = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        this.requestedStop = true;
        let n = this.terminateLocalSession();
        this.resetRealtimeState(
          e,
          peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
        );
        this.releaseHostClaimAfterCleanup(
          n,
          t,
          "[Composer] failed to stop cancelled realtime startup",
        );
      }
      stopForAppUnmount(e) {
        if ((this.cancelPreparingRuntime(), this.conversationId == null))
          return;
        e.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(e);
        let t = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        this.shouldPlayEndSound = false;
        this.requestedStop = true;
        let n = this.terminateLocalSession();
        this.resetRealtimeState(
          e,
          peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED,
        );
        this.releaseHostClaimAfterCleanup(
          n,
          t,
          "[Composer] failed to stop realtime on app cleanup",
        );
      }
      toggleMute(e, t) {
        let n = e.get(peers.SX);
        if (this.conversationId !== t || (n !== "starting" && n !== "active"))
          return;
        let r = !e.get(peers.CX);
        this.applyRealtimeMuteState(e, r);
      }
      toggleMicrophoneMute(e, t) {
        if (
          this.conversationId !== t ||
          (e.get(peers.SX) !== "starting" && e.get(peers.SX) !== "active") ||
          this.runtime == null
        )
          return;
        let n = !e.get(peers.wX);
        this.applyRealtimeMicrophoneMuteState(e, n);
      }
      getStream(e) {
        return this.conversationId === e
          ? (this.runtime?.getInputStream() ?? null)
          : null;
      }
      getOutputStream(e) {
        return this.conversationId === e
          ? (this.runtime?.getOutputStream() ?? null)
          : null;
      }
      handleRealtimeNotification(e, t) {
        if (
          !(
            this.conversationId == null ||
            t.params.threadId !== this.conversationId
          )
        )
          switch (t.method) {
            case "thread/archived":
              this.startRequestId += 1;
              this.stopLocalSession();
              this.resetRealtimeState(
                e,
                this.realtimeSessionEndReason ??
                  peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
              );
              this.realtimeVoiceHostClaim.release();
              break;
            case "turn/started":
              if (e.get(peers.SX) === "inactive") break;
              this.markRealtimeAutoEndActivity(e);
              break;
            case "turn/completed":
              this.markRealtimeAutoEndActivity(e);
              break;
            case "thread/realtime/started": {
              let n = this.pendingStart;
              n?.conversationId === t.params.threadId &&
                ((n.started = true), this.activateRealtimeSession(e));
              break;
            }
            case "thread/realtime/transcript/delta":
              this.markRealtimeAutoEndActivity(e);
              this.codexVoiceBridge?.observeTranscriptDelta(
                t.params.role,
                t.params.delta,
              );
              break;
            case "thread/realtime/transcript/done":
              this.markRealtimeAutoEndActivity(e);
              this.codexVoiceBridge?.observeTranscriptDone(
                t.params.role,
                t.params.text,
              );
              break;
            case "thread/realtime/error":
              this.handleRealtimeError(e, t.params.message);
              break;
            case "thread/realtime/closed":
              this.handleRealtimeClosed(e, t.params.reason);
              break;
          }
      }
      recordRealDelegation(e) {
        let t = this.realtimeSessionAnalytics;
        t == null ||
          this.realtimeSessionStartedAtMs == null ||
          t.completedRealDelegationIds.has(e.delegationId) ||
          (t.completedRealDelegationIds.add(e.delegationId),
          (t.realDelegationCount += 1));
      }
      handleRealtimeUsageLimitApproaching(e, t) {
        let n = e.get(peers.LE).formatMessage({
          id: "composer.realtime.usageLimitApproaching",
          defaultMessage:
            "You’re approaching your Codex usage limit, so this voice chat may end soon",
          description:
            "Warning shown and spoken when a voice chat is approaching the user's Codex usage limit",
        });
        this.showRealtimeToast(e, {
          kind: "warning",
          message: n,
        });
        t.appendSpeech(
          `Urgent system notice: Interrupt the user or yourself if either is speaking. Say only this warning immediately, exactly as written, before continuing anything else: “${n}”`,
        ).catch((error) => {
          peers.Wf.warning(
            "[Composer] failed to speak realtime usage warning",
            {
              safe: {},
              sensitive: {
                error,
              },
            },
          );
        });
      }
      handleSdpError(e, t) {
        if (this.conversationId == null) return;
        this.failPendingStart(t) ||
          this.showRealtimeError(
            e,
            e.get(peers.LE).formatMessage({
              id: "composer.realtime.startError",
              defaultMessage: "Unable to start voice chat",
              description:
                "Toast shown when the desktop app could not start a realtime voice session",
            }),
          );
        e.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(e);
        let n = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        let r = this.terminateLocalSession();
        this.resetRealtimeState(
          e,
          this.realtimeSessionEndReason ??
            peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
        );
        peers.Wf.error("[Composer] failed to accept realtime WebRTC SDP", {
          safe: {},
          sensitive: {
            error: t,
          },
        });
        this.releaseHostClaimAfterCleanup(
          r,
          n,
          "[Composer] failed to stop realtime after SDP error",
        );
      }
      handleRealtimeError(e, t) {
        this.conversationId != null &&
          (peers.Wf.error("Realtime voice session failed", {
            safe: {},
            sensitive: {
              conversationId: this.conversationId,
              message: t,
            },
          }),
          this.failPendingStart(Error(t)) ||
            this.showRealtimeError(
              e,
              e.get(peers.LE).formatMessage(
                {
                  id: "composer.realtime.error",
                  defaultMessage: "Voice chat error: {message}",
                  description:
                    "Toast shown when a realtime voice session reports an error",
                },
                {
                  message: t,
                },
              ),
            ),
          (this.startRequestId += 1),
          this.stopLocalSession(),
          this.resetRealtimeState(
            e,
            this.realtimeSessionEndReason ??
              peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
          ),
          this.realtimeVoiceHostClaim.release());
      }
      handleRealtimeClosed(e, t) {
        if (this.conversationId != null && t !== "transport_closed") {
          if (this.requestedStop) this.cancelPendingStart();
          else if (
            (peers.Wf.warning("Realtime voice session closed unexpectedly", {
              safe: {},
              sensitive: {
                conversationId: this.conversationId,
                reason: t,
              },
            }),
            this.failPendingStart(
              Error(t ?? "Voice chat closed before startup completed"),
            ))
          )
            return;
          this.requestedStop ||
            this.showRealtimeError(
              e,
              t == null
                ? e.get(peers.LE).formatMessage({
                    id: "composer.realtime.closedUnexpectedly",
                    defaultMessage: "Voice chat closed unexpectedly",
                    description:
                      "Toast shown when a realtime voice session closes unexpectedly without a reason",
                  })
                : e.get(peers.LE).formatMessage(
                    {
                      id: "composer.realtime.closed",
                      defaultMessage: "Voice chat closed: {reason}",
                      description:
                        "Toast shown when a realtime voice session closes unexpectedly",
                    },
                    {
                      reason: t,
                    },
                  ),
            );
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(
            e,
            this.realtimeSessionEndReason ??
              peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_SERVER_CLOSED,
          );
          this.realtimeVoiceHostClaim.release();
        }
      }
      handleWebRtcConnectionFailed(e) {
        if (this.conversationId == null) return;
        peers.Wf.error("Realtime voice WebRTC connection failed", {
          safe: {},
          sensitive: {
            conversationId: this.conversationId,
          },
        });
        this.failPendingStart(Error("Voice chat connection failed")) ||
          this.showRealtimeError(
            e,
            e.get(peers.LE).formatMessage({
              id: "composer.realtime.connectionError",
              defaultMessage: "Voice chat connection failed",
              description:
                "Toast shown when the realtime voice WebRTC connection fails",
            }),
          );
        e.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(e);
        let t = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        let n = this.terminateLocalSession();
        this.resetRealtimeState(
          e,
          this.realtimeSessionEndReason ??
            peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
        );
        this.releaseHostClaimAfterCleanup(
          n,
          t,
          "[Composer] failed to stop realtime after WebRTC error",
        );
      }
      markRealtimeAutoEndActivity(e) {
        this.lastAutoEndActivityAtMs = Date.now();
        this.scheduleRealtimeAutoEnd(e);
      }
      scheduleRealtimeAutoEnd(e) {
        this.clearRealtimeAutoEndTimeout();
        let t = this.getRealtimeAutoEndDecision(e);
        t.delayMs != null &&
          (this.realtimeAutoEndTimeout = setTimeout(() => {
            this.stopRealtimeForAutoEnd(e);
          }, t.delayMs));
      }
      async stopRealtimeForAutoEnd(e) {
        let t = this.conversationId;
        if (t == null) return;
        let n = this.getRealtimeAutoEndDecision(e);
        if (n.delayMs != null) {
          if (n.delayMs > 0) {
            this.scheduleRealtimeAutoEnd(e);
            return;
          }
          await this.stop(
            e,
            t,
            peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_INACTIVITY,
          );
        }
      }
      getRealtimeAutoEndDecision(e) {
        let t = e.get(peers.Mts),
          n =
            this.conversationId == null
              ? null
              : this.manager?.getConversation(this.conversationId);
        return peers.Ots({
          hasActiveOrchestratorWork: n != null && peers.mx(n),
          isEnabled: peers.Ets(this.realtimeSessionStartSource, t),
          lastActivityAtMs: this.lastAutoEndActivityAtMs,
          nowMs: Date.now(),
          phase: e.get(peers.SX),
          sessionStartedAtMs: this.realtimeSessionStartedAtMs,
          settings: t,
        });
      }
      applyRealtimeMuteState(e, t) {
        this.runtime?.setOutputMuted(t);
        e.set(peers.CX, t);
        this.publishRealtimeVoiceHostState(e);
      }
      applyRealtimeMicrophoneMuteState(e, t) {
        this.runtime?.setInputMuted(t);
        e.set(peers.wX, t);
        this.publishRealtimeVoiceHostState(e);
      }
      handleRealtimeVoiceHostControl(e, t, n) {
        if (this.conversationId === t)
          switch (n.type) {
            case "stop":
              this.stop(e, t);
              break;
            case "terminate":
              this.startRequestId += 1;
              this.shouldPlayEndSound = false;
              this.requestedStop = true;
              this.stopLocalSession();
              this.resetRealtimeState(
                e,
                peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED,
              );
              this.realtimeVoiceHostClaim.release();
              break;
            case "set-microphone-muted":
              e.get(peers.wX) !== n.muted &&
                this.applyRealtimeMicrophoneMuteState(e, n.muted);
              break;
            case "set-output-muted":
              e.get(peers.CX) !== n.muted &&
                this.applyRealtimeMuteState(e, n.muted);
              break;
            case "record-real-delegation":
              this.recordRealDelegation(n.delegation);
              break;
            case "simulate-usage-limit-approaching-for-debug":
              this.runtime?.simulateUsageLimitApproachingForDebug();
              break;
          }
      }
      setRealtimeVoiceActivity(e, t) {
        e.set(peers.TX, t);
        this.publishRealtimeVoiceHostState(e);
      }
      publishRealtimeVoiceHostState(e) {
        let t = e.get(peers.SX);
        t !== "inactive" &&
          (this.realtimeVoiceHostClaim.publish({
            activity: e.get(peers.TX),
            microphoneMuted: e.get(peers.wX),
            outputMuted: e.get(peers.CX),
            phase: t,
          }),
          this.updateRealtimeVoiceOrbAudioStream());
      }
      updateRealtimeVoiceOrbAudioStream() {
        this.realtimeVoiceOrbAudioAnalyser?.setStream(
          this.runtime?.getOutputStream() ?? null,
        );
      }
      handleRealtimeVoiceOrbAudioLevels(e, t) {
        if (
          ((this.realtimeVoiceOutputLevel = t.overall),
          e.get(peers.SX) === "active")
        ) {
          if (t.overall >= peers.Jns) {
            this.clearRealtimeVoiceOutputSilenceTimeout();
            e.get(peers.TX) !== "speaking" &&
              this.setRealtimeVoiceActivity(e, "speaking");
            return;
          }
          if (t.overall > peers.Yns) {
            this.clearRealtimeVoiceOutputSilenceTimeout();
            return;
          }
          e.get(peers.TX) !== "speaking" ||
            this.realtimeVoiceOutputSilenceTimeout != null ||
            (this.realtimeVoiceOutputSilenceTimeout = setTimeout(() => {
              this.realtimeVoiceOutputSilenceTimeout = null;
              e.get(peers.SX) === "active" &&
                e.get(peers.TX) === "speaking" &&
                this.realtimeVoiceOutputLevel <= peers.Yns &&
                this.setRealtimeVoiceActivity(e, "listening");
            }, peers.Xns));
        }
      }
      clearRealtimeVoiceOutputSilenceTimeout() {
        this.realtimeVoiceOutputSilenceTimeout != null &&
          (clearTimeout(this.realtimeVoiceOutputSilenceTimeout),
          (this.realtimeVoiceOutputSilenceTimeout = null));
      }
      disposeRealtimeVoiceOrbAudioAnalyser() {
        this.clearRealtimeVoiceOutputSilenceTimeout();
        this.realtimeVoiceOutputLevel = 0;
        let e = this.realtimeVoiceOrbAudioAnalyser;
        this.realtimeVoiceOrbAudioAnalyser = null;
        e != null && peers.nat(null);
        e?.dispose();
      }
      showRealtimeError(e, t) {
        this.showRealtimeToast(e, {
          kind: "danger",
          message: t,
        });
      }
      showRealtimeToast(e, t) {
        let n = () => {
            switch (t.kind) {
              case "danger":
                e.get(peers.rh).danger(t.message);
                break;
              case "warning":
                e.get(peers.rh).warning(t.message);
                break;
            }
          },
          r = peers.gp.realtimeVoicePresentation;
        if (r == null || this.conversationId == null || this.manager == null) {
          n();
          return;
        }
        r.reportToast(
          {
            conversationId: this.conversationId,
            hostId: this.manager.getHostId(),
          },
          t,
        ).then(
          (value) => {
            value || n();
          },
          (e) => {
            peers.Wf.warning("Failed to route realtime voice toast", {
              safe: {},
              sensitive: {
                error: e,
              },
            });
            n();
          },
        );
      }
      releaseHostClaimAfterCleanup(e, t, n) {
        e.catch((error) => {
          peers.Wf.warning(n, {
            safe: {},
            sensitive: {
              error,
            },
          });
        }).finally(() => {
          this.realtimeVoiceHostClaim.release(t);
        });
      }
      clearRealtimeAutoEndTimeout() {
        this.realtimeAutoEndTimeout != null &&
          (clearTimeout(this.realtimeAutoEndTimeout),
          (this.realtimeAutoEndTimeout = null));
      }
      resetRealtimeAutoEndState() {
        this.clearRealtimeAutoEndTimeout();
        this.lastAutoEndActivityAtMs = null;
        this.realtimeSessionStartedAtMs = null;
      }
      activateRealtimeSession(e) {
        let t = this.pendingStart;
        if (
          t == null ||
          t.requestId !== this.startRequestId ||
          this.requestedStop ||
          !t.requestAccepted ||
          !t.started ||
          !t.webRtcConnected ||
          !t.sessionInitialized
        )
          return;
        this.pendingStart = null;
        e.set(peers.SX, "active");
        this.setRealtimeVoiceActivity(e, "listening");
        peers.qts();
        this.shouldPlayEndSound = true;
        this.realtimeSessionStartedAtMs = Date.now();
        this.scheduleRealtimeAutoEnd(e);
        this.codexVoiceBridge?.activate();
        let n = this.realtimeSessionAnalytics;
        n != null &&
          peers.Ub(e, peers.O1t, {
            action:
              peers.PZt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_STARTED,
            sessionId: n.sessionId,
            startSource: n.startSource,
          });
        t.resolve("active");
      }
      cancelPendingStart() {
        let e = this.pendingStart;
        e != null && ((this.pendingStart = null), e.resolve("cancelled"));
      }
      cancelPreparingRuntime() {
        this.realtimeVoiceHostClaim.requestPendingStop();
        this.preparingRuntime?.dispose();
        this.preparingRuntime = null;
      }
      failPendingStart(e) {
        let t = this.pendingStart;
        return t == null
          ? false
          : ((this.pendingStart = null),
            this.requestedStop ? t.resolve("cancelled") : t.reject(e),
            true);
      }
      stopLocalSession() {
        this.disposeRealtimeVoiceOrbAudioAnalyser();
        this.codexVoiceBridge?.stop();
        this.codexVoiceBridge = null;
        let e = this.runtime;
        e?.dispose(this.shouldPlayEndSound);
        this.runtime === e && (this.runtime = null);
      }
      terminateLocalSession() {
        this.disposeRealtimeVoiceOrbAudioAnalyser();
        this.codexVoiceBridge?.stop();
        this.codexVoiceBridge = null;
        let e = this.runtime,
          t = e?.terminate(this.shouldPlayEndSound) ?? Promise.resolve();
        return (this.runtime === e && (this.runtime = null), t);
      }
      resetRealtimeState(e, t) {
        this.cancelPendingStart();
        this.logRealtimeSessionEnded(e, t);
        this.resetRealtimeAutoEndState();
        this.conversationId = null;
        this.manager = null;
        this.shouldPlayEndSound = false;
        this.requestedStop = false;
        this.realtimeSessionAnalytics = null;
        this.realtimeSessionEndReason = null;
        this.realtimeSessionStartSource = null;
        this.realtimeVoiceHostClaim.clearAttempt();
        e.set(peers.trs, null);
        e.set(peers.CX, false);
        e.set(peers.wX, false);
        e.set(peers.SX, "inactive");
        e.set(peers.TX, "idle");
      }
      logRealtimeSessionEnded(e, t) {
        let n = this.realtimeSessionAnalytics;
        n == null ||
          this.realtimeSessionStartedAtMs == null ||
          peers.Ub(e, peers.k1t, {
            durationMs: Date.now() - this.realtimeSessionStartedAtMs,
            endReason: t,
            realDelegationCount: n.realDelegationCount,
            sessionId: n.sessionId,
            startSource: n.startSource,
          });
      }
      bumpSessionGeneration(e) {
        e.set(peers.nrs, (e) => {
          return e + 1;
        });
      }
    };
    EX = new peers.rrs();
  });
}
