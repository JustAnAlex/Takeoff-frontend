import {makeAutoObservable} from "mobx";

class UserReducer {
    _isAuth = true
    _data:IUserData = {email:'adres@mail.ru',password:'sadas',phone:532}

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    set isAuth(bool: boolean) {
        this._isAuth = bool
    }

    get data() {
        return this._data
    }

    set data(data: IUserData) {
        this._data = data
    }

}

export default new UserReducer()