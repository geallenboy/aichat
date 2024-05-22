import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';

export const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense
      fallback={
        <div className="loading_div">
          <Spin size={'large'} />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

const Login = Loadable(lazy(() => import('@/views/login')));
const Chat = Loadable(lazy(() => import('@/views/chat')));
const WelcomePage = Loadable(lazy(() => import('@/views/welcome')));

// 公共路由
export const constantRoutes: any[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/welcome',
    element: <WelcomePage />
  }
];

export default function RouterView() {
  return useRoutes(constantRoutes as any);
}
