/* eslint-disable react/display-name */
import { forwardRef, PropsWithChildren } from 'react'
import {
  Dropdown as AppDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from '@nextui-org/dropdown'

import {
  DropdownProps,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownSectionProps,
  DropdownTriggerProps
} from './Dropdown.types'

export const Dropdown = ({
  children,
  ...props
}: PropsWithChildren<DropdownProps>) => {
  return <AppDropdown {...props}>{children}</AppDropdown>
}

Dropdown.Item = ({
  children,
  ...props
}: PropsWithChildren<DropdownItemProps>) => {
  return <DropdownItem {...props}>{children}</DropdownItem>
}

Dropdown.Trigger = ({
  children,
  ...props
}: PropsWithChildren<DropdownTriggerProps>) => {
  return <DropdownTrigger {...props}>{children}</DropdownTrigger>
}

Dropdown.Menu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <DropdownMenu {...props} ref={ref}>
        {children}
      </DropdownMenu>
    )
  }
)

Dropdown.Section = ({
  children,
  ...props
}: PropsWithChildren<DropdownSectionProps>) => {
  return <DropdownSection {...props}>{children}</DropdownSection>
}
