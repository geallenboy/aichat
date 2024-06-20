import { Metadata } from 'next';
import { getAppConfig } from '@/config/app';
import { OFFICIAL_URL } from '@/const/url';
import { translation } from '@/server/translation';


const { SITE_URL = OFFICIAL_URL } = getAppConfig();



export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await translation('metadata');
  return {
    description: t('chat.description'),
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-32x32.ico',
    },
    manifest: '/manifest.json',
    metadataBase: new URL(SITE_URL),
    // openGraph: {
    //   description: t('chat.description'),
    //   images: [
    //     {
    //       alt: t('chat.title'),
    //       height: 640,
    //       url: '/og/cover.png',
    //       width: 1200,
    //     },
    //   ],
    //   locale: 'en-US',
    //   siteName: title,
    //   title: title,
    //   type: 'website',
    //   url: OFFICIAL_URL,
    // },
    title: {
      default: t('chat.title'),
      template: '%s · AIChat',
    },
   
  };
};
