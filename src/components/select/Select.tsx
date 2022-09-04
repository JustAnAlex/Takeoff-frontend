import React, { FC } from "react";

interface IOptions {
    value: string | boolean,
    name: string
}

interface IProps {
    defaultValue: string,
    options: Array<IOptions>
    value: string | boolean,
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Select: FC<IProps> = ({defaultValue, options, value, onChange}) => {
    return (
        <select
            value={String(value)}
            onChange={(e) => {
                console.log('from Select')
                onChange(e)
            }}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =><option value={String(option.value)}>{option.name}</option>)}
        </select>
    );
}

export default Select;