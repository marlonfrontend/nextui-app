import {
  Navbar as BaseNavbar,
  NavbarBrand as BaseNavbarBrand,
  NavbarContent as BaseNavbarContent,
  NavbarItem as BaseNavbarItem,
  NavbarMenuToggle as BaseNavbarMenuToggle,
  NavbarMenu as BaseNavbarMenu,
  NavbarMenuItem as BaseNavbarMenuItem
} from '@nextui-org/navbar'

import {
  NavbarProps,
  NavbarBrandProps,
  NavbarContentProps,
  NavbarItemProps,
  NavbarMenuToggleProps,
  NavbarMenuProps,
  NavbarMenuItemProps
} from './Navbar.types'

const Navbar = ({ ...props }: NavbarProps) => {
  return <BaseNavbar {...props} />
}

const Brand = (props: NavbarBrandProps) => {
  return <BaseNavbarBrand {...props} />
}

const Content = (props: NavbarContentProps) => {
  return <BaseNavbarContent {...props} />
}

const Item = (props: NavbarItemProps) => {
  return <BaseNavbarItem {...props} />
}

const MenuToggle = (props: NavbarMenuToggleProps) => {
  return <BaseNavbarMenuToggle {...props} />
}

const Menu = (props: NavbarMenuProps) => {
  return <BaseNavbarMenu {...props} />
}

const MenuItem = (props: NavbarMenuItemProps) => {
  return <BaseNavbarMenuItem {...props} />
}

Navbar.Brand = Brand
Navbar.Content = Content
Navbar.Item = Item
Navbar.MenuToggle = MenuToggle
Navbar.Menu = Menu
Navbar.MenuItem = MenuItem

export { Navbar }
