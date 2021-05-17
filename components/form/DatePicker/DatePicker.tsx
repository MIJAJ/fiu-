import React from 'react'
import { InputFieldProps } from '@components/form/DatePicker/interface'
import styles from './index.module.scss'
import { withDatePicker } from './withDatePicker'

const DatePicker = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <input autoComplete='off' {...props} />
    </div>
  )
}

export default withDatePicker(DatePicker)
