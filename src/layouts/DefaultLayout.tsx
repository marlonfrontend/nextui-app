import { Logo } from '@/components'
import { Layout, Navbar } from '@/ui'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
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

      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  )
}
