import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormProps } from './Form.types'

export const Form = ({ children, onSubmit }: FormProps) => {
  const methods = useForm()

  const handleSubmit: SubmitHandler<any> = (data) => {
    onSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  )
}
