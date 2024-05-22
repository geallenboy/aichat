/* eslint-disable sort-keys-fix/sort-keys-fix, typescript-sort-keys/interface */
// Disable the auto sort key eslint rule to make the code more logic and readable

import { StateCreator } from 'zustand/vanilla';

import { ChatStore } from '@/store/chat/store';


export interface SendMessageParams {
  message: string;
  files?: { id: string; url: string }[];
  onlyAddUserMessage?: boolean;
  /**
   *
   * https://github.com/lobehub/lobe-chat/pull/2086
   */
  isWelcomeQuestion?: boolean;
}


export interface ChatMessageAction {
  // create
  sendMessage: (params: SendMessageParams) => Promise<void>;
  addAIMessage: () => Promise<void>;
 
}

export const chatMessage: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  ChatMessageAction
> = (set, get) => ({
 
  sendMessage: async ({ message, files, onlyAddUserMessage, isWelcomeQuestion }) => {
    
  },
  addAIMessage: async () => {
    
  },
  
});
