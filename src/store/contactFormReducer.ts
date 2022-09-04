import {makeAutoObservable} from "mobx";

export enum ChangeType {
    add_NewContact = 'Добавить',
    change_contact = 'Изменить'
}

interface IString {
    name: string,
    surname: string,
}

class ContactFormReducer {
    _attention: boolean = false
    _actionType: ChangeType = ChangeType.add_NewContact
    _newContact: INewContact = {name: '', surname: '', phone: ''}

    constructor() {
        makeAutoObservable(this)
    }

    get attention() {
        return this._attention
    }

    set attention(bool: boolean) {
        this._attention = bool
    }

    get actionType() {
        return this._actionType
    }

    set actionType(type:ChangeType) {
        this._actionType = type
    }

    get newContact() {
        return this._newContact
    }

    set newContact(data) {
        this._newContact = data
    }

    resetNewContact() {
        this._newContact = {name: '', surname: '', phone: ''}
    }

    updateNewContact(key:string, data: string): void {
        this._newContact[key as keyof IString] = data
    }
 
}

export default new ContactFormReducer()