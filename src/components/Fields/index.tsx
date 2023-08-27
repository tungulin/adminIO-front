import { FC } from "react";
import Input from "./components/Input";
import { IInputField } from './IFields'

interface IFields {
    input: FC<IInputField>
}

const Fields: IFields = {
    input: Input,
}

export default Fields