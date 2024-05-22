
import { StateCreator } from 'zustand/vanilla';

import { ChatStore } from '../../store';



export interface ShareAction {
  shareToShareGPT: (props: {
    avatar?: string;
    withPluginInfo?: boolean;
    withSystemRole?: boolean;
  }) => Promise<void>;
}

export const chatShare: StateCreator<ChatStore, [['zustand/devtools', never]], [], ShareAction> = (
  set,
  get,
) => ({
  shareToShareGPT: async ({ withSystemRole, withPluginInfo, avatar }) => {
    
  },
 
});
