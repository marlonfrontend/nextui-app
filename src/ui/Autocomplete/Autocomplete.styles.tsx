import { extendVariants, Autocomplete } from '@nextui-org/react'

export const StyledAutocomplete = extendVariants(Autocomplete, {
  variants: {
    color: {
      primary: {}
    }
  }
})
