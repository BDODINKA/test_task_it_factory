import { FC } from 'react'

import { CardType } from '../../../types/CardTypes'

import style from './Card.module.css'

export const Card: FC<CardType> = ({ img, title, author, subtitle }) => {
  return (
    <div className={style.card_wrapper}>
      <img src={img} alt={subtitle} className={style.card_img} />
      <div className={style.card_description}>
        <p className={style.card_title}>{title}</p>
        <p className={style.card_subtitle}>{subtitle}</p>
        <p className={style.card_author}>{author}</p>
      </div>
    </div>
  )
}
