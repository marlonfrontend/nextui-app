/* eslint-disable react/display-name */
import {
  extendVariants,
  Button as NextUIButton,
  ButtonGroup as NextUIButtonGroup
} from '@nextui-org/react'
import { forwardRef } from '@nextui-org/system'

export const StyledButton = forwardRef<'button', any>((props, ref) => {
  const ExtendedButton = extendVariants(NextUIButton, {
    variants: {
      color: {
        primary: ''
      }
    }
  })

  return <ExtendedButton ref={ref} {...props} />
})

export const StyledButtonGroup = forwardRef<'div', any>((props, ref) => {
  const ExtendedButtonGroup = extendVariants(NextUIButtonGroup, {})

  return <ExtendedButtonGroup ref={ref} {...props} />
})
