import { extendVariants, Checkbox, CheckboxGroup } from '@nextui-org/react'

export const StyledCheckbox = extendVariants(Checkbox, {
  variants: {
    color: {
      primary: {
        base: 'bg-[#000]'
      }
    }
  }
})

export const StyledCheckboxGroup = extendVariants(CheckboxGroup, {
  variants: {}
})
