/* eslint-disable no-console */
import { AnnouncementLayout } from '@/layouts/AnnouncementLayout'
import { Button, Container, Form, Input, Spacer, Text, Flex } from '@/ui'
import { StepNavigator } from '@/components'

export const AddSpaceCreatePage = () => {
  return (
    <AnnouncementLayout>
      <Container>
        <Flex className="flex h-full">
          <Flex className="w-[300px] sticky top-40 pt-40">
            <StepNavigator>
              <StepNavigator.Item isCompleted>Localização</StepNavigator.Item>
              <StepNavigator.Item isCurrent>Configuração</StepNavigator.Item>
              <StepNavigator.Item>Sobre o espaço</StepNavigator.Item>
              <StepNavigator.Item>Disponibilidade</StepNavigator.Item>
              <StepNavigator.Item>Atividades</StepNavigator.Item>
            </StepNavigator>
          </Flex>

          <Flex className="flex-1 p-10 max-w-[700px]">
            <Text className="text-3xl font-medium">
              Informe a localização do seu espaço
            </Text>

            <Spacer y={10} />

            <Form onSubmit={() => console.log('enviar')}>
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
          </Flex>
        </Flex>
      </Container>
    </AnnouncementLayout>
  )
}
