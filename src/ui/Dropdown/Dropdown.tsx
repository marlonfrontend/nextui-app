import {
  Dropdown as AppDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  DropdownProps
} from '@nextui-org/dropdown'
import { PropsWithChildren } from 'react'

export const Dropdown = ({
  children,
  ...props
}: PropsWithChildren<DropdownProps>) => {
  return <AppDropdown {...props}>{children}</AppDropdown>
}

Dropdown.Trigger = DropdownTrigger
Dropdown.Menu = DropdownMenu
Dropdown.Section = DropdownSection
Dropdown.Item = DropdownItem
