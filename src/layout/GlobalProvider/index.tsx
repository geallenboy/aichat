import { cookies, headers } from 'next/headers';
import { PropsWithChildren } from 'react';
import { resolveAcceptLanguage } from 'resolve-accept-language';
import { getServerFeatureFlagsValue } from '@/config/featureFlags';
import { LOBE_LOCALE_COOKIE } from '@/const/locale';
import {
  LOBE_THEME_APPEARANCE,
  LOBE_THEME_NEUTRAL_COLOR,
  LOBE_THEME_PRIMARY_COLOR,
} from '@/const/theme';
import { locales } from '@/locales/resources';
import { getServerGlobalConfig } from '@/server/globalConfig';
import { ServerConfigStoreProvider } from '@/store/serverConfig';
import { getAntdLocale } from '@/utils/locale';
import { isMobileDevice } from '@/utils/responsive';

import AppTheme from './AppTheme';
import Locale from './Locale';
import StoreInitialization from './StoreInitialization';
import StyleRegistry from './StyleRegistry';



const parserFallbackLang = () => {
  /**
  * 论据如下：
  *
  *1）HTTP接受语言头。
  *2）可用的区域设置（它们必须包含默认的区域设置）。
  *3）默认的语言环境。
  */
  let fallbackLang: string = resolveAcceptLanguage(
    headers().get('accept-language') || '',
    locales.map((locale) => (locale)),
    'en-US',
  );
  return fallbackLang;
};

const GlobalLayout = async ({ children }: PropsWithChildren) => {
  // 获取与ssr一起使用的默认主题配置
  const cookieStore = cookies();
  const appearance = cookieStore.get(LOBE_THEME_APPEARANCE);
  const neutralColor = cookieStore.get(LOBE_THEME_NEUTRAL_COLOR);
  const primaryColor = cookieStore.get(LOBE_THEME_PRIMARY_COLOR);

  // 获取默认区域设置配置
  const defaultLang = cookieStore.get(LOBE_LOCALE_COOKIE);
  const fallbackLang = parserFallbackLang();

  //
  // 如果是新用户，就没有cookie，所以我们需要使用accept语言解析的回退语言
  const userLocale = defaultLang?.value || fallbackLang;
  //设置antd locale配置
  const antdLocale = await getAntdLocale(userLocale);

  // 获取默认功能标志
  const serverFeatureFlags = getServerFeatureFlagsValue();
  const serverConfig = getServerGlobalConfig();
  const isMobile = isMobileDevice();
  return (
    <StyleRegistry>
      <Locale antdLocale={antdLocale} defaultLang={userLocale}>
        <AppTheme
          defaultAppearance={appearance?.value}
          defaultNeutralColor={neutralColor?.value as any}
          defaultPrimaryColor={primaryColor?.value as any}
        >
          <ServerConfigStoreProvider
            featureFlags={serverFeatureFlags}
            isMobile={isMobile}
            serverConfig={serverConfig}
          >
            {children}
            <StoreInitialization />
          </ServerConfigStoreProvider>
        
        </AppTheme>
      </Locale>
    </StyleRegistry>
  );
};

export default GlobalLayout;
