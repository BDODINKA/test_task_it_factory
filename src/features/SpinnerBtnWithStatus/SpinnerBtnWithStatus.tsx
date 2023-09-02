import { FC } from 'react'

import { Button } from '../../common/components/Button/Button'
import { Spinner } from '../../common/components/Spinner/Spinner'
import { StatusType } from '../../types/AppTypes'
import { Nullable } from '../../types/NullableTypes'
import style from '../Books/Books.module.css'

export const SpinnerBtnWithStatus: FC<{
  status: Nullable<StatusType>
  onClick: () => void
  btnTitle: string
  error: Nullable<string>
}> = ({ status, onClick, btnTitle, error }) => {
  if (status === 'error')
    return (
      <div>
        <div>{error}</div>
        <Button onClick={onClick} className={style.books_btn}>
          {btnTitle}
        </Button>
      </div>
    )

  return (
    <Button onClick={onClick} className={style.books_btn} disabled={status === 'loading'}>
      {status === 'loading' ? <Spinner /> : btnTitle}
    </Button>
  )
}
