
// @ts-nocheck

import {action, computed, makeObservable, observable, override} from "mobx";
import { contactList, ContactReducer } from "./contactReducer";

class ContactFilterReducer extends ContactReducer{
    _searchQuery: string = ''
    _selectedSort: string = ''
    _searchMethod: string = ''
    _searchQueryMode:string = ''

    constructor() {
        super(contactList);
        makeObservable(this, {
            _data: override,
            data: override,

            _searchQuery: observable,
            searchQuery: computed,
            setSearchQuery: action,

            _selectedSort: observable,
            selectedSort: computed,
            setCelectedSort: action,

            _searchMethod: observable,
            searchMethod: computed,
            setSearchMethod: action,

            _searchQueryMode: observable,
            searchQueryMode: computed,
            setSearchQueryMode: action,

            sortedAndSearchedPosts: computed,
        })
    }

    get searchQuery() {
        return this._searchQuery
    }

    setSearchQuery(data) {
        this._searchQuery = data
    }

    get selectedSort() {
        return this._selectedSort
    }

    setCelectedSort(data) {
        console.log(data)
        this._selectedSort = data
    }

    get searchMethod() {
        return this._searchMethod
    }

    setSearchMethod(data) {
        this._searchMethod = data
    }

    get searchQueryMode() {
        return this._searchQueryMode
    }

    setSearchQueryMode(data) {
        this._searchQueryMode = data
    }

    get sortedAndSearchedPosts() {

        const sortedPosts = () => {
            return (this._selectedSort)
            ? [...this._data].sort( (a, b) => {
                return a[this._selectedSort].localeCompare(b[this._selectedSort])
            } )
            : this._data
        }

        if (!this._searchMethod) {return sortedPosts()}

        return ( this._searchQueryMode === 'true' )
        ? sortedPosts().filter( post => post[`${this._searchMethod}`].toLowerCase().startsWith(this._searchQuery.toLowerCase()) )
        : sortedPosts().filter( post => post[`${this._searchMethod}`].toLowerCase().includes(this._searchQuery.toLowerCase()) )
    }

}

export {ContactFilterReducer}
