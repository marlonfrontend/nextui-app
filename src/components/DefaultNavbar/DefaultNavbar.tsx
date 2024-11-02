import { useTheme } from 'next-themes'

import { Logo } from '@/components'
import { Button, Icon, Link, Navbar } from '@/ui'

export const DefaultNavbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Navbar isBordered height={70} maxWidth="full">
      <Navbar.Brand>
        <Logo size={50} />
      </Navbar.Brand>
      <Navbar.Content justify="end">
        {theme === 'dark' ? (
          <button onClick={() => setTheme('light')}>
            <Icon name="Sun" strokeWidth={1.8} />
          </button>
        ) : (
          <button onClick={() => setTheme('dark')}>
            <Icon name="Moon" strokeWidth={1.8} />
          </button>
        )}
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
