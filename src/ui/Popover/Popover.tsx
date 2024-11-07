/* eslint-disable react/display-name */
import {
  Popover as AppPopover,
  PopoverContent as AppPopoverContent,
  PopoverTrigger as AppPopoverTrigger
} from '@nextui-org/react'

import {
  PopoverProps,
  PopoverContentProps,
  PopoverTriggerProps
} from './Popover.types'

export const Popover = ({ children, ...props }: PopoverProps) => {
  return <AppPopover {...props}>{children}</AppPopover>
}

Popover.Content = ({ children }: PopoverContentProps) => {
  return <AppPopoverContent>{children}</AppPopoverContent>
}

Popover.Trigger = ({ children }: PopoverTriggerProps) => {
  return <AppPopoverTrigger>{children}</AppPopoverTrigger>
}
