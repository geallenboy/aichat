// import 'antd/dist/antd.less';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';

const rootElement: Element = document.getElementById('root') as Element;
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
