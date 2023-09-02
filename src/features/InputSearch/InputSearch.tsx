import { ChangeEvent, FC, KeyboardEvent } from 'react'

import { ReactComponent as SvgIcon } from '../../assets/icons-search.svg'
import { Input } from '../../common/components/Input/Input'

import style from './inputSearch.module.css'

export const InputSearch: FC<{
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  onClick: () => void
  disabled: boolean
}> = ({ value, onKeyDown, onChange, onClick, disabled }) => {
  return (
    <div className={style.input_wrapper}>
      <Input
        value={value}
        className={style.input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <button
        type="submit"
        aria-label="Найти"
        disabled={disabled}
        onClick={onClick}
        className={style.input_btn}
      >
        <SvgIcon className={style.svg_icon} />
      </button>
    </div>
  )
}
