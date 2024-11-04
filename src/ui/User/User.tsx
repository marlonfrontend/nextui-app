import { User as AppUser } from '@nextui-org/react'

import { UserProps } from './User.types'

export const User = ({ ...props }: UserProps) => {
  return <AppUser {...props} />
}
