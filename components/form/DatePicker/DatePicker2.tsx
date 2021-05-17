import React from 'react'
import { InputFieldProps } from '@components/form/DatePicker/interface'
import styles from './index.module.scss'
import { withDatePicker2 } from './withDatePicker2'

const DatePicker2 = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <input autoComplete='off' {...props} />
    </div>
  )
}

export default withDatePicker2(DatePicker2)
