import { RootStateType } from '../../app/store'

export const selectorStatus = (state: RootStateType) => state.appReducer.status
export const selectorError = (state: RootStateType) => state.appReducer.error
export const selectorIsInitialize = (state: RootStateType) => state.appReducer.isInitialize

export const selectorBooks = (state: RootStateType) => state.booksReducer.books
export const selectorTotalItems = (state: RootStateType) => state.booksReducer.totalItems
export const selectorParams = (state: RootStateType) => state.booksReducer.params
