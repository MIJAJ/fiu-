import React from 'react'
import { InputFieldProps } from '@components/form/InputText/interface'
import styles from './index.module.scss'
import { withInputText } from './withInputText'

const InputText = ({ label, ...props }: InputFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <textarea autoComplete='off' {...props} />
    </div>
  )
}

export default withInputText(InputText)
