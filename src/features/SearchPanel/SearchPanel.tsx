import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { Select } from '../../common/components/Select/Select'
import { categorySort, timeSort } from '../../common/constants/sortConstants'
import { selectorStatus } from '../../common/selectors/selectors'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { BooksCategoryType, BooksSortingType } from '../../types/BooksTypes'
import { getBooksTC, setBooksParamsAC } from '../Books/booksReducer'
import { InputSearch } from '../InputSearch/InputSearch'

import style from './SearchPanel.module.css'

export const SearchPanel = () => {
  const [form, setForm] = useState<{
    category: BooksCategoryType
    sort: BooksSortingType
    searchValue: string
  }>({
    category: '',
    sort: 'relevance',
    searchValue: '',
  })

  const dispatch = useAppDispatch()

  const status = useAppSelector(selectorStatus)

  const getBooks = () => {
    dispatch(setBooksParamsAC(form))
    dispatch(getBooksTC())
  }

  const categorySelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as BooksCategoryType

    setForm(prevState => ({ ...prevState, category }))

    dispatch(setBooksParamsAC(form))
  }
  const sortingSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value as BooksSortingType

    setForm(prevState => ({ ...prevState, sort: sort }))

    dispatch(setBooksParamsAC(form))
  }
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prevState => ({ ...prevState, searchValue: e.target.value }))
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getBooks()
    }
  }

  return (
    <section className={style.wrapper_bg}>
      <InputSearch
        value={form.searchValue}
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        disabled={status === 'loading'}
        onClick={getBooks}
      />
      <div className={style.select_block}>
        <Select
          id={'select_category'}
          labelTitle={'Categories'}
          isLabel
          value={form.category}
          onChange={categorySelectHandler}
          optionsvalue={categorySort}
          // disabled={status === 'loading'}
        />
        <Select
          id={'select_sort'}
          labelTitle={'Sorting By'}
          isLabel
          value={form.sort}
          onChange={sortingSelectHandler}
          optionsvalue={timeSort}
          // disabled={status === 'loading'}
        />
      </div>
    </section>
  )
}
