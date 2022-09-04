import {useContext} from 'react';

import styles from './ContactPage.module.css'
import Navbar from "../../components/navbar/Navbar";
import ContactList from "../../components/contact/ContactList";
import Footer from "../../components/footer/footer";
import Modal from '../../components/modal/Modal';
import ContactForm from '../../components/contactForm/ContactForm';
import { Context } from '../..';
import ContactFilter from '../../components/contactFilter/ContactFilter';
import { observer } from 'mobx-react-lite';

const ContactPage = observer(() => {
    const {contact} = useContext(Context)
    return (
        <div className={styles.main_page}>
            <Navbar/>
            <Modal>
                <ContactForm/>
            </Modal>
            <div className={styles.main_content}>
                <ContactFilter/>
                {(contact.data.length)
                    ?
                    <div>Список контактов</div>
                    :
                    <div>У вас нет ни одного контакта</div>
                }
                <ContactList/>
            </div>
            <Footer/>
        </div>
    );
})

export default ContactPage;