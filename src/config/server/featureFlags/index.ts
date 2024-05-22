
import { DEFAULT_FEATURE_FLAGS, mapFeatureFlagsEnvToState } from '@/config/featureFlags';
import { merge } from '@/utils/merge';

import { parseFeatureFlag } from './parser';


export const getServerFeatureFlagsValue = () => {
  const flags = parseFeatureFlag('FEATURE_FLAGS');

  return merge(DEFAULT_FEATURE_FLAGS, flags);
};

export const serverFeatureFlags = () => {
  const serverConfig = getServerFeatureFlagsValue();

  return mapFeatureFlagsEnvToState(serverConfig);
};
