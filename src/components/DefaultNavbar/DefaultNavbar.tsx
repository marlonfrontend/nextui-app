import { Logo, ThemeSwitch } from '@/components'
import { Button, Link, Navbar } from '@/ui'

export const DefaultNavbar = () => {
  return (
    <Navbar isBordered height={70} maxWidth="full">
      <Navbar.Brand>
        <Logo size={50} />
      </Navbar.Brand>
      <Navbar.Content justify="end">
        <ThemeSwitch />
        <Navbar.Item>
          <Link color="foreground" href="#" size="sm">
            Features
          </Link>
        </Navbar.Item>
        <Navbar.Item isActive>
          <Link aria-current="page" href="#" size="sm">
            Customers
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link color="foreground" href="#" size="sm">
            Integrations
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Button color="primary" href="#">
            Entrar
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
