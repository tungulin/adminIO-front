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
import { PageNotFound } from "containers/PageNotFound/PageNotFound";
import { Main } from "./containers/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Docker } from "./containers/Docker/Docker";
import { Databases } from "./containers/Databases/Databases";




const App: FC = () => {
  const theme = useSelector((state: ISlice) => state.default.theme)
  const [themeConfig, setThemeConfig] = useState({})
  const [messageApi, contextHolder] = message.useMessage({ top: 100 });
  const isAuth = useSelector((state: ISlice) => state.user.isAuth);

  // const themeConfig = config(theme)

  useEffect(() => {
    console.log('theme', theme)
    setThemeConfig(config(theme))
  }, [theme])


  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuth) {
      messageApi.info('Вы не авторизованы! :(');
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <ConfigProvider theme={config(theme)}>
      {contextHolder}
      <Layout>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/main" element={<Main />} />
          <Route path="/docker" element={<Docker />} />
          <Route path="/databases" element={<Databases />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/item/:id" element={<ProtectedRoute><ItemPage /></ProtectedRoute>} /> */}
        </Routes>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
