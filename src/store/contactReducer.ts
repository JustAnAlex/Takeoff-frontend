import {action, computed, makeObservable, observable, override, runInAction} from "mobx";

export const contactList: Array<IContactFrontendField> = observable([
    {id:1, name: 'Александр', surname: 'Климов', phone: 7494463129},
    {id:2, name: 'Лев', surname: 'Горшков', phone: 744474640919},
    {id:3, name: 'Ксения', surname: 'Ковалева', phone: 75340875899},
    {id:4, name: 'Алиса', surname: 'Гончарова', phone: 7538323860},
    {id:5, name: 'Артемий', surname: 'Колесников', phone: 707012107552},
    {id:6, name: 'Иван', surname: 'Васильев', phone: 74010156505},
    {id:7, name: 'Иван', surname: 'Булатов', phone: 728683964136},
    {id:8, name: 'Виктория', surname: 'Коновалова', phone: 7440734757},
])

class ContactReducer {

    _data: Array<IContactFrontendField> = []

    constructor(contactList: Array<IContactFrontendField>) {
        this._data = contactList
        makeObservable(this, {
            _data: observable.deep,
            deleteContact: action,
            data: computed
        }, {})
    }

    get data() {
        return this._data
    }

    addContact (data: IContactFrontendField) {
        runInAction(() => {
        this._data.push(data)
        })
    }

    changeContact (data: IContactFrontendField) {
        runInAction(() => {
        const index = this._data.findIndex((obj) => obj.id === data.id)
        this._data[index] = data
        })
    }

    deleteContact(id:number) {
        runInAction(() => {
        const newdata = this._data.filter((value) => id !== value.id)
        this._data.splice(0, this._data.length)
        this._data.push(...newdata)
        })
    }

}

export {ContactReducer}