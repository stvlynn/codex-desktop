// Restored from ref/webview/assets/recommended-skill-statsig-overrides-2fOHXsHG.js
// Statsig dynamic-config overrides for recommended skill markdown.
// Stage 3: C_t/E_t/S_t/x_t/c_t→zod; nlt→useDynamicConfig; tlt/Ivt dropped.

import {
  ensureZodRuntime,
  zodObject,
  zodRecord,
  zodString,
  zodUnknown,
} from "../vendor/zod";
import { useDynamicConfig } from "../hooks/use-dynamic-config";

ensureZodRuntime();

const RECOMMENDED_SKILL_CONFIG_ID = "1852350085";

const skillMarkdownSchema = zodString().refine(
  (value) => value.trim().length > 0,
);

const recommendedSkillOverridesSchema = zodObject({
  skill_markdown_by_id: zodRecord(zodString(), zodUnknown()).optional(),
}).catch({
  skill_markdown_by_id: {},
});

export type RecommendedSkillMarkdownById = Record<string, string>;

/**
 * Bundle export `r` — parse Statsig config into skill-id → markdown map.
 */
export function useRecommendedSkillStatsigOverrides(): RecommendedSkillMarkdownById {
  const value = useDynamicConfig<unknown>(RECOMMENDED_SKILL_CONFIG_ID, {});
  return parseRecommendedSkillStatsigOverrides(value);
}

export function parseRecommendedSkillStatsigOverrides(raw: unknown): RecommendedSkillMarkdownById {
  const parsed = recommendedSkillOverridesSchema.parse(raw);
  const result: RecommendedSkillMarkdownById = {};
  for (const [skillId, markdown] of Object.entries(
    parsed.skill_markdown_by_id ?? {},
  )) {
    const checked = skillMarkdownSchema.safeParse(markdown);
    if (checked.success) {
      result[skillId] = checked.data;
    }
  }
  return result;
}

/**
 * Bundle export `t` — lookup one skill markdown override by id.
 */
export function getRecommendedSkillStatsigOverride(overrides: RecommendedSkillMarkdownById, skillId: string): string | undefined {
  return overrides[skillId];
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureRecommendedSkillStatsigOverridesInit(): void {}
