import { ReactNode } from 'react'

export type FormProps = {
  children: ReactNode

  onSubmit: (data: any) => void
}
