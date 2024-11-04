import { extendVariants, Badge } from '@nextui-org/react'

export const StyledBadge = extendVariants(Badge, {
  variants: {
    color: {},
    size: {
      sm: {
        badge: 'text-xs'
      },
      md: {
        badge: 'text-xs'
      }
    }
  }
})
