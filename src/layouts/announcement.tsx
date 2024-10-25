import { Logo } from '@/components/icons'
import { Layout, Navbar, Button } from '@/ui'

const AnnouncementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header>
        <Navbar maxWidth="xl">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>About</Navbar.Item>
          </Navbar.Content>
        </Navbar>
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer>
        <div className="border-t p-5">
          <div>
            <Button color="primary" size="lg">
              Continuar
            </Button>
          </div>
        </div>
      </Layout.Footer>
    </Layout>
  )
}

export default AnnouncementLayout
