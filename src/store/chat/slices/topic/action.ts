
import { StateCreator } from 'zustand/vanilla';

import type { ChatStore } from '@/store/chat';

export interface ChatTopicAction {
  
  saveToTopic: () => Promise<string | undefined>;
  createTopic: () => Promise<string | undefined>;

 
}

export const chatTopic: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  ChatTopicAction
> = (set, get) => ({
 

  createTopic: async () => {
    return '';
  },

  saveToTopic: async () => {
   

    return '';
  },
  
});
