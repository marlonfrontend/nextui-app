import { useDisclosure } from '@nextui-org/react'

import { Logo, ThemeSwitch } from '@/components'
import {
  Button,
  Link,
  Navbar,
  Modal,
  Input,
  Checkbox,
  Icon,
  Form,
  Flex,
  Grid
} from '@/ui'

export const DefaultNavbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Navbar isBordered height={70} maxWidth="full">
        <Navbar.Brand>
          <Logo size={50} />
        </Navbar.Brand>
        <Navbar.Content justify="end">
          <ThemeSwitch />
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
            <Button color="primary" onClick={onOpen}>
              Entrar
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <Modal.Content>
          {(onClose) => (
            <>
              <Modal.Header className="flex flex-col gap-1">Login</Modal.Header>
              <Modal.Body>
                <Form
                  schema={undefined}
                  onSubmit={() => console.log('cadastrar')}
                >
                  <Grid gap={4}>
                    <Grid.Col span={12}>
                      <Input
                        endContent={<Icon name="Mail" size={20} />}
                        label="Email"
                        name="email"
                        variant="bordered"
                      />
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <Input
                        endContent={<Icon name="Lock" size={20} />}
                        label="Password"
                        name="password"
                        type="password"
                        variant="bordered"
                      />
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <Flex className="flex py-2 px-1 justify-between">
                        <Checkbox
                          classNames={{
                            label: 'text-small'
                          }}
                        >
                          Lembrar-me
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                          Esqueceu sua senha?
                        </Link>
                      </Flex>
                    </Grid.Col>
                  </Grid>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Entrar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal.Content>
      </Modal>
    </>
  )
}
