import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '../..';
import styles from './Modal.module.css'

const Modal: FC<IModal> = observer(({children}) => {
    
    const {modal} = useContext(Context)

    const rootClasses = [styles.myModal]
    if (modal.isVisible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {modal.isVisible=false}}>
            <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
)

export default Modal;
