'use client';

import { StyleProvider, extractStaticStyle } from 'antd-style';

import { PropsWithChildren, useRef } from 'react';

const StyleRegistry = ({ children }: PropsWithChildren) => {

  return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>;
};

export default StyleRegistry;
