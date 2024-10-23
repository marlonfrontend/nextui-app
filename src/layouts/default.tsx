import { Logo } from '@/components/icons'
import { Layout, Navbar, Sidebar } from '@/ui'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Aside>
        <Sidebar />
      </Layout.Aside>

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

      <Layout.Footer>copyright</Layout.Footer>
    </Layout>
  )
}

export default DefaultLayout
