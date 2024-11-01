import { Button, Form, Input, Spacer, Text, Flex } from '@/ui'

export const SpaceAddressForm = () => {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('enviar')
  }

  return (
    <>
      <Text className="text-3xl font-medium">
        Informe a localização do seu espaço
      </Text>

      <Form onSubmit={onSubmit}>
        <Input label="CEP" />

        <Spacer y={5} />

        <Input label="Endereço" />

        <Spacer y={10} />

        <Flex className="flex justify-between mt-10">
          <Button color="primary" size="lg" variant="light">
            Cancelar
          </Button>
          <Flex className="flex gap-6">
            <Button color="primary" size="lg" variant="bordered">
              Voltar
            </Button>
            <Button color="primary" size="lg">
              Continuar
            </Button>
          </Flex>
        </Flex>
      </Form>
    </>
  )
}
