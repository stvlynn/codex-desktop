// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `e5r` / export `vK` — pure helper.

import { OPENAI_CURATED_ID } from "../config/openai-curated-id";
import { OPENAI_CURATED_REMOTE_ID } from "../config/openai-curated-remote-id";

const HIDDEN_KINDS = [OPENAI_CURATED_ID, OPENAI_CURATED_REMOTE_ID] as const;
const REMOTE_ENABLED_KINDS = [OPENAI_CURATED_ID] as const;
const EMPTY_KINDS: readonly string[] = [];

/** Pick OpenAI curated marketplace kind ids from feature flags. */
export function pickOpenaiMarketplaceKindIds(options: {
  isOpenAICuratedRemoteMarketplaceEnabled: boolean;
  shouldHideOpenAICuratedMarketplaces: boolean;
}): readonly string[] {
  return options.shouldHideOpenAICuratedMarketplaces
    ? HIDDEN_KINDS
    : options.isOpenAICuratedRemoteMarketplaceEnabled
      ? REMOTE_ENABLED_KINDS
      : EMPTY_KINDS;
}
