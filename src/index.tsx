import {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {contactList, ContactReducer} from './store/contactReducer'
import {ContactFilterReducer} from './store/ContactFilterReducer';
import UserReducer from './store/userReducer'
import ModalReducer from './store/modalReducer';
import ContactFormReducer from './store/contactFormReducer';

const contactReducer = new ContactReducer(contactList)
const contactFilterReducer = new ContactFilterReducer()

interface IValue {
    readonly contactList: Array<IContactFrontendField>
    readonly contact: typeof contactReducer,
    readonly contactFilter: typeof contactFilterReducer,
    readonly user: typeof UserReducer,
    readonly modal: typeof ModalReducer,
    readonly contactForm: typeof ContactFormReducer
}

export const Context = createContext<IValue>({
    contactList: contactList,
    contact: contactReducer,
    contactFilter: contactFilterReducer,
    user: UserReducer,
    modal: ModalReducer,
    contactForm: ContactFormReducer
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement ) 

root.render(
    <Context.Provider
        value={{
            contactList: contactList,
            contact: contactReducer,
            contactFilter: contactFilterReducer,
            user: UserReducer,
            modal: ModalReducer,
            contactForm: ContactFormReducer
            }}>
        <App />
    </Context.Provider>
)
