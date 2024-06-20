import resources from './default';

export const locales = [
  'en-US',
  'zh-CN',
  'zh-TW'
] as const;

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'en-US';
  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }
  return 'en-US';
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: '繁體中文',
    value: 'zh-TW',
  }
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en', 'zh'];
