import React, { useEffect } from 'react'
import { useField } from 'formik'
import {
  InputFieldAcceptProps,
  InputFieldProps,
} from '@components/form/InputText/interface'

const withInputText = (Component: React.FC<InputFieldProps>) => {
  function Hoc(props: InputFieldAcceptProps) {
    const [field, { error, touched }, { setValue }] = useField(props)

    const newProps = {
      ...props,
      ...field,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withInputText }