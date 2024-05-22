
import useSWR, { SWRResponse } from 'swr';
import { DeepPartial } from 'utility-types';
import { StateCreator } from 'zustand/vanilla';

import { DEFAULT_AGENT_CONFIG } from '@/const/settings';
import { useClientDataSWR } from '@/libs/swr';
import { globalService } from '@/services/global';
import { sessionService } from '@/services/session';

import { LobeAgentConfig } from '@/types/agent';


import { AgentStore } from '../../store';


/**
 * 助手接口
 */
export interface AgentChatAction {
  removePlugin: (id: string) => void;
  togglePlugin: (id: string, open?: boolean) => Promise<void>;
  updateAgentConfig: (config: Partial<LobeAgentConfig>) => Promise<void>;

  useFetchAgentConfig: (id: string) => SWRResponse<LobeAgentConfig>;
  useFetchDefaultAgentConfig: () => SWRResponse<DeepPartial<LobeAgentConfig>>;

  /* eslint-disable typescript-sort-keys/interface */

  internal_updateAgentConfig: (id: string, data: DeepPartial<LobeAgentConfig>) => Promise<void>;
  internal_refreshAgentConfig: (id: string) => Promise<void>;
  /* eslint-enable */
}

const FETCH_AGENT_CONFIG_KEY = 'FETCH_AGENT_CONFIG';

export const createChatSlice: StateCreator<
  AgentStore,
  [['zustand/devtools', never]],
  [],
  AgentChatAction
> = (set, get) => ({
  removePlugin: async (id) => {
    
  },

  togglePlugin: async (id, open) => {
    
  },
  updateAgentConfig: async (config) => {
    
  },
  useFetchAgentConfig: (sessionId) =>
    useClientDataSWR<LobeAgentConfig>(
      [FETCH_AGENT_CONFIG_KEY, sessionId],
      ([, id]: string[]) => sessionService.getSessionConfig(id),
      {
        fallbackData: DEFAULT_AGENT_CONFIG,
        onSuccess: (data:any) => {
          
        },
        suspense: true,
      },
    ),
  useFetchDefaultAgentConfig: () =>
    useSWR<DeepPartial<LobeAgentConfig>>(
      'fetchDefaultAgentConfig',
      globalService.getDefaultAgentConfig,
      {
        onSuccess: (data) => {
          
        },
        revalidateOnFocus: false,
      },
    ),

  /* eslint-disable sort-keys-fix/sort-keys-fix */

  internal_updateAgentConfig: async (id, data) => {
   
  },

  internal_refreshAgentConfig: async (id) => {
    
  },
});
