'use client';

import { useRouter } from 'next/navigation';
import { memo, useEffect } from 'react';

const Redirect = memo(() => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/welcome');
  }, []);

  return null;
});

export default Redirect;
