import { AnnouncementLayout } from '@/layouts/AnnouncementLayout'
import { Container } from '@/ui'

export const AnnouncementPage = () => {
  return (
    <AnnouncementLayout>
      <Container>
        <div className="p-10">
          <div className="text-3xl font-medium">
            Informe a localização do seu espaço
          </div>
        </div>
      </Container>
    </AnnouncementLayout>
  )
}
