
import React from 'react';
import RouterView from '@/routers/index';
import GlobalLayout from '@/layout/GlobalLayout';

export const App = () => {
  
  return (
    <GlobalLayout>
      <RouterView />
    </GlobalLayout>
  )
};

export default App;
