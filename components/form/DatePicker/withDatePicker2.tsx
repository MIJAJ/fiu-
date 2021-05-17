import React from 'react'
import { useField } from 'formik'
import {
  InputFieldAcceptProps,
  InputFieldProps,
} from '@components/form/DatePicker/interface'

const withDatePicker2 = (Component: React.FC<InputFieldProps>) => {
  function Hoc(props: InputFieldAcceptProps) {
    const [field] = useField(props)

    const newProps = {
      ...props,
      ...field,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withDatePicker2 }
