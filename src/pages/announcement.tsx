import AnnouncementLayout from '@/layouts/announcement'
import { Button, Container, Form, Input, Spacer } from '@/ui'

const AnnouncementPage = () => {
  return (
    <AnnouncementLayout>
      <Container>
        <div className="p-10">
          <div className="text-3xl font-medium">
            Informe a localização do seu espaço
          </div>
          <Spacer y={10} />
          <Form onSubmit={() => console.log('enviar')}>
            <Input label="CEP" />
            <Spacer y={5} />
            <Input label="Endereço" />

            <Spacer y={10} />
            <div className="flex justify-between mt-10">
              <Button color="primary" size="lg" variant="light">
                Cancelar
              </Button>
              <div className="flex gap-6">
                <Button color="primary" size="lg" variant="bordered">
                  Voltar
                </Button>
                <Button color="primary" size="lg">
                  Continuar
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </AnnouncementLayout>
  )
}

export default AnnouncementPage
