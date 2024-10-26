import { StepNavigator } from '@/components'
import { Logo } from '@/components/icons'
import { Button, Layout, Link, Navbar, Icon, Divider, Container } from '@/ui'

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
            <div className="flex items-center gap-10">
              <Logo size={50} />
              <span>Escolha uma categoria</span>
            </div>
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

      <Layout.Main>
        <Container>
          <div className="flex h-full">
            <div className="w-[300px] sticky top-40 pt-40">
              <StepNavigator>
                <StepNavigator.Item isCompleted>Localização</StepNavigator.Item>
                <StepNavigator.Item isCurrent>Configuração</StepNavigator.Item>
                <StepNavigator.Item>Sobre o espaço</StepNavigator.Item>
                <StepNavigator.Item>Disponibilidade</StepNavigator.Item>
                <StepNavigator.Item>Atividades</StepNavigator.Item>
              </StepNavigator>
            </div>
            <div className="flex-1 max-w-[700px] py-6">{children}</div>
          </div>
        </Container>
      </Layout.Main>
    </Layout>
  )
}
