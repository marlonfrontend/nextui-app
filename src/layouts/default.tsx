import { Logo } from '@/components/icons'
import { Layout, Navbar } from '@/ui'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
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
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>copyright</Layout.Footer>
    </Layout>
    // <div className="relative flex flex-col h-screen">
    // <Navbar maxWidth="xl">
    //   <Navbar.Brand>
    //     <Logo />
    //   </Navbar.Brand>
    //   <Navbar.Content>
    //     <Navbar.Item>Home</Navbar.Item>
    //     <Navbar.Item>About</Navbar.Item>
    //   </Navbar.Content>
    // </Navbar>
    //   <Progress
    //     classNames={{ track: 'rounded-none' }}
    //     color="primary"
    //     size="sm"
    //     value={20}
    //   />
    //   <main className="w-full flex-grow pt-16">{children}</main>
    //   <footer className="w-full flex items-center justify-center py-3" />
    // </div>
  )
}

export default DefaultLayout
