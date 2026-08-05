// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `irs`) / export `NC`.

import type { InactiveIdleState3Peers } from "./inactive-idle-state3-peers";

/** Base half of the realtime voice manager class built by inactiveIdleState3. */
export function createInactiveIdleState3RealtimeVoiceBase(
  peers: InactiveIdleState3Peers,
) {
  return class {
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
      alpha,
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
        realtimeSessionOverrides: bravo,
        source,
        userName,
      },
    ) {
      let b = alpha.get(peers.eD, hostId);
      if (b == null)
        throw (
          microphone?.stop(),
          Error(`App server manager for host ${hostId} not found`)
        );
      if (this.conversationId === peers.a && alpha.get(peers.SX) !== "inactive")
        return (
          microphone?.stop(),
          alpha.get(peers.SX) === "active"
            ? "active"
            : (this.pendingStart?.promise ?? "cancelled")
        );
      if (
        this.conversationId != null ||
        this.realtimeVoiceHostClaim.hasAttempt()
      )
        return (microphone?.stop(), "busy");
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
            marble?.conversationId === peers.a &&
              ((marble.webRtcConnected = true),
              this.activateRealtimeSession(alpha));
          },
          onConnectionFailed: () => {
            this.runtime === echo && this.handleWebRtcConnectionFailed(alpha);
          },
          onMediaChanged: () => {
            this.runtime === echo &&
              (this.bumpSessionGeneration(alpha),
              this.updateRealtimeVoiceOrbAudioStream());
          },
          onNotification: (nickel) => {
            this.runtime === echo &&
              this.handleRealtimeNotification(alpha, nickel);
          },
          onSdpError: (onyx) => {
            this.runtime === echo && this.handleSdpError(alpha, onyx);
          },
          onSessionInitialized: () => {
            if (this.runtime === echo) {
              copper.length > 0 &&
                copper
                  .reduce((accumulator, current) => {
                    return accumulator.then(() => {
                      return echo.appendText(current.role, current.text);
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
              let pearl = this.pendingStart;
              pearl?.conversationId === peers.a &&
                ((pearl.sessionInitialized = true),
                this.activateRealtimeSession(alpha));
            }
          },
          onUsageLimitApproaching: () => {
            this.runtime === echo &&
              this.handleRealtimeUsageLimitApproaching(alpha, echo);
          },
          outputModality,
          realtimeSessionId: analyticsSessionId,
          realtimeSessionOverrides: peers._,
        });
      this.preparingRuntime = echo;
      this.microphonePreference != null &&
        echo
          .refreshMicrophoneInput(this.microphonePreference)
          .catch((error) => {
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
      let falcon;
      try {
        let quartz = this.realtimeVoiceHostClaim.claim(
          {
            hostId: b.getHostId(),
            conversationId: peers.a,
          },
          initiallyMicrophoneMuted,
          initiallyMuted,
          preferredPresentationSurface,
        );
        echo.prepareWebRtcSession().catch(() => {});
        falcon = await quartz;
      } catch (river) {
        throw ((this.preparingRuntime = null), echo.dispose(), river);
      }
      if (falcon.status !== "claimed")
        return (
          (this.preparingRuntime = null),
          echo.dispose(),
          falcon.status === "busy" &&
            alpha.get(peers.rh).info(
              alpha.get(peers.LE).formatMessage({
                id: "composer.realtime.alreadyActiveInAnotherWindow",
                defaultMessage:
                  "Voice chat is already active in another window",
                description:
                  "Toast shown when another app window already owns the realtime voice session",
              }),
            ),
          falcon.status
        );
      let gamma = [],
        harbor;
      try {
        let [slate, , timber, umbra] = await Promise.all([
          alpha.queryClient.fetchQuery(peers.Vns(alpha, hostId)),
          echo.prepareWebRtcSession(),
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
        harbor = slate.effectiveVoiceSlug;
        peers.Wf.info("[Composer] resolved realtime continuity", {
          safe: {
            enabled: realtimeContinuity.enabled,
            itemCount: timber.length,
            serviceAvailable: peers.gp.realtimeContinuity != null,
          },
        });
        peers.Wf.info("[Composer] resolved realtime memory summary", {
          safe: {
            enabled: realtimeMemorySummaryEnabled,
            present: umbra != null,
            serviceAvailable: peers.gp.realtimeMemory != null,
          },
        });
        umbra != null &&
          gamma.push(peers.Z7n(umbra, realtimeMemorySummaryPrompt));
        timber.length > 0 &&
          gamma.push({
            role: "user",
            text: peers.X7n(timber, realtimeContinuityPrompt),
          });
      } catch (violet) {
        throw (
          this.realtimeVoiceHostClaim.release(),
          (this.preparingRuntime = null),
          echo.dispose(),
          violet
        );
      }
      if (
        !this.realtimeVoiceHostClaim.setControlHandler((willow) => {
          this.handleRealtimeVoiceHostControl(alpha, peers.a, willow);
        })
      )
        return ((this.preparingRuntime = null), echo.dispose(), "cancelled");
      let indigo = this.startRequestId + 1;
      this.startRequestId = indigo;
      let jade = {
        ...peers.Xl(),
        webRtcConnected: false,
        conversationId: peers.a,
        requestAccepted: false,
        requestId: indigo,
        sessionInitialized: false,
        started: false,
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
        startSource: peers.Pts(source),
      };
      this.realtimeSessionEndReason = null;
      this.realtimeSessionStartSource = source;
      this.preparingRuntime = null;
      this.runtime = echo;
      let kite = new peers.gat((xenon) => {
        this.runtime === echo &&
          this.realtimeVoiceOrbAudioAnalyser === kite &&
          (peers.nat(xenon),
          this.handleRealtimeVoiceOrbAudioLevels(alpha, xenon));
      });
      this.realtimeVoiceOrbAudioAnalyser = kite;
      echo.setInputMuted(falcon.microphoneMuted);
      echo.setOutputMuted(falcon.outputMuted);
      echo.hasWebRtcSession() && this.bumpSessionGeneration(alpha);
      let lemon =
        gamma.length > 0 && peers._?.version === "v3"
          ? peers.Kns(gamma)
          : undefined;
      return (
        (copper = lemon == null ? gamma : []),
        (this.codexVoiceBridge = new peers.Cts({
          appendText: (yellow, zinc) => {
            return echo.appendText(yellow, zinc);
          },
          continuityConfig: realtimeContinuity,
          continuityService: peers.gp.realtimeContinuity,
          locator: {
            hostId: b.getHostId(),
            conversationId: peers.a,
          },
          userName: gamma.length > 0 ? null : userName,
        })),
        alpha.set(peers.trs, peers.a),
        alpha.set(peers.CX, falcon.outputMuted),
        alpha.set(peers.wX, falcon.microphoneMuted),
        alpha.set(peers.SX, "starting"),
        this.setRealtimeVoiceActivity(alpha, "idle"),
        echo.start(harbor, prompt, lemon).then(
          (value) => {
            if (this.pendingStart === jade) {
              if (!value) {
                this.cancelPendingStart();
                return;
              }
              jade.requestAccepted = true;
              this.activateRealtimeSession(alpha);
            }
          },
          (amber) => {
            if (this.pendingStart !== jade) return;
            let basalt = this.requestedStop;
            this.failPendingStart(amber);
            basalt &&
              this.conversationId === peers.a &&
              ((this.startRequestId += 1),
              this.stopLocalSession(),
              this.resetRealtimeState(
                alpha,
                this.realtimeSessionEndReason ??
                  peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
              ));
          },
        ),
        jade.promise.catch((error) => {
          throw (
            this.startRequestId === indigo &&
              this.conversationId === peers.a &&
              ((this.startRequestId += 1),
              this.stopLocalSession(),
              this.resetRealtimeState(
                alpha,
                peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_ERROR,
              ),
              this.realtimeVoiceHostClaim.release()),
            error
          );
        })
      );
    }
    async stop(
      cedar,
      daisy,
      ember = peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
    ) {
      let flint = cedar.get(peers.SX);
      if (
        this.conversationId !== daisy ||
        flint === "inactive" ||
        flint === "stopping"
      )
        return;
      let i = this.runtime,
        a = this.startRequestId,
        garnet = this.realtimeVoiceHostClaim.getClaimId();
      if (
        ((this.requestedStop = true),
        (this.realtimeSessionEndReason = ember),
        this.clearRealtimeAutoEndTimeout(),
        cedar.set(peers.SX, "stopping"),
        this.publishRealtimeVoiceHostState(cedar),
        flint === "starting" && !i?.hasWebRtcSession())
      ) {
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
        if (
          (await i.stop(this.shouldPlayEndSound),
          this.realtimeVoiceHostClaim.release(garnet),
          this.startRequestId !== peers.a || this.conversationId !== daisy)
        )
          return;
        this.startRequestId += 1;
        this.stopLocalSession();
        this.resetRealtimeState(cedar, ember);
      } catch (hazel) {
        if (this.startRequestId !== peers.a || this.conversationId !== daisy) {
          this.realtimeVoiceHostClaim.release(garnet);
          return;
        }
        this.requestedStop &&
          this.conversationId === daisy &&
          (cedar.set(peers.SX, flint),
          (this.requestedStop = false),
          (this.realtimeSessionEndReason = null),
          flint === "active"
            ? this.scheduleRealtimeAutoEnd(cedar)
            : this.pendingStart?.started &&
              this.pendingStart.requestAccepted &&
              this.activateRealtimeSession(cedar),
          this.publishRealtimeVoiceHostState(cedar));
        this.showRealtimeError(
          cedar,
          cedar.get(peers.LE).formatMessage({
            id: "composer.realtime.stopError",
            defaultMessage: "Unable to stop voice chat",
            description:
              "Toast shown when the desktop app could not stop a realtime voice session",
          }),
        );
        peers.Wf.error("[Composer] failed to stop realtime voice", {
          safe: {},
          sensitive: {
            error: hazel,
          },
        });
      }
    }
    refreshMicrophoneInput(ivory) {
      return (
        (this.microphonePreference = ivory),
        (this.runtime ?? this.preparingRuntime)?.refreshMicrophoneInput(
          ivory,
        ) ?? Promise.resolve()
      );
    }
    cancelStart(jasper) {
      if ((this.cancelPreparingRuntime(), this.conversationId == null)) return;
      jasper.set(peers.SX, "stopping");
      this.publishRealtimeVoiceHostState(jasper);
      let kelp = this.realtimeVoiceHostClaim.detachClaimId();
      this.startRequestId += 1;
      this.requestedStop = true;
      let lotus = this.terminateLocalSession();
      this.resetRealtimeState(
        jasper,
        peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
      );
      this.releaseHostClaimAfterCleanup(
        lotus,
        kelp,
        "[Composer] failed to stop cancelled realtime startup",
      );
    }
    stopForAppUnmount(mint) {
      if ((this.cancelPreparingRuntime(), this.conversationId == null)) return;
      mint.set(peers.SX, "stopping");
      this.publishRealtimeVoiceHostState(mint);
      let nova = this.realtimeVoiceHostClaim.detachClaimId();
      this.startRequestId += 1;
      this.shouldPlayEndSound = false;
      this.requestedStop = true;
      let olive = this.terminateLocalSession();
      this.resetRealtimeState(
        mint,
        peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_APP_UNMOUNTED,
      );
      this.releaseHostClaimAfterCleanup(
        olive,
        nova,
        "[Composer] failed to stop realtime on app cleanup",
      );
    }
    toggleMute(prism, quill) {
      let reef = prism.get(peers.SX);
      if (
        this.conversationId !== quill ||
        (reef !== "starting" && reef !== "active")
      )
        return;
      let sage = !prism.get(peers.CX);
      this.applyRealtimeMuteState(prism, sage);
    }
    toggleMicrophoneMute(topaz, ultra) {
      if (
        this.conversationId !== ultra ||
        (topaz.get(peers.SX) !== "starting" &&
          topaz.get(peers.SX) !== "active") ||
        this.runtime == null
      )
        return;
      let vapor = !topaz.get(peers.wX);
      this.applyRealtimeMicrophoneMuteState(topaz, vapor);
    }
    getStream(wheat) {
      return this.conversationId === wheat
        ? (this.runtime?.getInputStream() ?? null)
        : null;
    }
    getOutputStream(yarn) {
      return this.conversationId === yarn
        ? (this.runtime?.getOutputStream() ?? null)
        : null;
    }
    handleRealtimeNotification(zephyr, acorn) {
      if (
        !(
          this.conversationId == null ||
          acorn.params.threadId !== this.conversationId
        )
      )
        switch (acorn.method) {
          case "thread/archived":
            this.startRequestId += 1;
            this.stopLocalSession();
            this.resetRealtimeState(
              zephyr,
              this.realtimeSessionEndReason ??
                peers.Pb.CODEX_REALTIME_VOICE_SESSION_END_REASON_USER_ENDED,
            );
            this.realtimeVoiceHostClaim.release();
            break;
          case "turn/started":
            if (zephyr.get(peers.SX) === "inactive") break;
            this.markRealtimeAutoEndActivity(zephyr);
            break;
          case "turn/completed":
            this.markRealtimeAutoEndActivity(zephyr);
            break;
          case "thread/realtime/started": {
            let bloom = this.pendingStart;
            bloom?.conversationId === acorn.params.threadId &&
              ((bloom.started = true), this.activateRealtimeSession(zephyr));
            break;
          }
          case "thread/realtime/transcript/delta":
            this.markRealtimeAutoEndActivity(zephyr);
            this.codexVoiceBridge?.observeTranscriptDelta(
              acorn.params.role,
              acorn.params.delta,
            );
            break;
          case "thread/realtime/transcript/done":
            this.markRealtimeAutoEndActivity(zephyr);
            this.codexVoiceBridge?.observeTranscriptDone(
              acorn.params.role,
              acorn.params.text,
            );
            break;
          case "thread/realtime/error":
            this.handleRealtimeError(zephyr, acorn.params.message);
            break;
          case "thread/realtime/closed":
            this.handleRealtimeClosed(zephyr, acorn.params.reason);
            break;
        }
    }
  };
}
