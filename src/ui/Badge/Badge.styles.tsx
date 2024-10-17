import { extendVariants, Badge } from '@nextui-org/react'

export const StyledBadge = extendVariants(Badge, {
  variants: {
    color: {
      primary: {
        base: 'bg-[#000]'
      }
    },
    size: {
      small: {
        base: 'text-xs px-2 py-1'
      },
      large: {
        base: 'text-lg px-4 py-2'
      }
    }
  }
})
