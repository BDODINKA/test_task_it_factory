import { ReactComponent as SvgBook } from './../../assets/empty-book.svg'
import style from './NotFoundBooks.module.css'

export const NotFoundBooks = () => {
  return (
    <div>
      <h3>Books not Found</h3>
      <SvgBook className={style.img} />
    </div>
  )
}
