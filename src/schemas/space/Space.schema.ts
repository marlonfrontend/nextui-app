import { z } from 'zod'

export const SpaceSchema = z.object({
  id: z.string(),
  cep: z.string().min(1, { message: 'CEP é obrigatório' }),
  address: z.string().min(1, { message: 'Endereço é obrigatório' })
})
