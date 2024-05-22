import Desktop from './layout/Desktop';
import Mobile from './layout/Mobile';
import { isMobileDevice } from '@/utils/responsive';
import Page from './features/page';
// const WelcomePage = DeviceLayoutProps({ Desktop, Mobile });

export const WelcomePage = () => {
  const mobile = isMobileDevice();
  return mobile ? (
    <Mobile>
      <Page />
    </Mobile>
  ) : (
    <Desktop>
      <Page />
    </Desktop>
  );
};

export default WelcomePage;
