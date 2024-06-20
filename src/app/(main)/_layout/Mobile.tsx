'use client';

import { memo } from 'react';

import { LayoutProps } from './type';

const Layout = memo(({ children, nav }: LayoutProps) => {
  
  return (
    <>
      {children}
      {nav}
    </>
  );
});

Layout.displayName = 'MobileMainLayout';

export default Layout;
