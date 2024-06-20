import { createContext } from 'zustand-utils';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { DEFAULT_FEATURE_FLAGS, IFeatureFlags } from '@/config/featureFlags';
import { createDevtools } from '@/store/middleware/createDevtools';
import { GlobalServerConfig } from '@/types/serverConfig';
import { merge } from '@/utils/merge';
import { StoreApiWithSelector } from '@/utils/zustand';

const initialState: ServerConfigStore = {
  featureFlags: DEFAULT_FEATURE_FLAGS,
  serverConfig: { telemetry: {} },
};

//  ===============  聚合 createStoreFn ============ //

export interface ServerConfigStore {
  featureFlags: IFeatureFlags;
  isMobile?: boolean;
  serverConfig: GlobalServerConfig;
}

type CreateStore = (
  initState: Partial<ServerConfigStore>,
) => StateCreator<ServerConfigStore, [['zustand/devtools', never]]>;

const createStore: CreateStore = (runtimeState) => () => ({
  ...merge(initialState, runtimeState),
});

//  ===============  实装 useStore ============ //



const devtools = createDevtools('serverConfig');

export const serverConfigStore = (initState: Partial<ServerConfigStore>) =>
  createWithEqualityFn<ServerConfigStore>()(devtools(createStore(initState || {})), shallow);



//createContext 将应用转化为组件
export const { useStore: useServerConfigStore, Provider } =
  createContext<StoreApiWithSelector<ServerConfigStore>>();
