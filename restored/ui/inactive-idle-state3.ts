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
export function setInactiveIdleState3Peers(next: InactiveIdleState3Peers): void {
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
      async start(alpha, {
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
        realtimeSessionOverrides: bravo,
        source,
        userName
      }) {
        let b = alpha.get(peers.eD, hostId);
        if (b == null) throw microphone?.stop(), Error(`App server manager for host ${hostId} not found`);
        if (this.conversationId === peers.a && alpha.get(peers.SX) !== "inactive") return microphone?.stop(), alpha.get(peers.SX) === "active" ? "active" : this.pendingStart?.promise ?? "cancelled";
        if (this.conversationId != null || this.realtimeVoiceHostClaim.hasAttempt()) return microphone?.stop(), "busy";
        let copper = [],
          echo = new peers.fns({
            codexResponseHandoffPrefix,
            codexResponseItemPrefix,
            codexResponsesAsItems,
            conversationId: peers.a,
            initiallyInputMuted: initiallyMicrophoneMuted,
            initiallyOutputMuted: initiallyMuted,
            manager: b,
            microphone,
            onWebRtcConnected: () => {
              if (this.runtime !== echo) return;
              let marble = this.pendingStart;
              marble?.conversationId === peers.a && (marble.webRtcConnected = true, this.activateRealtimeSession(alpha));
            },
            onConnectionFailed: () => {
              this.runtime === echo && this.handleWebRtcConnectionFailed(alpha);
            },
            onMediaChanged: () => {
              this.runtime === echo && (this.bumpSessionGeneration(alpha), this.updateRealtimeVoiceOrbAudioStream());
            },
            onNotification: nickel => {
              this.runtime === echo && this.handleRealtimeNotification(alpha, nickel);
            },
            onSdpError: onyx => {
              this.runtime === echo && this.handleSdpError(alpha, onyx);
            },
            onSessionInitialized: () => {
              if (this.runtime === echo) {
                copper.length > 0 && copper.reduce((accumulator, current) => {
                  return accumulator.then(() => {
                    return echo.appendText(current.role, current.text);
                  });
                }, Promise.resolve()).catch(error => {
                  peers.Wf.warning("[Composer] failed to send realtime initial context", {
                    safe: {},
                    sensitive: {
                      error
                    }
                  });
                });
                this.codexVoiceBridge?.initializeSession();
                let pearl = this.pendingStart;
                pearl?.conversationId === peers.a && (pearl.sessionInitialized = true, this.activateRealtimeSession(alpha));
              }
            },
            onUsageLimitApproaching: () => {
              this.runtime === echo && this.handleRealtimeUsageLimitApproaching(alpha, echo);
            },
            outputModality,
            realtimeSessionId: analyticsSessionId,
            realtimeSessionOverrides: peers._
          });
        this.preparingRuntime = echo;
        this.microphonePreference != null && echo.refreshMicrophoneInput(this.microphonePreference).catch(error => {
          peers.Wf.warning("Failed to apply realtime voice microphone preference during startup", {
            safe: {},
            sensitive: {
              error
            }
          });
        });
        let falcon;
        try {
          let quartz = this.realtimeVoiceHostClaim.claim({
            hostId: b.getHostId(),
            conversationId: peers.a
          }, initiallyMicrophoneMuted, initiallyMuted, preferredPresentationSurface);
          echo.prepareWebRtcSession().catch(() => {});
          falcon = await quartz;
        } catch (river) {
          throw this.preparingRuntime = null, echo.dispose(), river;
        }
        if (falcon.status !== "claimed") return this.preparingRuntime = null, echo.dispose(), falcon.status === "busy" && alpha.get(peers.rh).info(alpha.get(peers.LE).formatMessage({
          id: "composer.realtime.alreadyActiveInAnotherWindow",
          defaultMessage: "Voice chat is already active in another window",
          description: "Toast shown when another app window already owns the realtime voice session"
        })), falcon.status;
        let gamma = [],
          harbor;
        try {
          let [slate,, timber, umbra] = await Promise.all([alpha.queryClient.fetchQuery(peers.Vns(alpha, hostId)), echo.prepareWebRtcSession(), realtimeContinuity.enabled && peers.gp.realtimeContinuity != null ? peers.gp.realtimeContinuity.read({
            threadId: peers.a,
            maxItems: realtimeContinuity.maxItems
          }).catch(error => {
            return peers.Wf.warning("[Composer] failed to read realtime continuity", {
              safe: {},
              sensitive: {
                error
              }
            }), [];
          }) : [], realtimeMemorySummaryEnabled && peers.gp.realtimeMemory != null ? peers.gp.realtimeMemory.readSummary().catch(error => {
            return peers.Wf.warning("[Composer] failed to read realtime memory summary", {
              safe: {},
              sensitive: {
                error
              }
            }), null;
          }) : null]);
          harbor = slate.effectiveVoiceSlug;
          peers.Wf.info("[Composer] resolved realtime continuity", {
            safe: {
              enabled: realtimeContinuity.enabled,
              itemCount: timber.length,
              serviceAvailable: peers.gp.realtimeContinuity != null
            }
          });
          peers.Wf.info("[Composer] resolved realtime memory summary", {
            safe: {
              enabled: realtimeMemorySummaryEnabled,
              present: umbra != null,
              serviceAvailable: peers.gp.realtimeMemory != null
            }
          });
          umbra != null && gamma.push(peers.Z7n(umbra, realtimeMemorySummaryPrompt));
          timber.length > 0 && gamma.push({
            role: "user",
            text: peers.X7n(timber, realtimeContinuityPrompt)
          });
        } catch (violet) {
          throw this.realtimeVoiceHostClaim.release(), this.preparingRuntime = null, echo.dispose(), violet;
        }
        if (!this.realtimeVoiceHostClaim.setControlHandler(willow => {
          this.handleRealtimeVoiceHostControl(alpha, peers.a, willow);
        })) return this.preparingRuntime = null, echo.dispose(), "cancelled";
        let indigo = this.startRequestId + 1;
        this.startRequestId = indigo;
        let jade = {
          ...peers.Xl(),
          webRtcConnected: false,
          conversationId: peers.a,
          requestAccepted: false,
          requestId: indigo,
          sessionInitialized: false,
          started: false
        };
        this.pendingStart = jade;
        this.conversationId = peers.a;
        this.manager = b;
        this.requestedStop = false;
        this.resetRealtimeAutoEndState();
        this.realtimeSessionAnalytics = {
          completedRealDelegationIds: new Set(),
          realDelegationCount: 0,
          sessionId: analyticsSessionId,
          startSource: peers.Pts(source)
        };
        this.realtimeSessionEndReason = null;
        this.realtimeSessionStartSource = source;
        this.preparingRuntime = null;
        this.runtime = echo;
        let kite = new peers.gat(xenon => {
          this.runtime === echo && this.realtimeVoiceOrbAudioAnalyser === kite && (peers.nat(xenon), this.handleRealtimeVoiceOrbAudioLevels(alpha, xenon));
        });
        this.realtimeVoiceOrbAudioAnalyser = kite;
        echo.setInputMuted(falcon.microphoneMuted);
        echo.setOutputMuted(falcon.outputMuted);
        echo.hasWebRtcSession() && this.bumpSessionGeneration(alpha);
        let lemon = gamma.length > 0 && peers._?.version === "v3" ? peers.Kns(gamma) : undefined;
        return copper = lemon == null ? gamma : [], this.codexVoiceBridge = new peers.Cts({
          appendText: (yellow, zinc) => {
            return echo.appendText(yellow, zinc);
          },
          continuityConfig: realtimeContinuity,
          continuityService: peers.gp.realtimeContinuity,
          locator: {
            hostId: b.getHostId(),
            conversationId: peers.a
          },
          userName: gamma.length > 0 ? null : userName
        }), alpha.set(peers.trs, peers.a), alpha.set(peers.CX, falcon.outputMuted), alpha.set(peers.wX, falcon.microphoneMuted), alpha.set(peers.SX, "starting"), this.setRealtimeVoiceActivity(alpha, "idle"), echo.start(harbor, prompt, lemon).then(value => {
          if (this.pendingStart === jade) {
            if (!value) {
              this.cancelPendingStart();
              return;
            }
            jade.requestAccepted = true;
            this.activateRealtimeSession(alpha);
          }
        }, amber => {
          if (this.pendingStart !== jade) return;
          let basalt = this.requestedStop;
          this.failPendingStart(amber);
          basalt && this.conversationId === peers.a && (this.startRequestId += 1, this.stopLocalSession(), this.resetRealtimeState(alpha, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR));
        }), jade.promise.catch(error => {
          throw this.startRequestId === indigo && this.conversationId === peers.a && (this.startRequestId += 1, this.stopLocalSession(), this.resetRealtimeState(alpha, peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR), this.realtimeVoiceHostClaim.release()), error;
        });
      }
      async stop(cedar, daisy, ember = peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED) {
        let flint = cedar.get(peers.SX);
        if (this.conversationId !== daisy || flint === "inactive" || flint === "stopping") return;
        let i = this.runtime,
          a = this.startRequestId,
          garnet = this.realtimeVoiceHostClaim.getClaimId();
        if (this.requestedStop = true, this.realtimeSessionEndReason = ember, this.clearRealtimeAutoEndTimeout(), cedar.set(peers.SX, "stopping"), this.publishRealtimeVoiceHostState(cedar), flint === "starting" && !i?.hasWebRtcSession()) {
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(cedar, ember);
          this.realtimeVoiceHostClaim.release(garnet);
          return;
        }
        if (i == null) {
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(cedar, ember);
          this.realtimeVoiceHostClaim.release(garnet);
          return;
        }
        try {
          if (await i.stop(this.shouldPlayEndSound), this.realtimeVoiceHostClaim.release(garnet), this.startRequestId !== peers.a || this.conversationId !== daisy) return;
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(cedar, ember);
        } catch (hazel) {
          if (this.startRequestId !== peers.a || this.conversationId !== daisy) {
            this.realtimeVoiceHostClaim.release(garnet);
            return;
          }
          this.requestedStop && this.conversationId === daisy && (cedar.set(peers.SX, flint), this.requestedStop = false, this.realtimeSessionEndReason = null, flint === "active" ? this.scheduleRealtimeAutoEnd(cedar) : this.pendingStart?.started && this.pendingStart.requestAccepted && this.activateRealtimeSession(cedar), this.publishRealtimeVoiceHostState(cedar));
          this.showRealtimeError(cedar, cedar.get(peers.LE).formatMessage({
            id: "composer.realtime.stopError",
            defaultMessage: "Unable to stop voice chat",
            description: "Toast shown when the desktop app could not stop a realtime voice session"
          }));
          peers.Wf.error("[Composer] failed to stop realtime voice", {
            safe: {},
            sensitive: {
              error: hazel
            }
          });
        }
      }
      refreshMicrophoneInput(ivory) {
        return this.microphonePreference = ivory, (this.runtime ?? this.preparingRuntime)?.refreshMicrophoneInput(ivory) ?? Promise.resolve();
      }
      cancelStart(jasper) {
        if (this.cancelPreparingRuntime(), this.conversationId == null) return;
        jasper.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(jasper);
        let kelp = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        this.requestedStop = true;
        let lotus = this.terminateLocalSession();
        this.resetRealtimeState(jasper, peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED);
        this.releaseHostClaimAfterCleanup(lotus, kelp, "[Composer] failed to stop cancelled realtime startup");
      }
      stopForAppUnmount(mint) {
        if (this.cancelPreparingRuntime(), this.conversationId == null) return;
        mint.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(mint);
        let nova = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        this.shouldPlayEndSound = false;
        this.requestedStop = true;
        let olive = this.terminateLocalSession();
        this.resetRealtimeState(mint, peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED);
        this.releaseHostClaimAfterCleanup(olive, nova, "[Composer] failed to stop realtime on app cleanup");
      }
      toggleMute(prism, quill) {
        let reef = prism.get(peers.SX);
        if (this.conversationId !== quill || reef !== "starting" && reef !== "active") return;
        let sage = !prism.get(peers.CX);
        this.applyRealtimeMuteState(prism, sage);
      }
      toggleMicrophoneMute(topaz, ultra) {
        if (this.conversationId !== ultra || topaz.get(peers.SX) !== "starting" && topaz.get(peers.SX) !== "active" || this.runtime == null) return;
        let vapor = !topaz.get(peers.wX);
        this.applyRealtimeMicrophoneMuteState(topaz, vapor);
      }
      getStream(wheat) {
        return this.conversationId === wheat ? this.runtime?.getInputStream() ?? null : null;
      }
      getOutputStream(yarn) {
        return this.conversationId === yarn ? this.runtime?.getOutputStream() ?? null : null;
      }
      handleRealtimeNotification(zephyr, acorn) {
        if (!(this.conversationId == null || acorn.params.threadId !== this.conversationId)) switch (acorn.method) {
          case "thread/archived":
            this.startRequestId += 1;
            this.stopLocalSession();
            this.resetRealtimeState(zephyr, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED);
            this.realtimeVoiceHostClaim.release();
            break;
          case "turn/started":
            if (zephyr.get(peers.SX) === "inactive") break;
            this.markRealtimeAutoEndActivity(zephyr);
            break;
          case "turn/completed":
            this.markRealtimeAutoEndActivity(zephyr);
            break;
          case "thread/realtime/started":
            {
              let bloom = this.pendingStart;
              bloom?.conversationId === acorn.params.threadId && (bloom.started = true, this.activateRealtimeSession(zephyr));
              break;
            }
          case "thread/realtime/transcript/delta":
            this.markRealtimeAutoEndActivity(zephyr);
            this.codexVoiceBridge?.observeTranscriptDelta(acorn.params.role, acorn.params.delta);
            break;
          case "thread/realtime/transcript/done":
            this.markRealtimeAutoEndActivity(zephyr);
            this.codexVoiceBridge?.observeTranscriptDone(acorn.params.role, acorn.params.text);
            break;
          case "thread/realtime/error":
            this.handleRealtimeError(zephyr, acorn.params.message);
            break;
          case "thread/realtime/closed":
            this.handleRealtimeClosed(zephyr, acorn.params.reason);
            break;
        }
      }
      recordRealDelegation(coral) {
        let drift = this.realtimeSessionAnalytics;
        drift == null || this.realtimeSessionStartedAtMs == null || drift.completedRealDelegationIds.has(coral.delegationId) || (drift.completedRealDelegationIds.add(coral.delegationId), drift.realDelegationCount += 1);
      }
      handleRealtimeUsageLimitApproaching(eagle, frost) {
        let glide = eagle.get(peers.LE).formatMessage({
          id: "composer.realtime.usageLimitApproaching",
          defaultMessage: "You’re approaching your Codex usage limit, so this voice chat may end soon",
          description: "Warning shown and spoken when a voice chat is approaching the user's Codex usage limit"
        });
        this.showRealtimeToast(eagle, {
          kind: "warning",
          message: glide
        });
        frost.appendSpeech(`Urgent system notice: Interrupt the user or yourself if either is speaking. Say only this warning immediately, exactly as written, before continuing anything else: “${glide}”`).catch(error => {
          peers.Wf.warning("[Composer] failed to speak realtime usage warning", {
            safe: {},
            sensitive: {
              error
            }
          });
        });
      }
      handleSdpError(honey, iris) {
        if (this.conversationId == null) return;
        this.failPendingStart(iris) || this.showRealtimeError(honey, honey.get(peers.LE).formatMessage({
          id: "composer.realtime.startError",
          defaultMessage: "Unable to start voice chat",
          description: "Toast shown when the desktop app could not start a realtime voice session"
        }));
        honey.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(honey);
        let jewel = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        let knoll = this.terminateLocalSession();
        this.resetRealtimeState(honey, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR);
        peers.Wf.error("[Composer] failed to accept realtime WebRTC SDP", {
          safe: {},
          sensitive: {
            error: iris
          }
        });
        this.releaseHostClaimAfterCleanup(knoll, jewel, "[Composer] failed to stop realtime after SDP error");
      }
      handleRealtimeError(lunar, moss) {
        this.conversationId != null && (peers.Wf.error("Realtime voice session failed", {
          safe: {},
          sensitive: {
            conversationId: this.conversationId,
            message: moss
          }
        }), this.failPendingStart(Error(moss)) || this.showRealtimeError(lunar, lunar.get(peers.LE).formatMessage({
          id: "composer.realtime.error",
          defaultMessage: "Voice chat error: {message}",
          description: "Toast shown when a realtime voice session reports an error"
        }, {
          message: moss
        })), this.startRequestId += 1, this.stopLocalSession(), this.resetRealtimeState(lunar, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR), this.realtimeVoiceHostClaim.release());
      }
      handleRealtimeClosed(north, orbit) {
        if (this.conversationId != null && orbit !== "transport_closed") {
          if (this.requestedStop) this.cancelPendingStart();else if (peers.Wf.warning("Realtime voice session closed unexpectedly", {
            safe: {},
            sensitive: {
              conversationId: this.conversationId,
              reason: orbit
            }
          }), this.failPendingStart(Error(orbit ?? "Voice chat closed before startup completed"))) return;
          this.requestedStop || this.showRealtimeError(north, orbit == null ? north.get(peers.LE).formatMessage({
            id: "composer.realtime.closedUnexpectedly",
            defaultMessage: "Voice chat closed unexpectedly",
            description: "Toast shown when a realtime voice session closes unexpectedly without a reason"
          }) : north.get(peers.LE).formatMessage({
            id: "composer.realtime.closed",
            defaultMessage: "Voice chat closed: {reason}",
            description: "Toast shown when a realtime voice session closes unexpectedly"
          }, {
            reason: orbit
          }));
          this.startRequestId += 1;
          this.stopLocalSession();
          this.resetRealtimeState(north, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_SERVER_CLOSED);
          this.realtimeVoiceHostClaim.release();
        }
      }
      handleWebRtcConnectionFailed(pine) {
        if (this.conversationId == null) return;
        peers.Wf.error("Realtime voice WebRTC connection failed", {
          safe: {},
          sensitive: {
            conversationId: this.conversationId
          }
        });
        this.failPendingStart(Error("Voice chat connection failed")) || this.showRealtimeError(pine, pine.get(peers.LE).formatMessage({
          id: "composer.realtime.connectionError",
          defaultMessage: "Voice chat connection failed",
          description: "Toast shown when the realtime voice WebRTC connection fails"
        }));
        pine.set(peers.SX, "stopping");
        this.publishRealtimeVoiceHostState(pine);
        let quest = this.realtimeVoiceHostClaim.detachClaimId();
        this.startRequestId += 1;
        let ridge = this.terminateLocalSession();
        this.resetRealtimeState(pine, this.realtimeSessionEndReason ?? peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR);
        this.releaseHostClaimAfterCleanup(ridge, quest, "[Composer] failed to stop realtime after WebRTC error");
      }
      markRealtimeAutoEndActivity(storm) {
        this.lastAutoEndActivityAtMs = Date.now();
        this.scheduleRealtimeAutoEnd(storm);
      }
      scheduleRealtimeAutoEnd(tide) {
        this.clearRealtimeAutoEndTimeout();
        let unity = this.getRealtimeAutoEndDecision(tide);
        unity.delayMs != null && (this.realtimeAutoEndTimeout = setTimeout(() => {
          this.stopRealtimeForAutoEnd(tide);
        }, unity.delayMs));
      }
      async stopRealtimeForAutoEnd(vale) {
        let wave = this.conversationId;
        if (wave == null) return;
        let apex = this.getRealtimeAutoEndDecision(vale);
        if (apex.delayMs != null) {
          if (apex.delayMs > 0) {
            this.scheduleRealtimeAutoEnd(vale);
            return;
          }
          await this.stop(vale, wave, peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_INACTIVITY);
        }
      }
      getRealtimeAutoEndDecision(brook) {
        let cliff = brook.get(peers.Mts),
          dusk = this.conversationId == null ? null : this.manager?.getConversation(this.conversationId);
        return peers.Ots({
          hasActiveOrchestratorWork: dusk != null && peers.mx(dusk),
          isEnabled: peers.Ets(this.realtimeSessionStartSource, cliff),
          lastActivityAtMs: this.lastAutoEndActivityAtMs,
          nowMs: Date.now(),
          phase: brook.get(peers.SX),
          sessionStartedAtMs: this.realtimeSessionStartedAtMs,
          settings: cliff
        });
      }
      applyRealtimeMuteState(elm, fern) {
        this.runtime?.setOutputMuted(fern);
        elm.set(peers.CX, fern);
        this.publishRealtimeVoiceHostState(elm);
      }
      applyRealtimeMicrophoneMuteState(grove, hill) {
        this.runtime?.setInputMuted(hill);
        grove.set(peers.wX, hill);
        this.publishRealtimeVoiceHostState(grove);
      }
      handleRealtimeVoiceHostControl(isle, juniper, lagoon) {
        if (this.conversationId === juniper) switch (lagoon.type) {
          case "stop":
            this.stop(isle, juniper);
            break;
          case "terminate":
            this.startRequestId += 1;
            this.shouldPlayEndSound = false;
            this.requestedStop = true;
            this.stopLocalSession();
            this.resetRealtimeState(isle, peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED);
            this.realtimeVoiceHostClaim.release();
            break;
          case "set-microphone-muted":
            isle.get(peers.wX) !== lagoon.muted && this.applyRealtimeMicrophoneMuteState(isle, lagoon.muted);
            break;
          case "set-output-muted":
            isle.get(peers.CX) !== lagoon.muted && this.applyRealtimeMuteState(isle, lagoon.muted);
            break;
          case "record-real-delegation":
            this.recordRealDelegation(lagoon.delegation);
            break;
          case "simulate-usage-limit-approaching-for-debug":
            this.runtime?.simulateUsageLimitApproachingForDebug();
            break;
        }
      }
      setRealtimeVoiceActivity(meadow, nest) {
        meadow.set(peers.TX, nest);
        this.publishRealtimeVoiceHostState(meadow);
      }
      publishRealtimeVoiceHostState(oak) {
        let petal = oak.get(peers.SX);
        petal !== "inactive" && (this.realtimeVoiceHostClaim.publish({
          activity: oak.get(peers.TX),
          microphoneMuted: oak.get(peers.wX),
          outputMuted: oak.get(peers.CX),
          phase: petal
        }), this.updateRealtimeVoiceOrbAudioStream());
      }
      updateRealtimeVoiceOrbAudioStream() {
        this.realtimeVoiceOrbAudioAnalyser?.setStream(this.runtime?.getOutputStream() ?? null);
      }
      handleRealtimeVoiceOrbAudioLevels(quiet, rain) {
        if (this.realtimeVoiceOutputLevel = rain.overall, quiet.get(peers.SX) === "active") {
          if (rain.overall >= peers.Jns) {
            this.clearRealtimeVoiceOutputSilenceTimeout();
            quiet.get(peers.TX) !== "speaking" && this.setRealtimeVoiceActivity(quiet, "speaking");
            return;
          }
          if (rain.overall > peers.Yns) {
            this.clearRealtimeVoiceOutputSilenceTimeout();
            return;
          }
          quiet.get(peers.TX) !== "speaking" || this.realtimeVoiceOutputSilenceTimeout != null || (this.realtimeVoiceOutputSilenceTimeout = setTimeout(() => {
            this.realtimeVoiceOutputSilenceTimeout = null;
            quiet.get(peers.SX) === "active" && quiet.get(peers.TX) === "speaking" && this.realtimeVoiceOutputLevel <= peers.Yns && this.setRealtimeVoiceActivity(quiet, "listening");
          }, peers.Xns));
        }
      }
      clearRealtimeVoiceOutputSilenceTimeout() {
        this.realtimeVoiceOutputSilenceTimeout != null && (clearTimeout(this.realtimeVoiceOutputSilenceTimeout), this.realtimeVoiceOutputSilenceTimeout = null);
      }
      disposeRealtimeVoiceOrbAudioAnalyser() {
        this.clearRealtimeVoiceOutputSilenceTimeout();
        this.realtimeVoiceOutputLevel = 0;
        let seed = this.realtimeVoiceOrbAudioAnalyser;
        this.realtimeVoiceOrbAudioAnalyser = null;
        seed != null && peers.nat(null);
        seed?.dispose();
      }
      showRealtimeError(trail, urn) {
        this.showRealtimeToast(trail, {
          kind: "danger",
          message: urn
        });
      }
      showRealtimeToast(vine, wind) {
        let yarrow = () => {
            switch (wind.kind) {
              case "danger":
                vine.get(peers.rh).danger(wind.message);
                break;
              case "warning":
                vine.get(peers.rh).warning(wind.message);
                break;
            }
          },
          azure = peers.gp.realtimeVoicePresentation;
        if (azure == null || this.conversationId == null || this.manager == null) {
          yarrow();
          return;
        }
        azure.reportToast({
          conversationId: this.conversationId,
          hostId: this.manager.getHostId()
        }, wind).then(value => {
          value || yarrow();
        }, birch => {
          peers.Wf.warning("Failed to route realtime voice toast", {
            safe: {},
            sensitive: {
              error: birch
            }
          });
          yarrow();
        });
      }
      releaseHostClaimAfterCleanup(canyon, dew, ever) {
        canyon.catch(error => {
          peers.Wf.warning(ever, {
            safe: {},
            sensitive: {
              error
            }
          });
        }).finally(() => {
          this.realtimeVoiceHostClaim.release(dew);
        });
      }
      clearRealtimeAutoEndTimeout() {
        this.realtimeAutoEndTimeout != null && (clearTimeout(this.realtimeAutoEndTimeout), this.realtimeAutoEndTimeout = null);
      }
      resetRealtimeAutoEndState() {
        this.clearRealtimeAutoEndTimeout();
        this.lastAutoEndActivityAtMs = null;
        this.realtimeSessionStartedAtMs = null;
      }
      activateRealtimeSession(field) {
        let grain = this.pendingStart;
        if (grain == null || grain.requestId !== this.startRequestId || this.requestedStop || !grain.requestAccepted || !grain.started || !grain.webRtcConnected || !grain.sessionInitialized) return;
        this.pendingStart = null;
        field.set(peers.SX, "active");
        this.setRealtimeVoiceActivity(field, "listening");
        peers.qts();
        this.shouldPlayEndSound = true;
        this.realtimeSessionStartedAtMs = Date.now();
        this.scheduleRealtimeAutoEnd(field);
        this.codexVoiceBridge?.activate();
        let haven = this.realtimeSessionAnalytics;
        haven != null && peers.Ub(field, peers.O1t, {
          action: peers.PZt.CODEX_REALTIME_VOICE_SESSION_LIFECYCLE_ACTION_STARTED,
          sessionId: haven.sessionId,
          startSource: haven.startSource
        });
        grain.resolve("active");
      }
      cancelPendingStart() {
        let ink = this.pendingStart;
        ink != null && (this.pendingStart = null, ink.resolve("cancelled"));
      }
      cancelPreparingRuntime() {
        this.realtimeVoiceHostClaim.requestPendingStop();
        this.preparingRuntime?.dispose();
        this.preparingRuntime = null;
      }
      failPendingStart(jadeite) {
        let kernel = this.pendingStart;
        return kernel == null ? false : (this.pendingStart = null, this.requestedStop ? kernel.resolve("cancelled") : kernel.reject(jadeite), true);
      }
      stopLocalSession() {
        this.disposeRealtimeVoiceOrbAudioAnalyser();
        this.codexVoiceBridge?.stop();
        this.codexVoiceBridge = null;
        let leaf = this.runtime;
        leaf?.dispose(this.shouldPlayEndSound);
        this.runtime === leaf && (this.runtime = null);
      }
      terminateLocalSession() {
        this.disposeRealtimeVoiceOrbAudioAnalyser();
        this.codexVoiceBridge?.stop();
        this.codexVoiceBridge = null;
        let maple = this.runtime,
          nimbus = maple?.terminate(this.shouldPlayEndSound) ?? Promise.resolve();
        return this.runtime === maple && (this.runtime = null), nimbus;
      }
      resetRealtimeState(opal, plume) {
        this.cancelPendingStart();
        this.logRealtimeSessionEnded(opal, plume);
        this.resetRealtimeAutoEndState();
        this.conversationId = null;
        this.manager = null;
        this.shouldPlayEndSound = false;
        this.requestedStop = false;
        this.realtimeSessionAnalytics = null;
        this.realtimeSessionEndReason = null;
        this.realtimeSessionStartSource = null;
        this.realtimeVoiceHostClaim.clearAttempt();
        opal.set(peers.trs, null);
        opal.set(peers.CX, false);
        opal.set(peers.wX, false);
        opal.set(peers.SX, "inactive");
        opal.set(peers.TX, "idle");
      }
      logRealtimeSessionEnded(quillow, root) {
        let silk = this.realtimeSessionAnalytics;
        silk == null || this.realtimeSessionStartedAtMs == null || peers.Ub(quillow, peers.k1t, {
          durationMs: Date.now() - this.realtimeSessionStartedAtMs,
          endReason: root,
          realDelegationCount: silk.realDelegationCount,
          sessionId: silk.sessionId,
          startSource: silk.startSource
        });
      }
      bumpSessionGeneration(thorn) {
        thorn.set(peers.nrs, upland => {
          return upland + 1;
        });
      }
    };
    EX = new peers.rrs();
  });
}
