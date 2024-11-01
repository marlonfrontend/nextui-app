import { ReactNode } from 'react'
import { z } from 'zod'

export interface FormProps {
  children: ReactNode
  schema: z.ZodSchema

  onSubmit: (data: any) => void
}
