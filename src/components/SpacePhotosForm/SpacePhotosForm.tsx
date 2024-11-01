import { Button, Form, Input, Spacer, Text, Flex, Grid } from '@/ui'
import { CreateSpaceAddressSchema } from '@/schemas'

export const SpacePhotosForm = () => {
  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('enviar')
  }

  return (
    <div className="max-w-[700px]">
      <Text className="text-3xl font-medium">Carregue fotos do seu espaço</Text>

      <Spacer y={20} />

      <Form schema={CreateSpaceAddressSchema} onSubmit={onSubmit}>
        <Grid gap={2}>
          <Grid.Col span={12}>
            <Input label="CEP" name="cep" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Input label="Endereço" name="address" />
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
