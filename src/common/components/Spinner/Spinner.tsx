import { FC } from 'react'

import { ReactComponent as SvgSpinner } from './../../../assets/spinner-svg.svg'
import style from './Spinner.module.css'

export const Spinner: FC<{ className?: string }> = ({ className }) => {
  const finalclass = className ? `${className} ${style.spinner}` : style.spinner

  return <SvgSpinner className={finalclass} />
}
