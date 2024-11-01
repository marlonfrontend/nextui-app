import { Button, Form, Input, Spacer, Text, Flex, Grid } from '@/ui'

export const SpaceAddressForm = () => {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('enviar')
  }

  return (
    <div className="max-w-[700px]">
      <Text className="text-3xl font-medium">
        Informe a localização do seu espaço
      </Text>

      <Spacer y={20} />

      <Form onSubmit={onSubmit}>
        <Grid gap={2}>
          <Grid.Col span={12}>
            <Input label="CEP" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Input label="Endereço" />
          </Grid.Col>
        </Grid>

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
    </div>
  )
}
