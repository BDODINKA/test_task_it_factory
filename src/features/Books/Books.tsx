import { FC } from 'react'

import { Card } from '../../common/components/Card/Card'
import { Spinner } from '../../common/components/Spinner/Spinner'
import {
  selectorBooks,
  selectorError,
  selectorParams,
  selectorStatus,
  selectorTotalItems,
} from '../../common/selectors/selectors'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { NotFoundBooks } from '../NotFoundBooks/NotFoundBooks'
import { SpinnerBtnWithStatus } from '../SpinnerBtnWithStatus/SpinnerBtnWithStatus'

import style from './Books.module.css'
import { getBooksTC, setPageIndexParamsAC } from './booksReducer'

export const Books: FC = () => {
  const books = useAppSelector(selectorBooks)
  const totalItems = useAppSelector(selectorTotalItems)
  const status = useAppSelector(selectorStatus)
  const error = useAppSelector(selectorError)
  const { startIndex, pageCount } = useAppSelector(selectorParams)

  const dispatch = useAppDispatch()
  const loadMoreHandler = () => {
    dispatch(setPageIndexParamsAC({ startIndex: startIndex + pageCount }))
    dispatch(getBooksTC())
  }

  if (!books.length && status === 'loading')
    return (
      <section className={style.books_wrapper}>
        <Spinner className={style.books_spinner} />
      </section>
    )

  if (!books) return <NotFoundBooks />

  return (
    <section className={style.books_wrapper}>
      <div className={style.books_counter}>{`Found ${totalItems} results`}</div>
      <div className={style.books_items}>
        {books.map(el => (
          <Card
            key={`${el.id}${el.etag}`}
            img={el.volumeInfo.imageLinks?.thumbnail ?? ''}
            author={el.volumeInfo.authors ?? ['']}
            subtitle={el.volumeInfo.title ?? ''}
            title={el.volumeInfo.categories?.[0] ?? ''}
          />
        ))}
      </div>
      <div className={style.books_btn}>
        <SpinnerBtnWithStatus
          status={status}
          onClick={loadMoreHandler}
          btnTitle={'LoadMore'}
          error={error}
        />
      </div>
    </section>
  )
}
