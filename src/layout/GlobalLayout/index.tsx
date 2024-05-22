

import { FC, ReactNode } from 'react';

import { getServerFeatureFlagsValue } from '@/config/server/featureFlags';

import { getServerGlobalConfig } from '@/server/globalConfig';
import { ServerConfigStoreProvider } from '@/store/serverConfig';
import { getAntdLocale } from '@/utils/locale';
import { isMobileDevice } from '@/utils/responsive';
import AppTheme from './AppTheme';
import Locale from './Locale';
import StyleRegistry from './StyleRegistry';


interface GlobalLayoutProps {
  children?: ReactNode;
}

export const GlobalLayout =  ({ children }: GlobalLayoutProps) => {
  // get default theme config to use with ssr

  const appearance = { name: 'LOBE_THEME_APPEARANCE', value: 'undefined' }
  const neutralColor = { name: 'LOBE_THEME_NEUTRAL_COLOR', value: 'undefined' };
  const primaryColor = { name: 'LOBE_THEME_PRIMARY_COLOR', value: 'undefined' }

  // get default locale config to use with ssr
  const defaultLang = { name: 'LOBE_LOCALE', value: 'zh-CN' };
  const antdLocale = {
    locale: 'zh-cn',
    Pagination: {
      items_per_page: '条/页',
      jump_to: '跳至',
      jump_to_confirm: '确定',
      page: '页',
      prev_page: '上一页',
      next_page: '下一页',
      prev_5: '向前 5 页',
      next_5: '向后 5 页',
      prev_3: '向前 3 页',
      next_3: '向后 3 页',
      page_size: '页码'
    },
    DatePicker: {
      lang: {
        placeholder: '请选择日期',
        yearPlaceholder: '请选择年份',
        quarterPlaceholder: '请选择季度',
        monthPlaceholder: '请选择月份',
        weekPlaceholder: '请选择周',
        rangePlaceholder: [Array],
        rangeYearPlaceholder: [Array],
        rangeMonthPlaceholder: [Array],
        rangeQuarterPlaceholder: [Array],
        rangeWeekPlaceholder: [Array],
        locale: 'zh_CN',
        yearFormat: 'YYYY年',
        cellDateFormat: 'D',
        cellMeridiemFormat: 'A',
        today: '今天',
        now: '此刻',
        backToToday: '返回今天',
        ok: '确定',
        timeSelect: '选择时间',
        dateSelect: '选择日期',
        weekSelect: '选择周',
        clear: '清除',
        month: '月',
        year: '年',
        previousMonth: '上个月 (翻页上键)',
        nextMonth: '下个月 (翻页下键)',
        monthSelect: '选择月份',
        yearSelect: '选择年份',
        decadeSelect: '选择年代',
        previousYear: '上一年 (Control键加左方向键)',
        nextYear: '下一年 (Control键加右方向键)',
        previousDecade: '上一年代',
        nextDecade: '下一年代',
        previousCentury: '上一世纪',
        nextCentury: '下一世纪'
      },
      timePickerLocale: { placeholder: '请选择时间', rangePlaceholder: [Array] }
    },
    TimePicker: { placeholder: '请选择时间', rangePlaceholder: [ '开始时间', '结束时间' ] },
    Calendar: {
      lang: {
        placeholder: '请选择日期',
        yearPlaceholder: '请选择年份',
        quarterPlaceholder: '请选择季度',
        monthPlaceholder: '请选择月份',
        weekPlaceholder: '请选择周',
        rangePlaceholder: [Array],
        rangeYearPlaceholder: [Array],
        rangeMonthPlaceholder: [Array],
        rangeQuarterPlaceholder: [Array],
        rangeWeekPlaceholder: [Array],
        locale: 'zh_CN',
        yearFormat: 'YYYY年',
        cellDateFormat: 'D',
        cellMeridiemFormat: 'A',
        today: '今天',
        now: '此刻',
        backToToday: '返回今天',
        ok: '确定',
        timeSelect: '选择时间',
        dateSelect: '选择日期',
        weekSelect: '选择周',
        clear: '清除',
        month: '月',
        year: '年',
        previousMonth: '上个月 (翻页上键)',
        nextMonth: '下个月 (翻页下键)',
        monthSelect: '选择月份',
        yearSelect: '选择年份',
        decadeSelect: '选择年代',
        previousYear: '上一年 (Control键加左方向键)',
        nextYear: '下一年 (Control键加右方向键)',
        previousDecade: '上一年代',
        nextDecade: '下一年代',
        previousCentury: '上一世纪',
        nextCentury: '下一世纪'
      },
      timePickerLocale: { placeholder: '请选择时间', rangePlaceholder: [Array] }
    },
    global: { placeholder: '请选择' },
    Table: {
      filterTitle: '筛选',
      filterConfirm: '确定',
      filterReset: '重置',
      filterEmptyText: '无筛选项',
      filterCheckall: '全选',
      filterSearchPlaceholder: '在筛选项中搜索',
      emptyText: '暂无数据',
      selectAll: '全选当页',
      selectInvert: '反选当页',
      selectNone: '清空所有',
      selectionAll: '全选所有',
      sortTitle: '排序',
      expand: '展开行',
      collapse: '关闭行',
      triggerDesc: '点击降序',
      triggerAsc: '点击升序',
      cancelSort: '取消排序'
    },
    Modal: { okText: '确定', cancelText: '取消', justOkText: '知道了' },
    Tour: { Next: '下一步', Previous: '上一步', Finish: '结束导览' },
    Popconfirm: { cancelText: '取消', okText: '确定' },
    Transfer: {
      titles: [ '', '' ],
      searchPlaceholder: '请输入搜索内容',
      itemUnit: '项',
      itemsUnit: '项',
      remove: '删除',
      selectCurrent: '全选当页',
      removeCurrent: '删除当页',
      selectAll: '全选所有',
      deselectAll: '取消全选',
      removeAll: '删除全部',
      selectInvert: '反选当页'
    },
    Upload: {
      uploading: '文件上传中',
      removeFile: '删除文件',
      uploadError: '上传错误',
      previewFile: '预览文件',
      downloadFile: '下载文件'
    },
    Empty: { description: '暂无数据' },
    Icon: { icon: '图标' },
    Text: {
      edit: '编辑',
      copy: '复制',
      copied: '复制成功',
      expand: '展开',
      collapse: '收起'
    },
    Form: {
      optional: '（可选）',
      defaultValidateMessages: {
        default: '字段验证错误${label}',
        required: '请输入${label}',
        enum: '${label}必须是其中一个[${enum}]',
        whitespace: '${label}不能为空字符',
        date: [Object],
        types: [Object],
        string: [Object],
        number: [Object],
        array: [Object],
        pattern: [Object]
      }
    },
    Image: { preview: '预览' },
    QRCode: { expired: '二维码过期', refresh: '点击刷新', scanned: '已扫描' },
    ColorPicker: { presetEmpty: '暂无' }
  };
 
  // get default feature flags to use with ssr
  const serverFeatureFlags = {
    webrtc_sync: true,
    language_model_settings: true,
    openai_api_key: true,
    openai_proxy_url: true,
    create_session: true,
    edit_agent: true,
    dalle: true,
    check_updates: true,
    welcome_suggest: true
  };
  const serverConfig = {
    defaultAgent: { config: {} },
    enableUploadFileToServer: false,
    enabledAccessCode: false,
    enabledOAuthSSO: false,
    languageModel: {
      anthropic: { enabled: false },
      azure: {
        enabled: false,
        enabledModels: undefined,
        serverModelCards: undefined
      },
      bedrock: { enabled: false },
      deepseek: { enabled: false },
      google: { enabled: false },
      groq: { enabled: false },
      minimax: { enabled: false },
      mistral: { enabled: false },
      moonshot: { enabled: false },
      ollama: { enabled: true, fetchOnClient: true, serverModelCards: undefined },
      openai: {
        enabled: true,
        enabledModels: undefined,
        serverModelCards: undefined
      },
      openrouter: {
        enabled: false,
        enabledModels: undefined,
        serverModelCards: undefined
      },
      perplexity: { enabled: false },
      togetherai: {
        enabled: false,
        enabledModels: undefined,
        serverModelCards: undefined
      },
      zeroone: { enabled: false },
      zhipu: { enabled: false }
    },
    telemetry: { langfuse: false }
  };
  const isMobile = isMobileDevice();
  return (
    <StyleRegistry>
      <Locale antdLocale={antdLocale} defaultLang={defaultLang?.value}>
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
          </ServerConfigStoreProvider>
        
        </AppTheme>
      </Locale>
    </StyleRegistry>
  );
};

export default GlobalLayout;
