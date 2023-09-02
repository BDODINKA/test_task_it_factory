import { booksAPI, BooksParamsType } from '../../api/booksAPI'
import { setAppErrorAC, setAppStatusAC } from '../../app/appReducer'
import { BooksResponseItems, BooksResponseTypes } from '../../types/BooksTypes'
import { AppThunk } from '../../types/HookTypes'

export type BooksStateType = typeof booksState

const booksState = {
  books: [] as BooksResponseItems[],
  totalItems: 0,
  params: {
    searchValue: '',
    pageCount: 30,
    key: import.meta.env.VITE_API_KEY,
    sort: 'relevance',
    category: '',
    startIndex: 0,
  } as BooksParamsType,
}

export type BooksActionsType =
  | ReturnType<typeof setBooksAC>
  | ReturnType<typeof setBooksParamsAC>
  | ReturnType<typeof setPageIndexParamsAC>

export const booksReducer = (
  state: BooksStateType = booksState,
  action: BooksActionsType
): BooksStateType => {
  switch (action.type) {
    case 'BOOKS/SET-BOOKS':
      return {
        ...state,
        books:
          state.params.startIndex !== 0
            ? [...state.books, ...action.data.items]
            : action.data.items,
        totalItems: action.data.totalItems,
      }
    case 'BOOKS/SET-PARAMS':
      return {
        ...state,
        params: {
          ...state.params,
          category: action.params.category === 'all' ? '' : action.params.category,
          sort: action.params.sort,
          searchValue: action.params.searchValue,
          startIndex: 0,
        },
      }
    case 'BOOKS/SET-PAGE-INDEX-PARAMS':
      return {
        ...state,
        params: {
          ...state.params,
          startIndex: action.params.startIndex,
        },
      }
    default:
      return state
  }
}

export const setBooksAC = (data: BooksResponseTypes) => {
  return { type: 'BOOKS/SET-BOOKS', data } as const
}
export const setBooksParamsAC = (
  params: Pick<BooksParamsType, 'category' | 'sort' | 'searchValue'>
) => {
  return { type: 'BOOKS/SET-PARAMS', params } as const
}
export const setPageIndexParamsAC = (params: Pick<BooksParamsType, 'startIndex'>) => {
  return { type: 'BOOKS/SET-PAGE-INDEX-PARAMS', params } as const
}

export const getBooksTC = (): AppThunk => async (dispatch, getState) => {
  dispatch(setAppStatusAC('loading'))

  const params = getState().booksReducer.params

  try {
    const res = await booksAPI.getBooks(params)

    dispatch(setBooksAC(res.data))

    dispatch(setAppStatusAC('success'))
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setAppStatusAC('error'))

      dispatch(setAppErrorAC(e.message))
    }
  }
}
