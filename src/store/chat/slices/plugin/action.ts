
import { StateCreator } from 'zustand/vanilla';

import { ChatStore } from '@/store/chat/store';

import { ChatToolPayload } from '@/types/message';



export interface ChatPluginAction {
  createAssistantMessageByPlugin: (content: string, parentId: string) => Promise<void>;
  fillPluginMessageContent: (
    id: string,
    content: string,
    triggerAiMessage?: boolean,
  ) => Promise<void>;

  internal_callPluginApi: (id: string, payload: ChatToolPayload) => Promise<string | undefined>;
  internal_invokeDifferentTypePlugin: (id: string, payload: ChatToolPayload) => Promise<any>;
  // internal_transformToolCalls: (toolCalls: MessageToolCall[]) => ChatToolPayload[];
  internal_updatePluginError: (id: string, error: any) => Promise<void>;

  invokeBuiltinTool: (id: string, payload: ChatToolPayload) => Promise<void>;
  invokeDefaultTypePlugin: (id: string, payload: any) => Promise<string | undefined>;
  invokeMarkdownTypePlugin: (id: string, payload: ChatToolPayload) => Promise<void>;

  invokeStandaloneTypePlugin: (id: string, payload: ChatToolPayload) => Promise<void>;

  reInvokeToolMessage: (id: string) => Promise<void>;
  triggerAIMessage: (params: { parentId?: string; traceId?: string }) => Promise<void>;

  triggerToolCalls: (id: string) => Promise<void>;
  updatePluginState: (id: string, key: string, value: any) => Promise<void>;
}

export const chatPlugin: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  ChatPluginAction
> = (set, get) => ({
  createAssistantMessageByPlugin: async (content, parentId) => {
   
  },

  fillPluginMessageContent: async (id, content, triggerAiMessage) => {
    
  },
  internal_callPluginApi: async (id, payload) => {
   
   return new Promise(()=>'')
  },

  internal_invokeDifferentTypePlugin: async (id, payload) => {
    
  },

  // internal_transformToolCalls: (toolCalls) => {
  //   return new Promise(()=>null)
  // },

  internal_updatePluginError: async (id, error) => {
    
  },

  invokeBuiltinTool: async (id, payload) => {
    
  },

  invokeDefaultTypePlugin: async (id, payload) => {
    return new Promise(()=>'')
  },

  invokeMarkdownTypePlugin: async (id, payload) => {
    
  },

  invokeStandaloneTypePlugin: async (id, payload) => {
    
  },

  reInvokeToolMessage: async (id) => {
    
  },

  triggerAIMessage: async ({ parentId, traceId }) => {
   
  },
  triggerToolCalls: async (assistantId) => {
    
  },
  updatePluginState: async (id, key, value) => {
    
   
  },
});
