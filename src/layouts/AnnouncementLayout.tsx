import { Logo } from '@/components'
import { Button, Layout, Link, Navbar, Icon, Divider } from '@/ui'

export const AnnouncementLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar isBordered height={70} maxWidth="full">
          <Navbar.Brand>
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
                color="default"
                href="#"
                size="sm"
                variant="bordered"
              >
                <Icon name="X" size={20} />
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>
    </Layout>
  )
}
