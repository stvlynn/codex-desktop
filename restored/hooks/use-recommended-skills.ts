// Restored from ref/webview/assets/use-recommended-skills-BhkhKy85.js
// Host recommended-skills query + install/ensure helpers.
// Stage 3: Avt→useQueryClient; ndt/rdt→vscode query/mutation; Zut→invokeDesktopRpc.

import { QueryStaleTimes } from "../config/query-stale-times";
import { invokeDesktopRpc } from "../desktop/invoke-desktop-rpc";
import { useQueryClient } from "./use-query-client";
import { useVscodeMutation, useVscodeQuery } from "./use-vscode-query";
import { buildVscodeQueryKey } from "../settings/vscode-query-key";
import {
  ensureRecommendedSkillStatsigOverridesInit,
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../skills/recommended-skill-statsig-overrides";
ensureRecommendedSkillStatsigOverridesInit();
export type RecommendedSkill = {
  id: string;
  name: string;
  repoPath?: string;
  [key: string]: unknown;
};
export type RecommendedSkillsPayload = {
  skills?: RecommendedSkill[];
  error?: string | null;
  [key: string]: unknown;
};
export type UseRecommendedSkillsArgs = {
  hostId: string;
  loadOnMount?: boolean;
};
function findSkillByName(
  skills: RecommendedSkill[],
  nameOrId: string,
): RecommendedSkill | null {
  const needle = nameOrId.toLowerCase();
  return (
    skills.find((skill) => {
      return (
        skill.name.toLowerCase() === needle || skill.id.toLowerCase() === needle
      );
    }) ?? null
  );
}

/**
 * Bundle export `n` — recommended skills for a host with refresh/install helpers.
 */
export function useRecommendedSkills(args: UseRecommendedSkillsArgs): {
  data: RecommendedSkillsPayload | undefined;
  errorMessage: string | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  ensureSkillByName: (nameOrId: string) => Promise<RecommendedSkill | null>;
  installSkill: (args: {
    skill: RecommendedSkill;
    installRoot?: string | null;
  }) => Promise<unknown>;
} {
  const { hostId, loadOnMount = true } = args;
  const queryClient = useQueryClient();
  const skillOverrides = useRecommendedSkillStatsigOverrides();
  const queryKey = buildVscodeQueryKey("recommended-skills", {
    hostId,
    refresh: false,
  });
  const query = useVscodeQuery<RecommendedSkillsPayload>("recommended-skills", {
    params: {
      hostId,
      refresh: false,
    },
    queryConfig: {
      enabled: loadOnMount,
      staleTime: QueryStaleTimes.FIVE_MINUTES,
    },
  });
  const installMutation = useVscodeMutation("install-recommended-skill");
  const errorMessage =
    query.data?.error ??
    (query.error ? String(query.error.message ?? query.error) : null);
  const refresh = async (): Promise<void> => {
    const next = await invokeDesktopRpc("recommended-skills", {
      params: {
        hostId,
        refresh: true,
      },
    });
    queryClient.setQueryData(queryKey, next);
  };
  const ensureSkillByName = async (
    nameOrId: string,
  ): Promise<RecommendedSkill | null> => {
    const existing = findSkillByName(query.data?.skills ?? [], nameOrId);
    if (existing) return existing;
    const next = (await invokeDesktopRpc("recommended-skills", {
      params: {
        hostId,
        refresh: false,
      },
    })) as RecommendedSkillsPayload;
    queryClient.setQueryData(queryKey, next);
    return findSkillByName(next.skills ?? [], nameOrId);
  };
  const installSkill = async (installArgs: {
    skill: RecommendedSkill;
    installRoot?: string | null;
  }): Promise<unknown> => {
    const { skill, installRoot = null } = installArgs;
    return installMutation.mutateAsync({
      hostId,
      skillId: skill.id,
      repoPath: skill.repoPath,
      installRoot,
      skillStatsigOverride: getRecommendedSkillStatsigOverride(
        skillOverrides,
        skill.id,
      ),
    });
  };
  return {
    data: query.data,
    errorMessage,
    isLoading: Boolean(query.isLoading),
    refresh,
    ensureSkillByName,
    installSkill,
  };
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureUseRecommendedSkillsInit(): void {}
