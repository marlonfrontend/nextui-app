import { Button, Form, Input, Spacer, Text, Flex, Grid } from '@/ui'
import { CreateSpaceAddressSchema } from '@/schemas'

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

      <Form schema={CreateSpaceAddressSchema} onSubmit={onSubmit}>
        <Grid gap={5}>
          <Grid.Col span={6}>
            <Input label="Pais" name="state" />
          </Grid.Col>

          <Grid.Col span={8}>
            <Input label="Endereço" name="address" />
          </Grid.Col>

          <Grid.Col span={4}>
            <Input label="Número" name="number" />
          </Grid.Col>

          <Grid.Col span={12}>
            <Input label="Complemento" name="complement" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Input label="Estado" name="state" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Input label="Cidade" name="state" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Input label="CEP" name="cep" />
          </Grid.Col>
        </Grid>

        <Flex className="flex justify-between mt-10">
          <Button color="primary" variant="light">
            Cancelar
          </Button>
          <Flex className="flex gap-6">
            <Button color="primary" variant="bordered">
              Voltar
            </Button>
            <Button color="primary" type="submit">
              Continuar
            </Button>
          </Flex>
        </Flex>
      </Form>
    </div>
  )
}
