import { ThemeConfig, theme } from "antd";
import { AliasToken } from "antd/es/theme/internal";
const { defaultAlgorithm, darkAlgorithm } = theme;

export const config: (appearance: string) => ThemeConfig = (appearance) => {
    const token = appearance === 'light' ? {} : { colorBgBase: '#071c3d'}
    const algorithm = appearance === 'light' ? defaultAlgorithm : darkAlgorithm

    return {
        algorithm,
        token,
        components: {
            Layout: {
                colorBgHeader: appearance === 'light' ? '#fff' : '#071833'
            },
            Input: {
                borderRadius: 14,
                controlHeight: 48,
                colorTextPlaceholder: '#bbb',
            },
            Card: {
                borderRadiusLG: 20,
                paddingLG: 20,
                lineType: 'none',
            },
            Collapse: {
                borderRadiusLG: 20,
                lineType: 'none',
                lineHeight: 1.8,
            },
            Checkbox: {
                lineType: 'none'
            },
            Dropdown: {
                controlHeight: 48,
                borderRadiusLG: 15
            },
            Button: {
                controlHeight: 48,
                borderRadius: 15,
                primaryShadow: '',
            }
        }
    }
}