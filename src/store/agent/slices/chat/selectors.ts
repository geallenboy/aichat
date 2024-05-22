
import { INBOX_SESSION_ID } from '@/const/session';
import { DEFAULT_AGENT_CONFIG } from '@/const/settings';
import { AgentStore } from '@/store/agent';
import { LobeAgentConfig } from '@/types/agent';
import { merge } from '@/utils/merge';

const isInboxSession = (s: AgentStore) => s.activeId === INBOX_SESSION_ID;

// ==========   Config   ============== //

const defaultAgentConfig = (s: AgentStore) => merge(DEFAULT_AGENT_CONFIG, s.defaultAgentConfig);

const currentAgentConfig = (s: AgentStore): LobeAgentConfig =>
  merge(s.defaultAgentConfig, s.agentConfig);

const currentAgentSystemRole = (s: AgentStore) => {
  return currentAgentConfig(s).systemRole;
};

const currentAgentModel = (s: AgentStore): string => {
  
  return  'gpt-3.5-turbo';
};

const currentAgentModelProvider = (s: AgentStore) => {
  
  return 'openai';
};

const currentAgentPlugins = (s: AgentStore) => {
  
  return [];
};

const currentAgentTTS = (s: AgentStore) => {
  
  
};

const currentAgentTTSVoice =
  (lang: string) =>
  (s: AgentStore): string => {
   
    return  'alloy';
  };

const hasSystemRole = (s: AgentStore) => {
  const config = currentAgentConfig(s);

  return !!config.systemRole;
};

export const agentSelectors = {
  currentAgentConfig,
  currentAgentModel,
  currentAgentModelProvider,
  currentAgentPlugins,
  currentAgentSystemRole,
  currentAgentTTS,
  currentAgentTTSVoice,
  defaultAgentConfig,
  hasSystemRole,
  isInboxSession,
};
