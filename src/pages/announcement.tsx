import AnnouncementLayout from '@/layouts/announcement'
import { Button, Container, Form, Input } from '@/ui'

const AnnouncementPage = () => {
  return (
    <AnnouncementLayout>
      <Container>
        <div className="p-10">
          <div className="text-3xl font-medium mb-10">
            Informe a localização do seu espaço
          </div>
          <Form onSubmit={() => console.log('enviar')}>
            <Input label="Endereço" />

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
