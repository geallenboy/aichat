import { FC, PropsWithChildren } from 'react';
import { isMobileDevice } from '@/utils/responsive';

interface DeviceLayoutProps<T> {
  Desktop: FC<T>;
  Mobile: FC<T>;
}

const DeviceLayout =
  <T extends PropsWithChildren>({ Desktop, Mobile }: DeviceLayoutProps<T>): FC<T> =>
  (props: T) => {
    const mobile = isMobileDevice();
    return mobile ? <Mobile {...props}> </Mobile> : <Desktop {...props}></Desktop>;
  };

export default DeviceLayout;
