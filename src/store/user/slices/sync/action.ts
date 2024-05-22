import useSWR, { SWRResponse } from 'swr';
import type { StateCreator } from 'zustand/vanilla';

import type { UserStore } from '@/store/user';
import { OnSyncEvent, PeerSyncStatus } from '@/types/sync';



/**
 * 设置操作
 */
export interface SyncAction {
  refreshConnection: (onEvent: OnSyncEvent) => Promise<void>;
  
}

export const createSyncSlice: StateCreator<
  UserStore,
  [['zustand/devtools', never]],
  [],
  SyncAction
> = (set, get) => ({
  refreshConnection: async (onEvent) => {
    
  },

 

  
});
