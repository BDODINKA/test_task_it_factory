import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react'

import style from './select.module.css'

export const Select: FC<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    optionsvalue: Array<string> | string
    isLabel?: boolean
    labelTitle?: string
  }
> = ({ className, isLabel, labelTitle, id, ...rest }) => {
  const finalClass = className ? `${className} ${style.select}` : style.select

  return (
    <div>
      {isLabel && <label htmlFor={id}>{labelTitle}</label>}
      <select {...rest} id={id} className={finalClass}>
        {Array.isArray(rest.optionsvalue) &&
          rest.optionsvalue.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  )
}
