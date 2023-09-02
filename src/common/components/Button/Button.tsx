import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import style from './Button.module.css'

export const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  const finalClass = className ? `${className} ${style.button}` : style.button

  return (
    <button {...rest} className={finalClass}>
      {children}
    </button>
  )
}
