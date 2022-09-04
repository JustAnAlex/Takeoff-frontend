import {makeAutoObservable} from "mobx";

class ModalReducer {
    _isVisible: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    get isVisible() {
        return this._isVisible
    }

    set isVisible(bool: boolean) {
        this._isVisible = bool
    }

}

export default new ModalReducer()