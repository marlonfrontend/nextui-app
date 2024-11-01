import { Logo } from '@/components'
import { Button, Link, Navbar, Icon, Divider } from '@/ui'

export const DefaultNavbar = () => {
  return (
    <Navbar
      isBordered
      classNames={{ base: 'bg-primary' }}
      height={70}
      maxWidth="full"
    >
      <Navbar.Brand className="text-white">
        <Logo size={50} />
      </Navbar.Brand>
      <Navbar.Content justify="end">
        <Navbar.Item className="hidden lg:flex">
          <Button
            startContent={<Icon name="CircleHelp" size={20} />}
            variant="light"
          >
            Precisa de ajuda?
          </Button>
        </Navbar.Item>
        <Divider className="h-[40px]" orientation="vertical" />
        <Navbar.Item>
          <Button
            isIconOnly
            as={Link}
            className="text-white"
            href="#"
            size="sm"
            variant="bordered"
          >
            <Icon name="X" size={20} />
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
