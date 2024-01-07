import { InputProps } from 'antd';


export interface IField {
    placeholder?: string,
    subTitle?: string,
    label: string
}

export interface IInputField extends IField, InputProps { }