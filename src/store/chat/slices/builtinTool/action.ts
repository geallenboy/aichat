
import { StateCreator } from 'zustand/vanilla';

import { ChatStore } from '@/store/chat/store';
import { DallEImageItem } from '@/types/tool/dalle';
import { setNamespace } from '@/utils/storeDebug';

/**
 * builtin tool action
 */
export interface ChatBuiltinToolAction {
  generateImageFromPrompts: (items: DallEImageItem[], id: string) => Promise<void>;
  text2image: (id: string, data: DallEImageItem[]) => Promise<void>;
  toggleDallEImageLoading: (key: string, value: boolean) => void;
  updateImageItem: (id: string, updater: (data: DallEImageItem[]) => void) => Promise<void>;
}

export const chatToolSlice: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  ChatBuiltinToolAction
> = (set, get) => ({
  generateImageFromPrompts: async (items, messageId) => {
    
  },
  text2image: async (id, data) => {
    
  },
  toggleDallEImageLoading: (key, value) => {
   
  },
  updateImageItem: async (id, updater) => {
   
  },
});
