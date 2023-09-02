import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'

import style from './input.module.css'

type InputSearchProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref'
>

export const Input = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, ...rest }, ref) => {
    const finalClass = className ? `${className} ${style.input}` : style.input

    return <input {...rest} className={finalClass} ref={ref} />
  }
)
