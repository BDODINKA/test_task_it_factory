import { BooksCategoryType, BooksResponseTypes, BooksSortingType } from '../types/BooksTypes'

import { axiosInstance } from './apiConfig/apiConfig'

export type BooksParamsType = {
  searchValue: string
  pageCount: number
  key: string
  category: BooksCategoryType
  startIndex: number
  sort: BooksSortingType
}
export const booksAPI = {
  getBooks({ searchValue, sort, startIndex, key, category, pageCount }: BooksParamsType) {
    return axiosInstance.get<BooksResponseTypes>(
      `volumes?q=${searchValue}+subject:${category}&maxResults=${pageCount}&startIndex=${startIndex}&orderBy=${sort}&key=${key}`
    )
  },
}
