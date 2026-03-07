import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n/i18n.ts";
import theme from "./util/config/config.ts";
import { ConfigProvider,App as AntdApp } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/store";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ConfigProvider theme={theme}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
    </Provider>
  </StrictMode>,
);
