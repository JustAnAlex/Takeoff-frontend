import {useContext} from 'react';
import styles from './Navbar.module.css'
import {Context} from "../../index";
import Button from "../button/Button";
import {observer} from "mobx-react-lite";
import { ChangeType } from '../../store/contactFormReducer';

const Navbar = observer(() => {

    const {modal, user, contactForm} = useContext(Context)

    const addNewContact = () => {
        if (contactForm.actionType !== ChangeType.add_NewContact) {
            contactForm.resetNewContact()
            contactForm.attention = false
        }
        contactForm.actionType = ChangeType.add_NewContact
        modal.isVisible = true
    }

    const exit = () => {
        contactForm.resetNewContact()
        // localStorage.removeItem('token')
        // user.isAuth = false
    }

    // const contactFilter2 = new ContactFilterReducer2

//     autorun(() => {
//     console.log(
//         dataC,
//         untracked(() => {})
//     )
// })

    return (
        <header className={styles.navbar}>
            <div className={styles.user_info}>{user.data.email}</div>

            {/* {dataC.map(e => <div style={{background:'red'}}>{toJS(e.name)}</div>)} */}
            {/* {contactFilter2.sortedAndSearchedPosts.map(e => <div style={{background:'red'}}>{toJS(e.name)}</div>)}
            <button onClick={() => dataC.push({id:44, name: 'Алиса44', surname: 'Гончарова', phone: 7538323860})}>df</button>
            <button onClick={() => {
                const newdataC = dataC.filter((value) => 6 !== value.id)
                dataC.splice(0, dataC.length)
                dataC.push(...newdataC)
                }}>df2</button> */}

            <div>
                <Button onClick={()=>addNewContact()}>Добавить контакт</Button>
                <Button onClick={()=>exit()}>Выйти</Button>
            </div>
        </header>
    );
})

export default Navbar;

