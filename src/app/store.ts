import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'

import { booksReducer } from '../features/Books/booksReducer'

import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  appReducer,
  booksReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store
