// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ETe`) / export `Kpt`.

export type BindCardPeers = {
  Sl: (...args: unknown[]) => unknown;
  TTe: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: BindCardPeers | null = null;

/** Wire bindCard peers once companions land. */
export function setBindCardPeers(next: BindCardPeers): void {
  peers = next;
}

/**
 * Bundle export `Kpt` / internal `ETe`.
 */
export function bindCard() {
  if (peers == null) {
    throw new Error("bindCard peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (TTe = `remote_control_enrollment_account_mismatch`),
      peers.sl({
        accountUserId: peers.X(),
        algorithm: peers.ml(`ecdsa_p256_sha256`),
        clientId: peers.X(),
        keyId: peers.X(),
        protectionClass: peers.pl([
          `hardware_secure_enclave`,
          `hardware_tpm`,
          `os_protected_nonextractable`,
        ]),
        publicKeySpkiDerBase64: peers.X(),
      }),
      peers
        .sl({
          iat: peers.rl(),
          pwd_auth_time: peers.rl(),
          scope: peers.X().optional(),
          scp: peers.ol(peers.X()).optional(),
          "https://api.openai.com/auth": peers
            .sl({
              amr: peers.ol(peers.X()).optional(),
              account_id: peers.X().optional(),
              chatgpt_account_user_id: peers.X().optional(),
              chatgpt_account_id: peers.X().optional(),
              account_user_id: peers.X().optional(),
              user_id: peers.X().optional(),
            })
            .passthrough(),
        })
        .passthrough());
  });
}
