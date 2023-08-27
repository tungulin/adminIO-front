import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ConfigProvider, Layout } from "antd";

import { Auth } from "containers/Auth/Auth";
import { Navbar } from "components/Navbar/Navbar";
import { Footer } from "components/Footer/Footer";
import { ISlice } from "store/slice/ISlice";
import './style.css'

import { defaultConfig, darkConfig } from "helpers/themeConfig";
import { PanelDB } from "containers/PanelDB/PanelDB";
import { PanelTable } from "containers/PanelTable/PanelTable";
import { PageNotFound } from "containers/PageNotFound/PageNotFound";




const App: FC = () => {
  const theme = useSelector((state: ISlice) => state.default.theme)

  return (
    <ConfigProvider theme={theme === 'default' ? defaultConfig : darkConfig}>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/panel-db" element={<></>} />
          <Route path="/panel-table" element={<PanelTable />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
