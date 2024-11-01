import { z } from 'zod'

import { SpaceSchema } from './Space.schema'

export const CreateSpaceAddressSchema = SpaceSchema.pick({
  address: true,
  cep: true
})

export const CreateSpaceAddressSchemaOutput = SpaceSchema

export type CreateSpaceAddressInput = z.infer<typeof CreateSpaceAddressSchema>
export type CreateSpaceAddressOutput = z.infer<
  typeof CreateSpaceAddressSchemaOutput
>
