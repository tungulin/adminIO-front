import { theme, ThemeConfig } from "antd";
import { tokenConfig, componentsConfig } from "./defaultConfigs";
const { defaultAlgorithm, darkAlgorithm } = theme;


export const darkConfig: ThemeConfig = {
    algorithm: darkAlgorithm,
    token: {
        colorBgBase: '#071c3d',
        ...tokenConfig
    },
    components: {
        ...componentsConfig,
        Layout: {
            colorBgHeader: '#082147'
        }
    },
};


export const defaultConfig: ThemeConfig = {
    algorithm: defaultAlgorithm,
    token: {
        ...tokenConfig
    },
    components: {
        ...componentsConfig,
        Layout: {
            colorBgHeader: '#fff'
        }
    }
};