import { FC } from 'react';
import classes from './Input.module.css'

const Input: FC<IInput> = ({onChange, value, ...props}) => {
    
    const checkNull = (val: typeof value) => {
        if( typeof val === null) {
            return ''
        }
        if( typeof val === 'number') {
            return val
        }
        if( typeof val === 'string') {
            return val
        }
    }

    return (
        <input 
            onChange={onChange}
            defaultValue={undefined}
            // value={checkNull(value)}
            value={value!}
            {...props}
            className={classes.MyInput}
        />
    );
}

export default Input;
