/**
 * the client config is only used in Vercel deployment
 */

/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_I18N_DEBUG: string;
      NEXT_PUBLIC_I18N_DEBUG_BROWSER: string;
      NEXT_PUBLIC_I18N_DEBUG_SERVER: string;

      NEXT_PUBLIC_DEVELOPER_DEBUG: string;

      NEXT_PUBLIC_SERVICE_MODE?: 'server' | 'browser';
    }
  }
}

export const getClientConfig = () => ({
  ENABLED_SERVER_SERVICE: true,

  BASE_PATH: '',

  // Sentry
  ENABLE_SENTRY: false,

  // i18n debug mode
  I18N_DEBUG: true,
  I18N_DEBUG_BROWSER: true,
  I18N_DEBUG_SERVER: true,

  // developer debug mode
  DEBUG_MODE: true,
});
