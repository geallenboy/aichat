

import { UserType } from '@/types/user';

export interface UserAuthState {
  /**
   * 未来收到 user.avatar 中
   * @deprecated
   */
  avatar?: string;
  isLoaded?: boolean;
  isSignedIn?: boolean;
  user?: UserType;
  userId?: string;
}

export const initialAuthState: UserAuthState = {};
