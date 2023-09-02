import { AppActionsType } from '../app/appReducer'
import { BooksActionsType } from '../features/Books/booksReducer'

export type ActionsType = AppActionsType | BooksActionsType
