
import { StateCreator } from 'zustand/vanilla';

import { TracePayload } from '@/const/trace';
import { ChatStore } from '@/store/chat/store';
import { ChatTTS, ChatTranslate } from '@/types/message';
import { setNamespace } from '@/utils/storeDebug';

const n = setNamespace('enhance');

/**
 * enhance chat action like translate,tts
 */
export interface ChatEnhanceAction {
  clearTTS: (id: string) => Promise<void>;
  clearTranslate: (id: string) => Promise<void>;
  getCurrentTracePayload: (data: Partial<TracePayload>) => TracePayload;
  translateMessage: (id: string, targetLang: string) => Promise<void>;
  ttsMessage: (
    id: string,
    state?: { contentMd5?: string; file?: string; voice?: string },
  ) => Promise<void>;
  updateMessageTTS: (id: string, data: Partial<ChatTTS> | false) => Promise<void>;
  updateMessageTranslate: (id: string, data: Partial<ChatTranslate> | false) => Promise<void>;
}

export const chatEnhance: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  ChatEnhanceAction
> = (set, get) => ({
  clearTTS: async (id) => {
    
  },

  clearTranslate: async (id) => {
   
  },
  getCurrentTracePayload: (data) => ({
    sessionId: get().activeId,
    topicId: get().activeTopicId,
    ...data,
  }),

  translateMessage: async (id, targetLang) => {
    
  },

  ttsMessage: async (id, state = {}) => {
    
  },

  updateMessageTTS: async (id, data) => {
   
  },

  updateMessageTranslate: async (id, data) => {
    
  },
});
