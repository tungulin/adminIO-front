import React, { FC } from 'react'
import { IInputField } from '../IFields'
import { Input as InputAnt, Typography } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
const { Title } = Typography;

const titleStyle: React.CSSProperties = {
    marginLeft: 4,
    textAlign: 'left'
};

const Input: FC<IInputField> = ({ value, title, label, placeholder, required }) => {
    const { control, formState: { errors } } = useFormContext()

    return (
        <Controller
            control={control}
            name={label}
            render={({ field }) => (
                <>
                    {title && <Title style={titleStyle} level={5}>{title}</Title>}
                    <InputAnt
                        {...field}
                        status={errors[label] && 'error'}
                        placeholder={placeholder}
                    />
                </>
            )}
        />
    )
}

export default Input