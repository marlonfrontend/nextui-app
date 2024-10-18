import { Logo } from '@/components/icons'
import { Navbar, Progress } from '@/ui'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar maxWidth="xl">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>About</Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Progress
        classNames={{ track: 'rounded-none' }}
        color="primary"
        size="sm"
        value={20}
      />
      <main className="w-full flex-grow pt-16">{children}</main>
    </>
  )
}

export default DefaultLayout
