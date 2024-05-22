import { isMobileDevice } from '@/utils/responsive';
import Actions from './Actions';
import Hero from './Hero';
import Logo from './Logo';

const Page = () => {
  const mobile = isMobileDevice();
  return (
    <>
      <Logo mobile={mobile} />
      <Hero />
      <Actions mobile={mobile} />
    </>
  );
};

export default Page;
