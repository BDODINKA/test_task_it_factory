import { useEffect } from 'react'

import { Spinner } from '../common/components/Spinner/Spinner'
import { selectorIsInitialize } from '../common/selectors/selectors'
import { Books } from '../features/Books/Books'
import { getBooksTC } from '../features/Books/booksReducer'
import { SearchPanel } from '../features/SearchPanel/SearchPanel'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'

import style from './app.module.css'
import { setAppInitializeAC } from './appReducer'

export const App = () => {
  const dispatch = useAppDispatch()
  const isInitialize = useAppSelector(selectorIsInitialize)

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppInitializeAC(true))
      dispatch(getBooksTC())
    }, 2000)
  }, [])

  if (!isInitialize) return <Spinner className={style.app_spinner} />

  return (
    <>
      <SearchPanel />
      <Books />
    </>
  )
}
