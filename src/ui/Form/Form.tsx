import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormProps } from './Form.types'

export const Form = ({ children, onSubmit, schema }: FormProps) => {
  const methods = useForm({
    resolver: zodResolver(schema)
  })

  const handleSubmit: SubmitHandler<any> = (data) => {
    onSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  )
}
