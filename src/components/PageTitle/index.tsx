import { memo, useEffect } from 'react';
import {APP_NAME} from '@/const/app'
const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · ${APP_NAME}` : APP_NAME;
  }, [title]);

  return null;
});

export default PageTitle;
