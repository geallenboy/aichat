
import react from '@vitejs/plugin-react';
import path from 'path';
import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';

const CWD = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    server: {
      port: 8080,
      host: true,
      open: true,
      proxy: {
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    },
    plugins: [
      react(),
    ],
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: !!VITE_DROP_CONSOLE
        }
      }
    }
  };
};
