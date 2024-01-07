import { FC, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ConfigProvider, Layout, message } from "antd";

import { Auth } from "containers/Auth/Auth";
import { Navbar } from "components/Navbar/Navbar";
import { Footer } from "components/Footer/Footer";
import { ISlice } from "store/slice/ISlice";
import './style.css'

import { config } from "helpers/themeConfig";
import { PanelDB } from "containers/PanelDB/PanelDB";
import { PanelTable } from "containers/PanelTable/PanelTable";
import { PageNotFound } from "containers/PageNotFound/PageNotFound";
import { Main } from "./containers/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";




const App: FC = () => {
  const theme = useSelector((state: ISlice) => state.default.theme)
  const [themeConfig, setThemeConfig] = useState({})
  const [messageApi, contextHolder] = message.useMessage({ top: 100 });
  // const themeConfig = config(theme)

  useEffect(() => {
    console.log('theme',theme)
    setThemeConfig(config(theme))
  }, [theme])


  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    //add user
    if (!false) {
      messageApi.info('Вы не авторизованы! :(');
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <ConfigProvider theme={config(theme)}>
      <Layout>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
