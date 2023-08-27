import React, { FC } from 'react'
import { IInputField } from '../IFields'
import { Input as InputAnt } from 'antd';
import { Controller } from 'react-hook-form';


const Input: FC<IInputField> = ({ defaultValue, title, label, placeholder, control, required, error }) => {
    return (
        <div>
            <Controller
                control={control}
                name={label}
                render={({
                    field
                }) => (
                    <InputAnt
                        {...field}
                        status={error && 'error'}
                        placeholder={placeholder}
                    />
                )}
            />
        </div >
    )
}

export default Input