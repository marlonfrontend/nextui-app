import { Logo } from '@/components/icons'
import { Button, Layout, Link, Navbar, Icon, Divider } from '@/ui'

const AnnouncementLayout = ({ children }: { children: React.ReactNode }) => {
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
        <div className="flex justify-center h-full">
          <div className="w-[300px] sticky top-40 pt-40">
            <ol className="flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <div className="flex justify-end items-center w-[30px] relative">
                  <Icon name="Check" />
                </div>
                <span className="font-medium">Localização</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-end items-center w-[30px] relative">
                  <div className="h-[2px] bg-black w-[30px] absolute" />
                </div>
                <span className="font-medium">Configuração</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-end items-center w-[30px] relative">
                  <div className="h-[2px] bg-black w-[15px] absolute" />
                </div>
                <span className="font-medium">Sobre o espaço</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-end items-center w-[30px] relative">
                  <div className="h-[2px] bg-black w-[15px] absolute" />
                </div>
                <span className="font-medium">Disponibilidade</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-end items-center w-[30px] relative">
                  <div className="h-[2px] bg-black w-[15px] absolute" />
                </div>
                <span className="font-medium text-lg text-gr">Atividades</span>
              </li>
            </ol>
          </div>
          <div className="flex-1 max-w-[700px]">{children}</div>
        </div>
      </Layout.Main>
    </Layout>
  )
}

export default AnnouncementLayout
