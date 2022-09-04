import { FC } from 'react';
import styles from './Button.module.css';



const Button: FC<IButton> = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>    
            {children}
        </button>
    )
}

export default Button;