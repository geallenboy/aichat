
import { memo } from 'react';

import UserAvatar from '@/features/User/UserAvatar';

const Avatar = memo(() => {
  return  (<UserAvatar clickable />)
});

Avatar.displayName = 'Avatar';

export default Avatar;
